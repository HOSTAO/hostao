import Link from "next/link";

export const metadata = {
  title: "Cheap Reseller Hosting — Budget Plans from $7/mo | Hostao",
  description: "Affordable reseller hosting starting at just $7/mo. Full WHM + cPanel, white-label branding, and NVMe SSD storage. Best budget reseller hosting.",
};

const PLANS = [
  {
    name: "Starter Reseller",
    price: "$7",
    period: "/mo",
    features: ["2GB RAM / 1 CPU Core", "20GB NVMe SSD", "1 Dedicated IP", "1TB Bandwidth", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "24/7 Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=7",
    popular: true,
  },
  {
    name: "Pro Reseller",
    price: "$14",
    period: "/mo",
    features: ["4GB RAM / 2 CPU Cores", "50GB NVMe SSD", "2 Dedicated IPs", "3TB Bandwidth", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "Priority Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=8",
    popular: false,
  },
  {
    name: "Business Reseller",
    price: "$25",
    period: "/mo",
    features: ["8GB RAM / 4 CPU Cores", "100GB NVMe SSD", "5 Dedicated IPs", "Unlimited Bandwidth", "WHM + cPanel", "Full White-Label", "Custom Nameservers", "Free SSL", "Priority 24/7 Support"],
    href: "https://my.hostao.com/cart.php?a=add&pid=9",
    popular: false,
  },
];

export default function CheapResellerHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">💰 Budget Reseller Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Cheap Reseller Hosting Starting at $7/mo</h1>
          <p className="text-white/85 text-lg mb-8">The most affordable way to start your own hosting business. Full WHM + cPanel, white-label branding, NVMe SSD storage — all at prices that won&apos;t break the bank.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5 text-lg">Get Started for $7/mo 🚀</a>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why Choose Budget Reseller Hosting?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Affordable Doesn&apos;t Mean Compromised</h2>
            <p className="text-gray-600">Get enterprise-grade features at prices designed for startups and freelancers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "💵", title: "From $7/mo", desc: "Start your hosting business for less than a coffee per day. No hidden fees." },
              { icon: "🏷️", title: "White-Label", desc: "Full white-label branding. Your logo, your domain, your pricing." },
              { icon: "⚡", title: "NVMe SSD", desc: "Fast NVMe SSD storage on all plans, even budget ones." },
              { icon: "🔧", title: "WHM + cPanel", desc: "Industry-standard control panels included on every plan." },
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
            <span className="section-label">Budget-Friendly Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Reseller Plan</h2>
            <p className="text-gray-600">All plans include WHM + cPanel and white-label support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ BEST VALUE</div>}
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

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your Hosting Business Today</h2>
          <p className="text-white/80 mb-8">Join thousands of resellers who trust Hostao. Cheap reseller hosting that delivers real value.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get Cheap Reseller Hosting →</a>
        </div>
      </section>
    </div>
  );
}
