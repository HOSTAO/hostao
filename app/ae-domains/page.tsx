import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".AE Domain Registration UAE | Official .com.ae & .ae Domains | Hostao",
  description: "Register your .AE or .com.ae domain in the UAE with Hostao. Official UAE domain registration with instant activation, free DNS management, and 24/7 support. Starting from $35/year.",
  keywords: [".ae domain", "UAE domain registration", "com.ae domain", "register ae domain", "UAE website domain"],
  alternates: { canonical: "https://hostao.com/ae-domains" },
  openGraph: {
    title: ".AE Domain Registration UAE | Hostao",
    description: "Register your official .AE domain for the UAE. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/ae-domains",
  }
};

const TLDS = [
  { tld: ".ae", price: "$35/yr", desc: "General UAE domain for any entity" },
  { tld: ".com.ae", price: "$35/yr", desc: "Commercial businesses in the UAE" },
  { tld: ".net.ae", price: "$35/yr", desc: "Network and internet organizations" },
  { tld: ".org.ae", price: "$35/yr", desc: "Non-profit organizations in UAE" },
  { tld: ".co.ae", price: "$35/yr", desc: "Companies operating in UAE" },
  { tld: ".gov.ae", price: "Restricted", desc: "UAE Federal Government only" },
];

const FEATURES = [
  { icon: "⚡", title: "Instant Activation", desc: "Your .AE domain goes live within minutes of registration. No long waiting periods." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection." },
  { icon: "📧", title: "Email Forwarding", desc: "Set up professional @yourdomain.ae email addresses for your business." },
  { icon: "🔄", title: "Easy Transfer", desc: "Transfer your existing .AE domain to Hostao with zero downtime." },
  { icon: "🌐", title: "UAE Market Reach", desc: "A .AE domain signals trust and local presence to UAE customers." },
];

const FAQS = [
  { q: "Who can register a .AE domain?", a: "There is no residency requirement for registering .ae or .com.ae domains. Any individual or business globally can register most .AE extensions. Hostao handles all the registration requirements on your behalf, making it simple and hassle-free." },
  { q: "Why is a .AE domain important for UAE businesses?", a: "The UAE is the business hub of the Gulf region. A .AE domain builds immediate local trust with Emirati customers and partners. It signals that your business has a genuine UAE presence, which is critical for commerce in Dubai, Abu Dhabi, and across the Emirates." },
  { q: "How long does .AE domain registration take?", a: "Most .AE domain registrations are processed instantly to within 24 hours. Your domain becomes active as soon as registration is confirmed through Hostao." },
  { q: "Can I use a .AE domain for an international business targeting UAE?", a: "Yes, this is very common. Many international companies register .AE domains to establish a local UAE presence. A .AE domain helps international businesses build credibility with Emirati customers and improve their visibility in UAE search results." },
  { q: "What is the difference between .ae and .com.ae?", a: "The .ae extension is shorter and more brandable — perfect for modern brands wanting a clean URL. The .com.ae extension clearly signals a commercial business presence in the UAE. Both are equally valid and trusted. Choose .ae for brevity or .com.ae for a traditional business feel." },
  { q: "Do .AE domains help with local SEO in UAE?", a: "Yes. Google treats country-code TLDs (ccTLDs) like .ae as geo-signals. A .AE domain tells search engines that your website is relevant to users in the United Arab Emirates, which can improve your rankings in UAE search results." },
];

export default function AEDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇦🇪 UAE DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.AE Domain</span> in the UAE
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official UAE online presence with a .AE or .com.ae domain. Trusted by businesses across the United Arab Emirates. Instant activation, free DNS management, and 24/7 expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .AE Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">UAE Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .AE domain extension for your UAE business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .AE Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred UAE domain name is available</p>
          <DomainSearch tlds={[".ae", ".com.ae", ".net.ae", ".org.ae", ".co.ae"]} defaultTld=".ae" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .AE Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .AE Domains</h2>
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
              { label: ".BH Domain — Bahrain", href: "/bahrain-domains", desc: "Register your Bahrain domain" },
              { label: ".QA Domain — Qatar", href: "/qa-domains", desc: "Register your Qatar domain" },
              { label: ".SA Domain — Saudi Arabia", href: "/sa-domains", desc: "Register your Saudi domain" },
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
        "name": ".AE Domain Registration UAE",
        "description": "Official .AE and .com.ae domain registration for businesses in the United Arab Emirates",
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
