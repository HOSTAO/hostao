import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".NET Domain Registration | Register .NET Domains from $15/yr | Hostao",
  description: "Register your .NET domain with Hostao. The internet's original networking domain trusted since 1985. Perfect for tech companies, ISPs, and digital infrastructure. Starting from $15/year.",
  keywords: [".net domain", "net domain registration", "register net domain", "buy .net domain", "net domain hosting"],
  alternates: { canonical: "https://hostao.com/net-domain" },
  openGraph: {
    title: ".NET Domain Registration | Hostao",
    description: "Register your .NET domain from $15/year. The internet's original networking domain, trusted since 1985.",
    url: "https://hostao.com/net-domain",
  }
};

const TLDS = [
  { tld: ".net", price: "$15/yr", desc: "The internet's original networking domain — perfect for tech and infrastructure" },
];

const FEATURES = [
  { icon: "⚡", title: "Tech Industry Standard", desc: ".NET has been the go-to domain for technology and networking companies since 1985." },
  { icon: "🔍", title: "Strong SEO Performance", desc: ".NET domains perform nearly as well as .COM in global search rankings." },
  { icon: "💻", title: "Developer Favorite", desc: "Popular with ISPs, SaaS companies, and technology infrastructure providers." },
  { icon: "🛡️", title: "Brand Alternative", desc: "When .COM is taken, .NET is the most credible alternative domain." },
  { icon: "📧", title: "Email Professional", desc: "name@yourbrand.net is recognized as a professional email format worldwide." },
  { icon: "🌐", title: "Easy to Remember", desc: "Short, familiar, and universally recognized across all markets." },
];

const FAQS = [
  { q: "Who should use a .NET domain?", a: ".NET is ideal for technology companies, internet service providers, SaaS platforms, networking businesses, and any organization with a digital or tech focus. It's especially powerful when the .COM version of your desired name is already taken." },
  { q: "How does .NET compare to .COM?", a: ".COM is the world's most recognized domain, but .NET is universally understood as its closest counterpart. For technology companies specifically, .NET often carries equal or greater credibility, signaling a tech-forward identity." },
  { q: "Does a .NET domain affect SEO?", a: "Yes, positively. Google and other search engines treat .NET as a top-level domain with full SEO weight. Studies show .NET domains rank competitively with .COM domains for most search queries, particularly in tech-related niches." },
  { q: "How do I register a .NET domain with Hostao?", a: "Simply click 'Register' on this page, search for your preferred .NET domain name, and complete the registration in minutes. Your domain is activated instantly and you'll receive DNS management access immediately." },
  { q: "Can I transfer my existing .NET domain to Hostao?", a: "Yes. Hostao supports full .NET domain transfers. The process is straightforward — unlock your domain at your current registrar, get the transfer authorization code, and initiate the transfer through your Hostao account. Your website stays online throughout." },
  { q: "What is the renewal price for .NET domains?", a: "Renewal pricing for .NET domains matches the registration price of $15/year. We send renewal reminders well in advance so your domain never lapses unexpectedly. Auto-renewal is available for added peace of mind." },
];

export default function NETDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.NET Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The internet's original networking domain. Perfect for tech companies, ISPs, and digital infrastructure. Trusted since 1985 — from just $15/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .NET Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.NET Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">The classic networking domain extension</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .NET Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .NET domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .NET Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .NET Domains</h2>
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
              { label: ".COM Domain", href: "/com-domain", desc: "The world's most popular domain" },
              { label: ".ORG Domain", href: "/org-domain", desc: "For organizations and nonprofits" },
              { label: ".TECH Domain", href: "/tech-domain", desc: "For technology companies" },
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
        "name": ".NET Domain Registration",
        "description": "Official .NET domain registration for tech companies and businesses",
        "brand": { "@type": "Brand", "name": "Hostao" },
        "offers": { "@type": "Offer", "price": "15.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
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
