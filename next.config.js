/** @type {import('next').NextConfig} */

// Same-origin only: HTML, CSS, JS chunks, favicon, SVG icon, apple icon, and
// the generated Open Graph image. Amazon, the Vercel privacy policy, schema.org
// (JSON-LD vocabulary), and mailto are navigations or data, not loaded resources.
// No web fonts, analytics, APIs, or iframes.
//
// 'unsafe-inline' stays because Next.js emits inline bootstrap and RSC scripts
// plus JSON-LD, and the default 404 page uses inline styles. A nonce policy
// would force these static pages to render on every request. Production
// bundles do not use eval; dev adds 'unsafe-eval' for React's overlay.
// upgrade-insecure-requests is omitted: Vercel already redirects to HTTPS and
// sends HSTS, and the directive breaks the local http preview.
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
