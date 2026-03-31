import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".IN Domain Registration India | Official .in & .co.in Domains | Hostao",
  description: "Register your .IN or .co.in domain in India with Hostao. NIXI accredited registrar for Indian domain registration with instant activation, free DNS management, and 24/7 support. Starting from $8/year.",
  keywords: [".in domain", "India domain registration", "co.in domain", "register in domain", "India website domain"],
  alternates: { canonical: "https://hostao.com/in-domains" },
  openGraph: {
    title: ".IN Domain Registration India | Hostao",
    description: "Register your official .IN domain for India. NIXI accredited, fast activation, free DNS management, expert support.",
    url: "https://hostao.com/in-domains",
  }
};

const TLDS = [
  { tld: ".in", price: "$8/yr", desc: "India's official country domain — ideal for any Indian business or individual" },
  { tld: ".co.in", price: "$8/yr", desc: "Commercial entities in India — most popular choice for Indian businesses" },
  { tld: ".net.in", price: "$8/yr", desc: "Network and internet organizations based in India" },
  { tld: ".org.in", price: "$8/yr", desc: "Non-profit organizations and associations in India" },
  { tld: ".firm.in", price: "$8/yr", desc: "Firms and professional services operating in India" },
  { tld: ".gen.in", price: "$8/yr", desc: "General use — open to all individuals and entities in India" },
];

const FEATURES = [
  { icon: "📈", title: "India SEO Boost", desc: "A .IN domain gives you a strong geo-signal for Google India rankings, helping you rank higher for users searching in India." },
  { icon: "🌏", title: "900M+ Users Reach", desc: "India has the world's second-largest internet population and growing fast. A .IN domain puts you in front of hundreds of millions of potential customers." },
  { icon: "✅", title: "NIXI Accredited", desc: "Hostao is an official NIXI-accredited registrar for .IN domains, ensuring your registration is fully compliant and legitimate." },
  { icon: "💰", title: "Cheapest ccTLD", desc: "Starting at just $8/year, .IN is one of the most affordable country code domains in the world — great value for Indian businesses." },
  { icon: "🏢", title: "SME Market", desc: "Perfect for India's booming small and medium enterprise sector. A .IN domain instantly establishes your local business credibility." },
  { icon: "🚀", title: "Fastest Growing", desc: "India adds millions of new internet users every month. Register your .IN domain now before your preferred name is taken." },
];

const FAQS = [
  { q: "Who can register a .IN domain?", a: "Any individual, business, or organization worldwide can register a .IN domain. There are no residency or citizenship requirements for most .IN extensions including .in, .co.in, .net.in, .org.in, .firm.in, and .gen.in. Hostao handles all registration requirements on your behalf." },
  { q: "Are there any NIXI requirements for .IN registration?", a: "Hostao is an officially NIXI-accredited registrar, which means we are authorized to register .IN domains on behalf of our customers. You do not need to deal with NIXI directly — simply register through Hostao and we manage all compliance requirements." },
  { q: "How much does a .IN domain cost?", a: "All standard .IN extensions — including .in, .co.in, .net.in, .org.in, .firm.in, and .gen.in — are priced at just $8/year. This makes .IN one of the most affordable country-code domain extensions globally. Renewal is also $8/year." },
  { q: "Does a .IN domain help with SEO in India?", a: "Yes. A .IN domain sends a strong geographic relevance signal to Google, which can significantly improve your search rankings for users in India. Combined with local content, a .IN domain is a powerful SEO asset for targeting the Indian market." },
  { q: "How do I transfer my .IN domain to Hostao?", a: "Transferring a .IN domain to Hostao is straightforward. You will need to unlock your domain at the current registrar, obtain the EPP/authorization code, and initiate the transfer through Hostao. The process typically takes 5–7 days and your website remains online throughout." },
  { q: "What is the renewal price and process for .IN domains?", a: "Renewal for all .IN extensions is $8/year, the same as the registration price. Hostao sends renewal reminder emails well in advance so your domain never expires unexpectedly. You can also enable auto-renewal in your control panel for complete peace of mind." },
];

export default function INDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇮🇳 INDIA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.IN Domain</span> in India
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Indian online presence with a .IN domain. With 900M+ internet users and the world&apos;s fastest-growing digital economy, a .IN domain positions your business at the heart of Digital India. NIXI accredited registrar, from just $8/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .IN Domain</a>
            <Link href="/domain-registration" className="btn-hostao-outline text-lg px-10 py-4">All Domain Extensions</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#334155]">
            {["✅ Instant Activation", "✅ Free DNS Management", "✅ WHOIS Privacy", "✅ 24/7 Support", "✅ Easy Transfer"].map(f => (
              <span key={f} className="font-medium">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TLD PRICING TABLE */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">India Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .IN domain extension for your Indian business or organization</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#046bd2] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Extension</th>
                  <th className="text-left px-6 py-4 font-semibold">Best For</th>
                  <th className="text-right px-6 py-4 font-semibold">Price</th>
                  <th className="text-center px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {TLDS.map((tld, i) => (
                  <tr key={tld.tld} className={i % 2 === 0 ? "bg-white" : "bg-[#F0F5FA]"}>
                    <td className="px-6 py-4 font-bold text-[#046bd2] text-lg">{tld.tld}</td>
                    <td className="px-6 py-4 text-[#334155]">{tld.desc}</td>
                    <td className="px-6 py-4 text-right font-bold text-[#1e293b]">{tld.price}</td>
                    <td className="px-6 py-4 text-center">
                      {tld.price === "Restricted" ? (
                        <span className="text-gray-400 text-sm">Restricted</span>
                      ) : (
                        <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-sm px-4 py-2">Register</a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DOMAIN SEARCH */}
      <section className="hero-gradient-bg py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .IN Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred India domain name is available</p>
          <DomainSearch tlds={[".in", ".co.in", ".net.in", ".org.in", ".firm.in", ".gen.in"]} defaultTld=".in" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .IN Domain with Hostao?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-[#F0F5FA] rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#1e293b] mb-2">{f.title}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hero-gradient-bg py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .IN Domains</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-2">{faq.q}</h3>
                <p className="text-[#334155] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">Explore More Domain Extensions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: ".SA Domain — Saudi Arabia", href: "/sa-domains", desc: "Register your Saudi Arabia domain" },
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
              { label: ".BH Domain — Bahrain", href: "/bahrain-domains", desc: "Register your Bahrain domain" },
              { label: ".PK Domain — Pakistan", href: "/pk-domains", desc: "Register your Pakistan domain" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="border border-gray-200 rounded-xl p-5 hover:border-[#046bd2] hover:shadow-md transition-all group">
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] text-sm">{link.label}</h3>
                <p className="text-xs text-[#334155] mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": ".IN Domain Registration India",
        "description": "Official .IN and .co.in domain registration for businesses and individuals in India",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
