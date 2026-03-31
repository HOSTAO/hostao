import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "USA VPS Hosting | High-Performance NVMe SSD VPS | Hostao",
  description: "Get powerful USA VPS hosting with NVMe SSD, 1Gbps uplink, cPanel, and managed support. Hosted in PhoenixNAP Arizona data center. Plans start at $45/month. 40% off limited time.",
  keywords: ["VPS hosting", "USA VPS hosting", "managed VPS hosting", "NVMe VPS", "cPanel VPS"],
  alternates: { canonical: "https://hostao.com/vps" },
  openGraph: {
    title: "USA VPS Hosting | NVMe SSD & cPanel | Hostao",
    description: "High-performance VPS hosting in the USA with NVMe SSD, 1Gbps uplink, and managed cPanel.",
    url: "https://hostao.com/vps",
  }
};

const USA_VPS_PLANS = [
  {
    name: "USA VPS1",
    discount: "SAVE 40% OFF",
    price: "$ 45.00",
    period: "Per Month",
    features: [
      "2GB RAM",
      "1CPU CORES", 
      "20GB NVMe SSD",
      "1TB Bandwidth",
      "Fast 1Gbps Uplink",
      "Linux OS as Choice",
      "Managed cPanel & LS"
    ],
    href: "https://my.hostao.com/store/vps/starter-vps"
  },
  {
    name: "USA VPS2",
    discount: "SAVE 40% OFF",
    price: "$ 70.00",
    period: "Per Month",
    features: [
      "4GB RAM",
      "1CPU CORES",
      "40GB NVMe SSD", 
      "1TB Bandwidth",
      "Fast 1Gbps Uplink",
      "Linux OS as Choice",
      "Managed with cPanel"
    ],
    href: "https://my.hostao.com/store/vps/business-vps"
  },
  {
    name: "USA VPS3",
    discount: "SAVE 40% OFF",
    price: "$ 85.00",
    period: "Per Month",
    features: [
      "8GB RAM",
      "1CPU CORES",
      "60GB NVMe SSD",
      "2TB Bandwidth",
      "Fast 1Gbps Uplink", 
      "Linux OS as Choice",
      "Managed with cPanel"
    ],
    href: "https://my.hostao.com/store/vps/vip-vps"
  },
  {
    name: "USA VPS4",
    discount: "SAVE 40% OFF",
    price: "$ 110.00",
    period: "Per Month",
    features: [
      "8GB RAM",
      "1CPU CORES",
      "80GB NVMe SSD",
      "2TB Bandwidth",
      "Fast 1Gbps Uplink",
      "Linux OS as Choice", 
      "Managed with cPanel"
    ],
    href: "https://my.hostao.com/store/vps/corporate-vps"
  }
];

const MANAGED_FEATURES = [
  { img: "https://hostao.com/wp-content/uploads/2024/01/Fully-Managed-cPanel-VPS.webp", title: "Fully Managed cPanel", desc: "Fully managed cPanel VPS with all-season support, free software upgrades and security patches." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/100-Cloud-Ready.webp", title: "100% Cloud Ready", desc: "As a Cloudflare partner, we enable Cloudflare on your VPS to enhance security and performance." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Synchronize.webp", title: "Scalability", desc: "Upgrade your RAM or CPU anytime to keep up with your growing website or app without downtime." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Templates.webp", title: "Ready-To-Go OS Templates", desc: "Choose from preconfigured OS templates and deploy them instantly with a single click." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Instant-Automated.webp", title: "Instant Automated Deployment", desc: "No waiting time — place your order and your VPS is deployed automatically in minutes." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Spam-free.webp", title: "Spam Free Email & FTP", desc: "cPanel VPS includes free emails, powerful spam filtering tools, unlimited FTP and MySQL databases." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/900-Faster-Hosting-1.webp", title: "900% Faster Hosting", desc: "SSD Supercharged caching technology delivers blazing-fast performance for your applications." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/FREE-WHMCS-cPanel.webp", title: "FREE WHMCS/cPanel", desc: "Free WHMCS and cPanel licence included with every VPS plan to manage clients and billing." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Complete-Control.webp", title: "Complete Control", desc: "Full root access with complete control over your server environment, software and configurations." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/icons8-increase-50.webp", title: "High Performance", desc: "Enterprise-grade hardware with optimised stack delivers exceptional speed and reliability." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Monitoring.webp", title: "24/7 Server Monitoring", desc: "Live monitoring of your server with immediate response if your server encounters any issues." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Transfer.webp", title: "Free Migration", desc: "Professional hosting migration service for all cPanel-managed accounts — zero downtime." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/Fast-Connection.webp", title: "Fast USA Connection", desc: "USA VPS plans provide fast connectivity across the United States with low latency." },
  { img: "https://hostao.com/wp-content/uploads/2024/01/50-Reseller-Discount.webp", title: "50% OFF for Resellers", desc: "VIP and Corporate VIP plan holders enjoy a recurring 50% discount on reseller add-ons." },
];

export default function VpsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">USA VPS Hosting</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Our fast USA VPS is in the PhoenixNAP data center in Arizona, on the West Coast. The location offers excellent connectivity to ISPs and global destinations. 
            Plans include private 10Gbit uplinks, and 1Gbps premium IP connectivity via top Tier 1 ISPs.
          </p>
        </div>
      </section>

      {/* ── USA VPS PLANS ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {USA_VPS_PLANS.map((plan, i) => (
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
                className="block w-full bg-[#0056A7] text-white py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors"
              >
                Order Now
              </a>
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
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0056A7] mb-3">WHAT WE PROVIDE</h2>
            <h3 className="text-3xl font-bold text-gray-900">Fully Managed cPanel VPS Features</h3>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">Everything included to run a professional, fast and secure VPS hosting environment.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {MANAGED_FEATURES.map((feature, i) => (
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

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "VPS Hosting", "item": "https://hostao.com/vps" }
        ]
      }) }} />
    </div>
  );
}