import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".SA Domain Registration Saudi Arabia | Official .com.sa Domains | Hostao",
  description: "Register your .SA or .com.sa domain in Saudi Arabia with Hostao. Reach 35M+ Saudis with an official Saudi domain. Instant activation, expert support. From $55/year.",
  keywords: [".sa domain", "Saudi Arabia domain registration", "com.sa domain", "register sa domain", "Saudi website domain"],
  alternates: { canonical: "https://hostao.com/sa-domains" },
  openGraph: {
    title: ".SA Domain Registration Saudi Arabia | Hostao",
    description: "Register your official .SA domain for Saudi Arabia. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/sa-domains",
  }
};

const TLDS = [
  { tld: ".com.sa", price: "$55/yr", desc: "Commercial entities in Saudi Arabia — most popular choice" },
  { tld: ".net.sa", price: "$55/yr", desc: "Network and internet providers" },
  { tld: ".org.sa", price: "$55/yr", desc: "Non-profit organizations in Saudi Arabia" },
  { tld: ".edu.sa", price: "Restricted", desc: "Educational institutions only" },
  { tld: ".gov.sa", price: "Restricted", desc: "Saudi government entities only" },
  { tld: ".med.sa", price: "Restricted", desc: "Licensed medical practitioners only" },
];

const FEATURES = [
  { icon: "⚡", title: "Instant Activation", desc: "Your .SA domain goes live within minutes of registration. No long waiting periods." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection." },
  { icon: "📧", title: "Email Forwarding", desc: "Set up professional @yourdomain.sa email addresses for your business." },
  { icon: "🔄", title: "Easy Transfer", desc: "Transfer your existing .SA domain to Hostao with zero downtime." },
  { icon: "🌐", title: "Saudi Market Reach", desc: "A .SA domain signals trust and local presence to 35M+ Saudi internet users." },
];

const FAQS = [
  { q: "Who can register a .SA domain in Saudi Arabia?", a: "Registration requirements vary by extension. For .com.sa, businesses with a Saudi Commercial Registration (CR) have priority, but Hostao can assist international businesses through our local presence services. Contact our team for guidance on the best approach for your situation." },
  { q: "Why is .com.sa the best choice for Saudi businesses?", a: "The .com.sa extension is the most recognized and trusted domain extension in Saudi Arabia. Saudi consumers and businesses instinctively trust .com.sa domains for commercial transactions. It signals a legitimate, established Saudi business presence." },
  { q: "How does Saudi Vision 2030 make a .SA domain more valuable?", a: "Saudi Vision 2030 is driving massive digital transformation across the Kingdom. The government is investing billions in e-commerce, fintech, and digital services. A .com.sa domain positions your business at the heart of this transformation, making it essential for any company targeting the Saudi market." },
  { q: "How long does .SA domain registration take?", a: "Most .SA domain registrations are processed within 24-48 hours. Some extensions may require document verification. Hostao handles the entire process and keeps you updated on the status of your registration." },
  { q: "Do I need a Saudi CR (Commercial Registration) to get a .SA domain?", a: "For .com.sa domains, having a Saudi CR is preferred but not always required. Hostao can assist international businesses with the registration process through our local entity services. Contact our support team for personalized guidance." },
  { q: "Does a .SA domain help with Google rankings in Saudi Arabia?", a: "Yes. Google treats country-code TLDs like .sa as strong geo-signals. A .com.sa domain tells search engines your website is relevant to Saudi users, which can significantly boost your rankings in Saudi Google search results compared to a generic .com." },
];

export default function SADomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇸🇦 SAUDI ARABIA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.SA Domain</span> in Saudi Arabia
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Saudi online presence with a .SA domain. With 35M+ internet users and Vision 2030 driving digital transformation, a .com.sa domain positions your business at the heart of the Gulf&apos;s largest economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .SA Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Saudi Arabia Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .SA domain extension for your Saudi business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .SA Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Saudi Arabia domain name is available</p>
          <DomainSearch tlds={[".com.sa", ".net.sa", ".org.sa"]} defaultTld=".com.sa" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .SA Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .SA Domains</h2>
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
        "name": ".SA Domain Registration Saudi Arabia",
        "description": "Official .SA and .com.sa domain registration for businesses in Saudi Arabia",
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
