import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "Affiliate Program — Earn Up to 30% Recurring Commission | Hostao",
  description: "Join the Hostao Affiliate Program and earn up to 30% recurring commissions on every referral. 30-day cookie duration, monthly payouts, real-time tracking, and dedicated affiliate manager.",
};

const STEPS = [
  {
    step: "01",
    icon: "📝",
    title: "Sign Up",
    desc: "Create your free affiliate account in minutes. No approval wait — get your unique referral link instantly and start promoting right away.",
  },
  {
    step: "02",
    icon: "📣",
    title: "Promote",
    desc: "Share your referral link on your website, blog, social media, or email list. Use our ready-made banners, landing pages, and marketing materials.",
  },
  {
    step: "03",
    icon: "💰",
    title: "Earn",
    desc: "Earn recurring commissions every time your referral pays. Commissions are tracked in real time and paid out monthly — it's that simple.",
  },
];

const TIERS = [
  {
    referrals: "1–10",
    rate: "10%",
    label: "Starter",
    desc: "Perfect for getting started. Earn 10% on every referral's payment, recurring each month.",
    popular: false,
  },
  {
    referrals: "11–50",
    rate: "20%",
    label: "Growth",
    desc: "Double your earnings as you grow. 20% recurring commission on all active referrals.",
    popular: true,
  },
  {
    referrals: "50+",
    rate: "30%",
    label: "Pro",
    desc: "Our highest tier. Earn 30% recurring commissions plus priority support and custom deals.",
    popular: false,
  },
];

const BENEFITS = [
  {
    icon: "🔄",
    title: "Recurring Commissions",
    desc: "Earn every month, not just once. As long as your referral stays with Hostao, you keep earning commissions — month after month.",
  },
  {
    icon: "📊",
    title: "Real-Time Tracking",
    desc: "Monitor clicks, signups, and earnings in your affiliate dashboard. Full transparency with detailed reports updated in real time.",
  },
  {
    icon: "🎨",
    title: "Marketing Materials",
    desc: "Access professional banners, email templates, landing pages, and social media assets. Everything you need to promote effectively.",
  },
  {
    icon: "🤝",
    title: "Dedicated Affiliate Manager",
    desc: "Get one-on-one support from your dedicated affiliate manager. Strategy advice, custom creatives, and help scaling your earnings.",
  },
  {
    icon: "🍪",
    title: "30-Day Cookie Duration",
    desc: "Our 30-day cookie window means you earn commission even if the visitor signs up weeks after clicking your link.",
  },
  {
    icon: "💸",
    title: "Monthly Payouts",
    desc: "Get paid every month via PayPal or bank transfer. Low $50 minimum payout threshold so you start earning faster.",
  },
];

const FAQ_ITEMS = [
  {
    question: "How do I join the Hostao Affiliate Program?",
    answer: "Simply sign up at my.hostao.com and apply for the affiliate program. Approval is instant — you'll receive your unique referral link right away and can start promoting immediately.",
  },
  {
    question: "How much can I earn as an affiliate?",
    answer: "You can earn up to 30% recurring commissions on every referral. Start at 10% for 1–10 referrals per month, move to 20% for 11–50 referrals, and unlock 30% for 50+ referrals. Since commissions are recurring, your income grows as your referral base grows.",
  },
  {
    question: "When and how do I get paid?",
    answer: "Commissions are paid monthly via PayPal or direct bank transfer. The minimum payout threshold is $50. Payments are processed on the 15th of each month for the previous month's earnings.",
  },
  {
    question: "What is the cookie duration?",
    answer: "We use a 30-day cookie window. If someone clicks your affiliate link and signs up within 30 days, you earn the commission — even if they don't purchase on their first visit.",
  },
  {
    question: "Do I earn on renewals too?",
    answer: "Yes! Our commissions are fully recurring. You earn your commission percentage every time your referral renews or pays their monthly invoice. As long as they remain a Hostao customer, you keep earning.",
  },
  {
    question: "What products can I promote?",
    answer: "You can promote all Hostao products including shared hosting, reseller hosting, VPS hosting, dedicated servers, domain registration, and SSL certificates. You earn commission on everything your referral purchases.",
  },
  {
    question: "Do you provide marketing materials?",
    answer: "Absolutely. We provide professional banners in multiple sizes, email templates, landing page content, social media graphics, and product comparison sheets. Your dedicated affiliate manager can also create custom materials for you.",
  },
  {
    question: "Is there a cost to join?",
    answer: "No. The Hostao Affiliate Program is completely free to join. There are no fees, no minimum traffic requirements, and no obligations.",
  },
];

export default function AffiliatePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">💰 Affiliate Program</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Make Money with Hostao Affiliate Program</h1>
          <p className="text-white/85 text-lg mb-8">
            Earn up to 30% recurring commissions by referring customers to Hostao.
            Join thousands of affiliates already earning passive income with one of the web&apos;s most rewarding hosting affiliate programs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://my.hostao.com" className="btn-accent px-8 py-3.5">
              Join the Affiliate Program 🚀
            </Link>
            <Link href="#how-it-works" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Learn More ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Earning in 3 Simple Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our affiliate program is designed to be simple and transparent. No complicated terms, no hidden conditions — just sign up, promote, and earn.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="bg-white border border-gray-200 rounded-xl p-8 text-center card-hover relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00B4D8] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {s.step}
                </div>
                <div className="text-4xl mb-4 mt-2">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMISSION STRUCTURE ──────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Commission Tiers</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Earn Up to 30% Recurring Commissions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The more customers you refer, the higher your commission rate. All tiers pay recurring commissions — you earn every month your referrals stay active.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl p-8 text-center border-2 card-hover ${
                  tier.popular
                    ? "plan-popular border-[#00B4D8] bg-gradient-to-b from-[#00B4D8]/5 to-white shadow-lg scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="inline-block bg-[#00B4D8] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{tier.label}</div>
                <div className="text-5xl font-extrabold text-gray-900 mb-1">{tier.rate}</div>
                <div className="text-sm text-gray-500 mb-4">per referral / recurring</div>
                <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-sm font-semibold text-gray-700">{tier.referrals} referrals/mo</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{tier.desc}</p>
                <Link
                  href="https://my.hostao.com"
                  className={tier.popular ? "btn-accent px-6 py-3 w-full block" : "btn-blue px-6 py-3 w-full block"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap gap-6 justify-center text-sm text-gray-500">
              <span>🍪 30-day cookie duration</span>
              <span>💸 $50 minimum payout</span>
              <span>📅 Monthly payouts</span>
              <span>🏦 PayPal &amp; bank transfer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PROMOTE HOSTAO ───────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Why Promote Hostao?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything You Need to Succeed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We give our affiliates the tools, support, and generous commissions they need to build a real income stream.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about the Hostao Affiliate Program. Can&apos;t find your answer? Contact our affiliate team.
            </p>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-white/80 mb-8">
            Join the Hostao Affiliate Program today and turn your audience into a recurring revenue stream.
            Free to join, no minimum traffic required, and commissions that keep paying month after month.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://my.hostao.com" className="btn-accent px-8 py-3.5">
              Sign Up Now — It&apos;s Free →
            </Link>
            <Link href="/contact" className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Contact Affiliate Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
