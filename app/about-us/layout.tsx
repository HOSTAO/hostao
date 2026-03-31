import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hostao | Trusted Web Hosting Company Since 2015",
  description: "Learn about Hostao — a trusted web hosting company serving 1,000+ clients across 25+ countries. We provide affordable, reliable hosting, domain registration, and digital services.",
  alternates: { canonical: "https://hostao.com/about-us" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
