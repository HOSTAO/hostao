import Link from "next/link";

export const metadata = {
  title: "India Reseller Hosting — Mumbai & Delhi Servers | Hostao",
  description: "Best India reseller hosting with servers in Mumbai and Delhi. Low-latency for Indian clients, WHM + cPanel, white-label. Start from $7/mo.",
};

const PLANS = [
  { name: "India Starter", price: "$7", period: "/mo", features: ["2GB RAM / 1 CPU Core", "20GB NVMe SSD", "1 Dedicated IP", "1TB Bandwidth", "Mumbai or Delhi Server", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=7", popular: true },
  { name: "India Pro", price: "$14", period: "/mo", features: ["4GB RAM / 2 CPU Cores", "50GB NVMe SSD", "2 Dedicated IPs", "3TB Bandwidth", "Mumbai or Delhi Server", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "Priority Support"], href: "https://my.hostao.com/cart.php?a=add&pid=8", popular: false },
  { name: "India Business", price: "$25", period: "/mo", features: ["8GB RAM / 4 CPU Cores", "100GB NVMe SSD", "5 Dedicated IPs", "Unlimited Bandwidth", "Mumbai + Delhi", "WHM + cPanel", "Full White-Label", "Custom Nameservers", "Free SSL", "Priority 24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=9", popular: false },
];

export default function IndianResellerHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇮🇳 India Reseller Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Best India Reseller Hosting — Mumbai & Delhi</h1>
          <p className="text-white/85 text-lg mb-8">Serve India&apos;s 700M+ internet users with servers in Mumbai and Delhi. Ultra-low latency, WHM + cPanel, white-label branding. Build your Indian hosting business from $7/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start India Reseller 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why India?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">India&apos;s Fastest-Growing Digital Market</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏙️", title: "Mumbai DC", desc: "Mumbai data center — western India's financial and tech hub with direct BSNL/Airtel/JIO peering." },
              { icon: "🏛️", title: "Delhi DC", desc: "Delhi/NCR data center for northern India coverage including Delhi, Noida, Gurgaon." },
              { icon: "⚡", title: "Low INR Latency", desc: "Sub-5ms within India. Perfect for Indian SMB websites, e-commerce, and portals." },
              { icon: "🌐", title: "NIXI Peering", desc: "Peered at NIXI (National Internet Exchange of India) for optimal Indian routing." },
              { icon: "🔒", title: "Data Localisation", desc: "Data stored within India to meet RBI and MEITY data localisation requirements." },
              { icon: "💰", title: "INR Billing", desc: "Pay in Indian Rupees. Ideal for Indian hosting businesses and agencies." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 card-hover">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="plans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">India Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">India Reseller Hosting Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ MOST POPULAR</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-4xl font-extrabold text-[#0056A7] mb-1">{plan.price}<span className="text-base font-normal text-gray-500">{plan.period}</span></div>
                <ul className="my-5 space-y-2 flex-1">
                  {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`text-center py-3 rounded-xl font-bold transition ${plan.popular ? "btn-accent" : "btn-blue"}`}>Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Grow Your Indian Hosting Business</h2>
          <p className="text-white/80 mb-8">Mumbai & Delhi servers, data localisation, white-label branding. The best India reseller hosting.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start India Reseller →</a>
        </div>
      </section>
    </div>
  );
}
