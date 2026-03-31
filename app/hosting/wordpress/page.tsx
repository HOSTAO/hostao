import Link from "next/link";
export const metadata = { title: "WordPress Hosting — Optimized & Fast | Hostao", description: "Managed WordPress hosting with auto-updates, staging, caching, and one-click install. From $4/mo." };
const PLANS = [
  { name: "WP Starter", price: "$4", features: ["1 WordPress Site","10GB NVMe SSD","Free SSL","WordPress Auto-Updates","1-Click Install","LiteSpeed Cache","Daily Backups","24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=30" },
  { name: "WP Pro", price: "$7", features: ["5 WordPress Sites","30GB NVMe SSD","Free SSL","WordPress Auto-Updates","Staging Environment","LiteSpeed Cache + CDN","Daily Backups","Priority Support","Free Domain (1 Year)"], href: "https://my.hostao.com/cart.php?a=add&pid=31", popular: true },
  { name: "WP Business", price: "$12", features: ["Unlimited WP Sites","100GB NVMe SSD","Free SSL","WordPress Auto-Updates","Staging Environment","LiteSpeed Cache + CDN","Daily Backups","Malware Removal","Priority Support","Free Domain (1 Year)"], href: "https://my.hostao.com/cart.php?a=add&pid=32" },
];
export default function WordpressHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">🔵 WordPress Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">WordPress Hosting Built for Speed</h1>
          <p className="text-white/85 text-lg mb-6">LiteSpeed server + NVMe SSD + WordPress-optimized stack = Google Core Web Vitals scores your competitors can only dream of.</p>
          <a href="#plans" className="btn-accent px-8 py-3.5 text-base">View WordPress Plans ↓</a>
        </div>
      </section>
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[["🚀","1-Click Install","WordPress running in 60 seconds."],["🔒","Auto SSL","HTTPS enabled automatically."],["🔄","Auto Updates","WordPress core always up-to-date."],["🧪","Staging","Test changes before going live."]].map(([i,t,d]) => (
            <div key={t} className="text-center p-5 border border-gray-200 rounded-xl card-hover">
              <div className="text-3xl mb-2">{i}</div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{t}</h3>
              <p className="text-gray-500 text-xs">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12"><span className="section-label">WordPress Plans</span><h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your WordPress Hosting Plan</h2></div>
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
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Your WordPress Site Deserves Better Hosting</h2>
          <p className="text-white/80 mb-6">Free migration. 30-day money-back guarantee. Start today.</p>
          <Link href="/contact" className="bg-white text-[#0056A7] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 text-sm inline-block">Request Free Migration</Link>
        </div>
      </section>
    </div>
  );
}
