import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".CO Domain Registration | The Startup Alternative to .COM | Hostao",
  description: "Register your .CO domain with Hostao. The startup alternative to .COM — used by Twitter (t.co), Google (g.co), and thousands of global brands. From just $30/year.",
  keywords: [".co domain", "co domain registration", "startup domain", "co domain alternative to com", "register co domain"],
  alternates: { canonical: "https://hostao.com/co-domain" },
  openGraph: {
    title: ".CO Domain Registration | The Startup Alternative to .COM | Hostao",
    description: "Register your .CO domain. The startup alternative to .COM used by Twitter, Google, and global brands. Fast activation, free DNS management.",
    url: "https://hostao.com/co-domain",
  }
};

const TLDS = [
  { tld: ".co", price: "$30/yr", desc: "The startup alternative to .COM — used by Twitter (t.co), Google (g.co), and global brands" },
];

const FEATURES = [
  { icon: "🚀", title: "Startup Favorite", desc: "Chosen by thousands of startups and tech companies worldwide. .CO is the domain of choice for innovative businesses launching fast." },
  { icon: "🌐", title: "Global Brand Trust", desc: "Used by Twitter (t.co), Google (g.co), and hundreds of Fortune 500 brands. .CO carries instant global credibility." },
  { icon: "⚡", title: "Short & Memorable", desc: "Two letters. Easy to type, easy to remember. .CO keeps your brand URL tight and punchy — perfect for modern marketing." },
  { icon: "🔄", title: ".COM Alternative", desc: "Can't get the .COM you want? .CO is the next best thing — and increasingly preferred by startups and tech companies alike." },
  { icon: "📈", title: "Investor Recognition", desc: "VCs and investors recognize .CO as a legitimate startup domain. A .CO address won't raise eyebrows in any pitch meeting." },
  { icon: "🛡️", title: "Premium Availability", desc: "Millions of great .CO names are still available. Find the short, catchy domain you've always wanted — before someone else does." },
];

const FAQS = [
  { q: "What is a .CO domain?", a: ".CO is the country-code top-level domain (ccTLD) for Colombia, but it has been successfully marketed as a global domain and is widely used as a short alternative to .COM. Major companies like Twitter (t.co) and Google (g.co) use .CO for short URLs and brand campaigns. It is recognized worldwide as a legitimate, professional domain extension." },
  { q: "Who can register a .CO domain?", a: "Anyone in the world can register a .CO domain — there are no residency or citizenship requirements. Unlike some ccTLDs, .CO is completely open for global registration. Individuals, startups, businesses, and organizations from any country can register a .CO domain through Hostao." },
  { q: "Why do startups prefer .CO over .COM?", a: "Many great .COM names are already taken, forcing startups into awkward alternatives. .CO offers a clean, credible, and memorable alternative. It signals that a company is tech-savvy, modern, and forward-thinking. Thousands of successful startups have launched on .CO and gone on to raise funding and scale globally." },
  { q: "Is a .CO domain good for SEO?", a: "Yes. Google treats .CO as a generic TLD (gTLD) globally, not just for Colombia. This means a .CO domain can rank in search results worldwide without any geographic restrictions. Your .CO domain will perform just like a .COM or .NET for international SEO purposes." },
  { q: "Can I transfer my existing .CO domain to Hostao?", a: "Yes, transferring your .CO domain to Hostao is simple and straightforward. The process typically takes 5–7 days. During the transfer, your website and email remain fully operational with zero downtime. Our support team is available 24/7 to assist with the transfer process." },
  { q: "How much does a .CO domain cost at Hostao?", a: "Hostao offers .CO domain registration at $30/year. This includes free DNS management, WHOIS privacy protection, and 24/7 expert support. Renewal pricing is the same as registration — no bait-and-switch pricing. You can register for multiple years upfront to lock in the rate." },
];

export default function CODomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">STARTUP DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.CO Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The startup alternative to .COM. Used by Twitter (t.co), Google (g.co), and thousands of global brands. Short, memorable, and instantly credible — from just $30/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .CO Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.CO Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Simple, transparent pricing for your .CO domain registration</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .CO Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .CO domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .CO Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .CO Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain extension" },
              { label: ".IO Domain", href: "/io-domain", desc: "The tech startup favourite domain extension" },
              { label: ".TECH Domain", href: "/tech-domain", desc: "Perfect for technology companies and startups" },
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
        "name": ".CO Domain Registration",
        "description": "The startup alternative to .COM. Used by Twitter (t.co), Google (g.co), and thousands of global brands.",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "30.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
