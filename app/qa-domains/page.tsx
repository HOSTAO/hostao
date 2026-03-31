import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".QA Domain Registration Qatar | Official .com.qa & .qa Domains | Hostao",
  description: "Register your .QA or .com.qa domain in Qatar with Hostao. Official Qatar domain registration with instant activation, free DNS management, and expert support. Starting from $50/year.",
  keywords: [".qa domain", "Qatar domain registration", "com.qa domain", "register qa domain", "Qatar website domain"],
  alternates: { canonical: "https://hostao.com/qa-domains" },
  openGraph: {
    title: ".QA Domain Registration Qatar | Hostao",
    description: "Register your official .QA domain for Qatar. Fast activation, free DNS management, expert support.",
    url: "https://hostao.com/qa-domains",
  }
};

const TLDS = [
  { tld: ".qa", price: "$50/yr", desc: "General Qatar domain for any entity" },
  { tld: ".com.qa", price: "$50/yr", desc: "Commercial entities in Qatar" },
  { tld: ".net.qa", price: "$50/yr", desc: "Network and internet organizations" },
  { tld: ".org.qa", price: "$50/yr", desc: "Non-profit organizations in Qatar" },
  { tld: ".edu.qa", price: "Restricted", desc: "Educational institutions only" },
  { tld: ".gov.qa", price: "Restricted", desc: "Government of Qatar only" },
];

const FEATURES = [
  { icon: "⚡", title: "Instant Activation", desc: "Your .QA domain goes live within minutes of registration. No long waiting periods." },
  { icon: "🔒", title: "Free DNS Management", desc: "Full DNS control panel included. Point your domain anywhere instantly." },
  { icon: "🛡️", title: "WHOIS Privacy", desc: "Keep your personal information private with free WHOIS protection." },
  { icon: "📧", title: "Email Forwarding", desc: "Set up professional @yourdomain.qa email addresses for your business." },
  { icon: "🔄", title: "Easy Transfer", desc: "Transfer your existing .QA domain to Hostao with zero downtime." },
  { icon: "🌐", title: "Qatar Market Reach", desc: "A .QA domain signals trust and local presence to Qatari customers." },
];

const FAQS = [
  { q: "Who can register a .QA domain?", a: "Any individual or business can register .qa, .com.qa, .net.qa, and .org.qa domains. Extensions like .edu.qa and .gov.qa are restricted to educational institutions and government entities respectively. You do not need to be based in Qatar to register most .QA domains." },
  { q: "Why is a .QA domain important for Qatar businesses?", a: "Qatar is one of the wealthiest nations per capita in the world. A .QA domain establishes credibility with Qatari customers and businesses, signaling that you have a genuine presence in the State of Qatar. This is especially important for B2B and government-related business." },
  { q: "How does Qatar Vision 2030 make a .QA domain more valuable?", a: "Qatar is investing heavily in its digital economy as part of Qatar National Vision 2030. The government is driving digital transformation across all sectors, creating massive opportunities for online businesses. A .QA domain positions you to capture this growing digital market as Qatar diversifies beyond oil and gas." },
  { q: "How long does .QA domain registration take?", a: "Most .QA domain registrations are processed instantly. Your domain becomes active within minutes of successful registration through Hostao." },
  { q: "Can international businesses register .QA domains?", a: "Yes. International businesses are welcome to register .QA domains. Many global companies register .qa or .com.qa domains to establish a local Qatar presence, especially for government tenders and B2B relationships in the region." },
  { q: "Do .QA domains improve local SEO in Qatar?", a: "Yes. Google treats country-code TLDs like .qa as geo-signals. A .QA domain tells search engines that your website is relevant to users in Qatar, which can significantly improve your rankings in Qatari search results compared to a generic .com domain." },
];

export default function QADomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇶🇦 QATAR DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.QA Domain</span> in Qatar
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Establish your official Qatari online presence with a .QA or .com.qa domain. Trusted by businesses across the State of Qatar. Instant activation, free DNS management, and 24/7 expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .QA Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Qatar Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right .QA domain extension for your Qatari business or organization</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .QA Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Qatar domain name is available</p>
          <DomainSearch tlds={[".qa", ".com.qa", ".net.qa", ".org.qa"]} defaultTld=".qa" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .QA Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .QA Domains</h2>
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
        "name": ".QA Domain Registration Qatar",
        "description": "Official .QA and .com.qa domain registration for businesses in Qatar",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "50.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
