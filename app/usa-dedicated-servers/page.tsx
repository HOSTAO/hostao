import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "USA Dedicated Servers at a Budget! — Premium Server Solutions | Hostao",
  description: "Hostao.Com offers premium USA dedicated server solutions, with managed or unmanaged options, Linux OS, and optional cPanel/WHM. Our servers feature fast 1Gbps uplinks for reliable performance."
};

const USA_CLOUD_PLANS = [
  {
    name: "USA Cloud 1",
    processor: "Intel Xeon E5-2660 – 4 X 2.20GHz",
    price: "$90",
    features: [
      "8GB, 24GB DDR3 RAM",
      "4 CPU Cores with HT",
      "SSD or SATA Hard Drive", 
      "2TB – 10TB Bandwidth",
      "Fast 1Gbps Uplink",
      "2 – 24 IP Address",
      "Any Linux Choice",
      "cPanel / CloudLinux",
      "Softaculous / WHMCS",
      "Managed cPanel & LS"
    ],
    href: "https://my.hostao.com/store/dedicated/usa-cloud-starter"
  },
  {
    name: "USA Cloud 2", 
    processor: "Intel Xeon E5-2660 – 8 X 2.20GHz",
    price: "$120",
    features: [
      "16GB, 32GB DDR3 RAM",
      "8 CPU Cores with HT",
      "NVME, SSD or SATA Drive",
      "5TB – 10TB Bandwidth", 
      "Fast 1Gbps Uplink",
      "4 – 24 IP Address",
      "Any Linux Choice",
      "cPanel / CloudLinux",
      "Softaculous / WHMCS",
      "Managed cPanel & LS"
    ],
    href: "https://my.hostao.com/store/dedicated/usa-cloud-business"
  },
  {
    name: "USA Cloud 3",
    processor: "Intel Xeon E5-2680v2 – 16X2.80GHz", 
    price: "$175",
    features: [
      "24GB, 48GB DDR3 RAM",
      "16 CPU Cores with HT",
      "NVME, SSD or SATA",
      "5TB – 10TB Bandwidth",
      "Fast 1Gbps Uplink",
      "8 – 24 IP Address",
      "Any Linux Choice", 
      "cPanel / CloudLinux",
      "Softaculous / WHMCS",
      "Managed cPanel & LS"
    ],
    href: "https://my.hostao.com/store/dedicated/usa-cloud-vip"
  },
  {
    name: "USA Cloud 4",
    processor: "Intel Xeon E5-2680v2 – 24X2.80GHz",
    price: "$345", 
    features: [
      "48GB, 64GB DDR3 RAM",
      "24 CPU Cores with HT",
      "NVME, SSD or SATA",
      "2TB – 10TB Bandwidth",
      "Fast 1Gbps Uplink",
      "8 – 24 IP Address",
      "Any Linux Choice",
      "cPanel / CloudLinux",
      "Softaculous / WHMCS", 
      "Managed cPanel & LS"
    ],
    href: "https://my.hostao.com/store/dedicated/usa-cloud-corporate"
  }
];

export default function USADedicatedServersPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">USA Dedicated Servers at a Budget!</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Hostao.Com offers premium USA dedicated server solutions, with managed or unmanaged options, Linux OS, and optional cPanel/WHM. 
            Our servers feature fast 1Gbps uplinks for reliable performance.
          </p>
        </div>
      </section>

      {/* ── PRICING TOGGLE ──────────────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors">
              USA Servers Retail Prices
            </button>
            <button className="border-2 border-[#0056A7] text-[#0056A7] px-8 py-3 rounded-lg font-semibold hover:bg-[#0056A7] hover:text-white transition-colors">
              USA Servers Reseller Pricing up to 50% OFF
            </button>
          </div>
        </div>
      </section>

      {/* ── USA SMARTCLOUD DEDICATED SERVERS ───────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">USA SmartCloud Dedicated Servers</h2>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {USA_CLOUD_PLANS.map((plan, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 text-center bg-white hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.processor}</p>
                <div className="mb-6">
                  <div className="text-3xl font-extrabold text-[#0056A7] mb-1">{plan.price}</div>
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

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">USA Bare Metal Dedicated Servers</h2>
          </div>
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

      {/* ── WHY CHOOSE OUR USA DEDICATED SERVERS ──────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/USA-Dedicated-Server-Hostao.png"
              alt="USA Dedicated Server Hostao"
              width={500}
              height={400}
              className="w-full max-w-lg h-auto"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our USA Dedicated Servers ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Hostao LLC provides reliable dedicated server solutions through its vast network of servers in 25+ data centers globally. 
              With a proven track record of nearly a decade in the industry, you can trust us to handle your business needs. 
              Our USA Dedicated Servers come fully managed, freeing you up to focus on your business while we handle server management 24/7. 
              Our plans include lightning-fast processors and the option to add a WHM/cPanel license for a nominal fee.
            </p>
          </div>
        </div>
      </section>

      {/* ── CPANEL DEDICATED SERVERS MANAGEMENT ────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">cPanel dedicated servers management with monitoring and support</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              With the fully managed dedicated servers we provide, our technical staff is always there to support and take care of your server 
              giving you the ease of not having to go through server administrative processes. Check out what services we perform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Server Setup & Configuration",
              "24/7 Server Monitoring", 
              "Security Updates & Patches",
              "Performance Optimization",
              "Backup Management",
              "Software Installation",
              "Technical Support",
              "Server Maintenance"
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-[#0056A7] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span className="text-gray-800 font-medium">{service}</span>
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