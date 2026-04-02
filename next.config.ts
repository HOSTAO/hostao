import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  reactStrictMode: false, // Disable strict mode to prevent double rendering
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "hostao.com" },
      { protocol: "https", hostname: "*.neon.tech" },
    ],
    unoptimized: false,
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
};

export default withPayload(nextConfig);
