import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Master Reseller Hosting | White Label & Free WHMCS | Hostao",
  description: "Start your own hosting business with Hostao master reseller hosting. Includes unlimited resellers, free WHMCS license, NVMe SSD, CageFS protection, and 100% white-label. Plans from $17.50/month.",
  keywords: ["reseller hosting", "master reseller hosting", "white label hosting", "reseller hosting WHMCS", "start hosting business"],
  alternates: { canonical: "https://hostao.com/reseller-hosting" },
  openGraph: {
    title: "Master Reseller Hosting | White Label & Free WHMCS | Hostao",
    description: "Launch your hosting business with unlimited resellers, free WHMCS, and white-label branding.",
    url: "https://hostao.com/reseller-hosting",
  }
};

const MASTER_RESELLER_PLANS = [
  {
    name: "US Master Reseller 1",
    discount: "SAVE 40% OFF",
    price: "$ 17.5", 
    period: "Per Month*",
    features: [
      "20GB NVMe SSD",
      "5TB Bandwidth", 
      "Unlimited Resellers",
      "Cloud Linux",
      "CageFS Hack Protection",
      "SSL Reseller Account",
      "WHMCS License",
      "SitePad Website Builder",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "Reseller Web Templates",
      "Unli. LetsEncrypt SSL",
      "Overselling Enabled",
      "Free Migration",
      "Attracta SEO Tools",
      "Softaculous Installer",
      "100% White Labeled"
    ],
    href: "https://my.hostao.com/store/reseller/master-starter"
  },
  {
    name: "US Master Reseller 2",
    discount: "SAVE 40% OFF",
    price: "$ 24.5",
    period: "Per Month*", 
    features: [
      "60GB NVMe SSD",
      "5TB Bandwidth",
      "Unlimited Resellers", 
      "Cloud Linux",
      "CageFS Hack Protection",
      "SSL Reseller Account",
      "WHMCS License",
      "SitePad Website Builder",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "Reseller Web Templates", 
      "Unli. LetsEncrypt SSL",
      "Overselling Enabled",
      "Attracta SEO Tools",
      "Free Migration",
      "Softaculous Installer",
      "100% White Labeled"
    ],
    href: "https://my.hostao.com/store/reseller/master-business"
  },
  {
    name: "US Master Reseller 3",
    discount: "SAVE 40% OFF", 
    price: "$ 38.5",
    period: "Per Month*",
    features: [
      "140GB NVMe SSD",
      "5TB Bandwidth",
      "Unlimited Resellers",
      "Cloud Linux", 
      "CageFS Hack Protection",
      "SSL Reseller Account",
      "WHMCS License",
      "SitePad Website Builder",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "Reseller Web Templates",
      "Unli. LetsEncrypt SSL",
      "Overselling Enabled",
      "Attracta SEO Tools", 
      "Free Migration",
      "Softaculous Installer",
      "100% White Labeled"
    ],
    href: "https://my.hostao.com/store/reseller/master-vip"
  },
  {
    name: "US Master Reseller 4",
    discount: "SAVE 40% OFF",
    price: "$ 59.5",
    period: "Per Month*",
    features: [
      "260GB NVMe SSD",
      "5TB Bandwidth",
      "Unlimited Resellers",
      "Cloud Linux",
      "CageFS Hack Protection", 
      "SSL Reseller Account",
      "WHMCS License",
      "SitePad Website Builder",
      "Resell VPS 50% OFF",
      "Resell Servers 50% OFF",
      "Reseller Web Templates",
      "Unli. LetsEncrypt SSL",
      "Overselling Enabled",
      "Attracta SEO Tools",
      "Free Migration",
      "Softaculous Installer",
      "100% White Labeled"
    ],
    href: "https://my.hostao.com/store/reseller/master-corporate"
  }
];

