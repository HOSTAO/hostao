import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".SG Domain Registration Singapore | Official Singaporean Domains | Hostao",
  description: "Register your .SG or .com.sg domain in Singapore with Hostao. Asia's business hub with 5.5M tech-savvy users. From $45/year.",
  keywords: [".sg domain", "Singapore domain registration", "com.sg domain", "register sg domain", "Singapore website domain"],
  alternates: { canonical: "https://hostao.com/sg-domains" },
  openGraph: {
    title: ".SG Domain Registration Singapore | Hostao",
    description: "Register your official .SG domain for Singapore. Instant activation, free DNS management, expert support.",
    url: "https://hostao.com/sg-domains",
  }
};

const TLDS = [
  { tld: ".sg", price: "$45/yr", desc: "Singapore premium domain — short and brandable" },
  { tld: ".com.sg", price: "$45/yr", desc: "Commercial entities in Singapore — most popular" },
  { tld: ".net.sg", price: "$45/yr", desc: "Network organizations in Singapore" },
  { tld: ".org.sg", price: "$45/yr", desc: "Non-profit organizations in Singapore" },
  { tld: ".edu.sg", price: "Restricted", desc: "Singapore educational institutions only" },
  { tld: ".gov.sg", price: "Restricted", desc: "Singapore government entities only" },
];

const FEATURES = [
  { icon: "🏢", title: "Asia Business Hub", desc: "Singapore is Asia's #1 business destination — a .SG domain signals premium regional presence." },
  { icon: "👥", title: "5.5M Tech Users", desc: "Singapore has one of the world's highest internet penetration rates at 96%." },
  { icon: "🔍", title: "Google SG SEO", desc: "A .SG domain provides strong geo-signals for Google Singapore rankings." },
  { icon: "💻", title: "Smart Nation", desc: "Singapore's Smart Nation initiative is creating a thriving digital ecosystem." },
  { icon: "🛡️", title: "Data Protection", desc: "Singapore's PDPA ensures strong data protection standards for .SG domains." },
  { icon: "🌐", title: "ASEAN Gateway", desc: ".SG positions your business as a gateway to the entire ASEAN market." },
];

const FAQS = [
  { q: "Who can register a .SG or .com.sg domain?", a: "Singapore-registered businesses, sole proprietors, and individuals with a Singapore presence can register .com.sg and .sg domains. SGNIC, Singapore's domain registry, requires registrants to have a local business registration or identity. Hostao guides you through all eligibility steps and handles the registration process on your behalf." },
  { q: "Do I need a Singapore business registration to get a .SG domain?", a: "For .com.sg, you typically need a Singapore-registered company with an ACRA business registration number. The .sg extension has slightly broader eligibility. Hostao works with local registration agents to facilitate .SG domain registrations for international businesses looking to establish a Singapore presence." },
  { q: "How much does a .SG domain cost?", a: "All standard .SG extensions — including .sg, .com.sg, .net.sg, and .org.sg — are priced at $45/year. This reflects the premium status of Singapore's namespace and the value of a .SG domain for accessing Asia's most prestigious business market. Renewal is also $45/year." },
  { q: "Does a .SG domain help with SEO in Singapore?", a: "Yes. A .SG domain sends a strong geographic signal to Google, significantly improving your search rankings for users searching in Singapore. Given Singapore's role as a regional business hub, a .SG domain also boosts credibility for searches across Southeast Asia, making it a highly valuable SEO asset." },
  { q: "How do I transfer my .SG domain to Hostao?", a: "Transferring a .SG domain to Hostao is straightforward. You will need to unlock your domain at the current registrar, obtain the EPP/authorization code, and initiate the transfer through Hostao. The process typically takes 5–7 days. Your website remains fully operational throughout the transfer period." },
  { q: "What makes a .SG domain worth the premium price?", a: "Singapore is consistently ranked as Asia's top business environment and one of the world's most competitive economies. A .SG domain instantly signals legitimacy, professionalism, and regional authority to customers, partners, and investors across Asia. Combined with Singapore's Smart Nation digital infrastructure, .SG is a powerful brand asset." },
];

export default function SGDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇸🇬 SINGAPORE DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.SG Domain</span> in Singapore
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The domain of Asia&apos;s business hub. .SG signals trust and innovation to Singapore&apos;s 5.5M tech-savvy population. Position your business in Southeast Asia&apos;s premier digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .SG Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Singapore Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right Singapore domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .SG Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Singapore domain name is available</p>
          <DomainSearch tlds={[".sg", ".com.sg", ".net.sg", ".org.sg"]} defaultTld=".sg" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .SG Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .SG Domains</h2>
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
              { label: ".IN Domain — India", href: "/in-domains", desc: "Register your India domain" },
              { label: ".COM.AU Domain — Australia", href: "/au-domains", desc: "Register your Australian domain" },
              { label: ".MY Domain — Malaysia", href: "/my-domains", desc: "Register your Malaysian domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular domain" },
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
        "name": ".SG Domain Registration Singapore",
        "description": "Official .SG and .com.sg domain registration for businesses in Singapore",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "45.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
