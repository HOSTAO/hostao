import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".KW Domain Registration Kuwait | Official .com.kw Domains | Hostao",
  description: "Register your .KW or .com.kw domain in Kuwait with Hostao. Official Kuwait domain registration with fast activation, free DNS management, and 24/7 support. From $55/year.",
  keywords: [".kw domain", "Kuwait domain registration", "com.kw domain", "register kw domain", "Kuwait website domain"],
  alternates: { canonical: "https://hostao.com/kw-domains" },
  openGraph: {
    title: ".KW Domain Registration Kuwait | Hostao",
    description: "Register your official .KW domain for Kuwait. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/kw-domains",
  }
};

const TLDS = [
  { tld: ".com.kw", price: "$55/yr", desc: "Commercial businesses in Kuwait — most popular choice" },
  { tld: ".net.kw", price: "$55/yr", desc: "Network and internet organizations" },
  { tld: ".org.kw", price: "$55/yr", desc: "Non-profit organizations in Kuwait" },
  { tld: ".edu.kw", price: "Restricted", desc: "Educational institutions only" },
  { tld: ".gov.kw", price: "Restricted", desc: "Kuwait government only" },
];

const FEATURES = [
  { icon: "⚡", title: "Instant Activation", desc: "Your .KW domain goes live within minutes of registration. No long waiting periods." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection." },
  { icon: "📧", title: "Email Forwarding", desc: "Set up professional @yourdomain.kw email addresses for your business." },
  { icon: "🔄", title: "Easy Transfer", desc: "Transfer your existing .KW domain to Hostao with zero downtime." },
  { icon: "🌐", title: "Kuwait Market Reach", desc: "A .KW domain signals trust and local presence to Kuwaiti customers." },
];

const FAQS = [
  { q: "Who can register a .KW domain?", a: "Any individual or business can register .com.kw, .net.kw, and .org.kw domains. Extensions like .edu.kw and .gov.kw are restricted to educational institutions and government entities respectively. Hostao handles all registration requirements on your behalf." },
  { q: "What is the difference between .kw and .com.kw?", a: "The .kw extension is the top-level country code domain for Kuwait, while .com.kw is the most common second-level extension used by commercial businesses. Most Kuwaiti businesses prefer .com.kw as it clearly signals a commercial presence in Kuwait." },
  { q: "How long does .KW domain registration take?", a: "Most .KW domain registrations are processed within 24-48 hours. Hostao handles the entire process and keeps you updated on your registration status." },
  { q: "Do I need a Kuwait business license to register .KW?", a: "For most .KW extensions, a Kuwait business license is not strictly required. However, having local documentation can speed up the process. Hostao can assist you with the registration requirements regardless of your location." },
  { q: "Why is a .KW domain important for Kuwait businesses?", a: "Kuwait has one of the highest internet penetration rates in the Gulf region. A .KW domain builds instant credibility with Kuwaiti consumers who look for local domains when making online purchases. It signals that your business has a genuine Kuwait presence." },
  { q: "Does a .KW domain improve local SEO in Kuwait?", a: "Yes. Google treats country-code TLDs like .kw as geo-signals. A .com.kw domain tells search engines your website is relevant to Kuwaiti users, helping improve your rankings in Kuwait search results compared to a generic .com domain." },
];

export default function KWDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇰🇼 KUWAIT DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.KW Domain</span> in Kuwait
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Get your official Kuwait domain and reach customers across the State of Kuwait. A .com.kw domain builds trust with Kuwaiti consumers and establishes your credibility in one of the Gulf&apos;s most prosperous markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .KW Domain</a>
            <Link href="/domain-registration" className="btn-hostao-outline text-lg px-10 py-4">All Domain Extensions</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#334155]">
            {["✅ Fast Activation", "✅ Free DNS Management", "✅ WHOIS Privacy", "✅ 24/7 Support", "✅ Easy Transfer"].map(f => (
              <span key={f} className="font-medium">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TLD PRICING TABLE */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Kuwait Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .KW domain extension for your Kuwaiti business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .KW Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Kuwait domain name is available</p>
          <DomainSearch tlds={[".com.kw", ".net.kw", ".org.kw", ".edu.kw"]} defaultTld=".com.kw" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .KW Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .KW Domains</h2>
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
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">Explore More Gulf Domain Extensions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
              { label: ".BH Domain — Bahrain", href: "/bahrain-domains", desc: "Register your Bahrain domain" },
              { label: ".QA Domain — Qatar", href: "/qa-domains", desc: "Register your Qatar domain" },
              { label: ".SA Domain — Saudi Arabia", href: "/sa-domains", desc: "Register your Saudi domain" },
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
        "name": ".KW Domain Registration Kuwait",
        "description": "Official .KW and .com.kw domain registration for businesses in Kuwait",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "55.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
