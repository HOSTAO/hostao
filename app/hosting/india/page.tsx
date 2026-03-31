import Link from "next/link";
export const metadata = { title: "India Web Hosting — Fast Mumbai & Delhi Servers | Hostao", description: "India-based web hosting with servers in Mumbai and Delhi. Ultra-low latency for Indian visitors. NVMe SSD, free SSL, cPanel." };
const PLANS = [
  { name: "India Basic", price: "$3", features: ["1GB NVMe SSD","100GB/m Bandwidth","10 Email Accounts","1 Domain","Free SSL","cPanel","99.9% Uptime","24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=40" },
  { name: "India Pro", price: "$4.5", features: ["5GB NVMe SSD","150GB/m Bandwidth","50 Email Accounts","5 Domains","Free SSL","cPanel","99.9% Uptime","Priority Support","Free Domain"], href: "https://my.hostao.com/cart.php?a=add&pid=41", popular: true },
  { name: "India Business", price: "$6", features: ["10GB NVMe SSD","200GB/m Bandwidth","100 Email Accounts","10 Domains","Free SSL","cPanel","99.9% Uptime","Daily Backups","Priority Support","Free Domain"], href: "https://my.hostao.com/cart.php?a=add&pid=42" },
];
export default function IndiaHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">🇮🇳 India Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">India Web Hosting — Mumbai & Delhi Servers</h1>
          <p className="text-white/85 text-lg mb-4">Servers physically located in India mean ultra-low latency for your Indian visitors. Faster load times = better Google rankings in India.</p>
          <p className="text-white/65 text-sm mb-6">Ideal for Indian businesses, e-commerce stores, news portals, and local service companies.</p>
          <a href="#plans" className="btn-accent px-8 py-3.5 text-base">View India Hosting Plans ↓</a>
        </div>
      </section>
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5 text-center">
          {[["🌐","Indian IP Address","Indian server IPs improve local search rankings on Google.in"],["⚡","< 10ms Latency","Server in India = blazing fast load times for Indian visitors."],["💳","INR Billing","Pay in Indian Rupees. No currency conversion fees."]].map(([i,t,d]) => (
            <div key={t} className="p-6 border border-gray-200 rounded-xl card-hover">
              <div className="text-3xl mb-2">{i}</div>
              <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
              <p className="text-gray-500 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12"><span className="section-label">India Hosting Plans</span><h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your India Hosting Plan</h2><p className="text-gray-600">Mumbai & Delhi data centers. All plans include NVMe SSD, free SSL, cPanel.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`relative flex flex-col rounded-2xl p-7 bg-white transition-all ${"popular" in plan && plan.popular ? "border-2 border-[#0056A7] plan-popular" : "border border-gray-200 card-hover"}`}>
                {"popular" in plan && plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0056A7] text-white text-xs font-bold px-5 py-1.5 rounded-full">✦ Most Popular</div>}
                <div className="text-5xl font-extrabold text-[#171734] mb-1">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
                <div className="font-bold text-lg text-gray-900 mt-2 mb-5 pb-4 border-b border-gray-100">{plan.name}</div>
                <ul className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map(f => (<li key={f} className="flex items-start gap-2.5 text-sm"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg><span className="text-gray-700">{f}</span></li>))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center py-3">Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Best Hosting for Indian Websites</h2>
          <p className="text-white/80 mb-6">Local server. Fast speeds. 30-day money-back guarantee.</p>
          <Link href="/contact" className="bg-white text-[#0056A7] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 text-sm inline-block">Talk to Sales</Link>
        </div>
      </section>
    </div>
  );
}
