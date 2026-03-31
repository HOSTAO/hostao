import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".CO.UK Domain Registration UK | Official British Domains | Hostao",
  description: "Register your .CO.UK or .UK domain with Hostao. Official British domain registration for businesses reaching 67M+ UK consumers. Starting from $12/year.",
  keywords: [".co.uk domain", "uk domain registration", "british domain", "register co.uk domain", "uk website domain", ".uk domain"],
  alternates: { canonical: "https://hostao.com/uk-domains" },
  openGraph: {
    title: ".CO.UK Domain Registration UK | Official British Domains | Hostao",
    description: "Register your official .CO.UK or .UK domain. Reach 67M+ British consumers with instant activation, free DNS management, and 24/7 support.",
    url: "https://hostao.com/uk-domains",
  }
};

const TLDS = [
  { tld: ".co.uk", price: "$18/yr", desc: "Commercial entities in the UK — Britain's most popular domain" },
  { tld: ".uk", price: "$12/yr", desc: "Short UK domain — modern and concise" },
  { tld: ".org.uk", price: "$18/yr", desc: "UK organizations and nonprofits" },
  { tld: ".me.uk", price: "$18/yr", desc: "Personal websites for UK individuals" },
  { tld: ".ltd.uk", price: "$18/yr", desc: "UK limited companies" },
  { tld: ".gov.uk", price: "Restricted", desc: "UK government entities only" },
];

const FEATURES = [
  { icon: "🇬🇧", title: "British Trust Signal", desc: "A .CO.UK or .UK domain immediately signals a legitimate UK presence to British customers, partners, and search engines." },
  { icon: "👥", title: "67M+ UK Users", desc: "Reach over 67 million British internet users directly. UK domains are the natural choice for businesses serving the UK market." },
  { icon: "🔍", title: "Google UK SEO", desc: "Google uses country-code TLDs as a geo-signal. A .CO.UK domain helps your site rank higher in google.co.uk search results." },
  { icon: "⚡", title: "Multiple Extensions", desc: "Choose from .co.uk, .uk, .org.uk, .me.uk, and more — covering every type of UK organisation and individual." },
  { icon: "🛡️", title: "GDPR Compliant", desc: "UK domains registered through Hostao include WHOIS privacy protection, keeping your personal data secure under GDPR." },
  { icon: "🏢", title: "London Business Hub", desc: "London is Europe's leading business capital. A .CO.UK domain puts your brand firmly in the UK market alongside the best." },
];

const FAQS = [
  { q: "Who can register a .CO.UK or .UK domain?", a: "There are no strict residency requirements for registering .co.uk or .uk domains — anyone worldwide can register them. However, for some second-level domains like .ltd.uk, you may need to be a registered UK limited company. Hostao handles all registration requirements and will advise you on eligibility for each extension." },
  { q: "What is the difference between .co.uk and .uk?", a: "The .co.uk extension has been the dominant British commercial domain since the early days of the internet and carries strong brand recognition. The .uk extension is a newer, shorter alternative introduced in 2014. Both are equally legitimate and trusted. Choose .co.uk for traditional credibility or .uk if you prefer a shorter, more modern URL." },
  { q: "Do UK domains help with SEO in the United Kingdom?", a: "Yes, significantly. Google and other search engines treat .co.uk and .uk as country-code TLDs (ccTLDs), which are a strong geo-signal for UK-based search results. A UK domain tells Google that your website is primarily relevant to UK users, which can substantially improve your rankings in UK-targeted searches." },
  { q: "How long does .CO.UK domain registration take?", a: "Most .CO.UK and .UK domain registrations are processed instantly through Hostao. Your domain becomes active within minutes of successful registration. DNS propagation typically takes between 15 minutes and 2 hours, after which your website will be accessible worldwide." },
  { q: "Can I register a .CO.UK domain if I am not based in the UK?", a: "Yes, you can register .co.uk and .uk domains without being a UK resident or having a UK business address. Many international companies register UK domains to establish a British online presence. Hostao handles all the registration requirements on your behalf regardless of your location." },
  { q: "What happens to my .CO.UK domain after Brexit?", a: "Brexit has not affected .CO.UK or .UK domain registrations. These domains are managed by Nominet, the UK domain registry, which operates independently of the EU. UK domains remain fully available to registrants from all countries including EU member states, and all existing UK domains remain fully valid." },
];

export default function UKDomainsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">🇬🇧 UK DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.CO.UK Domain</span> in the United Kingdom
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Register your official UK domain and reach 67M+ British consumers. The .co.uk extension is Britain's most trusted domain for businesses, while .uk offers a modern, concise alternative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .CO.UK Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">UK Domain Extensions & Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Choose the right UK domain extension for your British business</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your UK Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred UK domain name is available</p>
          <DomainSearch tlds={[".co.uk", ".uk", ".org.uk", ".me.uk", ".ltd.uk"]} defaultTld=".co.uk" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your UK Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about UK Domains</h2>
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
              { label: ".AE Domain — UAE", href: "/ae-domains", desc: "Register your UAE domain" },
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain extension" },
              { label: ".IN Domain — India", href: "/in-domains", desc: "Register your India domain" },
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
        "name": ".CO.UK Domain Registration UK",
        "description": "Official .CO.UK and .UK domain registration for businesses in the United Kingdom",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
