import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "Shared Hosting Plans Starting at $3/mo | NVMe SSD & Free SSL | Hostao",
  description: "Get reliable shared hosting from just $3/month. Includes NVMe SSD storage, free SSL certificate, cPanel, Softaculous, 99.9% uptime, and 24/7 support. Perfect for small businesses and personal websites.",
  keywords: ["shared hosting", "affordable shared hosting", "cPanel shared hosting", "NVMe shared hosting", "cheap web hosting"],
  alternates: { canonical: "https://hostao.com/shared-hosting" },
  openGraph: {
    title: "Shared Hosting Plans Starting at $3/mo | Hostao",
    description: "Reliable shared hosting with NVMe SSD, free SSL, cPanel, and 24/7 support from just $3/month.",
    url: "https://hostao.com/shared-hosting",
    images: [{ url: "/images/shared-hosting-og.png" }],
  }
};

const HOSTING_PLANS = [
  {
    name: "Basic Plan",
    tagline: "Little teams and startups",
    price: "$3",
    period: "Per Month*",
    features: [
      "1GB SSD Disk Space",
      "100GB/m Bandwidth", 
      "10 Email Accounts",
      "5 Subdomains",
      "1 Domains",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee",
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster"
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=9"
  },
  {
    name: "Professional Plan",
    tagline: "Big teams and members",
    price: "$4.50",
    period: "Per Month*",
    features: [
      "5GB SSD Disk Space",
      "150GB/m Bandwidth",
      "50 Email Accounts", 
      "10 Subdomains",
      "5 Domains",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee",
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster"
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=10"
  },
  {
    name: "Business Plan",
    tagline: "Large companies", 
    price: "$6",
    period: "Per Month*",
    features: [
      "10GB SSD Disk Space",
      "200GB/m Bandwidth",
      "100 Email Accounts",
      "20 Subdomains", 
      "10 Domains",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee", 
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster"
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=11"
  }
];

const FEATURES = [
  { icon: "⚡", title: "Lightning Fast Performance", desc: "NVMe SSD storage delivers 2X faster loading speeds for your websites." },
  { icon: "🔒", title: "Free SSL Certificates", desc: "Lifetime free SSL certificates for all your domains. SEO boost included." },
  { icon: "📧", title: "Professional Email", desc: "Create unlimited professional email addresses with your domain name." },
  { icon: "🛡️", title: "Advanced Security", desc: "DDoS protection, firewall, and malware scanning keeps your site secure." },
  { icon: "⚙️", title: "cPanel Control Panel", desc: "Industry-standard control panel for easy website and hosting management." },
  { icon: "📦", title: "Softaculous Auto-Installer", desc: "One-click installation of WordPress, Joomla, Drupal and 400+ applications." }
];

export default function SharedHostingPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#0c1434]">Affordable Shared Hosting Plans</h1>
          <p className="text-[#1f2b4d] text-lg mb-4">Affordable Shared Hosting Starting at Just $3!</p>
          <p className="text-[#1f2b4d] max-w-2xl mx-auto">
            Our shared hosting starts at $3, offering a cost-effective and reliable solution for individuals and small businesses, 
            with 24/7 support and various features included.
          </p>
        </div>
      </section>

      {/* ── PRICING PLANS ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Choose Your Shared Hosting Plan</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {HOSTING_PLANS.map((plan, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{plan.tagline}</p>
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-[#0056A7] mb-1">{plan.price}</div>
                <div className="text-gray-500 text-sm">{plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={plan.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-[#0056A7] text-white py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors mb-3"
              >
                Order Now
              </a>
              <a href="#discount" className="text-[#0056A7] text-xs hover:underline">yearly payment discounts</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORLD CLASS WEB HOSTING ─────────────────────────── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">World Class Web Hosting</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hostao offers ecommerce ready shared hosting in 25 data centers worldwide with cPanel, Web Site Builder, Corporate Email, 
            Auto Script Installer, Cloudflare, hacker Protection, and Cloud Linux. Our servers are optimized for CMS platforms like WordPress, Joomla, and Magento.
          </p>
          <Link 
            href="/cpanel-web-hosting" 
            className="inline-block bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors"
          >
            Choose Location to Get Started
          </Link>
        </div>
      </section>

      {/* ── DOMAIN SEARCH ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#171734]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#0056A7] text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Domain Registration</div>
          <h2 className="text-3xl font-bold text-white mb-3">Find Your New Domain</h2>
          <p className="text-white/60 mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-white/50 text-xs mb-6">Reserve your domain today before someone takes it.</p>
          <DomainSearch />
          <div className="mt-6">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png"
              alt="Domain Extensions"
              width={400}
              height={60}
              className="mx-auto h-auto max-w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions about Shared Hosting</h2>
          <FaqAccordion items={[
              { q: "What is shared hosting?", a: "Shared hosting is a type of web hosting where multiple websites are hosted on a single server, sharing resources like CPU, RAM, and storage space. It's the most affordable hosting option, perfect for small to medium-sized websites." },
              { q: "Is shared hosting suitable for my business website?", a: "Yes, shared hosting is perfect for small businesses, blogs, portfolios, and startup websites. Our plans include everything you need to get online, including cPanel, email accounts, and free SSL certificates." },
              { q: "Do you provide free website migration?", a: "Yes, we offer free website migration from your current hosting provider. Our technical team will handle the entire process to ensure zero downtime during the transfer." },
              { q: "What's included in your shared hosting plans?", a: "All our shared hosting plans include NVMe SSD storage, free SSL certificates, cPanel control panel, Softaculous auto-installer, email accounts, 24/7 support, and 99.9% uptime guarantee." }
            ]} />
        </div>
      </section>

      {/* ── YEARLY PAYMENT DISCOUNTS ───────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]" id="discount">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yearly Payment Discounts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: "Basic Plan", monthly: "$3", yearly: "$30", discount: "17% OFF" },
              { plan: "Professional Plan", monthly: "$4.50", yearly: "$45", discount: "17% OFF" },
              { plan: "Business Plan", monthly: "$6", yearly: "$60", discount: "17% OFF" }
            ].map((discount, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{discount.plan}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="line-through">{discount.monthly}/mo × 12 = ${parseInt(discount.monthly.slice(1)) * 12}</span>
                </div>
                <div className="text-3xl font-bold text-[#0056A7] mb-2">{discount.yearly}/year</div>
                <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {discount.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0056A7] mb-3">WHAT WE PROVIDE</h2>
            <h3 className="text-3xl font-bold text-gray-900">We Provide Secure & Powerful Features</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* ── RELATED HOSTING ────────────────────────────────── */}
      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">Need More Power?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "WordPress Hosting", href: "/wordpress-hosting", desc: "Optimized servers for WordPress sites" },
              { label: "Reseller Hosting", href: "/reseller-hosting", desc: "Start your own hosting business" },
              { label: "VPS Hosting", href: "/vps", desc: "Dedicated resources for growing sites" },
            ].map(link => (
              <Link key={link.href} href={link.href} className="border border-gray-200 rounded-xl p-5 hover:border-[#046bd2] hover:shadow-md transition-all group">
                <h3 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] transition-colors">{link.label}</h3>
                <p className="text-sm text-[#334155] mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Shared Web Hosting",
            "description": "Affordable shared hosting with NVMe SSD, free SSL, cPanel, and 99.9% uptime",
            "brand": { "@type": "Brand", "name": "Hostao" },
            "offers": [
              { "@type": "Offer", "name": "Basic Plan", "price": "3.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "Professional Plan", "price": "4.50", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
              { "@type": "Offer", "name": "Business Plan", "price": "6.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
            ]
          })
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "Shared Hosting", "item": "https://hostao.com/shared-hosting" }
        ]
      }) }} />

    </div>
  );
}