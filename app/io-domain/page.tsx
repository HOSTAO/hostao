import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".IO Domain Registration | Register .IO Domains from $45/yr | Hostao",
  description: "Register your .IO domain with Hostao. The startup world's favorite domain — used by 80% of top YC startups. Short, techy, and instantly recognizable. Starting from $45/year.",
  keywords: [".io domain", "io domain registration", "startup domain", "register io domain", "buy .io domain", "yc startup domain"],
  alternates: { canonical: "https://hostao.com/io-domain" },
  openGraph: {
    title: ".IO Domain Registration | Hostao",
    description: "Register your .IO domain from $45/year. The domain of choice for 80% of top Y Combinator startups.",
    url: "https://hostao.com/io-domain",
  }
};

const TLDS = [
  { tld: ".io", price: "$45/yr", desc: "The startup world's favorite domain — used by 80% of top YC startups" },
];

const FEATURES = [
  { icon: "🚀", title: "Startup Standard", desc: "80% of top Y Combinator startups choose .IO — it's the startup world's default domain." },
  { icon: "💻", title: "Developer Cred", desc: ".IO resonates with developers and tech audiences — Input/Output is in the name." },
  { icon: "⚡", title: "Short & Memorable", desc: "Two characters make .IO domains shorter and more brandable than most alternatives." },
  { icon: "🔍", title: "Tech SEO Boost", desc: "Google treats .IO as a generic TLD, giving it the same SEO weight as .COM globally." },
  { icon: "📈", title: "Investor Signal", desc: "VCs and investors recognize .IO as the domain of innovative tech companies." },
  { icon: "🛡️", title: "Instant Credibility", desc: "A .IO domain immediately signals that you're a technology-focused company." },
];

const FAQS = [
  { q: "Why do startups love .IO domains?", a: ".IO domains have become the de facto standard for technology startups for several reasons. First, the extension mirrors the programming concept of Input/Output (I/O), giving it an inherent tech connotation. Second, .IO domains are short and memorable — two letters means cleaner URLs and better brand recall. Third, adoption by Y Combinator alumni and Silicon Valley startups created a powerful social signal: a .IO domain says 'we are a serious tech company.'" },
  { q: "Is .IO a country code or a generic domain?", a: ".IO is technically the country-code TLD for the British Indian Ocean Territory, but Google and other search engines treat it as a generic TLD (gTLD). This means your .IO domain receives full global SEO treatment with no geographic restrictions or penalties in international search results." },
  { q: "How does .IO compare to .COM for startups?", a: "For tech startups, .IO is often preferred over .COM because it signals innovation and a developer-first culture. If your desired .COM is taken or expensive, a .IO domain is the most credible alternative in the startup ecosystem. Many well-funded companies keep their .IO domain even after achieving significant scale." },
  { q: "Why is .IO more expensive than .COM or .NET?", a: ".IO domains are priced higher due to the British Indian Ocean Territory administration fees and the premium demand from the startup community. At $45/year, .IO remains one of the most cost-effective ways to establish a credible tech startup identity — far cheaper than acquiring a premium .COM on the aftermarket." },
  { q: "Can I transfer my existing .IO domain to Hostao?", a: "Yes. Hostao supports full .IO domain transfers. Unlock your domain at your current registrar, obtain the EPP authorization code, and submit the transfer request through your Hostao account. The process is smooth and your website remains live throughout the transfer period." },
  { q: "What is the renewal price for .IO domains?", a: ".IO domains renew at $45/year through Hostao — the same as the registration price. We send renewal reminders ahead of time and offer auto-renewal to ensure your domain never expires. Given the brand equity that builds around a .IO domain, protecting your renewal is important." },
];

export default function IODomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">STARTUP DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.IO Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The startup world's favorite domain. 80% of top YC startups use .IO. Short, techy, and instantly recognizable in the developer ecosystem — from just $45/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .IO Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.IO Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The startup and developer favorite</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .IO Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .IO domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .IO Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .IO Domains</h2>
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
              { label: ".TECH Domain", href: "/tech-domain", desc: "For technology companies" },
              { label: ".APP Domain", href: "/app-domain", desc: "Google-backed app domain" },
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
        "name": ".IO Domain Registration",
        "description": "Official .IO domain registration for startups and technology companies",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "45.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
