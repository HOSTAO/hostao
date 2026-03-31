import Link from "next/link";

export const metadata = {
  title: "NVMe SSD Reseller Hosting — 2X Faster | Hostao",
  description: "NVMe PCIe 4.0 reseller hosting with 7000MB/s read speeds. Up to 12X faster than SATA SSD. White-label cPanel reseller plans from $19.5/mo.",
};

const PLANS = [
  {
    name: "NVMe Starter",
    price: "$19.5",
    period: "/mo",
    features: ["25 cPanel Accounts", "30GB NVMe SSD Storage", "300GB Bandwidth", "White-Label Branding", "Free SSL Certificates", "WHM + cPanel", "Custom Nameservers", "24/7 Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: false,
  },
  {
    name: "NVMe Pro",
    price: "$29.5",
    period: "/mo",
    features: ["50 cPanel Accounts", "60GB NVMe SSD Storage", "600GB Bandwidth", "White-Label Branding", "Free SSL Certificates", "WHM + cPanel", "Custom Nameservers", "Priority Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: true,
  },
  {
    name: "NVMe Business",
    price: "$49.5",
    period: "/mo",
    features: ["100 cPanel Accounts", "120GB NVMe SSD Storage", "1.2TB Bandwidth", "White-Label Branding", "Free SSL Certificates", "WHM + cPanel", "Custom Nameservers", "Priority 24/7 Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: false,
  },
  {
    name: "NVMe Enterprise",
    price: "$69.5",
    period: "/mo",
    features: ["Unlimited cPanel Accounts", "250GB NVMe SSD Storage", "Unmetered Bandwidth", "Full White-Label Branding", "Free SSL Certificates", "WHM + cPanel", "Custom Nameservers", "Dedicated Account Manager"],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: false,
  },
];

const COMPARISON = [
  { metric: "Sequential Read", nvme: "7,000 MB/s", sata: "550 MB/s", gain: "12.7X Faster" },
  { metric: "Sequential Write", nvme: "5,000 MB/s", sata: "520 MB/s", gain: "9.6X Faster" },
  { metric: "Random IOPS", nvme: "1,000,000+", sata: "100,000", gain: "10X More" },
  { metric: "Latency", nvme: "~10 μs", sata: "~100 μs", gain: "10X Lower" },
  { metric: "Interface", nvme: "PCIe 4.0 x4", sata: "SATA III", gain: "—" },
];

export default function NvmeSsdResellerPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">⚡ NVMe SSD Reseller Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">NVMe Hosting — 2X Faster Than SSD</h1>
          <p className="text-white/85 text-lg mb-8">Deliver blazing-fast websites to your clients with NVMe PCIe 4.0 storage. Up to 7,000 MB/s read speeds, 1M+ IOPS, and ultra-low latency — all under your own brand.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=1" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5 text-lg">Get NVMe Reseller Hosting 🚀</a>
        </div>
      </section>

      {/* NVMe vs SATA Comparison */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">NVMe vs SATA SSD</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why NVMe Leaves SATA in the Dust</h2>
            <p className="text-gray-600">NVMe PCIe 4.0 delivers up to 12X the throughput of traditional SATA SSDs. Here&apos;s the head-to-head breakdown.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0056A7] text-white">
                  <th className="text-left py-3 px-4 rounded-tl-xl">Metric</th>
                  <th className="text-center py-3 px-4">NVMe PCIe 4.0</th>
                  <th className="text-center py-3 px-4">SATA SSD</th>
                  <th className="text-center py-3 px-4 rounded-tr-xl">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-gray-900">{row.metric}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#00B4D8]">{row.nvme}</td>
                    <td className="py-3 px-4 text-center text-gray-500">{row.sata}</td>
                    <td className="py-3 px-4 text-center font-bold text-green-600">{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIP Reseller Plans */}
      <section className="py-16 px-4" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">VIP NVMe Reseller Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your NVMe Reseller Plan</h2>
            <p className="text-gray-600">All plans include WHM + cPanel, white-label branding, free SSL, and NVMe PCIe 4.0 storage.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ MOST POPULAR</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-4xl font-extrabold text-[#0056A7] mb-1">{plan.price}<span className="text-base font-normal text-gray-500">{plan.period}</span></div>
                <ul className="my-5 space-y-2 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500">✓</span>{f}</li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`text-center py-3 rounded-xl font-bold transition ${plan.popular ? "btn-accent" : "btn-blue"}`}>Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Performance Benefits</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why NVMe Matters for Your Clients</h2>
            <p className="text-gray-600">Faster storage translates directly into better user experience, higher conversions, and improved search rankings.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🚀", title: "Faster Page Loads", desc: "NVMe drives cut page load times dramatically. Serve content at 7,000 MB/s and keep visitors engaged." },
              { icon: "📈", title: "Better SEO Rankings", desc: "Google rewards fast sites. Lower TTFB and faster LCP directly improve your Core Web Vitals scores." },
              { icon: "⚡", title: "Lower TTFB", desc: "Time to First Byte drops to under 100ms with NVMe. Your clients' sites respond almost instantly." },
              { icon: "😊", title: "Happier Customers", desc: "Faster hosting means fewer complaints and higher retention. Your reseller business grows on great performance." },
            ].map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 card-hover text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-5 text-center">
            {[
              { stat: "1M+", label: "Random IOPS" },
              { stat: "~10μs", label: "Avg Latency" },
              { stat: "7 GB/s", label: "Read Throughput" },
            ].map(item => (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-4xl font-extrabold text-[#00B4D8] mb-1">{item.stat}</div>
                <div className="text-gray-600 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Launch Your NVMe Reseller Business Today</h2>
          <p className="text-white/80 mb-8">Give your clients the fastest hosting experience with NVMe PCIe 4.0 storage. White-label ready, fully managed, starting at just $19.5/mo.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=1" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get NVMe Reseller Hosting →</a>
        </div>
      </section>
    </div>
  );
}
