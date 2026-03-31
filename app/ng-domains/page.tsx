import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".NG Domain Registration Nigeria | Official Nigerian Domains | Hostao",
  description: "Register your .com.ng or .ng domain in Nigeria with Hostao. Africa's largest economy with 100M+ internet users. From $30/year.",
  keywords: [".ng domain", "Nigeria domain registration", "com.ng domain", "register ng domain", "Nigerian website domain"],
  alternates: { canonical: "https://hostao.com/ng-domains" },
  openGraph: {
    title: ".NG Domain Registration Nigeria | Hostao",
    description: "Register your official .NG domain for Nigeria. Instant activation, free DNS management, expert support.",
    url: "https://hostao.com/ng-domains",
  }
};

const TLDS = [
  { tld: ".com.ng", price: "$30/yr", desc: "Commercial entities in Nigeria — most popular" },
  { tld: ".net.ng", price: "$30/yr", desc: "Network organizations in Nigeria" },
  { tld: ".org.ng", price: "$30/yr", desc: "Non-profit organizations in Nigeria" },
  { tld: ".ng", price: "$35/yr", desc: "Premium Nigeria domain — short and brandable" },
  { tld: ".edu.ng", price: "Restricted", desc: "Nigerian educational institutions only" },
  { tld: ".gov.ng", price: "Restricted", desc: "Nigerian government entities only" },
];

const FEATURES = [
  { icon: "🌍", title: "Africa's Largest Economy", desc: "Nigeria is Africa's #1 economy — a .NG domain signals serious presence in the continent's biggest market." },
  { icon: "👥", title: "100M+ Internet Users", desc: "Nigeria has Africa's largest internet population and it's growing at record speed." },
  { icon: "💻", title: "Lagos Tech Hub", desc: "Yaba Valley is Africa's Silicon Valley — .NG is the domain of Nigerian tech innovation." },
  { icon: "🔍", title: "Google NG SEO", desc: "A .NG domain provides strong geo-signals for Google Nigeria rankings." },
  { icon: "📱", title: "Mobile-First Market", desc: "Nigeria is a mobile-first economy — your .NG domain reaches users on their primary device." },
  { icon: "💰", title: "Affordable Entry", desc: "Starting at $30/year, .com.ng is an affordable gateway to Africa's largest market." },
];

const FAQS = [
  { q: "Who can register a .com.ng or .ng domain?", a: "Any individual, business, or organization worldwide can register a .com.ng domain. Nigeria's domain registry (NiRA) has an open registration policy for most .ng extensions. There are no strict citizenship or residency requirements, making it easy for international businesses to establish a Nigerian online presence through Hostao." },
  { q: "Do I need to go through NiRA directly to register a .NG domain?", a: "No. Hostao is an accredited registrar for .NG domains, which means you can register and manage your Nigerian domain entirely through Hostao's platform. We handle all NiRA compliance and technical requirements on your behalf. Simply search for your domain and complete registration through Hostao." },
  { q: "Does a .NG domain help with SEO in Nigeria?", a: "Yes. A .NG domain sends a strong geographic relevance signal to Google, improving your search rankings for users searching in Nigeria. With Nigeria's rapidly growing internet population and the rise of e-commerce and fintech in Lagos and other major cities, ranking well on Google Nigeria can drive significant business growth." },
  { q: "Why is Nigeria an important market for a .NG domain?", a: "Nigeria is Africa's largest economy by GDP and home to the continent's most vibrant tech ecosystem. Lagos's Yaba Valley has produced world-class startups including Flutterwave, Paystack, and Andela. Nigeria has 100M+ internet users, a young median age, and rapidly growing middle class — making it one of the most exciting digital markets on earth." },
  { q: "How do I transfer my .NG domain to Hostao?", a: "Transferring a .NG domain to Hostao is straightforward. Unlock your domain at the current registrar, obtain the authorization code, and initiate the transfer through Hostao. The process typically takes 5–7 days. Your website remains fully online throughout the entire transfer period with no downtime." },
  { q: "How much does a .NG domain cost at Hostao?", a: "Standard Nigerian domain extensions — including .com.ng, .net.ng, and .org.ng — are priced at $30/year. The premium .ng extension is $35/year. Renewal is at the same annual rate. Restricted extensions like .edu.ng and .gov.ng require institutional eligibility. Hostao sends renewal reminders to ensure your domain never expires." },
];

export default function NGDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇳🇬 NIGERIA DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.NG Domain</span> in Nigeria
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Nigeria&apos;s 100M+ internet users and the fastest-growing tech ecosystem in Africa. A .com.ng domain positions your business at the heart of Africa&apos;s largest economy and Lagos&apos;s thriving Yaba Valley tech hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .NG Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">Nigerian Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right Nigerian domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .NG Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred Nigerian domain name is available</p>
          <DomainSearch tlds={[".com.ng", ".net.ng", ".org.ng", ".ng"]} defaultTld=".com.ng" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .NG Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .NG Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular domain" },
              { label: ".CO.UK Domain — UK", href: "/uk-domains", desc: "Register your UK domain" },
              { label: ".IN Domain — India", href: "/in-domains", desc: "Register your India domain" },
              { label: "All Domain Extensions", href: "/domain-registration", desc: "Browse all available domains" },
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
        "name": ".NG Domain Registration Nigeria",
        "description": "Official .com.ng and .ng domain registration for businesses in Nigeria",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "30.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
