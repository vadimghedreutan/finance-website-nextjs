import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js/mobile";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ---------- Email ----------
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- Validation ----------
const BodySchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(5),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\s+/g, ""))
    .refine((value) => {
      if (!value) return false;
      if (value.startsWith("+")) return isValidPhoneNumber(value);
      const p = parsePhoneNumberFromString(value, "DE");
      return p?.isValid() ?? false;
    }, "Invalid phone"),
  // Honeypot: must be empty / undefined
  company: z.string().optional(),
});

// ---------- Rate limit: Upstash (primary) + in-memory (fallback) ----------
const hasUpstash =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

let perMinuteLimiter: Ratelimit | null = null;
let perHourLimiter: Ratelimit | null = null;

if (hasUpstash) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  perMinuteLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "1 m"), // 5/min/IP
    analytics: true,
    prefix: "rl:contact:1m",
  });

  perHourLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, "1 h"), // 20/hour/IP
    analytics: true,
    prefix: "rl:contact:1h",
  });
}

// In-memory fallback (for local dev or if Upstash not configured)
type Bucket = { count: number; resetAt: number };
const mem1m = new Map<string, Bucket>();
const mem1h = new Map<string, Bucket>();
const ONE_MIN = 60_000;
const ONE_HR = 60 * ONE_MIN;

function memCheck(
  map: Map<string, Bucket>,
  key: string,
  limit: number,
  windowMs: number
) {
  const now = Date.now();
  const b = map.get(key);
  if (!b || now > b.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return {
      success: true,
      remaining: limit - 1,
      reset: Math.ceil((now + windowMs) / 1000),
    };
  }
  if (b.count >= limit) {
    return { success: false, remaining: 0, reset: Math.ceil(b.resetAt / 1000) };
  }
  b.count += 1;
  return {
    success: true,
    remaining: limit - b.count,
    reset: Math.ceil(b.resetAt / 1000),
  };
}

async function limitIP(ip: string) {
  // Prefer Upstash
  if (perMinuteLimiter && perHourLimiter) {
    const [m, h] = await Promise.all([
      perMinuteLimiter.limit(ip),
      perHourLimiter.limit(ip),
    ]);

    const success = m.success && h.success;
    const reset = Math.max(m.reset, h.reset); // epoch seconds
    const remaining = Math.min(m.remaining, h.remaining);

    return { success, reset, remaining, provider: "upstash" as const };
  }

  // Fallback: in-memory
  const m = memCheck(mem1m, ip, 5, ONE_MIN);
  const h = memCheck(mem1h, ip, 20, ONE_HR);
  const success = m.success && h.success;
  const reset = Math.max(m.reset, h.reset);
  const remaining = Math.min(m.remaining, h.remaining);
  return { success, reset, remaining, provider: "memory" as const };
}

// ---------- Helpers ----------
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getIP(req: Request) {
  // Works well on Vercel/Proxies
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();
  // Next.js Edge runtimes may expose cf-connecting-ip, etc.
  const cf = (req.headers.get("cf-connecting-ip") || "").trim();
  if (cf) return cf;
  return "unknown";
}

// ---------- Handler ----------
export async function POST(req: Request) {
  // --- Rate limit first ---
  const ip = getIP(req);
  const rl = await limitIP(ip);
  if (!rl.success) {
    // Include standard-ish headers
    return new NextResponse(
      JSON.stringify({
        ok: false,
        error: "Too many requests. Please try again later.",
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(
            Math.max(1, rl.reset - Math.ceil(Date.now() / 1000))
          ),
          "X-RateLimit-Remaining": String(Math.max(0, rl.remaining)),
          "X-RateLimit-Reset": String(rl.reset),
          "X-RateLimit-Provider": rl.provider,
        },
      }
    );
  }

  // --- Validate body ---
  let parsed;
  try {
    const body = await req.json();
    parsed = BodySchema.safeParse(body);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data." },
      { status: 400 }
    );
  }

  const { name, email, message, phone, company } = parsed.data;

  // Honeypot: if filled, pretend it's fine but do nothing
  if (company && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  // --- Send email via Resend ---
  try {
    const subject = `New contact request from ${name}`;
    const html = `
      <div style="font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu,Helvetica,Arial,sans-serif;line-height:1.6">
        <h2>Mesaj nou de contact</h2>
        <p><strong>Nume și prenume:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Mesaj:</strong></p>
        <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
        <hr />
        <p style="font-size:12px;color:#6b7280">IP: ${escapeHtml(ip)}</p>
      </div>
    `;

    const toAddress =
      process.env.CONTACT_TO_EMAIL || "nelutofanconsult@gmail.com";
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ||
      "Mesaj de pe site – TofanConsult <onboarding@resend.dev>";

    await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject,
      html,
    });

    // Success (also include RL headers for transparency)
    return NextResponse.json(
      { ok: true },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": String(Math.max(0, rl.remaining)),
          "X-RateLimit-Reset": String(rl.reset),
          "X-RateLimit-Provider": rl.provider,
        },
      }
    );
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
