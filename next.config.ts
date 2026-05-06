import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.trycloudflare.com"],
  poweredByHeader: false,
  reactStrictMode: false, // Disable strict mode to prevent double rendering
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "hostao.com" },
      { protocol: "https", hostname: "*.neon.tech" },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/hosting", destination: "/shared-hosting", permanent: true },
      { source: "/reseller", destination: "/reseller-hosting", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:all*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig);
