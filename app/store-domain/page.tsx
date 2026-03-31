import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".STORE Domain Registration | E-Commerce Domains | Hostao",
  description: "Register your .STORE domain with Hostao. Your online store deserves a domain that says exactly what it is. Built for e-commerce, trusted by retailers worldwide — from just $12/year.",
  keywords: [".store domain", "store domain registration", "ecommerce domain", "register store domain", "buy .store domain", "online store domain", "retail domain"],
  alternates: { canonical: "https://hostao.com/store-domain" },
  openGraph: {
    title: ".STORE Domain Registration | Hostao",
    description: "Register your .STORE domain from $12/year. Purpose-built for e-commerce — the domain that tells customers you're open for business.",
    url: "https://hostao.com/store-domain",
  }
};

const TLDS = [
  { tld: ".store", price: "$12/yr", desc: "Your online store deserves a domain that says exactly what it is" },
];

const FEATURES = [
  { icon: "🛒", title: "E-Commerce Native", desc: ".STORE is purpose-built for online retail — customers know exactly what to expect before they even visit your site." },
  { icon: "🔍", title: "Keyword SEO Boost", desc: "Having 'store' in your domain gives you a natural advantage for shopping searches — Google recognizes the commercial intent." },
  { icon: "🏪", title: "Brand Clarity", desc: "yourbrand.store is clean, memorable, and immediately communicates your business model to every potential customer." },
  { icon: "⚡", title: "Shopify Ready", desc: "Works perfectly with Shopify, WooCommerce, BigCommerce, and all major e-commerce platforms — plug and play." },
  { icon: "🛡️", title: "Customer Trust", desc: "Shoppers trust .STORE domains because the extension matches their intent — they came to shop, and your domain confirms it." },
  { icon: "💰", title: "Affordable Launch", desc: "At $12/year, launch your online store without breaking the budget. Professional credibility at a fraction of premium .COM costs." },
];

const FAQS = [
  { q: "Why should I use .STORE for my e-commerce business?", a: ".STORE is the most intuitive domain extension for online retail. When customers see a .STORE domain, they immediately understand what to expect — an online store. This reduces friction, builds trust, and sets clear expectations before they even click. Combined with keyword relevance for shopping searches, .STORE gives e-commerce businesses a distinct advantage over generic domain extensions." },
  { q: "Will a .STORE domain hurt my SEO compared to .COM?", a: "No. Google treats .STORE as a generic TLD (gTLD) with full global SEO weight — the same as .COM or .NET. In fact, having 'store' as part of your domain can actually help your SEO for commercial search queries, as Google recognizes the transactional intent behind the extension. Your rankings depend on your content, backlinks, and technical SEO, not your TLD choice." },
  { q: "Which e-commerce platforms work with .STORE domains?", a: ".STORE domains work with every major e-commerce platform including Shopify, WooCommerce, BigCommerce, Magento, Squarespace Commerce, Wix eCommerce, and PrestaShop. Simply point your domain's DNS to your hosting platform and your store is live. There are no platform-specific restrictions with .STORE domains." },
  { q: "Is .STORE better than .SHOP for my online store?", a: "Both .STORE and .SHOP are excellent for e-commerce and serve similar purposes. .STORE tends to feel more established and permanent, while .SHOP has a slightly more informal, boutique feel. Many store owners choose based on name availability — if yourbrand.store is available but yourbrand.shop isn't (or vice versa), that often makes the decision. At $12/year, both are great value." },
  { q: "Can I use .STORE alongside my existing .COM domain?", a: "Absolutely. Many e-commerce businesses register both yourbrand.com and yourbrand.store. You can redirect .STORE to your main .COM, or use it as your primary domain and redirect .COM to it. Having both protects your brand and ensures customers who type either extension land on your store." },
  { q: "What is the renewal price for .STORE domains?", a: ".STORE domains renew at $12/year through Hostao — the same rate as registration. We include free DNS management, WHOIS privacy, and 24/7 support in every registration. Auto-renewal is available to ensure your store's domain never accidentally expires. At $12/year, protecting your e-commerce brand is one of the best investments you can make." },
];

export default function STOREDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">E-COMMERCE DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.STORE Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Your online store deserves a domain that says exactly what it is. Built for e-commerce, trusted by retailers worldwide — from just $12/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .STORE Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.STORE Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Built for online stores and e-commerce</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .STORE Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .STORE domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .STORE Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .STORE Domains</h2>
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
              { label: ".SHOP Domain", href: "/shop-domain", desc: "For online retail" },
              { label: ".ONLINE Domain", href: "/online-domain", desc: "Affordable domains" },
              { label: ".COM Domain", href: "/com-domain", desc: "World's most popular" },
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
        "name": ".STORE Domain Registration",
        "description": "Official .STORE domain registration — purpose-built for online retail and e-commerce businesses",
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
