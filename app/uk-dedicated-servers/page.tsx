import Link from "next/link";

export const metadata = {
  title: "UK Europe Dedicated Servers — London | Hostao",
  description: "Powerful UK and Europe dedicated servers in London. Full root access, GDPR compliant, NVMe SSD, 99.9% uptime. Plans from $49/mo.",
};

const PLANS = [
  { name: "UK Essential", price: "$49", period: "/mo", features: ["4 vCPU Cores", "16GB DDR4 RAM", "500GB NVMe SSD", "10TB Bandwidth", "1Gbps Uplink", "London Location", "1 Dedicated IP", "Full Root Access", "GDPR Compliant", "24/7 Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=16", popular: false },
  { name: "UK Performance", price: "$89", period: "/mo", features: ["8 vCPU Cores", "32GB DDR4 RAM", "1TB NVMe SSD", "20TB Bandwidth", "1Gbps Uplink", "London Location", "2 Dedicated IPs", "Full Root Access", "IPMI Access", "GDPR Compliant", "24/7 Priority Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=17", popular: true },
  { name: "UK Enterprise", price: "$179", period: "/mo", features: ["16 vCPU Cores", "64GB DDR4 RAM", "2TB NVMe SSD", "Unlimited Bandwidth", "10Gbps Uplink", "London Location", "5 Dedicated IPs", "Full Root Access", "IPMI Access", "DDoS Protection", "GDPR Compliant", "24/7 Priority Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=18", popular: false },
];

export default function UKDedicatedServersPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇬🇧 UK Europe Dedicated Servers</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">UK Europe Dedicated Servers — London</h1>
          <p className="text-white/85 text-lg mb-8">Enterprise bare-metal dedicated servers in London. GDPR compliant, low-latency across Europe, full root access. Perfect for EU businesses. From $49/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=17" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get UK Dedicated Server 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">UK Advantage</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose UK Europe Dedicated?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🔏", title: "GDPR Compliant", desc: "All data stored within the UK/EU for full GDPR compliance." },
              { icon: "⚡", title: "EU Low Latency", desc: "Sub-20ms to major European cities. Perfect for EU client bases." },
              { icon: "🌐", title: "LINX Peering", desc: "Connected to LINX — London Internet Exchange for optimal UK routing." },
              { icon: "🏢", title: "Equinix London", desc: "Hosted in Equinix London LD4/LD5 — Europe's busiest carrier-neutral campus." },
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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">UK Dedicated Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">UK Europe Dedicated Server Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ BEST VALUE</div>}
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

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Hardware</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Server Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Enterprise-grade components built for sustained, heavy workloads. Every server is assembled and stress-tested before deployment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🧠", title: "Intel Xeon Processors", desc: "Latest-gen Intel Xeon Scalable CPUs with high single-thread and multi-thread performance. Turbo boost up to 4.5GHz for demanding workloads." },
              { icon: "💾", title: "ECC DDR4/DDR5 RAM", desc: "Error-Correcting Code memory that detects and corrects single-bit errors in real time. Up to 512GB per server for memory-intensive applications." },
              { icon: "🗄️", title: "Hardware RAID", desc: "Dedicated hardware RAID controllers with battery backup. RAID 1, 5, 6, and 10 configurations available for data redundancy and performance." },
              { icon: "🔧", title: "IPMI / KVM Access", desc: "Out-of-band IPMI remote management. Reboot, reinstall OS, and access KVM console anytime — even when the OS is unresponsive." },
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

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Network</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Network & Connectivity</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Premium multi-homed network with direct peering at LINX and multiple Tier 1 transit providers for maximum speed and reliability.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🔗", title: "LINX Peering", desc: "Direct connection to the London Internet Exchange — one of the world's largest IXPs. Optimal routing to UK ISPs, European networks, and global destinations." },
              { icon: "🌐", title: "Multiple Transit Providers", desc: "Blended bandwidth from Tier 1 carriers including Cogent, NTT, GTT, and Telia. BGP-optimised routing selects the fastest path automatically." },
              { icon: "🛡️", title: "DDoS Protection", desc: "Always-on volumetric DDoS mitigation up to 1Tbps. Layer 3/4 filtering scrubs malicious traffic before it reaches your server. Zero added latency in clean state." },
              { icon: "⚡", title: "1Gbps / 10Gbps Uplinks", desc: "Standard 1Gbps port included on all plans. Upgrade to 10Gbps for bandwidth-heavy workloads like CDN origin, streaming, or large-scale API serving." },
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

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Power Your European Business</h2>
          <p className="text-white/80 mb-8">London bare-metal servers, GDPR compliance, EU-wide low latency. The best UK Europe dedicated hosting.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=17" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get UK Dedicated Server →</a>
        </div>
      </section>
    </div>
  );
}
