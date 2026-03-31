import Link from "next/link";

export const metadata = {
  title: "Website Builders for Reseller Hosting — SitePad & Site.Pro | Hostao",
  description:
    "Offer professional drag-and-drop website builders to your hosting clients. SitePad and Site.Pro included FREE with all Hostao reseller hosting plans.",
};

const SITEPAD_FEATURES = [
  { icon: "🎨", title: "400+ Themes", desc: "Professionally designed themes for every niche — business, portfolio, blog, eCommerce, and more." },
  { icon: "🖱️", title: "Drag & Drop Editor", desc: "Your clients build stunning websites visually — no coding required, no learning curve." },
  { icon: "📈", title: "Built-in SEO Tools", desc: "On-page SEO settings, meta tags, sitemaps, and search-engine-friendly markup out of the box." },
  { icon: "🛒", title: "eCommerce Ready", desc: "Product catalogs, shopping carts, and payment gateways built right into the builder." },
  { icon: "⚙️", title: "cPanel Integrated", desc: "Installs directly inside cPanel so clients can launch a site builder from their hosting dashboard." },
  { icon: "🔒", title: "Free SSL Support", desc: "Every site built with SitePad works seamlessly with AutoSSL and Let's Encrypt certificates." },
];

const SITEPRO_FEATURES = [
  { icon: "🏷️", title: "White-Label Builder", desc: "Rebrand the entire builder with your logo, colors, and domain — clients never see a third-party name." },
  { icon: "📱", title: "200+ Templates", desc: "Mobile-responsive templates optimized for speed, accessibility, and modern design standards." },
  { icon: "📊", title: "Built-in Analytics", desc: "Traffic stats, visitor heatmaps, and conversion tracking without extra plugins or scripts." },
  { icon: "🌐", title: "Mobile Responsive", desc: "Every template and widget adapts flawlessly to phones, tablets, and desktops." },
  { icon: "🔗", title: "One-Click Publish", desc: "Clients go live in seconds — no FTP, no deployment scripts, just publish and done." },
  { icon: "🧩", title: "Widget Library", desc: "Maps, forms, social feeds, image galleries, sliders, and 50+ drag-and-drop widgets." },
];

const COMPARISON = [
  { feature: "Themes / Templates", sitepad: "400+", sitepro: "200+" },
  { feature: "Drag & Drop Editor", sitepad: "✓", sitepro: "✓" },
  { feature: "Mobile Responsive", sitepad: "✓", sitepro: "✓" },
  { feature: "SEO Tools", sitepad: "✓", sitepro: "✓" },
  { feature: "eCommerce Support", sitepad: "✓", sitepro: "✓" },
  { feature: "White-Label Branding", sitepad: "—", sitepro: "✓" },
  { feature: "Built-in Analytics", sitepad: "—", sitepro: "✓" },
  { feature: "cPanel Integration", sitepad: "✓", sitepro: "✓" },
  { feature: "Widget Library", sitepad: "Basic", sitepro: "50+ Widgets" },
  { feature: "Included FREE", sitepad: "✓", sitepro: "✓" },
];

export default function ResellerHostingWebsiteBuildersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">
            🎨 Website Builders
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Drag &amp; Drop Website Builders for Reseller Hosting
          </h1>
          <p className="text-white/85 text-lg mb-6">
            Give your hosting clients the power to build professional websites in minutes.
            SitePad and Site.Pro are included <strong>FREE</strong> with every Hostao reseller plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Get Reseller Hosting
            </a>
            <Link href="#comparison" className="btn-outline-white px-8 py-3.5">
              Compare Builders
            </Link>
          </div>
        </div>
      </section>

      {/* SitePad Section */}
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">SitePad Website Builder</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              400+ Themes. Zero Code. Instant Websites.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SitePad integrates directly into cPanel, letting your clients build and manage
              beautiful websites without ever leaving their hosting dashboard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITEPAD_FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site.Pro Section */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Site.Pro Website Builder</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              White-Label Builder Your Clients Will Love
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Site.Pro lets you offer a fully branded website builder under your own company name.
              200+ responsive templates, built-in analytics, and a powerful widget library included.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SITEPRO_FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-14 px-4" id="comparison">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Side-by-Side Comparison</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              SitePad vs Site.Pro — Feature Comparison
            </h2>
            <p className="text-gray-600">
              Both builders are included free. Choose the one that fits your clients best — or offer both.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-5 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">
                    Feature
                  </th>
                  <th className="text-center px-5 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">
                    SitePad
                  </th>
                  <th className="text-center px-5 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">
                    Site.Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 text-sm text-gray-800 border-b border-gray-100 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3 text-sm text-center border-b border-gray-100">
                      <span className={row.sitepad === "✓" ? "text-green-600 font-bold" : row.sitepad === "—" ? "text-gray-400" : "text-gray-700"}>
                        {row.sitepad}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-center border-b border-gray-100">
                      <span className={row.sitepro === "✓" ? "text-green-600 font-bold" : row.sitepro === "—" ? "text-gray-400" : "text-gray-700"}>
                        {row.sitepro}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">600+ Templates Combined</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              A Template for Every Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From restaurants and real estate to tech startups and online stores — your clients get
              professionally designed, mobile-ready templates across every category.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🏢", label: "Business & Corporate" },
              { icon: "🛍️", label: "eCommerce & Retail" },
              { icon: "📸", label: "Portfolio & Creative" },
              { icon: "🍕", label: "Restaurant & Food" },
              { icon: "🏥", label: "Health & Medical" },
              { icon: "🎓", label: "Education & Courses" },
              { icon: "🏠", label: "Real Estate" },
              { icon: "💻", label: "Technology & SaaS" },
            ].map((cat) => (
              <div
                key={cat.label}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm">{cat.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Start Offering Website Builders to Your Clients Today
          </h2>
          <p className="text-white/80 mb-8">
            SitePad and Site.Pro are included FREE with all Hostao reseller hosting plans.
            No extra licenses, no add-on fees — just powerful builders your clients will love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Get Reseller Hosting Now
            </a>
            <Link href="/reseller-hosting" className="btn-blue px-8 py-3.5">
              View All Reseller Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
