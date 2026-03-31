import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".ONLINE Domain Registration | Affordable Domains from $8/yr | Hostao",
  description: "Register your .ONLINE domain with Hostao. One of the most affordable domain extensions available. Clear, descriptive, and perfect for any business going digital — from just $8/year.",
  keywords: [".online domain", "online domain registration", "affordable domain", "register online domain", "buy .online domain", "cheap domain", "business domain"],
  alternates: { canonical: "https://hostao.com/online-domain" },
  openGraph: {
    title: ".ONLINE Domain Registration | Hostao",
    description: "Register your .ONLINE domain from $8/year. One of the most affordable domains available — perfect for any business going digital.",
    url: "https://hostao.com/online-domain",
  }
};

const TLDS = [
  { tld: ".online", price: "$8/yr", desc: "Take any business online — one of the most affordable domain extensions available" },
];

const FEATURES = [
  { icon: "💰", title: "Ultra Affordable", desc: "At just $8/year, .ONLINE is one of the cheapest domain extensions on the market — perfect for startups and budget-conscious businesses." },
  { icon: "🌐", title: "Self-Explanatory", desc: ".ONLINE tells visitors exactly what to expect — your business, available online. No explanation needed, instant clarity." },
  { icon: "⚡", title: "Great Availability", desc: "Premium keyword domains still available in .ONLINE at affordable prices. Find the perfect name that's long gone in .COM." },
  { icon: "🏪", title: "Any Business Fits", desc: "Whether you're a restaurant, shop, freelancer, or enterprise — .ONLINE works for everyone going digital." },
  { icon: "🔍", title: "SEO Friendly", desc: "Google treats .ONLINE as a legitimate gTLD with full SEO weight. No geographic restrictions or ranking penalties." },
  { icon: "📣", title: "Easy to Market", desc: "'Visit us dot online' is clear and memorable in any advertisement, business card, or social media profile." },
];

const FAQS = [
  { q: "Why should I register a .ONLINE domain?", a: ".ONLINE domains are an excellent choice for any business establishing a digital presence. The extension is self-descriptive — it immediately tells customers your business is available online. At $8/year, it's one of the most affordable domain extensions available, making it ideal for startups, small businesses, and entrepreneurs who want a professional domain without a premium price tag." },
  { q: "Is .ONLINE a credible domain extension for business?", a: "Yes. .ONLINE is a legitimate generic top-level domain (gTLD) registered by ICANN with over a million domains registered worldwide. Major businesses, content creators, and organizations use .ONLINE domains. Google and other search engines treat it with the same authority as .COM or .NET, giving your site full SEO credibility from day one." },
  { q: "Who is .ONLINE best suited for?", a: ".ONLINE works for virtually any business or individual: local businesses going digital, e-commerce stores, blogs and content sites, service providers, consultants, restaurants, event promoters, and non-profits. If you want a domain that clearly communicates your online presence at an affordable price, .ONLINE is an excellent fit regardless of your industry." },
  { q: "How does .ONLINE compare to .COM for SEO?", a: "Google treats .ONLINE as a generic TLD, which means it receives the same global SEO treatment as .COM — no geographic bias or domain extension penalties. Your SEO performance is determined by your content, backlinks, and site quality, not your TLD. Many sites on .ONLINE rank extremely well in competitive search results." },
  { q: "Can I use .ONLINE for an e-commerce store?", a: "Absolutely. .ONLINE works perfectly for e-commerce stores on Shopify, WooCommerce, BigCommerce, and all major platforms. In fact, 'yourstore.online' is a clear and memorable address that directly communicates your store is open for business online. If you're specifically focused on e-commerce, you might also consider .STORE or .SHOP, but .ONLINE is a great versatile choice." },
  { q: "What is the renewal price for .ONLINE domains?", a: ".ONLINE domains renew at $8/year through Hostao — the same affordable rate as registration. We provide renewal reminders and offer auto-renewal to ensure your domain never lapses. At $8/year, .ONLINE is one of the best value-for-money domain extensions available, making it easy to maintain your online presence long-term." },
];

export default function ONLINEDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.ONLINE Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Take your business online today. One of the most affordable domain extensions available. Clear, descriptive, and perfect for any business going digital — from just $8/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .ONLINE Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.ONLINE Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">One of the most affordable domains available</p>
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
                      <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-sm px-4 py-2">Register</a>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .ONLINE Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .ONLINE domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .ONLINE Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .ONLINE Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular" },
              { label: ".STORE Domain", href: "/store-domain", desc: "For e-commerce stores" },
              { label: ".SHOP Domain", href: "/shop-domain", desc: "For online retail" },
              { label: "All Domains", href: "/domain-registration", desc: "Browse all extensions" },
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
        "name": ".ONLINE Domain Registration",
        "description": "Affordable .ONLINE domain registration — one of the cheapest domain extensions for any business going digital",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "8.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
