import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".COM.AU Domain Registration Australia | Official Australian Domains | Hostao",
  description: "Register your .com.au or .au domain in Australia with Hostao. Reach 21M+ Australian internet users. Instant activation, free DNS, 24/7 support. From $20/year.",
  keywords: [".com.au domain", "Australia domain registration", "au domain", "register com.au domain", "Australian website domain"],
  alternates: { canonical: "https://hostao.com/au-domains" },
  openGraph: {
    title: ".COM.AU Domain Registration Australia | Hostao",
    description: "Register your official .com.au domain for Australia. Instant activation, free DNS management, expert support.",
    url: "https://hostao.com/au-domains",
  }
};

const TLDS = [
  { tld: ".com.au", price: "$25/yr", desc: "Commercial entities in Australia — most popular choice" },
  { tld: ".net.au", price: "$25/yr", desc: "Network organizations in Australia" },
  { tld: ".org.au", price: "$25/yr", desc: "Non-profit organizations in Australia" },
  { tld: ".id.au", price: "$20/yr", desc: "Personal identity domains for Australian individuals" },
  { tld: ".edu.au", price: "Restricted", desc: "Australian educational institutions only" },
  { tld: ".gov.au", price: "Restricted", desc: "Australian government entities only" },
];

const FEATURES = [
  { icon: "🇦🇺", title: "Australian Trust", desc: ".com.au is the most trusted domain extension in Australia — customers prefer local domains." },
  { icon: "👥", title: "21M+ Aussie Users", desc: "Reach Australia's tech-savvy internet population with a local domain they trust." },
  { icon: "🔍", title: "Google AU SEO", desc: "A .com.au domain gives you a powerful geo-signal for Google Australia rankings." },
  { icon: "⚡", title: "Multiple Extensions", desc: "Choose from .com.au, .net.au, .org.au, and .id.au to match your entity type." },
  { icon: "🛡️", title: "ABN Verified", desc: ".com.au domains are backed by ABN verification, adding extra trust and legitimacy." },
  { icon: "🌐", title: "Asia-Pacific Hub", desc: "Australia is a gateway to the Asia-Pacific market — your .com.au signals regional presence." },
];

const FAQS = [
  { q: "Do I need an ABN to register a .com.au domain?", a: "Yes, most .com.au registrations require an Australian Business Number (ABN) or ACN. The domain name should also closely relate to your registered business name. Hostao guides you through the eligibility requirements and handles all verification steps on your behalf." },
  { q: "Who can register a .com.au domain?", a: "Australian businesses with a registered ABN or ACN, and whose domain name closely matches their business name, can register .com.au. The .id.au extension is available to Australian individuals. Non-profits can use .org.au. Hostao helps you determine the right extension for your entity type." },
  { q: "What is the difference between .com.au and .au?", a: "The .com.au extension is for registered Australian commercial entities and requires ABN/ACN verification. The newer .au extension (short form) is more open and can be registered by a broader range of entities. Both signal Australian local presence, but .com.au has stronger historical brand recognition." },
  { q: "Does a .com.au domain help with SEO in Australia?", a: "Yes. A .com.au domain sends a strong geographic relevance signal to Google, which significantly improves your search rankings for users searching in Australia. Combined with locally relevant content and hosting, a .com.au domain is a powerful SEO asset for targeting the Australian market." },
  { q: "How do I transfer my .com.au domain to Hostao?", a: "Transferring a .com.au domain to Hostao is straightforward. You will need to unlock your domain at the current registrar, obtain the authorization code, and initiate the transfer through Hostao. The process typically takes 5–7 days and your website remains fully online throughout the transfer." },
  { q: "What does a .com.au domain cost and how is it renewed?", a: "Registration starts from $20/year for .id.au and $25/year for .com.au, .net.au, and .org.au. Renewal is at the same rate. Hostao sends renewal reminder emails well in advance so your domain never expires. You can also enable auto-renewal in your control panel for complete peace of mind." },
];

export default function AUDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇦🇺 AUSTRALIA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.COM.AU Domain</span> in Australia
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Australia&apos;s most trusted domain extension. .com.au signals credibility to 21M+ Australian internet users. Whether you&apos;re a local business or expanding into the Australian market, secure your .com.au today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .COM.AU Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Australian Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right Australian domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .COM.AU Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Australian domain name is available</p>
          <DomainSearch tlds={[".com.au", ".net.au", ".org.au", ".id.au"]} defaultTld=".com.au" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .COM.AU Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .COM.AU Domains</h2>
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
              { label: ".CO.UK Domain — UK", href: "/uk-domains", desc: "Register your UK domain" },
              { label: ".SG Domain — Singapore", href: "/sg-domains", desc: "Register your Singapore domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular domain" },
              { label: ".CA Domain — Canada", href: "/ca-domains", desc: "Register your Canadian domain" },
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
        "name": ".COM.AU Domain Registration Australia",
        "description": "Official .com.au domain registration for businesses in Australia",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
