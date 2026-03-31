import Link from "next/link";

export const metadata = {
  title: "Exclusive Hosting Offers & Deals | Hostao",
  description: "Exclusive hosting deals and promotions. Save on reseller hosting, VPS, dedicated servers, and domain registration. Limited time offers.",
};

const OFFERS = [
  { badge: "🔥 HOT DEAL", title: "50% Off Reseller Hosting", desc: "Start your hosting business at half price. WHM + cPanel + white-label from $7/mo.", saving: "Save 50%", href: "/reseller", cta: "Claim Deal", color: "bg-orange-50 border-orange-200" },
  { badge: "⚡ LIMITED", title: "Free Domain with Hosting", desc: "Get a free .com domain when you sign up for any annual hosting plan.", saving: "Save $12", href: "/hosting", cta: "Get Free Domain", color: "bg-blue-50 border-blue-200" },
  { badge: "🚀 NEW", title: "VPS Hosting from $12/mo", desc: "NVMe SSD VPS with dedicated resources, root access across 5 global locations.", saving: "From $12/mo", href: "/vps", cta: "Get VPS", color: "bg-green-50 border-green-200" },
  { badge: "💰 BEST VALUE", title: "Reseller + Domain Bundle", desc: "Reseller hosting + domain + SSL. Everything to launch your hosting business.", saving: "Bundle Savings", href: "/reseller", cta: "View Bundle", color: "bg-purple-50 border-purple-200" },
  { badge: "🌍 GLOBAL", title: "Multi-Location Reseller", desc: "Serve clients worldwide from 10+ data centers. Same price, global reach.", saving: "Global Coverage", href: "/multi-location-reseller", cta: "Go Global", color: "bg-teal-50 border-teal-200" },
  { badge: "🖥️ DEDICATED", title: "Dedicated Servers from $49", desc: "Bare-metal power with full root access. US, UK, Singapore locations.", saving: "From $49/mo", href: "/usa-dedicated-servers", cta: "Get Dedicated", color: "bg-gray-50 border-gray-200" },
];

export default function OffersPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🎉 Exclusive Offers</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Exclusive Hosting Deals & Offers</h1>
          <p className="text-white/85 text-lg mb-8">Best prices on reseller hosting, VPS, dedicated servers, and domains. Limited-time promotions updated regularly. Don&apos;t miss out.</p>
          <Link href="/latest-offers" className="btn-accent px-8 py-3.5">See Latest Offers 🔥</Link>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Current Promotions</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Active Hosting Deals</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map(offer => (
              <div key={offer.title} className={`rounded-2xl border p-6 card-hover flex flex-col ${offer.color}`}>
                <div className="text-xs font-bold text-gray-700 mb-3">{offer.badge}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-1">{offer.desc}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#0056A7] font-bold text-sm">{offer.saving}</span>
                  <Link href={offer.href} className="btn-blue text-sm px-4 py-2">{offer.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label">Stay Updated</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Never Miss a Deal</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter and be the first to know about new offers, flash sales, and promotions.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email..." className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0056A7]" />
            <button className="btn-blue px-6 py-3 whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Saving Today</h2>
          <p className="text-white/80 mb-8">Claim your exclusive hosting deal before they expire. Best prices guaranteed.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Claim Offer Now →</a>
        </div>
      </section>
    </div>
  );
}
