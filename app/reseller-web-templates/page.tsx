import Link from "next/link";

export const metadata = {
  title: "Reseller Web Templates — 10 Free Exclusive Templates | Hostao",
  description:
    "Get 10 free exclusive web hosting templates with every Hostao reseller plan. Fully responsive, WHMCS integrated, white-label ready, and easy to customize.",
};

const TEMPLATES = [
  {
    name: "CloudHost",
    desc: "Clean cloud-hosting theme with bold hero banners and modern pricing tables.",
    color: "bg-cyan-50 border-cyan-200",
    icon: "☁️",
  },
  {
    name: "NexGen",
    desc: "Next-generation dark-mode template built for tech-savvy hosting brands.",
    color: "bg-indigo-50 border-indigo-200",
    icon: "🚀",
  },
  {
    name: "BluePeak",
    desc: "Professional blue-accent design ideal for corporate and enterprise resellers.",
    color: "bg-blue-50 border-blue-200",
    icon: "🏔️",
  },
  {
    name: "TechWave",
    desc: "Dynamic gradient layout with animated sections and conversion-focused CTAs.",
    color: "bg-violet-50 border-violet-200",
    icon: "🌊",
  },
  {
    name: "SwiftHost",
    desc: "Lightweight, speed-optimized template that loads in under 1 second.",
    color: "bg-emerald-50 border-emerald-200",
    icon: "⚡",
  },
  {
    name: "DataPro",
    desc: "Data-center styled theme with server specs display and trust badges.",
    color: "bg-slate-50 border-slate-200",
    icon: "🗄️",
  },
  {
    name: "NetEdge",
    desc: "Minimalist networking theme with clean typography and ample whitespace.",
    color: "bg-teal-50 border-teal-200",
    icon: "🌐",
  },
  {
    name: "ServerX",
    desc: "Bold, high-contrast template designed for VPS and dedicated server sellers.",
    color: "bg-orange-50 border-orange-200",
    icon: "🖥️",
  },
  {
    name: "LaunchPad",
    desc: "Startup-friendly design with onboarding sections and feature highlights.",
    color: "bg-pink-50 border-pink-200",
    icon: "🎯",
  },
  {
    name: "PrimeHost",
    desc: "Premium all-rounder template with testimonials, FAQ, and multi-plan layouts.",
    color: "bg-amber-50 border-amber-200",
    icon: "👑",
  },
];

const FEATURES = [
  {
    icon: "📱",
    title: "Fully Responsive",
    desc: "Every template adapts flawlessly to desktops, tablets, and mobile devices.",
  },
  {
    icon: "📐",
    title: "Mobile-First Design",
    desc: "Built mobile-first so your customers get a great experience on any screen.",
  },
  {
    icon: "⚙️",
    title: "WHMCS Integrated",
    desc: "Seamless integration with WHMCS for automated billing, provisioning, and support.",
  },
  {
    icon: "🏷️",
    title: "White-Label Ready",
    desc: "Your brand, your business — no Hostao branding anywhere on the templates.",
  },
  {
    icon: "🎨",
    title: "Easy CSS Customization",
    desc: "Change colors, fonts, and layouts with simple CSS edits — no coding expertise needed.",
  },
  {
    icon: "🚀",
    title: "Modern & Fast Loading",
    desc: "Optimized assets and clean code ensure lightning-fast page load times.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Sign Up for a Reseller Plan",
    desc: "Choose any Hostao reseller hosting plan — all 10 templates are included free.",
  },
  {
    step: "2",
    title: "Pick Your Template",
    desc: "Browse the 10 exclusive templates and select the one that fits your brand.",
  },
  {
    step: "3",
    title: "Customize & Brand",
    desc: "Add your logo, colors, and content. Edit CSS to match your business identity.",
  },
  {
    step: "4",
    title: "Connect WHMCS & Go Live",
    desc: "Link the template to your WHMCS installation and start selling hosting.",
  },
];

export default function ResellerWebTemplatesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">
            🎨 Reseller Templates
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            10 Free Exclusive Web Hosting Templates
          </h1>
          <p className="text-white/85 text-lg mb-6">
            Every Hostao reseller hosting plan includes 10 professionally
            designed, WHMCS-integrated web templates — fully responsive,
            white-label ready, and built to help you sell hosting from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Get All 10 Templates Free
            </a>
            <Link href="#templates" className="btn-outline-white px-8 py-3.5">
              Preview Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="py-16 px-4" id="templates">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Template Showcase</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              10 Exclusive Templates, Zero Extra Cost
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each template is handcrafted for the hosting industry. Pick one or
              use them all across different brands — they are yours to keep.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {TEMPLATES.map((tpl) => (
              <div
                key={tpl.name}
                className={`rounded-2xl border p-6 text-center card-hover ${tpl.color}`}
              >
                <div className="text-4xl mb-3">{tpl.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {tpl.name}
                </h3>
                <p className="text-sm text-gray-600">{tpl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Template Features</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Built for Resellers, Designed to Convert
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are not generic themes. Every template is purpose-built for
              the web hosting business with features that matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-200 rounded-xl p-6 card-hover"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Go Live in 4 Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From sign-up to selling hosting under your own brand — it only
              takes a few minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0056A7] text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Start Selling Hosting Under Your Brand Today
          </h2>
          <p className="text-white/80 mb-8">
            Get all 10 exclusive templates free with any reseller hosting plan.
            No design costs, no developer fees — just pick a template, add your
            branding, and launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Get Started with Reseller Hosting
            </a>
            <Link href="/reseller-hosting" className="btn-blue px-8 py-3.5">
              View Reseller Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
