"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  parsePhoneNumberFromString,
  isValidPhoneNumber,
} from "libphonenumber-js/mobile"; // lightweight metadata
import {
  LuMail,
  LuMessageCircle,
  LuPhone,
  LuCheck,
  LuPhoneCall,
  LuMapPin,
  LuFacebook,
  LuInstagram,
} from "react-icons/lu";

// ----- Schema (Zod) -----
// - If number starts with "+", validate as international (EU capable).
// - Otherwise, default to Germany ("DE").
const FormSchema = z.object({
  name: z.string().trim().min(2, "Te rugăm să introduci numele complet."),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\s+/g, "")) // normalize spaces
    .refine((value) => {
      if (!value) return false;
      if (value.startsWith("+")) {
        return isValidPhoneNumber(value); // E.164 / international
      }
      // Assume Germany when no country code
      const p = parsePhoneNumberFromString(value, "DE");
      return p?.isValid() ?? false;
    }, "Te rugăm să introduci un număr de telefon valid (Germania/UE)."),
  email: z
    .string()
    .trim()
    .email("Te rugăm să introduci o adresă de e-mail validă."),
  message: z.string().trim().min(5, "Mesajul tău este prea scurt."),
  // Honeypot: must be empty
  company: z
    .string()
    .optional()
    .refine((v) => !v, "Bot detected"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{
    type: "ok" | "err";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      company: "", // honeypot
    },
    mode: "onTouched",
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setSending(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok || !json.ok)
        throw new Error(json.error || "Ceva nu a mers bine.");
      reset();
      setToast({ type: "ok", text: "Mesaj trimis cu succes! Mulțumim 🙌" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "O eroare neașteptată a fost întâmpinată.";
      setToast({ type: "err", text: msg });
    } finally {
      setSending(false);
      setTimeout(() => setToast(null), 3500);
    }
  };

  const Toast = () =>
    toast ? (
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-xl px-4 py-3 text-sm font-medium shadow-sm ring-1 ${
          toast.type === "ok"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }`}
        role="status"
      >
        {toast.text}
      </div>
    ) : null;

  return (
    <section id="contact" className="bg-[#0C3559] sm:py-16">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT column (kept as you had it) */}
          <div className="text-white">
            <div className="flex items-start">
              <div className="w-1 bg-[#C6912B] mr-4 rounded self-stretch" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight lg:whitespace-nowrap">
                  Contactează-ne acum.
                </h2>
                <span className="text-2xl sm:text-3xl font-bold leading-tight lg:whitespace-nowrap">
                  E simplu!
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-white/90 mt-4">
              {[
                "Completează formularul alăturat",
                "Te sunăm pentru a stabili o programare gratuită",
                "Ne vedem la birou sau pe WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <LuCheck className="h-3 w-3 text-white" />
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 mt-8">
              <a
                href="tel:+4917624227895"
                className="group flex items-center gap-3"
              >
                <LuPhoneCall className="h-5 w-5" />
                <span className="font-medium group-hover:text-[#C6912B] transition">
                  +49 17624227895
                </span>
              </a>

              <a
                href="mailto:nelutofanconsult@gmail.com"
                className="group flex items-center gap-3"
              >
                <LuMail className="h-5 w-5" />
                <span className="font-medium group-hover:text-[#C6912B] transition">
                  nelutofanconsult@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3">
                <LuMapPin className="h-5 w-5" />
                <span className="font-medium">
                  Luitgardstraße 14-18, 75177 Pforzheim
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 py-8">
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <LuFacebook className="h-8 w-8" />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <LuInstagram className="h-8 w-8" />
              </a>
            </div>
          </div>

          {/* RIGHT column — buttons + RHF form */}
          <div className="lg:pl-4">
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <p className="text-xs font-semibold tracking-wide text-[#C6912B] uppercase">
                Contact
              </p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#0C3559]">
                Vreau o programare
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://wa.me/4917624227895?text=Bună!%20Vreau%20o%20programare."
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-[#25D366] ring-1 ring-[#25D366]/50 hover:brightness-95 transition"
                >
                  <LuMessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
                <a
                  href="tel:+4917624227895"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-[#0C3559] bg-white ring-1 ring-gray-200 hover:ring-[#C6912B] hover:text-[#C6912B] transition"
                >
                  <LuPhone className="h-5 w-5" />
                  Sună-mă
                </a>
              </div>

              <form
                className="mt-6 grid gap-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...register("company")}
                />

                <div className="grid gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nume, prenume"
                      aria-invalid={!!errors.name}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#0C3559] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6912B]"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon (DE/EU)"
                      aria-invalid={!!errors.phone}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#0C3559] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6912B]"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Poți introduce numărul cu „+49…” sau în format german
                      (fără +).
                    </p>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      aria-invalid={!!errors.email}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#0C3559] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6912B]"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Mesaj"
                      rows={5}
                      aria-invalid={!!errors.message}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#0C3559] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6912B]"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-[#0C3559] ring-1 ring-gray-200 hover:ring-[#C6912B] hover:text-[#C6912B] disabled:opacity-70 transition"
                >
                  {sending ? "Se trimite..." : "Trimite"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Toast />
    </section>
  );
}
