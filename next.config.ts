// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const PROD_CSP = `
  
  base-uri 'self';
  object-src 'none';
  img-src 'self' data: blob: https:;
  connect-src * data: blob: wss: ws:;
  form-action 'self';
  upgrade-insecure-requests;
`;

const DEV_CSP = `
  
  base-uri 'self';
  object-src 'none';
  img-src * data: blob:;
  connect-src *;
  form-action 'self';
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: (isProd ? PROD_CSP : DEV_CSP).replace(/\n/g, " ").trim(),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Optional hardening (test before enabling):
  // { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // { key: "Cross-Origin-Resource-Policy", value: "same-site" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // If you load remote images, whitelist them:
    // remotePatterns: [{ protocol: "https", hostname: "images.example.com" }],
  },
  experimental: {
    viewTransition: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
