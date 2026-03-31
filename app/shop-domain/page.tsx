import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".SHOP Domain Registration | Online Retail Domains | Hostao",
  description: "Register your .SHOP domain with Hostao. Clear, memorable, and built for online retail. The domain extension that tells customers you're ready to sell — from just $12/year.",
  keywords: [".shop domain", "shop domain registration", "retail domain", "register shop domain", "buy .shop domain", "online retail domain", "ecommerce domain"],
  alternates: { canonical: "https://hostao.com/shop-domain" },
  openGraph: {
    title: ".SHOP Domain Registration | Hostao",
    description: "Register your .SHOP domain from $12/year. Clear, memorable, and built for online retail — open your digital storefront today.",
    url: "https://hostao.com/shop-domain",
  }
};

const TLDS = [
  { tld: ".shop", price: "$12/yr", desc: "Open your digital storefront — clear, memorable, built for online retail" },
];

const FEATURES = [
  { icon: "🏪", title: "Retail Identity", desc: ".SHOP tells customers you're a store — no ambiguity, no confusion, just shopping. Instant clarity for every visitor." },
  { icon: "🌐", title: "Global Commerce", desc: ".SHOP is understood worldwide — 'shop' is one of the most recognized English words globally, crossing language and cultural barriers." },
  { icon: "🛒", title: "Marketplace Ready", desc: "Perfect for independent shops, boutiques, artisan sellers, and direct-to-consumer brands going online." },
  { icon: "🔍", title: "Shopping SEO", desc: "Having 'shop' in your domain gives natural keyword advantages for retail searches — Google recognizes the commercial intent." },
  { icon: "⚡", title: "Platform Compatible", desc: "Works seamlessly with Shopify, WooCommerce, BigCommerce, and all e-commerce tools — no configuration headaches." },
  { icon: "💰", title: "Budget Friendly", desc: "Premium .SHOP domains at just $12/year — a fraction of equivalent .COM aftermarket prices for the same brand name." },
];

const FAQS = [
  { q: "Why should I choose .SHOP for my online retail business?", a: ".SHOP is purpose-designed for online retail and immediately communicates your business model to every potential customer. When someone sees a .SHOP domain, they know you sell things — no confusion, no extra explanation needed. This clarity reduces friction in the customer journey, improves trust, and can increase click-through rates from search results and social media." },
  { q: "Is .SHOP recognized globally for e-commerce?", a: "Yes. 'Shop' is one of the most universally understood English words, used in over 150 countries in everyday commerce. .SHOP has become widely adopted globally for online retail businesses, with hundreds of thousands of registrations worldwide. Major retailers, boutiques, and independent sellers across Asia, Europe, and the Americas use .SHOP as their primary domain." },
  { q: "How does .SHOP compare to .STORE for my business?", a: "Both .SHOP and .STORE are excellent for e-commerce, and the choice often comes down to brand feel and name availability. .SHOP tends to feel more boutique and approachable, ideal for independent retailers, artisan sellers, and brand-focused stores. .STORE feels slightly more enterprise and catalog-focused. Try both names and see which is available and resonates with your brand identity." },
  { q: "Which platforms can I use with a .SHOP domain?", a: ".SHOP domains work with every major e-commerce platform: Shopify, WooCommerce, BigCommerce, Squarespace, Wix, PrestaShop, Magento, and OpenCart. Simply update your domain's DNS records to point to your hosting provider or use our one-click domain connection for popular platforms. There are no restrictions on which platforms can use .SHOP domains." },
  { q: "Does a .SHOP domain help with Google Shopping rankings?", a: "Google treats .SHOP as a generic TLD (gTLD), so it receives the same global SEO weight as .COM. The keyword 'shop' in your domain does carry some semantic relevance for retail searches, which can be a minor positive signal. Your overall rankings will be determined by your product content, site structure, reviews, and backlinks — but .SHOP certainly doesn't hold you back." },
  { q: "What is the annual cost of a .SHOP domain with Hostao?", a: ".SHOP domains are registered and renewed at $12/year with Hostao. Every .SHOP registration includes free DNS management, WHOIS privacy protection, and access to our 24/7 customer support team. We offer auto-renewal to protect your storefront domain from expiring. At $12/year, it's one of the best investments a retail business can make for its online identity." },
];

export default function SHOPDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">RETAIL DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.SHOP Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Open your digital storefront with .SHOP. Clear, memorable, and built for online retail. The domain extension that tells customers you're ready to sell — from just $12/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .SHOP Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.SHOP Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The domain for online retail</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .SHOP Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .SHOP domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .SHOP Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .SHOP Domains</h2>
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
              { label: ".STORE Domain", href: "/store-domain", desc: "For e-commerce stores" },
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
        "name": ".SHOP Domain Registration",
        "description": "Official .SHOP domain registration — clear, memorable domains built for online retail and e-commerce",
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
