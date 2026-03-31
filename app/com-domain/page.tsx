import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".COM Domain Registration | Register .com Domains from $15/yr | Hostao",
  description: "Register your .COM domain with Hostao. The world's most trusted domain extension with 160M+ registered domains. Instant activation, free DNS management, and 24/7 support. From $15/year.",
  keywords: [".com domain", "com domain registration", "register com domain", "buy com domain", "cheap com domain"],
  alternates: { canonical: "https://hostao.com/com-domain" },
  openGraph: {
    title: ".COM Domain Registration | Hostao",
    description: "Register your .COM domain — the world's most trusted extension. Instant activation, free DNS management, expert support.",
    url: "https://hostao.com/com-domain",
  }
};

const TLDS = [
  { tld: ".com", price: "$15/yr", desc: "The world's most recognized domain extension — universal trust" },
];

const FEATURES = [
  { icon: "🌍", title: "Global Trust", desc: "160M+ domains registered — .COM is the world's most trusted extension. Every business, brand, and customer instantly recognizes and trusts a .COM domain." },
  { icon: "📈", title: "Best SEO Performance", desc: ".COM domains consistently rank highest in global search results. Search engines and users alike trust .COM more than any other extension, giving you a natural SEO edge." },
  { icon: "💡", title: "Universal Recognition", desc: "Everyone knows .COM — it's the default domain people type when looking for a business online. A .COM domain means customers find you first, not a competitor." },
  { icon: "🛡️", title: "Brand Protection", desc: "Owning your .COM protects your brand from competitors and domain squatters. It's the first domain you should secure when building your business identity online." },
  { icon: "📧", title: "Email Credibility", desc: "name@yourbrand.com is the most professional email format globally. A .COM email address instantly signals legitimacy and professionalism to customers and partners." },
  { icon: "💎", title: "Investment Value", desc: ".COM domains hold and increase in value over time — a genuine digital asset. Premium .COM domains regularly sell for thousands to millions of dollars in secondary markets." },
];

const FAQS = [
  { q: "Why should I register a .COM domain?", a: ".COM is the world's most recognized and trusted domain extension with over 160 million registrations globally. It gives your business instant credibility, maximum SEO potential, and universal recognition. When customers think of a website, they think .COM — it's the gold standard of domain extensions." },
  { q: "How much does a .COM domain cost at Hostao?", a: ".COM domains are available at Hostao for $15/year. This includes free DNS management, WHOIS privacy protection, and access to your full domain control panel. Renewal pricing is the same at $15/year with no surprise fees." },
  { q: "How quickly is my .COM domain activated after registration?", a: "Your .COM domain is activated instantly upon successful registration. You can start pointing it to your website or setting up email within minutes. Hostao's infrastructure ensures fast DNS propagation worldwide." },
  { q: "Does a .COM domain help with Google SEO?", a: "Yes. While Google officially states TLD does not affect rankings, studies consistently show .COM domains rank higher on average. This is partly due to user trust signals — people click .COM results more often, which improves engagement metrics that do influence rankings." },
  { q: "What happens if my preferred .COM name is already taken?", a: "If your exact .COM name is taken, Hostao's domain search will suggest available alternatives including variations of your name or similar options. You can also consider related extensions like .net, .org, or country-code domains as alternatives or brand protection registrations." },
  { q: "Can I transfer my .COM domain to Hostao from another registrar?", a: "Yes. Transferring a .COM domain to Hostao is straightforward. Unlock your domain at your current registrar, get the EPP/authorization code, and initiate the transfer at Hostao. .COM transfers typically complete within 5–7 days and your website stays online throughout the process." },
];

export default function COMDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">GLOBAL DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.COM Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The world&apos;s most trusted domain extension. With 160M+ registered .COM domains, it&apos;s the gold standard for every business. Instant recognition, maximum credibility, best SEO — from just $15/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .COM Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.COM Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The world&apos;s most popular domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .COM Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .COM Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .COM Domains</h2>
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
              { label: ".NET Domain", href: "/net-domain", desc: "Register your .NET domain" },
              { label: ".ORG Domain", href: "/org-domain", desc: "Register your .ORG domain" },
              { label: ".IO Domain", href: "/io-domain", desc: "Register your .IO domain" },
              { label: "All Domains", href: "/domain-registration", desc: "Browse all domain extensions" },
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
        "name": ".COM Domain Registration",
        "description": "Register a .COM domain — the world's most trusted and recognized domain extension",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
      })}} />
    </div>
  );
}
