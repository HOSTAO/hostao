import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Japan Reseller Hosting Plans with cPanel & WHM | Hostao",
  description: "Our Tokyo reseller hosting plans offer tools to run your web hosting business, plus 24/7 support from our Japan data center. Includes WHMCS, domain/SSL reseller accounts, CloudFlare, and expert support."
};

const JAPAN_RESELLER_PLANS = [
  {
    name: "JAPAN Starter",
    discount: "SAVE 40% OFF",
    price: "$35",
    period: "Per Month",
    features: [
      "25GB NVMe SSD Space",
      "1TB Premium Bandwidth",
      "20 cPanel Accounts",
      "All Reseller Features Included",
      "MyCompanyWeb",
      "MailChannels Cloud Email",
      "40% Reselling Discount",
      "WHMCS License",
      "Softaculous Installer",
      "100% White Labeled",
      "Free Merchant Account",
      "LetsEncrypt SSL's",
      "SSL Reseller Account",
      "Domain Reseller",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "LiteSpeed Cache",
      "CloudLinux OS",
      "CageFS Hack Protection",
      "Free Website Migration",
      "Attracta SEO Tools"
    ],
    href: "https://my.hostao.com/store/reseller/starter-plan"
  },
  {
    name: "JAPAN Business",
    discount: "SAVE 40% OFF",
    price: "$45",
    period: "Per Month",
    features: [
      "50GB NVMe SSD Space",
      "5TB Premium Bandwidth",
      "40 cPanel Accounts",
      "All Reseller Features Included",
      "MyCompanyWeb",
      "MailChannels Cloud Email",
      "40% Reselling Discount",
      "WHMCS License",
      "Softaculous Installer",
      "100% White Labeled",
      "Free Merchant Account",
      "LetsEncrypt SSL's",
      "SSL Reseller Account",
      "Domain Reseller",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "LiteSpeed Cache",
      "CloudLinux OS",
      "CageFS Hack Protection",
      "Free Website Migration",
      "Attracta SEO Tools"
    ],
    href: "https://my.hostao.com/store/reseller/business-plan"
  },
  {
    name: "JAPAN VIP",
    discount: "SAVE 40% OFF",
    price: "$55",
    period: "Per Month",
    features: [
      "500GB NVMe SSD Space",
      "10TB Premium Bandwidth",
      "80 cPanel Accounts",
      "All Reseller Features Included",
      "MyCompanyWeb",
      "MailChannels Cloud Email",
      "40% Reselling Discount",
      "WHMCS License",
      "Softaculous Installer",
      "100% White Labeled",
      "Free Merchant Account",
      "LetsEncrypt SSL's",
      "SSL Reseller Account",
      "Domain Reseller",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "LiteSpeed Cache",
      "CloudLinux OS",
      "CageFS Hack Protection",
      "Free Website Migration",
      "Attracta SEO Tools"
    ],
    href: "https://my.hostao.com/store/reseller/vip-plan"
  }
];

export default function JapanResellerHostingPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">Japan Reseller Hosting</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Establish yourself as a hosting provider with our powerful Reseller hosting in Japan. 
            Our Tokyo reseller hosting plans offer tools to run your web hosting business, plus 24/7 support 
            from our Japan data center. Includes WHMCS, domain/SSL reseller accounts, CloudFlare, Softaculous, and expert support.
          </p>
        </div>
      </section>

      {/* ── JAPAN RESELLER PLANS ───────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {JAPAN_RESELLER_PLANS.map((plan, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-lg transition-shadow relative">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                {plan.discount}
              </div>
              <h3 className="plan-name mb-6">{plan.name}</h3>
              <div className="mb-6">
                <div className="plan-price mb-1">{plan.price}</div>
                <div className="text-gray-500 text-sm">{plan.period}</div>
              </div>
              <ul className="space-y-2 mb-8 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs">
                    <svg className="w-3 h-3 text-[#046bd2] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                className="block w-full bg-[#046bd2] text-white py-3 rounded-lg font-semibold hover:bg-[#045cb4] transition-colors"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOMAIN SEARCH ───────────────────────────────────── */}
      <section className="py-16 px-4 hero-gradient-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-widest mb-3 text-[#334155]">Domain Registration</div>
          <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Find Your New Domain</h2>
          <p className="text-[#334155] mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-[#334155] text-xs mb-6">Reserve your domain today before someone takes it.</p>
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

      {/* ── WHY JAPAN ───────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Japan Hosting?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Japan is one of Asia&apos;s most connected and technologically advanced markets. Our Tokyo data center 
              gives your business the speed and reliability needed to serve Japanese and East Asian customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🗾", title: "Tokyo Data Center", desc: "Hosted in Tokyo — one of the world's most connected cities with ultra-low latency for Japan and East Asia." },
              { icon: "⚡", title: "Ultra-Fast Connectivity", desc: "Sub-10ms latency within Japan. Direct peering with major Japanese ISPs and global CDN networks." },
              { icon: "🏢", title: "Tier-III Facilities", desc: "Enterprise-grade data centers with 99.9% uptime SLA, redundant power, and advanced cooling." },
              { icon: "🔒", title: "Secure Infrastructure", desc: "Advanced DDoS protection and CageFS isolation to keep your clients' data safe and secure." },
              { icon: "🌐", title: "East Asia Reach", desc: "Excellent connectivity to Korea, China, Taiwan, and other East Asian markets from a single location." },
              { icon: "💼", title: "Business-Ready", desc: "Japan&apos;s mature internet economy makes it ideal for hosting businesses targeting tech-savvy Asian customers." }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/04/corporate-man-35-767x1024.png"
              alt="Japan Reseller Hosting"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#046bd2] mb-2">WHY CHOOSE US</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Grow Faster By Using Our Hosting Services</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choose Hostao for reliable and secure hosting services that are tailored to your specific needs.
                Our advanced technology, 24/7 support, and affordable pricing make us the ideal choice for individuals
                and businesses looking to grow their online presence.
              </p>
              <p>Experience the Hostao difference today.</p>
            </div>
            <div className="mt-6">
              <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#046bd2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#045cb4] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#046bd2] mb-3">WHAT WE PROVIDE</h2>
            <h3 className="text-3xl font-bold text-gray-900">Standard Features for Every Japan Reseller Plan</h3>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
              With our hosting services, you can enjoy secure and powerful website features that guarantee a seamless online experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "💼", title: "WHMCS License", desc: "Professional billing software included free with all reseller plans" },
              { icon: "🎨", title: "100% White-Label", desc: "Your brand, your nameservers, your business — we stay invisible" },
              { icon: "🛡️", title: "CageFS Protection", desc: "Advanced security isolates each account from others" },
              { icon: "⚡", title: "LiteSpeed Cache", desc: "Superior caching technology for maximum website performance" },
              { icon: "🌐", title: "CloudLinux OS", desc: "Stable and secure operating system for optimal performance" },
              { icon: "🔒", title: "Free SSL Certificates", desc: "Unlimited LetsEncrypt SSL certificates for all domains" },
              { icon: "📦", title: "Softaculous Installer", desc: "400+ applications with one-click installation" },
              { icon: "📧", title: "MailChannels Email", desc: "Premium cloud email delivery for your clients" }
            ].map((feature, i) => (
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

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

    </div>
  );
}
