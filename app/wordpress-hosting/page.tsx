import Link from "next/link";
import type { Metadata } from "next";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "WordPress Hosting | Optimized Servers & One-Click Install | Hostao",
  description: "Launch your WordPress website with Hostao's optimized WordPress hosting. One-click install, NVMe SSD storage, free SSL, daily backups, and 24/7 expert WordPress support. Plans from $3/month.",
  keywords: ["WordPress hosting", "managed WordPress hosting", "cheap WordPress hosting", "WordPress one-click install", "WordPress NVMe hosting"],
  alternates: { canonical: "https://hostao.com/wordpress-hosting" },
  openGraph: {
    title: "WordPress Hosting | Optimized Servers & One-Click Install | Hostao",
    description: "Optimized WordPress hosting with one-click install, NVMe SSD, free SSL, and 24/7 support.",
    url: "https://hostao.com/wordpress-hosting",
    images: [{ url: "/images/wordpress-hosting-og.png" }],
  }
};

const WP_PLANS = [
  {
    name: "WordPress Starter",
    price: "$3",
    period: "Per Month*",
    popular: false,
    features: [
      "1 WordPress Website",
      "1GB NVMe SSD Storage",
      "100GB/month Bandwidth",
      "Free SSL Certificate",
      "One-Click WordPress Install",
      "10 Email Accounts",
      "99.9% Uptime Guarantee",
      "24/7 Expert Support",
      "Daily Backups",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=9",
  },
  {
    name: "WordPress Professional",
    price: "$4.50",
    period: "Per Month*",
    popular: true,
    features: [
      "5 WordPress Websites",
      "5GB NVMe SSD Storage",
      "150GB/month Bandwidth",
      "Free SSL Certificate",
      "One-Click WordPress Install",
      "50 Email Accounts",
      "99.9% Uptime Guarantee",
      "24/7 Expert Support",
      "Daily Backups",
      "Softaculous Auto-Installer",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=10",
  },
  {
    name: "WordPress Business",
    price: "$6",
    period: "Per Month*",
    popular: false,
    features: [
      "10 WordPress Websites",
      "10GB NVMe SSD Storage",
      "200GB/month Bandwidth",
      "Free SSL Certificate",
      "One-Click WordPress Install",
      "100 Email Accounts",
      "99.9% Uptime Guarantee",
      "24/7 Expert Support",
      "Daily Backups",
      "Softaculous Auto-Installer",
      "Free Website Migration",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=11",
  },
];

const WP_FEATURES = [
  { icon: "\u26A1", title: "NVMe SSD Performance", desc: "Our NVMe SSD servers load WordPress sites up to 2X faster than standard hosting. Better speed means better SEO and more conversions." },
  { icon: "\uD83D\uDD27", title: "One-Click WordPress Install", desc: "Get your WordPress site live in minutes with Softaculous one-click installer. No technical knowledge required." },
  { icon: "\uD83D\uDD12", title: "Free SSL Certificate", desc: "Every WordPress hosting plan includes a lifetime free SSL certificate. Secure your site and boost your Google ranking." },
  { icon: "\uD83D\uDCBE", title: "Daily Automated Backups", desc: "Your WordPress site is automatically backed up every day. Restore your site with a single click if anything goes wrong." },
  { icon: "\uD83D\uDEE1\uFE0F", title: "WordPress Security", desc: "Built-in malware scanning, DDoS protection, and firewall keep your WordPress site safe from hackers and threats." },
  { icon: "\uD83D\uDCE7", title: "Professional Email", desc: "Create professional email addresses that match your domain. All plans include business email accounts." },
];

const WP_FAQS = [
  { q: "Is Hostao hosting optimized for WordPress?", a: "Yes. Hostao's servers use NVMe SSD storage, LiteSpeed web server, and advanced caching to deliver optimal WordPress performance. Your site will load faster and rank higher in Google." },
  { q: "Can I install WordPress with one click?", a: "Absolutely. All Hostao WordPress hosting plans include Softaculous, which lets you install WordPress in under 2 minutes with a single click \u2014 no technical skills needed." },
  { q: "Do I get a free SSL with WordPress hosting?", a: "Yes. Every plan includes a free lifetime SSL certificate powered by Let's Encrypt. SSL is essential for WordPress security and Google ranking." },
  { q: "Can I migrate my existing WordPress site to Hostao?", a: "Yes. We offer free website migration for all plans. Our team will move your WordPress site, database, and emails without any downtime." },
  { q: "What WordPress plugins are supported?", a: "All WordPress plugins are supported on Hostao hosting. Our servers meet all standard WordPress requirements including PHP 8.x, MySQL 8.x, and mod_rewrite." },
  { q: "Is WordPress hosting different from regular shared hosting?", a: "WordPress hosting is shared hosting optimized specifically for WordPress. At Hostao, all shared hosting plans are fully compatible with WordPress and include one-click installation." },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#046bd2] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function WordPressHostingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#046bd2] text-sm uppercase tracking-widest font-semibold mb-3">WORDPRESS HOSTING</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            WordPress Hosting <span className="text-[#0071FB]">Built for Speed</span>
          </h1>
          <p className="text-[#334155] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Launch your WordPress website on optimized NVMe SSD servers. One-click install, free SSL, daily backups, and 24/7 expert support — starting at just $3/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="#plans" className="btn-hostao-primary text-lg font-bold px-10 py-4">View WordPress Plans</a>
            <Link href="/shared-hosting" className="btn-hostao-outline text-lg px-10 py-4">Compare All Hosting</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#334155]">
            {["Free SSL Certificate", "One-Click WordPress Install", "99.9% Uptime", "24/7 Support", "Free Migration"].map(f => (
              <span key={f} className="font-medium">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#334155] text-sm uppercase tracking-widest font-medium mb-2">WORDPRESS HOSTING PLANS</p>
            <h2 className="text-4xl font-bold text-[#1e293b]">Choose Your WordPress Hosting Plan</h2>
            <p className="text-[#334155] mt-3 text-lg">All plans include one-click WordPress install, free SSL, and 24/7 support</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {WP_PLANS.map(plan => (
              <div key={plan.name} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? "border-2 border-[#046bd2] relative" : "border border-gray-200"}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#046bd2] text-white text-center py-2 text-sm font-semibold">Most Popular</div>
                )}
                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4 text-[#1e293b]">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#046bd2]">{plan.price}</span>
                    <span className="text-[#334155] ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map(feat => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-[#334155]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.href} className="btn-hostao-primary w-full text-center block">Get Started</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#334155] mt-6">*Prices shown per month. All plans include 30-day money-back guarantee.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#334155] text-sm uppercase tracking-widest font-medium mb-2">WHY CHOOSE HOSTAO FOR WORDPRESS</p>
            <h2 className="text-4xl font-bold text-[#1e293b]">Everything Your WordPress Site Needs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {WP_FEATURES.map(feat => (
              <div key={feat.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#1e293b]">{feat.title}</h3>
                <p className="text-[#334155] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">Explore More Hosting Options</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Shared Hosting", href: "/shared-hosting", desc: "Perfect for personal websites & startups" },
              { label: "Reseller Hosting", href: "/reseller-hosting", desc: "Start your own hosting business" },
              { label: "VPS Hosting", href: "/vps", desc: "Dedicated resources & full control" },
              { label: "Free WHMCS", href: "/free-whmcs", desc: "Free billing software for resellers" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="border border-gray-200 rounded-xl p-5 hover:border-[#046bd2] hover:shadow-md transition-all group">
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] transition-colors">{link.label}</h3>
                <p className="text-sm text-[#334155] mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#1e293b]">Frequently Asked Questions about WordPress Hosting</h2>
          <div className="space-y-4">
            {WP_FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1e293b] mb-2">{faq.q}</h3>
                <p className="text-[#334155]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAIN SEARCH */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Find Your Domain for WordPress</h2>
          <p className="text-[#334155] mb-8">Search for your perfect domain name and get your WordPress site started today.</p>
          <DomainSearch />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-10 px-4" style={{ background: "#F0F5FA" }}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      <TrustBar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "WordPress Hosting",
            "description": "Optimized WordPress hosting with NVMe SSD, one-click install, free SSL, and 24/7 support",
            "brand": { "@type": "Brand", "name": "Hostao" },
            "offers": [
              { "@type": "Offer", "name": "WordPress Starter", "price": "3.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "WordPress Professional", "price": "4.50", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "WordPress Business", "price": "6.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
            ]
          })
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "WordPress Hosting", "item": "https://hostao.com/wordpress-hosting" }
        ]
      }) }} />
    </div>
  );
}
