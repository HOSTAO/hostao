import Link from "next/link";

export const metadata = {
  title: "SSL Reseller Account — Resell SSL Certificates | Hostao",
  description:
    "Start reselling SSL certificates from trusted CAs like Comodo, Sectigo, and RapidSSL. White-label SSL reseller program included FREE with Hostao reseller hosting. DV, OV, and EV certificates from $10/year.",
};

const SSL_TYPES = [
  {
    icon: "🔒",
    name: "Domain Validation (DV)",
    desc: "The fastest and most affordable SSL type. Validates domain ownership only. Ideal for blogs, personal sites, and small businesses. Issued in minutes.",
    use: "Blogs, portfolios, small sites",
  },
  {
    icon: "🏢",
    name: "Organization Validation (OV)",
    desc: "Validates both domain ownership and organization identity. Displays verified company details in the certificate. Trusted by businesses and e-commerce stores.",
    use: "E-commerce, business websites",
  },
  {
    icon: "🛡️",
    name: "Extended Validation (EV)",
    desc: "The highest level of SSL trust. Requires thorough vetting of the organization. Shows the company name in the browser bar. Essential for banks, fintech, and enterprise.",
    use: "Banks, fintech, enterprise portals",
  },
];

const RESELLER_PLANS = [
  {
    name: "SSL Starter",
    price: "$10",
    period: "/year",
    features: [
      "5 DV SSL Certificates",
      "Comodo & RapidSSL Brands",
      "White-Label Provisioning",
      "Automated Issuance",
      "WHMCS Integration",
      "Reseller Control Panel",
      "Email Support",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: false,
  },
  {
    name: "SSL Business",
    price: "$49",
    period: "/year",
    features: [
      "25 DV + OV Certificates",
      "Comodo, Sectigo & RapidSSL",
      "White-Label Provisioning",
      "Automated Issuance & Renewal",
      "WHMCS Integration",
      "Reseller Control Panel",
      "Priority Support",
      "Custom Pricing Control",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: true,
  },
  {
    name: "SSL Enterprise",
    price: "$99",
    period: "/year",
    features: [
      "Unlimited DV + OV + EV Certs",
      "All Trusted CA Brands",
      "White-Label Provisioning",
      "Automated Issuance & Renewal",
      "WHMCS + API Integration",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Volume Discount Pricing",
    ],
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
    popular: false,
  },
];

const BENEFITS = [
  {
    icon: "🏷️",
    title: "100% White-Label",
    desc: "Sell SSL certificates under your own brand. Your customers never see Hostao — it's your business, your identity.",
  },
  {
    icon: "⚡",
    title: "Automated Provisioning",
    desc: "Certificates are issued and renewed automatically via WHMCS and API. Zero manual work for you or your clients.",
  },
  {
    icon: "💰",
    title: "High Profit Margins",
    desc: "Buy at wholesale reseller rates and set your own retail pricing. Keep 100% of the markup on every certificate sold.",
  },
  {
    icon: "🔐",
    title: "Trusted Certificate Authorities",
    desc: "Offer certificates from industry-leading CAs — Comodo, Sectigo, and RapidSSL — trusted by all major browsers.",
  },
  {
    icon: "🔧",
    title: "WHMCS Integration",
    desc: "Seamless integration with WHMCS billing. Automate ordering, provisioning, renewals, and invoicing out of the box.",
  },
  {
    icon: "📈",
    title: "Scale Without Limits",
    desc: "Start with a few certificates and grow to thousands. Our infrastructure handles the volume so you can focus on sales.",
  },
];

export default function SSLResellerAccountPage() {
  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">
            🔒 SSL Reseller
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Resell SSL Certificates &amp; Grow Your Business
          </h1>
          <p className="text-white/85 text-lg mb-3">
            Start selling trusted SSL certificates from <strong>$10/year</strong>. White-label reseller program included{" "}
            <strong>FREE</strong> with every Hostao Reseller Hosting plan.
          </p>
          <p className="text-white/70 text-sm mb-8">
            Offer DV, OV, and EV certificates from Comodo, Sectigo, and RapidSSL under your own brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Start Reselling SSL Now
            </a>
            <Link href="#ssl-plans" className="btn-outline-white px-8 py-3.5">
              View Reseller Plans
            </Link>
          </div>
        </div>
      </section>

      {/* ── SSL TYPES ────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">SSL Certificate Types</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Understand the SSL Certificates You Can Resell
            </h2>
            <p className="text-gray-600">
              Each validation level serves a different market — offer the right certificate for every customer need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SSL_TYPES.map((type) => (
              <div
                key={type.name}
                className="bg-white border border-gray-200 rounded-xl p-6 card-hover"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{type.desc}</p>
                <div className="text-xs font-semibold text-[#0056A7] bg-blue-50 rounded-full px-3 py-1 inline-block">
                  Best for: {type.use}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESELLER PLANS ───────────────────────────────────── */}
      <section className="py-16 px-4" id="ssl-plans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Reseller Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Choose Your SSL Reseller Tier
            </h2>
            <p className="text-gray-600">
              All plans include white-label support, WHMCS integration, and certificates from trusted CAs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESELLER_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  plan.popular ? "plan-popular" : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold text-orange-600 bg-orange-100 rounded-full px-3 py-1 mb-3 self-start">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-[#0056A7]">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <ul className="my-4 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 rounded-xl font-bold transition ${
                    plan.popular ? "btn-accent" : "btn-blue"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            SSL Reseller Program is included <strong>FREE</strong> with all Hostao Reseller Hosting plans.
          </p>
        </div>
      </section>

      {/* ── BENEFITS OF RESELLING SSL ────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why Resell SSL</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Benefits of Reselling SSL Certificates
            </h2>
            <p className="text-gray-600">
              Add a high-margin, recurring revenue stream to your hosting business with zero overhead.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((item) => (
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your SSL Reseller Business?
          </h2>
          <p className="text-white/80 mb-8">
            Get the SSL Reseller Program free with any Hostao Reseller Hosting plan. Start selling DV, OV, and EV certificates from Comodo, Sectigo, and RapidSSL today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://my.hostao.com/cart.php?a=add&pid=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-8 py-3.5"
            >
              Get Reseller Hosting + Free SSL Reseller
            </a>
            <Link href="/contact" className="btn-outline-white px-8 py-3.5">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
