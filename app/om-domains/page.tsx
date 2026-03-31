import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".OM Domain Registration Oman | Official .com.om & .om Domains | Hostao",
  description: "Register your .OM or .com.om domain in Oman with Hostao. The .om extension is also globally coveted for short brandable domains. Expert support, fast activation. From $60/year.",
  keywords: [".om domain", "Oman domain registration", "com.om domain", "register om domain", "Oman website domain"],
  alternates: { canonical: "https://hostao.com/om-domains" },
  openGraph: {
    title: ".OM Domain Registration Oman | Hostao",
    description: "Register your official .OM domain for Oman. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/om-domains",
  }
};

const TLDS = [
  { tld: ".om", price: "$85/yr", desc: "Oman's premium TLD — globally coveted for brandable short domains" },
  { tld: ".com.om", price: "$60/yr", desc: "Commercial entities in Oman" },
  { tld: ".net.om", price: "$60/yr", desc: "Network organizations in Oman" },
  { tld: ".org.om", price: "$60/yr", desc: "Non-profit organizations in Oman" },
  { tld: ".gov.om", price: "Restricted", desc: "Government of Oman entities only" },
];

const FEATURES = [
  { icon: "🌍", title: "Globally Coveted TLD", desc: ".OM is one of the world's shortest and most brandable domain extensions, sought after by global brands and startups for creative domain names." },
  { icon: "📊", title: "Oman Vision 2040", desc: "Oman's digital transformation strategy is creating massive online opportunities. A .OM domain positions your business at the forefront of this growth." },
  { icon: "⚡", title: "Instant Activation", desc: "Your .OM domain goes live within minutes of registration. No long waiting periods or complex approval processes." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included with every .OM domain. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection included with your .OM domain." },
  { icon: "🌐", title: "Gulf Market Reach", desc: "A .OM domain signals trust across the GCC and Omani market, building credibility with local customers and business partners." },
];

const FAQS = [
  { q: "Who can register a .OM domain?", a: "Registration for .com.om, .net.om, and .org.om domains is available to businesses and individuals worldwide. The premium .om TLD may require documentation in some cases. Hostao handles all the registration requirements on your behalf, making the process simple and hassle-free." },
  { q: "Why is .OM popular globally for branding?", a: ".OM is just two characters and reads like a word or sound, making it highly memorable. Global brands and startups use .OM for creative domain hacks and short URLs, similar to how .IO became popular with tech startups. Owning a .OM domain gives you a rare, globally recognized asset." },
  { q: "What is the difference between .om and .com.om?", a: "The .om extension is the top-level country code domain — shorter, more brandable, and globally sought after. The .com.om extension is specifically for commercial entities in Oman. For a local Omani business, .com.om is the traditional choice. For branding or global use, .om is often preferred." },
  { q: "How long does .OM domain registration take?", a: "Most .OM domain registrations are processed within 24–48 hours. Hostao handles the entire process and notifies you as soon as your domain is active and ready to use." },
  { q: "Is Oman a good market for digital businesses?", a: "Yes. Oman has a rapidly growing digital economy with high internet penetration. The Omani government's Vision 2040 strategy is investing heavily in digital infrastructure and e-commerce, creating significant opportunities for online businesses targeting the Omani and wider GCC market." },
  { q: "Does a .OM domain help with SEO in Oman?", a: "Yes. Google treats country-code TLDs like .om as strong geo-signals. A .com.om or .om domain tells search engines your website is relevant to Omani users, which can improve your rankings in Oman search results compared to using a generic global domain." },
];

export default function OMDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇴🇲 OMAN DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.OM Domain</span> in Oman
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Omani online presence with a .OM domain. The .OM extension is uniquely popular globally as one of the shortest brandable TLDs, while also serving the growing Omani digital market under Vision 2040.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .OM Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Oman Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .OM domain extension for your Omani business or global brand</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .OM Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Oman domain name is available</p>
          <DomainSearch tlds={[".om", ".com.om", ".net.om", ".org.om"]} defaultTld=".om" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .OM Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .OM Domains</h2>
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
              { label: ".SA Domain — Saudi Arabia", href: "/sa-domains", desc: "Register your Saudi Arabia domain" },
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
              { label: ".BH Domain — Bahrain", href: "/bahrain-domains", desc: "Register your Bahrain domain" },
              { label: ".KW Domain — Kuwait", href: "/kw-domains", desc: "Register your Kuwait domain" },
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
        "name": ".OM Domain Registration Oman",
        "description": "Official .OM and .com.om domain registration for businesses in Oman",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "60.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
