import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".TECH Domain Registration | Register .TECH Domains from $35/yr | Hostao",
  description: "Register your .TECH domain with Hostao. Tell the world you're a tech company — for innovators, developers, and digital businesses. Clear, descriptive, and instantly understood. Starting from $35/year.",
  keywords: [".tech domain", "tech domain registration", "technology domain", "register tech domain", "buy .tech domain"],
  alternates: { canonical: "https://hostao.com/tech-domain" },
  openGraph: {
    title: ".TECH Domain Registration | Hostao",
    description: "Register your .TECH domain from $35/year. The domain for innovators, developers, and digital businesses.",
    url: "https://hostao.com/tech-domain",
  }
};

const TLDS = [
  { tld: ".tech", price: "$35/yr", desc: "Tell the world you're a tech company — for innovators, developers, and digital businesses" },
];

const FEATURES = [
  { icon: "💻", title: "Instant Identity", desc: ".TECH immediately tells visitors what your company does — no guessing needed." },
  { icon: "🎯", title: "Tech Conference Favorite", desc: "Used by major tech events like CES.tech and Viva Technology." },
  { icon: "🔍", title: "Keyword Advantage", desc: "Having 'tech' in your domain gives you a natural SEO boost for technology searches." },
  { icon: "⚡", title: "Great Availability", desc: "Premium names still available in .TECH that are long gone in .COM." },
  { icon: "🚀", title: "Innovation Signal", desc: ".TECH signals forward-thinking innovation to customers and investors." },
  { icon: "🛡️", title: "Affordable Branding", desc: "At $35/year, get a premium tech domain at a fraction of .COM aftermarket prices." },
];

const FAQS = [
  { q: "Who should use a .TECH domain?", a: ".TECH is ideal for software companies, tech startups, developers, IT service providers, tech conferences and events, innovation hubs, and any business that wants to explicitly communicate a technology identity. It's also excellent for personal branding by developers and tech professionals." },
  { q: "Does .TECH help with search engine rankings?", a: "Yes. Google treats .TECH as a generic TLD with full global SEO weight. Beyond that, having the keyword 'tech' in your domain extension can improve relevance signals for technology-related search queries, potentially boosting organic visibility in your niche." },
  { q: "Why choose .TECH over .COM for a technology company?", a: ".TECH has one major advantage over .COM: availability. Premium one-word and two-word .TECH domains are still available at standard registration prices, while their .COM equivalents cost thousands or tens of thousands on the aftermarket. For a new tech company, a short, clean .TECH domain is often more achievable and just as credible." },
  { q: "Are .TECH domains recognized internationally?", a: "Yes. .TECH is a new generic TLD (gTLD) managed by Radix, a major domain registry. It is accredited by ICANN and recognized by all major browsers, search engines, and email platforms globally. There are no geographic restrictions on registration or use." },
  { q: "Can I transfer my .TECH domain to Hostao?", a: "Yes. Hostao supports full .TECH domain transfers. The process involves unlocking your domain at the current registrar, obtaining the EPP authorization code, and submitting the transfer through your Hostao account. Your website remains live throughout and the transfer typically completes within 5–7 days." },
  { q: "What is the renewal price for .TECH domains?", a: ".TECH domains renew at $35/year through Hostao — identical to the registration price. We provide advance renewal reminders and optional auto-renewal to keep your domain protected. Given the growing recognition of .TECH in the industry, this is one of the best-value domain investments available." },
];

export default function TECHDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">TECHNOLOGY DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.TECH Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell the world you're a tech company. .TECH is for innovators, developers, and digital businesses. Clear, descriptive, and instantly understood — from just $35/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .TECH Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.TECH Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The domain for technology companies</p>
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
                      <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-sm px-4 py-2">Register</a>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .TECH Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .TECH domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .TECH Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .TECH Domains</h2>
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
              { label: ".IO Domain", href: "/io-domain", desc: "The startup favorite" },
              { label: ".APP Domain", href: "/app-domain", desc: "Google-backed app domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain" },
              { label: "All Domains", href: "/domain-registration", desc: "Browse all extensions" },
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
        "name": ".TECH Domain Registration",
        "description": "Official .TECH domain registration for technology companies and innovators",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "35.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
