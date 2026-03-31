import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";

export const metadata = {
  title: "VPS Dedicated Server Reseller Deal — 50% Off | Hostao",
  description: "Limited-time 50% off reseller hosting deal. Start your VPS/dedicated reseller business with WHM + cPanel + white-label from just $7/mo.",
};

const DEAL_PLANS = [
  {
    name: "Starter Reseller Deal",
    oldPrice: "$14",
    price: "$7",
    period: "/mo",
    features: [
      "2GB RAM / 1 CPU Core",
      "20GB NVMe SSD",
      "1 Dedicated IP",
      "WHM + cPanel Included",
      "White-Label Reseller",
      "WHMCS Compatible",
      "Free SSL",
      "24/7 Support",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=7",
    popular: true,
  },
  {
    name: "Pro Reseller Deal",
    oldPrice: "$28",
    price: "$14",
    period: "/mo",
    features: [
      "4GB RAM / 2 CPU Cores",
      "50GB NVMe SSD",
      "2 Dedicated IPs",
      "WHM + cPanel Included",
      "White-Label Reseller",
      "WHMCS Compatible",
      "Priority Support",
      "Free SSL for Client Accounts",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=8",
    popular: false,
  },
  {
    name: "Business Reseller Deal",
    oldPrice: "$50",
    price: "$25",
    period: "/mo",
    features: [
      "8GB RAM / 4 CPU Cores",
      "100GB NVMe SSD",
      "5 Dedicated IPs",
      "WHM + cPanel Included",
      "Full White-Label + Nameservers",
      "WHMCS Compatible",
      "Priority 24/7 Support",
      "Free SSL for All Accounts",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=9",
    popular: false,
  },
];

export default function VPSDedicatedServerResellerPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🔥 Limited Reseller Deal</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">50% OFF VPS & Dedicated Server Reseller Hosting</h1>
            <p className="text-white/85 text-lg mb-6">Launch your own hosting business with white-label reseller plans powered by NVMe infrastructure. WHM + cPanel included. Start at just <strong>$7/mo</strong>.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Claim 50% Off Now 🚀</a>
              <Link href="#deal-plans" className="btn-outline-white px-8 py-3.5">View Deal Plans</Link>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Offer Ends In</div>
            <CountdownTimer className="text-4xl font-extrabold text-yellow-300 font-mono" />
            <div className="text-white/60 text-xs mt-3">*Limited-time offer for new reseller accounts</div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why This Deal Matters</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Start a Hosting Business at Half the Cost</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "💸", title: "50% Launch Discount", desc: "Cut startup costs and invest savings into sales and marketing." },
              { icon: "🏷️", title: "100% White-Label", desc: "Sell hosting under your brand with custom nameservers and branding." },
              { icon: "⚙️", title: "WHM + cPanel", desc: "Industry-standard tools to create and manage client hosting accounts." },
              { icon: "📈", title: "Scale to VPS & Dedicated", desc: "Start with reseller and expand to VPS/dedicated offerings as you grow." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="deal-plans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Deal Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pick Your 50% Off Reseller Plan</h2>
            <p className="text-gray-600">All plans include WHM + cPanel, white-label support, and global-ready infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {DEAL_PLANS.map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ BEST DEAL</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-gray-400 line-through text-lg mr-2">{plan.oldPrice}</span>
                  <span className="text-4xl font-extrabold text-[#0056A7]">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <div className="text-xs font-semibold text-green-700 bg-green-100 rounded-full px-2.5 py-1 inline-block mb-4">You save 50%</div>
                <ul className="my-4 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`text-center py-3 rounded-xl font-bold transition ${plan.popular ? "btn-accent" : "btn-blue"}`}>
                  Claim Deal
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Reseller Brand?</h2>
          <p className="text-white/80 mb-8">This 50% off reseller offer is limited. Lock in your pricing now and launch your hosting business today.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Claim 50% Off →</a>
        </div>
      </section>
    </div>
  );
}
