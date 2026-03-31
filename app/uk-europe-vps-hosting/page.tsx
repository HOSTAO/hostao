import Link from "next/link";

export const metadata = {
  title: "UK Europe VPS Hosting — London NVMe VPS | Hostao",
  description: "High-performance UK and Europe VPS hosting with NVMe SSD in London. GDPR compliant, dedicated resources, root access. Plans from $12/mo.",
};

const PLANS = [
  { name: "UK VPS-1", price: "$12", period: "/mo", features: ["1 vCPU Core", "2GB RAM", "40GB NVMe SSD", "2TB Bandwidth", "1Gbps Uplink", "London", "1 IPv4 Address", "Full Root Access", "GDPR Compliant", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=28", popular: false },
  { name: "UK VPS-2", price: "$24", period: "/mo", features: ["2 vCPU Cores", "4GB RAM", "80GB NVMe SSD", "4TB Bandwidth", "1Gbps Uplink", "London", "1 IPv4 Address", "Full Root Access", "GDPR Compliant", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=29", popular: true },
  { name: "UK VPS-4", price: "$48", period: "/mo", features: ["4 vCPU Cores", "8GB RAM", "160GB NVMe SSD", "8TB Bandwidth", "1Gbps Uplink", "London", "2 IPv4 Addresses", "Full Root Access", "GDPR Compliant", "Priority Support"], href: "https://my.hostao.com/cart.php?a=add&pid=30", popular: false },
  { name: "UK VPS-8", price: "$96", period: "/mo", features: ["8 vCPU Cores", "16GB RAM", "320GB NVMe SSD", "16TB Bandwidth", "1Gbps Uplink", "London", "3 IPv4 Addresses", "Full Root Access", "GDPR Compliant", "Priority 24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=31", popular: false },
];

export default function UKEuropeVPSHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🇬🇧 UK Europe VPS Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">UK Europe VPS Hosting — London NVMe Performance</h1>
          <p className="text-white/85 text-lg mb-8">GDPR-compliant VPS servers in London. Serve European audiences with sub-20ms latency. NVMe SSD, dedicated resources, full root access. From $12/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=29" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get UK VPS Now 🚀</a>
            <Link href="#plans" className="btn-outline-white px-8 py-3.5">View Plans</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">UK VPS Features</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Built for European Performance & Compliance</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🔏", title: "GDPR Compliant", desc: "Data stored in London. Full GDPR compliance for EU businesses." },
              { icon: "⚡", title: "NVMe SSD", desc: "Enterprise NVMe SSD on every plan. Maximum I/O performance." },
              { icon: "🌐", title: "EU Low Latency", desc: "Sub-20ms to all major European cities. Sub-5ms within the UK." },
              { icon: "🔒", title: "Full Root Access", desc: "Complete server control. Install any OS, control panel, or software." },
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
            <span className="section-label">UK VPS Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">UK Europe VPS Hosting Plans</h2>
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
            <span className="section-label">Why UK?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why UK for Your VPS?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">London is one of the world&apos;s most connected cities. Hosting your VPS here puts you at the heart of European infrastructure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏢", title: "Equinix LD4/LD5 Data Centres", desc: "Our servers are housed in Equinix London LD4 and LD5 — Europe's largest carrier-neutral campus with 500+ networks on-site." },
              { icon: "🔗", title: "LINX Peering", desc: "Direct peering via the London Internet Exchange (LINX), one of the world's largest IXPs. Faster routes, fewer hops to UK and EU destinations." },
              { icon: "🛡️", title: "GDPR Data Sovereignty", desc: "Your data stays on UK/EU soil. Full compliance with GDPR, UK Data Protection Act, and EU data residency requirements out of the box." },
              { icon: "⚡", title: "Sub-5ms UK Latency", desc: "Under 5ms to anywhere in the UK. Sub-10ms to Amsterdam, Frankfurt, and Paris. Under 20ms to all major EU capitals." },
              { icon: "🌍", title: "EU-Wide Coverage", desc: "London's position as a global hub means excellent connectivity to Ireland, Nordics, DACH, and Southern Europe — ideal for pan-European SaaS." },
              { icon: "🔌", title: "Redundant Power & Cooling", desc: "N+1 redundant power with UPS and diesel generators. Precision cooling systems ensure 99.99% facility uptime year-round." },
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

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Managed Add-Ons</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Managed Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Focus on your business — let us handle the server. Add optional managed services to any UK VPS plan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🖥️", title: "cPanel / WHM", desc: "Industry-standard web hosting control panel. Manage websites, email, DNS, and databases with an intuitive GUI. Includes automatic updates." },
              { icon: "🎛️", title: "Plesk Obsidian", desc: "Modern server management with WordPress toolkit, security hardening, and Git integration. Perfect for agencies and developers." },
              { icon: "📊", title: "24/7 Monitoring", desc: "Proactive monitoring of CPU, RAM, disk, and services. Instant alerts and auto-recovery for critical processes. Monthly health reports included." },
              { icon: "💾", title: "Automated Backups", desc: "Daily off-site backups with 14-day retention. One-click restore via support. Encrypted and stored in a separate UK data centre for disaster recovery." },
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
          <h2 className="text-3xl font-bold mb-4">Deploy Your UK Europe VPS Today</h2>
          <p className="text-white/80 mb-8">London NVMe SSD, GDPR compliance, EU-wide coverage. Best UK VPS from $12/mo.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=29" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get UK VPS →</a>
        </div>
      </section>
    </div>
  );
}
