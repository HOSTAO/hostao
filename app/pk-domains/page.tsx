import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".PK Domain Registration Pakistan | Official .com.pk & .pk Domains | Hostao",
  description: "Register your .PK or .com.pk domain in Pakistan with Hostao. Reach 130M+ Pakistani internet users with instant activation, free DNS management, and 24/7 support. Starting from $25/year.",
  keywords: [".pk domain", "Pakistan domain registration", "com.pk domain", "register pk domain", "Pakistan website domain"],
  alternates: { canonical: "https://hostao.com/pk-domains" },
  openGraph: {
    title: ".PK Domain Registration Pakistan | Hostao",
    description: "Register your official .PK domain for Pakistan. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/pk-domains",
  }
};

const TLDS = [
  { tld: ".com.pk", price: "$25/yr", desc: "Commercial entities in Pakistan — most popular choice for businesses" },
  { tld: ".net.pk", price: "$25/yr", desc: "Network and internet organizations in Pakistan" },
  { tld: ".org.pk", price: "$25/yr", desc: "Non-profit organizations in Pakistan" },
  { tld: ".pk", price: "$35/yr", desc: "Premium Pakistan domain — short and brandable" },
  { tld: ".edu.pk", price: "Restricted", desc: "Educational institutions only" },
  { tld: ".gov.pk", price: "Restricted", desc: "Pakistan government entities only" },
];

const FEATURES = [
  { icon: "📈", title: "Pakistan SEO Boost", desc: "A .PK domain sends a strong geo-signal to Google, helping your website rank higher in Pakistani search results and reach local customers more effectively." },
  { icon: "🌏", title: "130M+ Internet Users", desc: "Pakistan has over 130 million internet users and one of the fastest growing digital markets in South Asia. A .PK domain puts you directly in front of this massive audience." },
  { icon: "🚀", title: "Digital Pakistan Initiative", desc: "Pakistan's Digital Pakistan initiative is driving rapid tech ecosystem growth. A .com.pk domain aligns your business with the country's digital transformation." },
  { icon: "💰", title: "Affordable Pricing", desc: "Starting at just $25/year for .com.pk, Pakistan domains offer excellent value for businesses wanting a credible local online presence." },
  { icon: "💻", title: "Tech Ecosystem Hub", desc: "Pakistan's tech sector is booming with thousands of startups and freelancers. A .PK domain establishes your place in one of Asia's most dynamic tech economies." },
  { icon: "⚡", title: "Fast Growing Market", desc: "Pakistan adds millions of new internet users every year. Secure your .PK domain now before your preferred name is taken by competitors." },
];

const FAQS = [
  { q: "Who can register a .PK domain?", a: "Any individual, business, or organization worldwide can register .com.pk, .net.pk, .org.pk, and .pk domains. Extensions like .edu.pk and .gov.pk are restricted to educational institutions and government entities respectively. No Pakistan residency is required for most extensions." },
  { q: "What is the most popular .PK extension for businesses?", a: "The .com.pk extension is by far the most popular choice for businesses in Pakistan. It is the standard commercial domain used by Pakistani companies, e-commerce stores, and service providers. It signals a legitimate business presence to Pakistani customers and builds immediate trust." },
  { q: "How much does a .PK domain cost?", a: "The .com.pk, .net.pk, and .org.pk extensions are priced at $25/year. The premium .pk top-level domain is $35/year. All prices include free DNS management and WHOIS privacy. Renewal pricing is the same as registration." },
  { q: "Do I need a Pakistan business address to register .PK?", a: "No. A Pakistan business address is not required to register most .PK domain extensions. Hostao handles all registration requirements on your behalf, making it easy for international businesses to secure a .PK domain and reach the Pakistani market." },
  { q: "Why is a .PK domain important for Pakistani businesses?", a: "Pakistan has one of the fastest growing internet populations in South Asia with 130M+ users. Pakistani consumers increasingly look for .com.pk domains when shopping online, as it signals a trusted local business. A .PK domain is essential for building credibility in the Pakistani digital market." },
  { q: "How do I transfer my .PK domain to Hostao?", a: "Transferring a .PK domain to Hostao is simple. Unlock your domain at your current registrar, obtain the EPP/authorization code, and initiate the transfer through Hostao. The transfer process typically completes in 5–7 days and your website remains online throughout." },
];

export default function PKDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇵🇰 PAKISTAN DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.PK Domain</span> in Pakistan
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Pakistani online presence with a .PK domain. With 130M+ internet users and a booming tech ecosystem driven by the Digital Pakistan initiative, a .com.pk domain is essential for reaching Pakistan&apos;s rapidly growing digital market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .PK Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Pakistan Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .PK domain extension for your Pakistani business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .PK Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Pakistan domain name is available</p>
          <DomainSearch tlds={[".com.pk", ".net.pk", ".org.pk", ".pk"]} defaultTld=".com.pk" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .PK Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .PK Domains</h2>
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
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
              { label: ".SA Domain — Saudi Arabia", href: "/sa-domains", desc: "Register your Saudi Arabia domain" },
              { label: ".BH Domain — Bahrain", href: "/bahrain-domains", desc: "Register your Bahrain domain" },
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
        "name": ".PK Domain Registration Pakistan",
        "description": "Official .PK and .com.pk domain registration for businesses targeting Pakistan",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "25.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
