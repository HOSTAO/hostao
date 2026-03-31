import Link from "next/link";
export const metadata = { title: "White Label Hosting — Sell Under Your Brand | Hostao", description: "Full white-label hosting with your brand name, logo, custom nameservers, and WHMCS integration. Built on Hostao infrastructure." };
export default function WhiteLabelPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">🏷️ White Label Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Your Brand. Our Infrastructure.</h1>
          <p className="text-white/85 text-lg mb-6">Sell hosting under your own brand name. Custom nameservers, your logo, your pricing — powered by Hostao&apos;s rock-solid infrastructure. Your clients will never know we exist.</p>
          <Link href="/reseller" className="btn-accent px-8 py-3.5 text-base">View Reseller Plans →</Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12"><span className="section-label">White Label Features</span><h2 className="text-3xl font-bold text-gray-900 mb-3">Everything You Need to Run Your Own Hosting Brand</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["🏷️","Custom Nameservers","ns1.yourbrand.com and ns2.yourbrand.com — your brand on every domain."],
              ["🎨","Your Branding","Logo, colors, and company name throughout cPanel and client areas."],
              ["💳","WHMCS Integration","Connect your own WHMCS billing system with our servers seamlessly."],
              ["📧","Branded Email","Send hosting emails from your@yourbrand.com domain."],
              ["🔒","Private Infrastructure","Clients only ever see your brand name. Hostao stays invisible."],
              ["📈","Set Your Own Prices","You decide what to charge. Keep 100% of your markup as profit."],
            ].map(([i,t,d]) => (
              <div key={t} className="border border-gray-200 rounded-xl p-6 card-hover hover:border-[#0056A7]/30">
                <div className="text-3xl mb-3">{i}</div>
                <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Hosting Brand?</h2>
          <p className="text-white/80 mb-6">Get started with our reseller plan and full white-label setup support.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/reseller" className="bg-white text-[#0056A7] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 text-sm">View Reseller Plans</Link>
            <Link href="/contact" className="btn-outline-white px-8 py-3.5 text-sm">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
