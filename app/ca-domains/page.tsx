import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".CA Domain Registration Canada | Official Canadian Domains | Hostao",
  description: "Register your .CA domain with Hostao. The official Canadian domain trusted by 38M Canadians. Establish your Canadian digital presence from just $20/year.",
  keywords: [".ca domain", "canada domain registration", "canadian domain", "register ca domain", "Canadian website domain", "CIRA domain"],
  alternates: { canonical: "https://hostao.com/ca-domains" },
  openGraph: {
    title: ".CA Domain Registration Canada | Official Canadian Domains | Hostao",
    description: "Register your official .CA domain. Trusted by 38M Canadians with instant activation, free DNS management, and 24/7 support.",
    url: "https://hostao.com/ca-domains",
  }
};

const TLDS = [
  { tld: ".ca", price: "$20/yr", desc: "The official Canadian domain — trusted by 38M Canadians" },
];

const FEATURES = [
  { icon: "🇨🇦", title: "Canadian Trust", desc: "A .CA domain is the ultimate signal of Canadian authenticity. Canadian consumers, businesses, and government agencies immediately recognise and trust .CA." },
  { icon: "👥", title: "38M Canadians", desc: "Reach over 38 million Canadians directly. A .CA domain is the natural choice for businesses that serve or operate in the Canadian market." },
  { icon: "🏛️", title: "CIRA Backed", desc: "The .CA registry is managed by CIRA (Canadian Internet Registration Authority), one of the world's most respected and stable domain registries." },
  { icon: "🌐", title: "Bilingual Market", desc: "Canada's bilingual English-French market is unique. A .CA domain signals respect for both official languages and serves the full Canadian audience." },
  { icon: "🔍", title: "Canada SEO Boost", desc: "Google treats .CA as a strong geo-signal for Canadian search results. A .CA domain helps your site rank higher in google.ca and Canadian local searches." },
  { icon: "🛡️", title: "PIPEDA Compliant", desc: "Hostao's .CA domain registration includes WHOIS privacy, helping you meet PIPEDA (Canada's federal privacy law) data protection requirements." },
];

const FAQS = [
  { q: "Who can register a .CA domain?", a: "To register a .CA domain, you must meet CIRA's Canadian Presence Requirements. Eligible registrants include: Canadian citizens and permanent residents, Canadian corporations and organizations, Canadian government entities, and foreign entities with a Canadian trademark or a physical presence in Canada. Hostao will guide you through the eligibility requirements during registration." },
  { q: "What is the Canadian Presence Requirement for .CA domains?", a: "CIRA (Canadian Internet Registration Authority) requires all .CA domain registrants to have a legitimate connection to Canada. This includes being a Canadian citizen, permanent resident, Canadian corporation, Canadian government entity, or a foreign company with a registered Canadian trademark. Hostao will verify your eligibility and help you complete the registration process correctly." },
  { q: "Does a .CA domain help with SEO in Canada?", a: "Yes, significantly. Google uses country-code TLDs (ccTLDs) like .CA as a strong geo-targeting signal. A .CA domain tells Google and other search engines that your website is primarily relevant to Canadian users, which can substantially improve your rankings in Canadian search results on google.ca. This is one of the most effective local SEO strategies for the Canadian market." },
  { q: "Can I register a .CA domain for a bilingual Canadian website?", a: "Absolutely. Many Canadian businesses operate bilingual English-French websites, and a .CA domain perfectly suits this. Canada's official bilingual status is a key part of its national identity, and .CA works equally well for English, French, or fully bilingual websites serving Canadian audiences across all provinces and territories." },
  { q: "How do I transfer my existing .CA domain to Hostao?", a: "Transferring your .CA domain to Hostao involves obtaining an Authorization Code (Auth Code) from your current registrar, then initiating the transfer through Hostao. The process typically takes 5–7 days. Your website and email services remain fully operational throughout the transfer with zero downtime. Contact our 24/7 support team for step-by-step assistance." },
  { q: "How much does a .CA domain cost and what is included?", a: "Hostao offers .CA domain registration at $20/year. This includes free DNS management with full control panel access, WHOIS privacy protection to keep your personal information private, and access to our 24/7 expert support team. Renewal pricing matches registration pricing — no surprise fee increases at renewal time." },
];

export default function CADomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇨🇦 CANADA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.CA Domain</span> in Canada
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The official Canadian domain. .CA signals trust to 38M Canadians and is one of the world's most trusted country-code domains. Establish your Canadian digital presence — from just $20/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .CA Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.CA Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Simple, transparent pricing for your official Canadian domain registration</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .CA Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Canadian domain name is available</p>
          <DomainSearch tlds={[".ca"]} defaultTld=".ca" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .CA Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .CA Domains</h2>
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
              { label: ".US Domain — USA", href: "/us-domains", desc: "Register your American domain" },
              { label: ".CO.UK Domain — UK", href: "/uk-domains", desc: "Register your British domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain extension" },
              { label: "All Domain Extensions", href: "/domain-registration", desc: "Browse all available domain extensions" },
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
        "name": ".CA Domain Registration Canada",
        "description": "The official Canadian domain registration — trusted by 38M Canadians",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
