import Link from "next/link";
import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Google Workspace for Business India | Authorized Reseller | Hostao",
  description: "Buy Google Workspace (formerly G Suite) for your business in India. Authorized Google reseller with INR billing, GST invoice, free migration & 24/7 support. Business Starter from ₹125/user/month.",
  keywords: ["google workspace india", "gsuite india", "google workspace reseller india", "business email india", "google workspace pricing india", "buy google workspace"],
  alternates: { canonical: "https://hostao.com/google-workspace" },
  openGraph: {
    title: "Google Workspace India — Authorized Reseller | Hostao",
    description: "Professional business email + Google Meet, Drive, Docs & more. INR billing, GST invoice, free migration.",
    url: "https://hostao.com/google-workspace",
  }
};

const PLANS = [
  {
    name: "Business Starter",
    price: "₹125",
    priceNote: "/user/month (annual)",
    highlight: false,
    tag: null,
    users: "1–300 users",
    storage: "30 GB pooled storage/user",
    features: [
      "Custom business email (@yourcompany.com)",
      "Google Meet (100 participants, 1hr limit)",
      "Google Drive, Docs, Sheets, Slides",
      "Google Calendar (shared)",
      "Gmail with 99.9% uptime SLA",
      "Basic security & admin controls",
      "24/7 Hostao support in India",
      "INR billing + GST invoice",
    ],
    cta: "Get Started",
    href: "https://my.hostao.com/cart.php?a=add&pid=google-ws-starter",
  },
  {
    name: "Business Standard",
    price: "₹672",
    priceNote: "/user/month (annual)",
    highlight: true,
    tag: "Most Popular",
    users: "1–300 users",
    storage: "2 TB pooled storage/user",
    features: [
      "Everything in Business Starter",
      "Google Meet (150 participants, recording)",
      "2 TB Google Drive per user",
      "Noise cancellation in Meet",
      "eSignature (20 requests/month)",
      "Shared drives for teams",
      "Appointment booking pages",
      "Advanced spam protection",
    ],
    cta: "Get Business Standard",
    href: "https://my.hostao.com/cart.php?a=add&pid=google-ws-standard",
  },
  {
    name: "Business Plus",
    price: "₹1,260",
    priceNote: "/user/month (annual)",
    highlight: false,
    tag: "Best for Teams",
    users: "1–300 users",
    storage: "5 TB pooled storage/user",
    features: [
      "Everything in Business Standard",
      "Google Meet (500 participants)",
      "Meet attendance tracking",
      "eDiscovery & Vault archiving",
      "Enhanced security (endpoint mgmt)",
      "Advanced audit & reporting",
      "5 TB Drive per user",
      "Priority support",
    ],
    cta: "Get Business Plus",
    href: "https://my.hostao.com/cart.php?a=add&pid=google-ws-plus",
  },
];

const COMPARE_ROWS = [
  { feature: "Custom email (@yourcompany.com)", free: false, workspace: true },
  { feature: "No ads in Gmail", free: false, workspace: true },
  { feature: "99.9% uptime SLA", free: false, workspace: true },
  { feature: "Google Meet recording", free: false, workspace: true },
  { feature: "Shared team drives", free: false, workspace: true },
  { feature: "Admin control panel", free: false, workspace: true },
  { feature: "GST invoice for India", free: false, workspace: true },
  { feature: "24/7 priority support", free: false, workspace: true },
  { feature: "Data in Indian region (optional)", free: false, workspace: true },
  { feature: "15 GB storage per user", free: true, workspace: false },
  { feature: "30 GB–5 TB storage per user", free: false, workspace: true },
];

const MIGRATION_STEPS = [
  {
    step: "01",
    title: "Place Your Order",
    desc: "Choose your plan, number of users, and complete payment. You'll receive your admin console credentials within minutes.",
  },
  {
    step: "02",
    title: "Domain Verification",
    desc: "We help you verify your domain (the one you host with us or any other registrar). Takes 10–30 minutes via DNS TXT record.",
  },
  {
    step: "03",
    title: "Create User Accounts",
    desc: "Add your team members in the Google Admin console. Assign roles, set passwords, and configure groups/aliases.",
  },
  {
    step: "04",
    title: "Free Email Migration",
    desc: "Moving from Gmail, Yahoo, Zoho, or old cPanel webmail? Our team migrates all your existing emails, contacts & calendar — zero data loss.",
  },
  {
    step: "05",
    title: "Update MX Records",
    desc: "We update your domain's MX records to point to Google's mail servers. Email starts flowing to your new Workspace inbox.",
  },
  {
    step: "06",
    title: "You're Live",
    desc: "Your team now has professional @yourcompany.com email with full Google Workspace access. We stay on support for 30 days.",
  },
];

