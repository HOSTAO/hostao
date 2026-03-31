import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".ORG Domain Registration | Register .ORG Domains from $15/yr | Hostao",
  description: "Register your .ORG domain with Hostao. Built for organizations — trusted by NGOs, nonprofits, open-source communities, and foundations worldwide. Starting from $15/year.",
  keywords: [".org domain", "org domain registration", "nonprofit domain", "register org domain", "buy .org domain"],
  alternates: { canonical: "https://hostao.com/org-domain" },
  openGraph: {
    title: ".ORG Domain Registration | Hostao",
    description: "Register your .ORG domain from $15/year. The trusted domain for nonprofits, NGOs, and open-source communities.",
    url: "https://hostao.com/org-domain",
  }
};

const TLDS = [
  { tld: ".org", price: "$15/yr", desc: "Built for organizations — trusted by NGOs, nonprofits, and open-source communities" },
];

const FEATURES = [
  { icon: "🏛️", title: "Nonprofit Trust", desc: ".ORG is the most trusted domain extension for nonprofits and charitable organizations." },
  { icon: "🤝", title: "Community Signal", desc: "Signals community-driven purpose — used by Wikipedia, Mozilla, and thousands of foundations." },
  { icon: "💻", title: "Open Source Home", desc: "The preferred domain for open-source projects and developer communities worldwide." },
  { icon: "🌐", title: "Global Recognition", desc: "Universally understood as an organization domain across all countries and cultures." },
  { icon: "🛡️", title: "Mission Credibility", desc: "Donors and supporters trust .ORG domains for legitimacy and transparency." },
  { icon: "⚡", title: "Affordable Impact", desc: "At just $15/year, maximize your budget for the mission that matters." },
];

const FAQS = [
  { q: "Who can register a .ORG domain?", a: "Anyone can register a .ORG domain — it is an open TLD with no restrictions. Individuals, businesses, nonprofits, open-source projects, communities, and government entities are all eligible to register a .ORG domain through Hostao." },
  { q: "Is .ORG only for nonprofits?", a: "No. While .ORG originated as a domain for non-commercial organizations, it has no formal restrictions. However, using .ORG when you are not a nonprofit or community organization can harm your credibility, as the public strongly associates .ORG with trustworthy, mission-driven entities." },
  { q: "Does a .ORG domain help with SEO?", a: "Yes. Google treats .ORG as a top-level domain with full global SEO weight. For nonprofit and community organizations, a .ORG domain can improve click-through rates in search results because users inherently trust .ORG URLs." },
  { q: "Why do organizations like Wikipedia use .ORG?", a: "Wikipedia uses wikipedia.org because it is a nonprofit, community-driven organization. The .ORG extension signals to users that the site is not commercially motivated. This trust factor is why the world's most recognized knowledge platform, Mozilla Foundation, Creative Commons, and thousands of NGOs all choose .ORG." },
  { q: "Can I transfer my .ORG domain to Hostao?", a: "Yes. Hostao fully supports .ORG domain transfers. Unlock your domain at the current registrar, retrieve the EPP/authorization code, and initiate the transfer through your Hostao account. The process typically completes within 5–7 days and your website remains online throughout." },
  { q: "What is the pricing for .ORG domains?", a: ".ORG domains are available through Hostao for $15/year, which matches the registration price for renewals as well. There are no hidden fees. We provide renewal reminders and optional auto-renewal so your domain stays active." },
];

export default function ORGDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.ORG Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Built for organizations. Trusted by NGOs, nonprofits, open-source projects, and communities worldwide. The domain that signals purpose and trust — from just $15/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .ORG Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.ORG Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The trusted domain for organizations</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .ORG Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .ORG domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .ORG Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .ORG Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain" },
              { label: ".NET Domain", href: "/net-domain", desc: "For tech and networking" },
              { label: "All Domains", href: "/domain-registration", desc: "Browse all extensions" },
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
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
        "name": ".ORG Domain Registration",
        "description": "Official .ORG domain registration for nonprofits, NGOs, and open-source organizations",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
