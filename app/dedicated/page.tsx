import Link from "next/link";
export const metadata = {
  title: "Dedicated Servers | Bare Metal Performance & Full Root Access | Hostao",
  description: "Enterprise dedicated servers with Intel Xeon CPUs, DDR4 ECC RAM, NVMe SSD, DDoS protection, and full root access. Starting at $49/month. Ideal for high-traffic websites and mission-critical apps.",
  keywords: ["dedicated servers", "dedicated server hosting", "bare metal server", "managed dedicated server", "enterprise hosting"],
  alternates: { canonical: "https://hostao.com/dedicated" },
  openGraph: {
    title: "Dedicated Servers | Bare Metal Hosting | Hostao",
    description: "Enterprise-grade dedicated servers with full root access, DDoS protection, and NVMe storage.",
    url: "https://hostao.com/dedicated",
  }
};
const SERVERS = [
  { name: "DS Starter", cpu: "Intel Xeon E-2134", ram: "16GB DDR4 ECC", ssd: "480GB SSD", bandwidth: "10TB", ip: "1 IPv4", price: "$49", href: "https://my.hostao.com/cart.php?a=add&pid=60" },
  { name: "DS Pro", cpu: "Intel Xeon E-2274G", ram: "32GB DDR4 ECC", ssd: "2× 480GB SSD RAID", bandwidth: "20TB", ip: "4 IPv4", price: "$89", href: "https://my.hostao.com/cart.php?a=add&pid=61", popular: true },
  { name: "DS Enterprise", cpu: "Dual Intel Xeon Silver", ram: "64GB DDR4 ECC", ssd: "2× 1TB NVMe RAID", bandwidth: "Unmetered", ip: "8 IPv4", price: "$179", href: "https://my.hostao.com/cart.php?a=add&pid=62" },
];
export default function DedicatedPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">⚙️ Dedicated Servers</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">100% Dedicated Server Power</h1>
          <p className="text-white/85 text-lg mb-6">Your own physical server. No noisy neighbors. Full root access. Maximum performance for enterprise workloads, high-traffic apps, and mission-critical websites.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#servers" className="btn-accent px-8 py-3.5">View Servers ↓</a>
            <Link href="/contact" className="btn-outline-white px-8 py-3.5">Custom Configuration</Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {[["💯","Bare Metal","Dedicated hardware, zero virtualization overhead."],["🔐","Full Root Access","Complete server control. Install any OS or software."],["⚡","NVMe Storage","Enterprise NVMe drives for maximum disk performance."],["🛡️","DDoS Protected","Enterprise DDoS mitigation included on all servers."]].map(([i,t,d]) => (
            <div key={t} className="p-5 border border-gray-200 rounded-xl card-hover">
              <div className="text-3xl mb-2">{i}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{t}</h3>
              <p className="text-gray-500 text-xs">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50" id="servers">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12"><span className="section-label">Dedicated Plans</span><h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Dedicated Server</h2><p className="text-gray-600">Need a custom config? <Link href="/contact" className="text-[#0056A7] hover:underline">Contact our team</Link> for a tailored quote.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVERS.map(s => (
              <div key={s.name} className={`relative flex flex-col rounded-2xl p-7 bg-white transition-all ${"popular" in s && s.popular ? "border-2 border-[#0056A7] plan-popular" : "border border-gray-200 card-hover"}`}>
                {"popular" in s && s.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0056A7] text-white text-xs font-bold px-5 py-1.5 rounded-full">✦ Most Popular</div>}
                <div className="text-4xl font-extrabold text-[#171734] mb-1">{s.price}<span className="text-lg text-gray-400">/mo</span></div>
                <div className="font-bold text-lg text-gray-900 mt-2 mb-5 pb-4 border-b border-gray-100">{s.name}</div>
                <div className="space-y-3 mb-7 flex-1">
                  {[["⚙️","CPU",s.cpu],["🧠","RAM",s.ram],["💾","Storage",s.ssd],["🌐","Bandwidth",s.bandwidth],["🔌","IPs",s.ip]].map(([icon,label,val]) => (
                    <div key={label} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500 flex items-center gap-1.5">{icon} {label}</span>
                      <span className="font-semibold text-gray-900 text-xs text-right max-w-[55%]">{val}</span>
                    </div>
                  ))}
                </div>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center py-3">Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#171734] text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Need a Custom Dedicated Server?</h2>
          <p className="text-white/70 mb-5 text-sm">Custom RAM, CPU, storage, and bandwidth. Enterprise pricing available for multi-server orders.</p>
          <Link href="/contact" className="btn-accent px-8 py-3">Get Custom Quote</Link>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "Dedicated Servers", "item": "https://hostao.com/dedicated" }
        ]
      }) }} />
    </div>
  );
}
