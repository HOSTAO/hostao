import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".BH Domain Registration Bahrain | Official .com.bh & .bh Domains | Hostao",
  description: "Register your .BH or .com.bh domain in Bahrain with Hostao. Official Bahraini domain registration with instant activation, free DNS management, and 24/7 support. Starting from $45/year.",
  keywords: [".bh domain", "Bahrain domain registration", "com.bh domain", "register bh domain", "Bahrain website domain"],
  alternates: { canonical: "https://hostao.com/bahrain-domains" },
  openGraph: {
    title: ".BH Domain Registration Bahrain | Hostao",
    description: "Register your official .BH domain for Bahrain. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/bahrain-domains",
  }
};

const TLDS = [
  { tld: ".com.bh", price: "$45/yr", desc: "Commercial entities in Bahrain — most popular choice for businesses" },
  { tld: ".net.bh", price: "$45/yr", desc: "Network and internet organizations based in Bahrain" },
  { tld: ".org.bh", price: "$45/yr", desc: "Non-profit organizations and associations in Bahrain" },
  { tld: ".info.bh", price: "$45/yr", desc: "Information services and portals targeting Bahrain" },
  { tld: ".biz.bh", price: "$45/yr", desc: "Business entities operating in the Kingdom of Bahrain" },
  { tld: ".gov.bh", price: "Restricted", desc: "Government of Bahrain entities only — not publicly available" },
];

const FEATURES = [
  { icon: "⚡", title: "Instant Activation", desc: "Your .BH domain goes live within minutes of registration. No long waiting periods." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection." },
  { icon: "📧", title: "Email Forwarding", desc: "Set up professional @yourdomain.bh email addresses for your business." },
  { icon: "🔄", title: "Easy Transfer", desc: "Transfer your existing .BH domain to Hostao with zero downtime." },
  { icon: "🌐", title: "Bahrain Market Reach", desc: "A .BH domain signals trust and local presence to Bahraini customers." },
];

const FAQS = [
  { q: "Who can register a .BH domain?", a: "Any individual or business can register .com.bh, .net.bh, .org.bh, .info.bh, and .biz.bh domains. Some extensions like .gov.bh are restricted to government entities. You do not need to be based in Bahrain to register most .BH domains." },
  { q: "How long does .BH domain registration take?", a: "Registration is typically instant for most .BH domain extensions. Your domain becomes active within minutes of successful registration through Hostao." },
  { q: "Why should I register a .BH domain?", a: "A .BH domain establishes local credibility with Bahraini customers and businesses. It signals that you are a legitimate presence in the Kingdom of Bahrain, which improves trust and local SEO rankings in Bahrain." },
  { q: "Can I transfer my .BH domain to Hostao?", a: "Yes. Hostao supports domain transfers for .BH extensions. The transfer process is simple and your website stays online throughout. Contact our support team to begin the transfer." },
  { q: "What is the renewal price for .BH domains?", a: "Renewal pricing for .BH domains is the same as registration — $45/year for most extensions. We notify you before renewal so your domain never expires unexpectedly." },
  { q: "Do I need a local Bahrain address to register .BH?", a: "For most .BH extensions (.com.bh, .net.bh, .org.bh), a local address is not required. Hostao handles all the registration requirements on your behalf." },
];

export default function BahrainDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇧🇭 BAHRAIN DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.BH Domain</span> in Bahrain
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Bahraini online presence with a .BH or .com.bh domain. Trusted by businesses across the Kingdom of Bahrain. Instant activation, free DNS management, and 24/7 expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .BH Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Bahrain Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .BH domain extension for your Bahraini business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .BH Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Bahrain domain name is available</p>
          <DomainSearch tlds={[".com.bh", ".net.bh", ".org.bh", ".info.bh", ".biz.bh"]} defaultTld=".com.bh" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .BH Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .BH Domains</h2>
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
        "name": ".BH Domain Registration Bahrain",
        "description": "Official .BH and .com.bh domain registration for businesses in Bahrain",
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
