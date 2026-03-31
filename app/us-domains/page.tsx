import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".US Domain Registration | Official American Domains | Hostao",
  description: "Register your .US domain with Hostao. The official American ccTLD for US businesses and individuals. Reach 300M+ US internet users from just $10/year.",
  keywords: [".us domain", "us domain registration", "american domain", "register us domain", "USA website domain", ".biz domain", ".info domain"],
  alternates: { canonical: "https://hostao.com/us-domains" },
  openGraph: {
    title: ".US Domain Registration | Official American Domains | Hostao",
    description: "Register your official .US domain. Establish your American online presence and reach 300M+ US internet users. Fast activation, free DNS management.",
    url: "https://hostao.com/us-domains",
  }
};

const TLDS = [
  { tld: ".us", price: "$10/yr", desc: "The official American ccTLD — for US businesses and individuals" },
  { tld: ".biz", price: "$12/yr", desc: "Business-focused domain for American companies" },
  { tld: ".info", price: "$10/yr", desc: "Information and resource websites" },
];

const FEATURES = [
  { icon: "🇺🇸", title: "American Identity", desc: "A .US domain instantly signals a genuine American presence. Build trust with US customers, partners, and government agencies." },
  { icon: "👥", title: "300M+ US Users", desc: "Reach over 300 million American internet users directly. The .US extension is the natural choice for businesses targeting the US market." },
  { icon: "💰", title: "Affordable Pricing", desc: "At just $10/year, .US is one of the most affordable country-code domains available. Establish your American presence without breaking the budget." },
  { icon: "🔍", title: "US SEO Boost", desc: "Google uses ccTLDs as a geo-signal for search rankings. A .US domain helps your site rank higher in US-specific search results on Google.com." },
  { icon: "🏢", title: "Business Credibility", desc: "A .US domain demonstrates a committed American business presence. Ideal for local businesses, contractors, and service providers serving US customers." },
  { icon: "⚡", title: "Great Availability", desc: "Millions of great .US names are still available at an affordable price. Find the exact domain name you want — without paying premium .COM prices." },
];

const FAQS = [
  { q: "What is a .US domain and who can register one?", a: "The .US domain is the official country-code top-level domain (ccTLD) for the United States of America. It is available to US citizens, US permanent residents, and any entity (business or organization) with a bona fide presence in the United States. This requirement is known as the Nexus requirement and must be met to register a .US domain." },
  { q: "What is the Nexus requirement for .US domains?", a: "To register a .US domain, you must meet one of the following Nexus requirements: (1) be a natural person who is a US citizen or permanent resident; (2) be a US entity such as a corporation, LLC, or organization incorporated in the United States; or (3) be a foreign entity with a bona fide presence in the US. Hostao will guide you through the registration process to ensure compliance." },
  { q: "Is a .US domain good for local SEO in the United States?", a: "Yes. Google and other search engines treat .US as a ccTLD geo-signal for the United States. A .US domain tells search engines that your website is primarily targeting US users, which can improve your visibility in US-specific search results. This is particularly valuable for local businesses, service providers, and government contractors." },
  { q: "How does .US compare to .COM for American businesses?", a: "A .COM domain has broader global recognition, while .US specifically targets the American market and signals local presence. For businesses exclusively serving US customers — such as local service providers, contractors, or government vendors — a .US domain can actually be more appropriate and credible than .COM. It is also significantly more affordable and has far better name availability." },
  { q: "Can I transfer my existing .US domain to Hostao?", a: "Yes, transferring your .US domain to Hostao is straightforward. The transfer process typically takes 5–7 business days. During the transfer, your website and email services remain fully operational with zero downtime. Our 24/7 support team can assist with every step of the transfer process." },
  { q: "What is the difference between .US, .BIZ, and .INFO?", a: "The .US domain is specifically for American individuals and entities with a US Nexus. The .BIZ domain is a generic TLD designed for businesses worldwide, with no geographic restriction. The .INFO domain is open to anyone and is commonly used for information-based websites, directories, and resource hubs. All three are available through Hostao at competitive pricing." },
];

export default function USDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇺🇸 USA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.US Domain</span> in the United States
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The only ccTLD for the world's largest internet economy. A .US domain establishes your American presence and reaches 300M+ US internet users — from just $10/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .US Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">US Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right domain extension for your American business or website</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .US Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred US domain name is available</p>
          <DomainSearch tlds={[".us", ".biz", ".info"]} defaultTld=".us" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .US Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .US Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain extension" },
              { label: ".NET Domain", href: "/net-domain", desc: "Trusted network and technology domain" },
              { label: ".CA Domain — Canada", href: "/ca-domains", desc: "Register your Canadian domain" },
              { label: "All Domain Extensions", href: "/domain-registration", desc: "Browse all available domain extensions" },
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
        "name": ".US Domain Registration USA",
        "description": "The official American ccTLD domain registration for US businesses and individuals",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      })}} />
    </div>
  );
}
