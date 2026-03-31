import Link from "next/link";

export const metadata = {
  title: "Multi-Location Reseller Hosting — Global Data Centers | Hostao",
  description: "Reseller hosting across multiple global data centers. Choose USA, UK, Singapore, Germany, India, Australia and more. WHM + cPanel, white-label from $7/mo.",
};

const LOCATIONS = [
  { flag: "🇺🇸", name: "USA", cities: "Dallas, New York", href: "/usa-reseller-hosting" },
  { flag: "🇬🇧", name: "UK / Europe", cities: "London", href: "/europe-uk-reseller-hosting" },
  { flag: "🇸🇬", name: "Singapore", cities: "Singapore", href: "/singapore-reseller-hosting" },
  { flag: "🇩🇪", name: "Germany", cities: "Frankfurt", href: "/german-reseller-hosting" },
  { flag: "🇳🇱", name: "Netherlands", cities: "Amsterdam", href: "/netherlands-reseller-hosting" },
  { flag: "🇨🇦", name: "Canada", cities: "Toronto", href: "/canada-reseller-hosting" },
  { flag: "🇮🇳", name: "India", cities: "Mumbai, Delhi", href: "/indian-reseller-hosting" },
  { flag: "🇭🇰", name: "China/HK", cities: "Hong Kong", href: "/china-reseller-hosting" },
  { flag: "🇦🇺", name: "Australia", cities: "Sydney", href: "/australian-reseller-hosting" },
  { flag: "🇿🇦", name: "South Africa", cities: "Johannesburg", href: "/south-africa-reseller-hosting" },
];

const PLANS = [
  { name: "Multi-DC Starter", price: "$7", period: "/mo", features: ["2GB RAM / 1 CPU Core", "20GB NVMe SSD", "1 Dedicated IP", "1TB Bandwidth", "Choose 1 Location", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=7", popular: false },
  { name: "Multi-DC Pro", price: "$14", period: "/mo", features: ["4GB RAM / 2 CPU Cores", "50GB NVMe SSD", "2 Dedicated IPs", "3TB Bandwidth", "Choose Any Location", "WHM + cPanel", "White-Label Option", "WHMCS Compatible", "Free SSL", "Priority Support"], href: "https://my.hostao.com/cart.php?a=add&pid=8", popular: true },
  { name: "Multi-DC Business", price: "$25", period: "/mo", features: ["8GB RAM / 4 CPU Cores", "100GB NVMe SSD", "5 Dedicated IPs", "Unlimited Bandwidth", "Multi-Location Hosting", "WHM + cPanel", "Full White-Label", "Custom Nameservers", "Free SSL", "Priority 24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=9", popular: false },
];

export default function MultiLocationResellerPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🌍 Multi-Location Reseller</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Multi-Location Reseller Hosting — 10+ Global DCs</h1>
          <p className="text-white/85 text-lg mb-8">Serve clients worldwide with reseller hosting across 10+ data centers. USA, UK, Singapore, Germany, India, Australia, and more. One account, global reach. From $7/mo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Get Global Reseller 🌍</a>
            <Link href="#locations" className="btn-outline-white px-8 py-3.5">View Locations</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50" id="locations">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Our Global Network</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">10+ Data Centers Worldwide</h2>
            <p className="text-gray-600">Choose the location closest to your clients for maximum performance.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS.map(loc => (
              <Link key={loc.name} href={loc.href} className="bg-white border border-gray-200 rounded-xl p-4 card-hover text-center hover:border-[#0056A7] transition">
                <div className="text-3xl mb-2">{loc.flag}</div>
                <div className="font-bold text-gray-900 text-sm">{loc.name}</div>
                <div className="text-gray-500 text-xs mt-1">{loc.cities}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="plans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Global Reseller Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Multi-Location Plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border p-7 flex flex-col ${plan.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {plan.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ MOST POPULAR</div>}
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

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Go Global with Hostao Reseller Hosting</h2>
          <p className="text-white/80 mb-8">10+ locations, white-label branding, WHM + cPanel. The world&apos;s best multi-location reseller hosting.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start Multi-Location Reseller →</a>
        </div>
      </section>
    </div>
  );
}
