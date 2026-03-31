import Link from "next/link";

export const metadata = {
  title: "Web Design & Development Services | Hostao",
  description: "Professional web design and development services. Custom websites, e-commerce, WordPress, and web applications. Get a stunning website that converts.",
};

const SERVICES = [
  { icon: "🎨", title: "Custom Web Design", desc: "Beautiful, brand-aligned websites designed from scratch. Mobile-first, conversion-focused design." },
  { icon: "⚛️", title: "Web Application Development", desc: "Scalable React, Next.js, and Node.js web applications. API integrations and custom solutions." },
  { icon: "🛒", title: "E-Commerce Development", desc: "WooCommerce, Shopify, and custom e-commerce solutions. Payment gateways, inventory management." },
  { icon: "📝", title: "WordPress Development", desc: "Custom WordPress themes and plugins. Migration, optimization, and maintenance." },
  { icon: "📱", title: "Mobile-Responsive Design", desc: "Every site we build looks perfect on phones, tablets, and desktops." },
  { icon: "🔍", title: "SEO-Ready Builds", desc: "Sites built with technical SEO best practices from day one. Fast load times, proper markup." },
];

const PACKAGES = [
  { name: "Starter Website", price: "$499", features: ["Up to 5 Pages", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "1 Round of Revisions", "1 Month Support", "Hosting Setup"], popular: false },
  { name: "Business Website", price: "$999", features: ["Up to 15 Pages", "Custom Design", "Blog / CMS", "SEO Optimization", "Contact & Lead Forms", "3 Rounds of Revisions", "3 Months Support", "Hosting + Domain"], popular: true },
  { name: "E-Commerce Store", price: "$1,999", features: ["Full Online Store", "Product Catalog", "Payment Gateway", "Order Management", "Mobile Optimized", "SEO Setup", "5 Rounds of Revisions", "6 Months Support"], popular: false },
];

export default function WebDesignAndDevelopmentPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🎨 Web Design & Development</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Professional Web Design & Development</h1>
          <p className="text-white/85 text-lg mb-8">From landing pages to full e-commerce platforms — we build websites that look stunning, load fast, and convert visitors into customers. Your vision, our expertise.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-accent px-8 py-3.5">Get a Free Quote 🚀</Link>
            <Link href="#packages" className="btn-outline-white px-8 py-3.5">View Packages</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(item => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="packages">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Packages</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Web Design Packages</h2>
            <p className="text-gray-600">Fixed-price packages for common needs. Custom quotes available for unique projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div key={pkg.name} className={`rounded-2xl border p-7 flex flex-col ${pkg.popular ? "plan-popular" : "border-gray-200 bg-white"}`}>
                {pkg.popular && <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">⭐ MOST POPULAR</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <div className="text-4xl font-extrabold text-[#0056A7] mb-1">
                  {pkg.price}<span className="text-base font-normal text-gray-500"> one-time</span>
                </div>
                <ul className="my-5 space-y-2 flex-1">
                  {pkg.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
                <Link href="/contact" className={`text-center py-3 rounded-xl font-bold transition ${pkg.popular ? "btn-accent" : "btn-blue"}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Our Process</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Work</h2>
          </div>
          <div className="grid sm:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Design", desc: "We create wireframes and design mockups for your approval." },
              { step: "03", title: "Build", desc: "We develop your site with clean code and best practices." },
              { step: "04", title: "Launch", desc: "We deploy, test, and hand over your fully functional website." },
            ].map(item => (
              <div key={item.step} className="text-center bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-3xl font-extrabold text-[#0056A7] mb-2">{item.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-white/80 mb-8">Get a free consultation and quote for your web design project. We build websites that grow businesses.</p>
          <Link href="/contact" className="btn-accent px-8 py-3.5">Get Free Quote →</Link>
        </div>
      </section>
    </div>
  );
}