const USE_CASES = [
  {
    icon: "🏢",
    title: "Startups & New Businesses",
    desc: "Stop using personal Gmail for business. Get @yourcompany.com email before your first client meeting. Looks professional from day one.",
  },
  {
    icon: "🛒",
    title: "E-Commerce & D2C Brands",
    desc: "orders@, support@, returns@ — manage all your store communication from one admin console. Shared inbox for your team.",
  },
  {
    icon: "💼",
    title: "Professional Services",
    desc: "Consultants, CAs, lawyers, doctors — clients expect a professional email. A @company.com address builds instant credibility.",
  },
  {
    icon: "📱",
    title: "WhatsApp Business Users",
    desc: "WhatsApp Business API verification requires a professional business identity. Google Workspace email strengthens your setup.",
  },
  {
    icon: "🏭",
    title: "SMEs with Teams",
    desc: "Give every employee their own email. Manage access centrally. When someone leaves, disable their account instantly — keep all their emails.",
  },
  {
    icon: "🌏",
    title: "Export & Trading Companies",
    desc: "International buyers and banks don't trust free Gmail. A proper business email is required for export documentation and bank integrations.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Hostao an authorized Google Workspace reseller in India?",
    answer: "Yes. Hostao is an authorized Google Workspace reseller in India through the Google Cloud Partner program. We are accredited to sell, provision, and support Google Workspace plans for Indian businesses. You get the same Google product with INR billing and local support.",
  },
  {
    question: "What is the difference between Google Workspace and free Gmail?",
    answer: "Free Gmail gives you a @gmail.com address with ads and no SLA. Google Workspace gives you a custom @yourcompany.com address, no ads, 99.9% uptime guarantee, team admin controls, shared drives, Meet recording, and GST-compliant invoices for your business — all starting from ₹125/user/month.",
  },
  {
    question: "Do I need a domain name to use Google Workspace?",
    answer: "Yes, you need a domain (like yourcompany.com) to use Google Workspace. If you don't have one, Hostao can register your domain and set up Workspace together in a single order — making it very convenient.",
  },
  {
    question: "Will you migrate my existing emails to Google Workspace?",
    answer: "Yes — free migration is included. Whether you're moving from Yahoo Mail, Zoho, cPanel webmail, old Gmail, or any IMAP mailbox, our team migrates all your existing emails, contacts, and calendar entries with zero data loss. Typically done within 24 hours.",
  },
  {
    question: "Do you provide GST invoice for Indian businesses?",
    answer: "Yes. All Google Workspace subscriptions through Hostao come with proper GST-compliant invoices in INR. You can claim input tax credit (ITC) on your Workspace subscription as a business expense.",
  },
  {
    question: "Can I pay in INR and use UPI / net banking?",
    answer: "Yes. Hostao bills in Indian Rupees. You can pay via UPI, net banking, credit/debit cards, and wallets through our Indian payment gateway. No need for international credit cards.",
  },
  {
    question: "How many users can I add? Can I start with fewer and add later?",
    answer: "You can start with as few as 1 user and scale up to 300 users on Business plans. Adding users is instant — just purchase additional licenses from your account dashboard. You're billed pro-rata for mid-cycle additions.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes. Google Workspace comes with a 14-day free trial for new subscribers through Hostao. You can set up your full environment, migrate emails, and test everything before you're charged. Contact our sales team to activate your trial.",
  },
];

