import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Singapore VPS Hosting — Fast Linux VPS with cPanel | Hostao",
  description: "We provide fast and affordable Linux VPS hosting in Singapore, with 1Gbps Gigabit connectivity to nearby countries. Our managed plans come with cPanel and WHM included, and additional services such as WHMCS and Softaculous are available."
};

const SINGAPORE_VPS_PLANS = [
  {
    name: "SG VPS1",
    discount: "SAVE 40% OFF",
    price: "$45",
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
    name: "SG VPS2",
    discount: "SAVE 40% OFF",
    price: "$70",
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
    name: "SG VPS3",
    discount: "SAVE 40% OFF",
    price: "$85",
    period: "Per Month",
    features: [
      "6GB RAM",
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
    name: "SG VPS4",
    discount: "SAVE 40% OFF",
    price: "$110",
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

export default function SingaporeVPSHostingPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">Singapore VPS Hosting</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            We provide fast and affordable Linux VPS hosting in Singapore, with 1Gbps Gigabit connectivity to nearby countries. 
            Our managed plans come with cPanel and WHM included, and additional services such as WHMCS and Softaculous are available.
          </p>
        </div>
      </section>

      {/* ── SINGAPORE VPS PLANS ─────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SINGAPORE_VPS_PLANS.map((plan, i) => (
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

      {/* ── WHY SINGAPORE VPS ───────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Singapore VPS Hosting?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Singapore offers strategic advantages for businesses targeting the Asia-Pacific region, 
              with excellent connectivity and state-of-the-art data centers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌏", title: "APAC Hub", desc: "Strategic location in the heart of Asia-Pacific with excellent connectivity to all major APAC cities." },
              { icon: "⚡", title: "1Gbps Connectivity", desc: "Gigabit network connectivity with low latency to nearby countries including Malaysia, Thailand, and Indonesia." },
              { icon: "🏢", title: "Tier-III Data Center", desc: "Premium data center facilities with 99.9% uptime guarantee and enterprise-grade infrastructure." },
              { icon: "🔒", title: "Managed Services", desc: "Fully managed VPS with cPanel and WHM included. Expert support for server management and optimization." },
              { icon: "🌐", title: "Linux OS Choice", desc: "Choose from multiple Linux distributions including CentOS, Ubuntu, Debian, and more." },
              { icon: "💼", title: "Business Ready", desc: "Perfect for businesses targeting Southeast Asian markets with local data sovereignty requirements." }
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
            <h3 className="text-3xl font-bold text-gray-900">Managed Singapore VPS Features</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "NVMe SSD Storage", desc: "Lightning-fast NVMe SSD storage for superior performance and faster data access." },
              { icon: "🎛️", title: "cPanel & WHM", desc: "Industry-standard control panels included for easy server and account management." },
              { icon: "🛡️", title: "Full Management", desc: "Completely managed VPS with server monitoring, security updates, and technical support." },
              { icon: "🌐", title: "1Gbps Network", desc: "High-speed 1Gbps network connectivity for excellent performance across APAC region." },
              { icon: "🔧", title: "WHMCS & Softaculous", desc: "Additional services available including WHMCS billing software and Softaculous auto-installer." },
              { icon: "🔒", title: "Security Hardened", desc: "Server-level security hardening and proactive monitoring for maximum protection." },
              { icon: "📊", title: "Resource Monitoring", desc: "24/7 resource monitoring with automatic scaling and optimization recommendations." },
              { icon: "🆘", title: "Expert Support", desc: "24/7 technical support from Linux and server management experts." }
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