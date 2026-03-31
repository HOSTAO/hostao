import Link from "next/link";

export const metadata = {
  title: "USA VPS Hosting — Dallas & New York NVMe VPS | Hostao",
  description: "High-performance USA VPS hosting with NVMe SSD in Dallas and New York. Dedicated resources, root access, scalable. Plans from $12/mo.",
};

const PLANS = [
  { name: "USA VPS-1", price: "$12", period: "/mo", features: ["1 vCPU Core", "2GB RAM", "40GB NVMe SSD", "2TB Bandwidth", "1Gbps Uplink", "Dallas or NY", "1 IPv4 Address", "Full Root Access", "Linux/Windows OS", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=20", popular: false },
  { name: "USA VPS-2", price: "$24", period: "/mo", features: ["2 vCPU Cores", "4GB RAM", "80GB NVMe SSD", "4TB Bandwidth", "1Gbps Uplink", "Dallas or NY", "1 IPv4 Address", "Full Root Access", "Linux/Windows OS", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=21", popular: true },
  { name: "USA VPS-4", price: "$48", period: "/mo", features: ["4 vCPU Cores", "8GB RAM", "160GB NVMe SSD", "8TB Bandwidth", "1Gbps Uplink", "Dallas or NY", "2 IPv4 Addresses", "Full Root Access", "Linux/Windows OS", "Priority Support"], href: "https://my.hostao.com/cart.php?a=add&pid=22", popular: false },
  { name: "USA VPS-8", price: "$96", period: "/mo", features: ["8 vCPU Cores", "16GB RAM", "320GB NVMe SSD", "16TB Bandwidth", "1Gbps Uplink", "Dallas or NY", "3 IPv4 Addresses", "Full Root Access", "Linux/Windows OS", "Priority 24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=23", popular: false },
];

export default function USAVPSHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇺🇸 USA VPS Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">USA VPS Hosting — NVMe SSD, Dallas & New York</h1>
          <p className="text-white/85 text-lg mb-8">High-performance VPS servers in US data centers. Dedicated vCPU, NVMe SSD storage, full root access. Scale as you grow. From $12/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=21" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get USA VPS Now 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">USA VPS Features</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Enterprise VPS in US Data Centers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "⚡", title: "NVMe SSD", desc: "Blazing-fast NVMe SSD storage on every VPS plan. 10x faster than SATA." },
              { icon: "🏙️", title: "Dallas & NY", desc: "Choose between Dallas TX and New York NY for optimal US coverage." },
              { icon: "🔒", title: "Root Access", desc: "Full root/administrator access. Install any OS or control panel." },
              { icon: "📈", title: "Instant Scale", desc: "Upgrade resources instantly via control panel. No downtime." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 card-hover text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">USA VPS Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your USA VPS Plan</h2>
            <p className="text-gray-600">All plans include NVMe SSD, dedicated resources, and full root access.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-6 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ POPULAR</div>}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-3xl font-extrabold text-[#0056A7] mb-1">{plan.price}<span className="text-sm font-normal text-gray-500">{plan.period}</span></div>
                <ul className="my-4 space-y-1.5 flex-1">
                  {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-700"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`text-center py-2.5 rounded-xl font-bold transition text-sm ${plan.popular ? "btn-accent" : "btn-blue"}`}>Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">US Data Center Locations</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Premium US Data Centers</h2>
            <p className="text-gray-600">Choose from two strategic US locations for optimal coverage across North America and beyond.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
              <div className="text-3xl mb-3">🤠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dallas, TX — Tier-4 Equinix</h3>
              <p className="text-gray-600 text-sm mb-4">Hosted in Equinix DA1, a Tier-4 facility with 99.999% uptime. Central US location with excellent reach to both coasts and Latin America.</p>
              <ul className="space-y-1.5">
                {["Chicago: ~12ms", "Los Angeles: ~25ms", "Miami: ~22ms", "New York: ~30ms", "Toronto: ~28ms"].map(l => (
                  <li key={l} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500">✓</span>{l}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
              <div className="text-3xl mb-3">🗽</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">New York, NY — East Coast Hub</h3>
              <p className="text-gray-600 text-sm mb-4">Premium East Coast data center with direct transatlantic peering. Ideal for serving the US East, Canada, and European visitors.</p>
              <ul className="space-y-1.5">
                {["Washington DC: ~5ms", "Boston: ~8ms", "Chicago: ~18ms", "London: ~65ms", "Toronto: ~12ms"].map(l => (
                  <li key={l} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500">✓</span>{l}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">🌐 Network Infrastructure</h3>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">Both locations feature multi-homed BGP routing with Tier-1 transit providers including Cogent, Lumen, NTT, and GTT. 1Gbps+ uplinks with DDoS scrubbing included on all plans.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Control Panel Options</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Management Style</h2>
            <p className="text-gray-600">Every VPS comes with full root access. Add a control panel for easy management, or go fully unmanaged.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🟠", title: "cPanel / WHM", desc: "Industry-standard hosting panel. One-click WordPress, email management, backups, and DNS. Best for web hosting resellers.", price: "+$15/mo" },
              { icon: "🔵", title: "Plesk", desc: "Modern server management with WordPress Toolkit, Git support, and Docker integration. Great for developers and agencies.", price: "+$12/mo" },
              { icon: "🟢", title: "DirectAdmin", desc: "Lightweight yet powerful panel. Low resource usage with all essential hosting features. Ideal for budget-conscious users.", price: "+$8/mo" },
              { icon: "⚫", title: "Unmanaged / Root", desc: "Pure root access with no panel. Full control via SSH. Perfect for DevOps teams running custom stacks and containers.", price: "Free" },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 card-hover text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <span className="text-sm font-bold text-[#0056A7]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Deploy Your USA VPS Today</h2>
          <p className="text-white/80 mb-8">NVMe SSD, dedicated resources, US network. Best USA VPS hosting from $12/mo.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=21" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get USA VPS →</a>
        </div>
      </section>
    </div>
  );
}