export default function GoogleWorkspacePage() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="hero-gradient-bg py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 text-[#046bd2] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <span>🤝</span> Authorized Google Workspace Reseller — India
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1e293b]">
            Google Workspace for <span className="text-[#0071FB]">Indian Businesses</span>
          </h1>
          <p className="text-[#334155] text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Stop using personal Gmail for work. Get a professional <strong>@yourcompany.com</strong> email with Google Meet, Drive, Docs & more. INR billing, GST invoice, free migration, 24/7 local support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://my.hostao.com/cart.php?a=add&pid=google-workspace" className="btn-hostao-primary text-lg font-bold px-10 py-4">Get Google Workspace →</a>
            <a href="https://wa.me/message/hostao" className="btn-hostao-outline text-lg px-10 py-4">Talk to Sales on WhatsApp</a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#334155]">
            {["✅ INR Billing", "✅ GST Invoice", "✅ Free Migration", "✅ 14-Day Trial", "✅ 24/7 India Support"].map(f => (
              <span key={f} className="font-medium">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Choose Your Google Workspace Plan</h2>
            <p className="text-[#334155]">All plans include INR billing, GST invoice, free migration, and 24/7 Hostao support</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PLANS.map(plan => (
              <div key={plan.name} className={`rounded-2xl border-2 p-8 relative ${plan.highlight ? "border-[#0071FB] shadow-xl" : "border-gray-200"}`}>
                {plan.tag && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${plan.highlight ? "bg-[#0071FB] text-white" : "bg-gray-800 text-white"}`}>
                    {plan.tag}
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#1e293b] mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-[#0071FB]">{plan.price}</span>
                  <span className="text-gray-500 text-sm pb-1">{plan.priceNote}</span>
                </div>
                <p className="text-xs text-gray-400 mb-5">{plan.users} · {plan.storage}</p>
                <a href={plan.href} target="_blank" rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-bold mb-6 transition-colors ${plan.highlight ? "bg-[#0071FB] text-white hover:bg-[#045cb4]" : "border-2 border-[#0071FB] text-[#0071FB] hover:bg-[#0071FB] hover:text-white"}`}>
                  {plan.cta}
                </a>
                <ul className="space-y-2.5">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#334155]">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Prices shown are approximate INR equivalents. Final billing in INR at current rates. GST applicable. 
            <a href="https://my.hostao.com/contact" className="text-[#046bd2] ml-1 hover:underline">Contact us</a> for custom enterprise quotes.
          </p>
        </div>
      </section>

      {/* FREE GMAIL vs WORKSPACE COMPARE */}
      <section className="bg-[#F0F5FA] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Comparison</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Free Gmail vs Google Workspace</h2>
            <p className="text-[#334155]">Why businesses cannot afford to use free Gmail</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-[#046bd2] text-white">
                  <th className="text-left px-6 py-4 font-semibold w-1/2">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold">Free Gmail</th>
                  <th className="text-center px-4 py-4 font-semibold">Google Workspace</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                    <td className="px-6 py-3.5 text-[#334155] text-sm">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center text-lg">{row.free ? "✅" : "❌"}</td>
                    <td className="px-4 py-3.5 text-center text-lg">{row.workspace ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Who It's For</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Which Businesses Need Google Workspace?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {USE_CASES.map(uc => (
              <div key={uc.title} className="bg-[#F0F5FA] rounded-2xl p-6">
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-bold text-[#1e293b] mb-2">{uc.title}</h3>
                <p className="text-[#334155] text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SETUP PROCESS */}
      <section className="bg-[#F0F5FA] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Get Up and Running in Under 2 Hours</h2>
            <p className="text-[#334155]">We handle the technical setup. You focus on your business.</p>
          </div>
          <div className="space-y-4">
            {MIGRATION_STEPS.map((step, i) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#0071FB] text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1e293b] mb-1">{step.title}</h3>
                  <p className="text-[#334155] text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < MIGRATION_STEPS.length - 1 && (
                  <div className="hidden md:block ml-auto text-gray-300 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Included Apps</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Everything in Google Workspace</h2>
            <p className="text-[#334155]">Not just email — a complete productivity suite for your team</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: "📧", name: "Gmail", desc: "Professional email @yourcompany.com" },
              { icon: "📹", name: "Google Meet", desc: "HD video calls & webinars" },
              { icon: "💾", name: "Google Drive", desc: "Cloud storage & file sharing" },
              { icon: "📄", name: "Google Docs", desc: "Collaborative word processing" },
              { icon: "📊", name: "Google Sheets", desc: "Spreadsheets & data analysis" },
              { icon: "📑", name: "Google Slides", desc: "Presentations & pitch decks" },
              { icon: "📅", name: "Google Calendar", desc: "Shared team scheduling" },
              { icon: "💬", name: "Google Chat", desc: "Team messaging & spaces" },
              { icon: "📝", name: "Google Forms", desc: "Surveys & lead capture" },
              { icon: "🔐", name: "Admin Console", desc: "Centralized user management" },
              { icon: "🛡️", name: "Vault", desc: "eDiscovery & archiving (Plus)" },
              { icon: "📱", name: "Mobile Apps", desc: "Full access on Android & iOS" },
            ].map(app => (
              <div key={app.name} className="border border-gray-200 rounded-xl p-4 hover:border-[#046bd2] hover:shadow-sm transition-all text-center">
                <div className="text-2xl mb-2">{app.icon}</div>
                <div className="font-bold text-[#1e293b] text-sm mb-1">{app.name}</div>
                <div className="text-xs text-gray-400 leading-tight">{app.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F0F5FA] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mb-3">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="hero-gradient-bg py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Ready to Go Professional?</h2>
          <p className="text-[#334155] mb-8 text-lg">Start your 14-day free trial today. No credit card required. INR billing, GST invoice, free migration included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=google-workspace" target="_blank" rel="noopener noreferrer" className="btn-hostao-primary text-lg font-bold px-10 py-4">
              Start Free Trial →
            </a>
            <a href="https://wa.me/message/hostao" target="_blank" rel="noopener noreferrer" className="btn-hostao-outline text-lg px-10 py-4">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-6">Starting from ₹125/user/month · Annual billing · Cancel anytime · 14-day trial</p>
        </div>
      </section>

      <TrustBar />

      {/* JSON-LD: Product + FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Google Workspace for Business India",
        "description": "Google Workspace authorized reseller in India. INR billing, GST invoice, free migration, 24/7 support.",
        "brand": { "@type": "Brand", "name": "Google" },
        "offers": [
          { "@type": "Offer", "name": "Business Starter", "price": "125.00", "priceCurrency": "INR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Business Standard", "price": "672.00", "priceCurrency": "INR", "availability": "https://schema.org/InStock" },
          { "@type": "Offer", "name": "Business Plus", "price": "1260.00", "priceCurrency": "INR", "availability": "https://schema.org/InStock" },
        ],
        "seller": { "@type": "Organization", "name": "Hostao", "url": "https://hostao.com" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      })}} />
    </div>
  );
}
