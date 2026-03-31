import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".MY Domain Registration Malaysia | Official Malaysian Domains | Hostao",
  description: "Register your .com.my or .my domain in Malaysia with Hostao. Reach 30M+ Malaysian internet users. From $30/year.",
  keywords: [".my domain", "Malaysia domain registration", "com.my domain", "register my domain", "Malaysian website domain"],
  alternates: { canonical: "https://hostao.com/my-domains" },
  openGraph: {
    title: ".MY Domain Registration Malaysia | Hostao",
    description: "Register your official .MY domain for Malaysia. Instant activation, free DNS management, expert support.",
    url: "https://hostao.com/my-domains",
  }
};

const TLDS = [
  { tld: ".com.my", price: "$30/yr", desc: "Commercial entities in Malaysia — most popular" },
  { tld: ".net.my", price: "$30/yr", desc: "Network organizations in Malaysia" },
  { tld: ".org.my", price: "$30/yr", desc: "Non-profit organizations in Malaysia" },
  { tld: ".my", price: "$35/yr", desc: "Premium Malaysia domain — short and brandable" },
  { tld: ".edu.my", price: "Restricted", desc: "Malaysian educational institutions only" },
  { tld: ".gov.my", price: "Restricted", desc: "Malaysian government entities only" },
];

const FEATURES = [
  { icon: "🇲🇾", title: "Malaysian Trust", desc: ".com.my is the most trusted domain in Malaysia — local customers prefer Malaysian domains." },
  { icon: "👥", title: "30M+ Users", desc: "Malaysia's internet population is growing rapidly with strong mobile-first adoption." },
  { icon: "🔍", title: "Google MY SEO", desc: "A .com.my domain provides strong geo-signals for Google Malaysia rankings." },
  { icon: "💻", title: "Digital Economy", desc: "Malaysia's MyDigital initiative is accelerating the country's digital transformation." },
  { icon: "🛡️", title: "MYNIC Registered", desc: "All .MY domains are registered through MYNIC, Malaysia's official domain registry." },
  { icon: "🌐", title: "ASEAN Market", desc: "Malaysia is a key ASEAN economy — .MY positions you in Southeast Asia's growth corridor." },
];

const FAQS = [
  { q: "Who can register a .com.my domain?", a: "Malaysian-registered businesses and organizations can register .com.my domains. The domain name should relate to the company name or business activity. For the broader .my extension, eligibility is more flexible. Hostao handles all MYNIC compliance requirements and guides you through the registration process." },
  { q: "Do I need a Malaysia business registration for a .com.my domain?", a: "Yes, .com.my registration typically requires a Malaysian company registration number (SSM). The .my premium domain has broader eligibility. Hostao works with local registration agents to help international businesses looking to establish a Malaysian online presence obtain the right domain extension." },
  { q: "How much does a .com.my domain cost?", a: "Standard Malaysian domain extensions — including .com.my, .net.my, and .org.my — are priced at $30/year. The premium .my extension is $35/year. Renewal is at the same annual rate. Hostao sends reminder emails well before expiry so your Malaysian domain never lapses unexpectedly." },
  { q: "Does a .com.my domain help with SEO in Malaysia?", a: "Yes. A .com.my domain sends a clear geographic signal to Google, improving your rankings for users searching in Malaysia. With Malaysia's rapidly growing digital economy and high smartphone adoption, ranking well on Google Malaysia can drive significant business growth. A local domain is a foundational SEO asset." },
  { q: "How do I transfer my .com.my domain to Hostao?", a: "Transferring a .com.my domain to Hostao involves unlocking the domain at your current registrar, obtaining the authorization code, and submitting the transfer request through Hostao. The process typically completes within 5–7 days. Your website remains live and fully accessible throughout the entire transfer." },
  { q: "What is the difference between .com.my and .my?", a: "The .com.my extension is for Malaysian commercial entities and is the most recognized domain for Malaysian businesses. The shorter .my extension is a premium domain that works for any entity and is highly brandable due to its brevity. Both signal local Malaysian presence, but .com.my has stronger historical brand recognition among Malaysian consumers." },
];

export default function MYDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇲🇾 MALAYSIA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.MY Domain</span> in Malaysia
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Register your Malaysia domain. .com.my is trusted by 30M+ Malaysians and is the go-to domain for businesses targeting Malaysia&apos;s rapidly growing digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .MY Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Malaysian Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right Malaysian domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .MY Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Malaysian domain name is available</p>
          <DomainSearch tlds={[".com.my", ".net.my", ".org.my", ".my"]} defaultTld=".com.my" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .MY Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .MY Domains</h2>
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
              { label: ".SG Domain — Singapore", href: "/sg-domains", desc: "Register your Singapore domain" },
              { label: ".IN Domain — India", href: "/in-domains", desc: "Register your India domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular domain" },
              { label: ".PK Domain — Pakistan", href: "/pk-domains", desc: "Register your Pakistan domain" },
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
        "name": ".MY Domain Registration Malaysia",
        "description": "Official .com.my and .my domain registration for businesses in Malaysia",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "30.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
