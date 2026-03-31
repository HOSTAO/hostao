import Link from "next/link";

export const metadata = {
  title: "South Africa Reseller Hosting — Johannesburg Data Center | Hostao",
  description: "Best South Africa reseller hosting with servers in Johannesburg. Low-latency for African clients, WHM + cPanel, white-label. Start from $7/mo.",
};

const PLANS = [
  { name: "ZA Starter", price: "$7", period: "/mo", features: ["2GB RAM / 1 CPU Core", "20GB NVMe SSD", "1 Dedicated IP", "1TB Bandwidth", "Johannesburg Server", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=7", popular: true },
  { name: "ZA Pro", price: "$14", period: "/mo", features: ["4GB RAM / 2 CPU Cores", "50GB NVMe SSD", "2 Dedicated IPs", "3TB Bandwidth", "Johannesburg Server", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "Priority Support"], href: "https://my.hostao.com/cart.php?a=add&pid=8", popular: false },
  { name: "ZA Business", price: "$25", period: "/mo", features: ["8GB RAM / 4 CPU Cores", "100GB NVMe SSD", "5 Dedicated IPs", "Unlimited Bandwidth", "Johannesburg Server", "WHM + cPanel", "Full White-Label", "Custom Nameservers", "Free SSL", "Priority 24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=9", popular: false },
];

export default function SouthAfricaResellerHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇿🇦 South Africa Reseller Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Best South Africa Reseller Hosting — Johannesburg</h1>
          <p className="text-white/85 text-lg mb-8">Africa&apos;s fastest-growing digital market. Host your reseller business in Johannesburg — South Africa&apos;s internet capital. Serve clients across the African continent from $7/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start ZA Reseller 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why South Africa?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Johannesburg — Africa&apos;s Internet Hub</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🌍", title: "Johannesburg DC", desc: "Premium data center in Johannesburg with direct connectivity to South African ISPs." },
              { icon: "⚡", title: "SA Latency", desc: "Sub-10ms to Cape Town, Durban, Pretoria. Great coverage across South Africa." },
              { icon: "🌐", title: "JINX Peering", desc: "Peered at JINX (Johannesburg Internet Exchange) for optimal South African routing." },
              { icon: "🔒", title: "POPIA Compliant", desc: "Compliant with South Africa's Protection of Personal Information Act (POPIA)." },
              { icon: "🌍", title: "Pan-African Reach", desc: "Excellent connectivity to Kenya, Nigeria, Egypt, and other African countries." },
              { icon: "📈", title: "Booming Market", desc: "Africa's digital economy is growing at 30%+ annually. Huge reseller opportunity." },
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
            <span className="section-label">South Africa Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">South Africa Reseller Hosting Plans</h2>
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
          <h2 className="text-3xl font-bold mb-4">Tap Into Africa&apos;s Growing Digital Market</h2>
          <p className="text-white/80 mb-8">Johannesburg servers, POPIA compliance, white-label branding. The best South Africa reseller hosting.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start ZA Reseller →</a>
        </div>
      </section>
    </div>
  );
}
