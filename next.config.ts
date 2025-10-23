// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const PROD_CSP = `
  /* remove default-src for now, or keep it but add script-src below */
  base-uri 'self';
  object-src 'none';

  /* explicitly allow scripts so Next can boot */
  script-src 'self' 'unsafe-inline' https:;

  style-src 'self' 'unsafe-inline' https:;
  font-src 'self' data: https:;
  img-src 'self' data: blob: https:;
  connect-src 'self' https: wss: data: blob:;
  worker-src 'self' blob:;
  media-src 'self' blob: https:;
  manifest-src 'self';
  frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com;
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
