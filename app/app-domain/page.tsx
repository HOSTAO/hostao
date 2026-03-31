import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: ".APP Domain Registration | Google-Backed HTTPS Domain | Hostao",
  description: "Register your .APP domain with Hostao. Google-owned, HTTPS-only, trusted by developers worldwide. Built-in security, instant credibility — starting from $20/year.",
  keywords: [".app domain", "app domain registration", "google app domain", "register app domain", "buy .app domain", "https domain", "developer domain"],
  alternates: { canonical: "https://hostao.com/app-domain" },
  openGraph: {
    title: ".APP Domain Registration | Hostao",
    description: "Register your .APP domain from $20/year. Google-owned, HTTPS-only — the official domain for applications.",
    url: "https://hostao.com/app-domain",
  }
};

const TLDS = [
  { tld: ".app", price: "$20/yr", desc: "Google-owned, HTTPS-only domain — the official domain for applications" },
];

const FEATURES = [
  { icon: "🔒", title: "Google-Backed", desc: ".APP is owned and operated by Google — the most trusted name in tech. Instant authority and credibility for your application." },
  { icon: "🛡️", title: "HTTPS Built-In", desc: ".APP requires HTTPS by default — your site is secure from day one, boosting SEO and protecting your users automatically." },
  { icon: "💻", title: "Developer Trusted", desc: "The go-to domain for mobile apps, web apps, and SaaS products worldwide. Signal that you're a professional developer." },
  { icon: "📱", title: "App Store Ready", desc: "Perfect pairing for your iOS or Android app — customers find your app's website instantly with an obvious, memorable domain." },
  { icon: "🔍", title: "SEO Security Boost", desc: "Google rewards HTTPS sites with higher rankings — .APP gives you this automatically, baked into the extension itself." },
  { icon: "⚡", title: "Great Availability", desc: "Premium names still available in .APP that are long gone in .COM — grab your brand name before someone else does." },
];

const FAQS = [
  { q: "What makes .APP domains special compared to other extensions?", a: ".APP domains stand out for two key reasons: they are owned and operated by Google (the world's most trusted technology company), and they enforce HTTPS by default. This means every .APP domain is automatically secured with SSL encryption. No other major TLD combines Google's backing with mandatory HTTPS, making .APP uniquely authoritative and secure for application developers." },
  { q: "Why does .APP require HTTPS and why does that matter?", a: ".APP is on the HTTPS Strict Transport Security (HSTS) preload list, which means browsers automatically redirect all traffic to the secure HTTPS version of your site. This matters because: 1) Google gives a ranking boost to HTTPS sites, 2) Modern browsers show security warnings on non-HTTPS sites, and 3) User trust increases significantly when they see the padlock icon. With .APP, you get all of this automatically without extra configuration." },
  { q: "Who should register a .APP domain?", a: ".APP domains are ideal for mobile app developers, SaaS companies, web application builders, and any technology product that users interact with directly. If you're building an iOS app, Android app, web app, or software product, .APP immediately communicates your product's purpose. It's also excellent for developer portfolios, app landing pages, and product launches." },
  { q: "Does owning a .APP domain improve my SEO?", a: "Yes, in multiple ways. First, .APP enforces HTTPS which Google uses as a ranking signal — you get this benefit automatically. Second, Google treats .APP as a gTLD (generic TLD), so it receives full global SEO treatment with no geographic restrictions. Third, having 'app' in your domain can help with keyword relevance for searches related to your application category." },
  { q: "Is it safe to trust Google as the registry operator?", a: "Absolutely. Google operates the .APP registry through its Google Registry division, which also manages .dev, .page, and other TLDs. Google has the infrastructure, reliability, and long-term commitment to ensure .APP domains remain operational and well-managed. Being backed by Google gives .APP domains a level of registry stability and trustworthiness unmatched by most other TLDs." },
  { q: "What does .APP domain registration cost with Hostao?", a: ".APP domain registration is $20/year with Hostao. This price includes free DNS management, WHOIS privacy protection, and 24/7 support. Renewal is at the same rate, and we send reminders before your domain expires. Compared to the aftermarket price for equivalent .COM domains, $20/year for a .APP domain is exceptional value for the credibility and security it provides." },
];

export default function APPDomainPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">APP DOMAIN REGISTRATION</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Register Your <span className="text-[#0071FB]">.APP Domain</span> Today
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            The official domain for apps. Google-owned, HTTPS-only, trusted by developers worldwide. Built-in security, instant credibility — from just $20/year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&domain=register" className="btn-hostao-primary text-lg font-bold px-10 py-4">Register .APP Domain</a>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-3">.APP Domain Pricing</h2>
          <p className="text-center text-[#334155] mb-10">Google-backed, HTTPS-enforced domain</p>
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
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Search Your .APP Domain</h2>
          <p className="text-[#334155] mb-8">Check if your preferred .APP domain name is available</p>
          <DomainSearch />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Why Register Your .APP Domain with Hostao?</h2>
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
          <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-10">Frequently Asked Questions about .APP Domains</h2>
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
              { label: ".IO Domain", href: "/io-domain", desc: "The startup favorite" },
              { label: ".TECH Domain", href: "/tech-domain", desc: "For technology companies" },
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
        "name": ".APP Domain Registration",
        "description": "Official .APP domain registration — Google-owned, HTTPS-only domain for applications and developers",
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
