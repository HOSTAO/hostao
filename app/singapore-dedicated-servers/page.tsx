import Link from "next/link";

export const metadata = {
  title: "Singapore Dedicated Servers — APAC Bare Metal | Hostao",
  description: "Powerful Singapore dedicated servers for APAC workloads. Full root access, NVMe SSD, 99.9% uptime SLA. Plans from $49/mo.",
};

const PLANS = [
  { name: "SG Essential", price: "$49", period: "/mo", features: ["4 vCPU Cores", "16GB DDR4 RAM", "500GB NVMe SSD", "10TB Bandwidth", "1Gbps Uplink", "Singapore Location", "1 Dedicated IP", "Full Root Access", "24/7 Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=13", popular: false },
  { name: "SG Performance", price: "$89", period: "/mo", features: ["8 vCPU Cores", "32GB DDR4 RAM", "1TB NVMe SSD", "20TB Bandwidth", "1Gbps Uplink", "Singapore Location", "2 Dedicated IPs", "Full Root Access", "IPMI Access", "24/7 Priority Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=14", popular: true },
  { name: "SG Enterprise", price: "$179", period: "/mo", features: ["16 vCPU Cores", "64GB DDR4 RAM", "2TB NVMe SSD", "Unlimited Bandwidth", "10Gbps Uplink", "Singapore Location", "5 Dedicated IPs", "Full Root Access", "IPMI Access", "DDoS Protection", "24/7 Priority Support", "Free Setup"], href: "https://my.hostao.com/cart.php?a=add&pid=15", popular: false },
];

export default function SingaporeDedicatedServersPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇸🇬 Singapore Dedicated Servers</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Singapore Dedicated Servers — APAC Powerhouse</h1>
          <p className="text-white/85 text-lg mb-8">Bare-metal dedicated servers in Singapore for APAC workloads. Optimal connectivity to Southeast Asia, China, Japan, and Australia. From $49/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=14" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get SG Dedicated Server 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Singapore Advantage</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Singapore Dedicated?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🌏", title: "APAC Hub", desc: "Singapore is the network hub of APAC. Excellent latency to all major Asian countries." },
              { icon: "⚡", title: "NVMe SSD", desc: "All dedicated servers come with enterprise NVMe SSD for maximum I/O performance." },
              { icon: "🔒", title: "Tier-3 DC", desc: "Hosted in Singapore's premier Tier-3 data centers with strict physical security." },
              { icon: "🛡️", title: "DDoS Protection", desc: "Enterprise-grade DDoS mitigation available on all Singapore dedicated plans." },
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
            <span className="section-label">Singapore Dedicated Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Singapore Dedicated Server</h2>
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
            <span className="section-label">APAC Network Coverage</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Ultra-Low Latency Across Asia-Pacific</h2>
            <p className="text-gray-600">Singapore sits at the crossroads of major submarine cable systems, delivering lightning-fast connectivity to every major APAC market.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { city: "Hong Kong", latency: "<10ms", flag: "🇭🇰", desc: "Direct peering via AAG & APG submarine cables." },
              { city: "Tokyo", latency: "<30ms", flag: "🇯🇵", desc: "Connected via SJC & UNITY submarine cable systems." },
              { city: "Mumbai", latency: "<60ms", flag: "🇮🇳", desc: "Routed through MIST & SMW5 submarine cable links." },
              { city: "Sydney", latency: "<80ms", flag: "🇦🇺", desc: "Direct path via Indigo & SeaMeWe-3 cable systems." },
            ].map(item => (
              <div key={item.city} className="bg-white border border-gray-200 rounded-xl p-5 card-hover text-center">
                <div className="text-3xl mb-2">{item.flag}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.city}</h3>
                <div className="text-2xl font-extrabold text-[#0056A7] mb-2">{item.latency}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-900 mb-2">🌐 Submarine Cable Connectivity</h3>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">Our Singapore data center connects to 20+ submarine cable systems including SEA-ME-WE 3/4/5, APG, SJC, AAG, UNITY, and Indigo — providing redundant, low-latency paths to every continent.</p>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Enterprise Features</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for Mission-Critical Workloads</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "💾", title: "Hardware RAID", desc: "RAID-1 and RAID-10 configurations available for data redundancy. Hot-swappable drives on Enterprise plans." },
              { icon: "🖥️", title: "IPMI / KVM Access", desc: "Full out-of-band IPMI and KVM-over-IP access. Reboot, reinstall, and manage your server remotely at any time." },
              { icon: "🐧", title: "OS Choices", desc: "Choose from CentOS, AlmaLinux, Ubuntu, Debian, or Windows Server. Custom ISO mounting available on request." },
              { icon: "🚚", title: "Free Migration", desc: "Our team will migrate your data, configurations, and applications from your current provider at no extra cost." },
              { icon: "👁️", title: "24/7 NOC Monitoring", desc: "Network Operations Center monitors all servers around the clock. Proactive alerts for hardware, network, and service issues." },
              { icon: "🔌", title: "Redundant Power & Network", desc: "Dual power feeds with UPS and generator backup. Redundant network paths with N+1 uplink failover." },
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

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Deploy Your Singapore Dedicated Server</h2>
          <p className="text-white/80 mb-8">Bare-metal power in Singapore. Full root access, NVMe SSD, APAC network coverage.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=14" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get SG Dedicated Server →</a>
        </div>
      </section>
    </div>
  );
}