const STANDARD_FEATURES = [
  { img: "https://hostao.com/wp-content/uploads/2024/01/50-Discount.webp", title: "Resell Servers 50% OFF", desc: "Master Reseller clients can resell USA dedicated servers at 50% off, expanding your offering and revenue stream." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Data-security-1-1.webp", title: "Daily Backups", desc: "We provide free automated daily and weekly backups for all websites on our reseller servers." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Loading-Speed.png", title: "99.9% Uptime", desc: "We offer a 99.9% Uptime Guarantee with SLA. Your clients will always find your servers online." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Hack-Protection.webp", title: "Hack Protection", desc: "CageFS provides transparent protection against various attacks, keeping all your hosted sites safe." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Website-Migration.webp", title: "Website Migration", desc: "We can migrate your primary reseller account as well as your clients' accounts — completely free." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Overselling-Enabled.webp", title: "Overselling Enabled", desc: "Our resellers get everything they pay for — and sometimes even more resources when available." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/icons8-increase-50.webp", title: "Attracta SEO Tools", desc: "Get a free Attracta SEO plugin included with every reseller hosting plan to boost your clients' rankings." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/900-Faster-Hosting.webp", title: "900% Faster Hosting", desc: "Corporate VIP Servers use the latest NVMe V-NAND 3D SSDs — 200% faster than traditional SSDs." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Free-Legal-Documents.webp", title: "Free Legal Documents", desc: "We offer ready-made legal documents with our reseller hosting plans to protect your business." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Free-Merchant-Account.webp", title: "Merchant Account", desc: "We've partnered with leading payment processors to help our resellers accept payments easily." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Free-Domain-Reseller.webp", title: "Free Domain Reseller", desc: "We offer a fully featured domain reseller account with our reseller hosting plans — at no extra cost." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/LetsEncrypt-SSL.webp", title: "LetsEncrypt SSL", desc: "Unlimited LetsEncrypt SSL certificates are included free with your reseller plans for all domains." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Auto-Script-Installer.webp", title: "Auto Script Installer", desc: "Softaculous auto-installer with 450+ apps is included — your clients can install WordPress in one click." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/White-Labeled-Servers.webp", title: "White Labeled Servers", desc: "100% white-labeled hosting with fully customizable branding so your clients only see your brand." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Multiple-PHP-Versions.webp", title: "Multiple PHP Versions", desc: "We offer flexible PHP version support with easy switching between versions to suit any app." },
];

export default function ResellerHostingPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">Master Reseller Hosting</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Our Master Reseller package in the USA offers affordable hosting with a range of features to establish you as a reputable provider. 
            With expert support and reliable service, expand your business and offer top-notch hosting solutions to your customers.
          </p>
        </div>
      </section>

      {/* ── MASTER RESELLER PLANS ───────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {MASTER_RESELLER_PLANS.map((plan, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-lg transition-shadow relative">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                {plan.discount}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">{plan.name}</h3>
              <div className="mb-6">
                <div className="text-3xl font-extrabold text-[#0056A7] mb-1">{plan.price}</div>
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

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/04/corporate-man-35-767x1024.png"
              alt="Low cost hosting"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow Faster By Using Our Hosting Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choose Hostao for reliable and secure hosting services that are tailored to your specific needs. 
                Our advanced technology, 24/7 support, and affordable pricing make us the ideal choice for individuals 
                and businesses looking to grow their online presence.
              </p>
              <p>Experience the Hostao difference today.</p>
            </div>
            <div className="mt-6">
              <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#0056A7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors">
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
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0056A7] mb-3">WHAT WE PROVIDE</h2>
            <h3 className="text-3xl font-bold text-gray-900">Standard Features for Every Reseller Plan</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STANDARD_FEATURES.map((feature, i) => (
              <div key={i} className="text-center p-4 rounded-xl hover:bg-[#e6f2ff] transition-colors">
                <div className="flex justify-center mb-3">
                  <Image src={feature.img} alt={feature.title} width={64} height={64} className="w-14 h-14 object-contain" unoptimized />
                </div>
                <h4 className="text-sm font-bold text-[#1e293b] mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YEARLY PAYMENT DISCOUNTS ───────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]" id="discount">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Yearly Payment Discounts</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { plan: "US Master Reseller 1", monthly: "$17.5", yearly: "$175", discount: "17% OFF" },
              { plan: "US Master Reseller 2", monthly: "$24.5", yearly: "$245", discount: "17% OFF" },
              { plan: "US Master Reseller 3", monthly: "$38.5", yearly: "$385", discount: "17% OFF" },
              { plan: "US Master Reseller 4", monthly: "$59.5", yearly: "$595", discount: "17% OFF" }
            ].map((discount, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{discount.plan}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="line-through">{discount.monthly}/mo × 12 = ${(parseFloat(discount.monthly.slice(2)) * 12).toFixed(0)}</span>
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

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      <section className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-6 text-center">Included with Every Reseller Plan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Free WHMCS License", href: "/free-whmcs", desc: "Save $180/year — included free" },
              { label: "Domain Reseller Account", href: "/domain-reseller", desc: "Resell domains under your brand" },
              { label: "VPS Reseller Discount", href: "/vps-dedicated-server-reseller", desc: "50% off VPS for your clients" },
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "Reseller Hosting", "item": "https://hostao.com/reseller-hosting" }
        ]
      }) }} />

    </div>
  );
}