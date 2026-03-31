import Link from "next/link";
import { createClient } from "@libsql/client";
import DomainSearch from "@/components/DomainSearch";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import TypingAnimation from "@/components/TypingAnimation";

/* ── EXACT PLANS FROM HOSTAO.COM ─────────────────────────────── */
const FALLBACK_PLANS = [
  {
    name: "Basic Plan",
    tagline: "Little teams and startups",
    price: "$3",
    period: "Per Month*",
    popular: false,
    features: [
      "1GB SSD Disk Space",
      "100GB/m Bandwidth",
      "10 Email Accounts",
      "5 Subdomains",
      "1 Domain Usable",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee",
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster",
    ],
    cta: "Order Now",
    href: "https://my.hostao.com/cart.php?a=add&pid=1",
  },
  {
    name: "Professional Plan",
    tagline: "Big teams and members",
    price: "$4.5",
    period: "Per Month*",
    popular: true,
    features: [
      "5GB SSD Disk Space",
      "150GB/m Bandwidth",
      "50 Email Accounts",
      "10 Subdomains",
      "5 Domains Usable",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee",
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster",
    ],
    cta: "Order Now",
    href: "https://my.hostao.com/cart.php?a=add&pid=2",
  },
  {
    name: "Business Plan",
    tagline: "Complex and big businesses",
    price: "$6",
    period: "Per Month*",
    popular: false,
    features: [
      "10GB SSD Disk Space",
      "250GB/m Bandwidth",
      "100 Email Accounts",
      "25 Subdomains",
      "10 Domains Usable",
      "Softaculous One-click Installer",
      "99.9% Uptime Guarantee",
      "Lifetime Free SSL Certificate",
      "NVMe SSD Hosting. 2X Faster",
    ],
    cta: "Order Now",
    href: "https://my.hostao.com/cart.php?a=add&pid=3",
  },
];

const STATS = [
  { val: "50,000+", label: "Websites Hosted" },
  { val: "99.9%", label: "Uptime Guarantee" },
  { val: "24/7", label: "Expert Support" },
  { val: "30-Day", label: "Money Back Guarantee" },
];

async function getHomepagePlans() {
  try {
    if (!process.env.TURSO_DATABASE_URL) return FALLBACK_PLANS;

    const client = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    const result = await client.execute(`
      SELECT p.id, p.name, p.tagline, p.price, p.period, p.popular, p.cta_text, p.cta_link,
             GROUP_CONCAT(f.feature) as features_list
      FROM pricing_plans p
      LEFT JOIN pricing_plans_features f ON p.id = f._parent_id
      WHERE p.active = 1 AND p.plan_type = 'shared'
      GROUP BY p.id
      ORDER BY p.sort_order ASC, p.id ASC
      LIMIT 3
    `);

    if (!result.rows.length) return FALLBACK_PLANS;

    return result.rows.map((row) => ({
      name: String(row.name || "Plan"),
      tagline: String(row.tagline || ""),
      price: String(row.price || "$0"),
      period: String(row.period || "Per Month*"),
      popular: Number(row.popular || 0) === 1,
      features: row.features_list ? String(row.features_list).split(",") : [],
      cta: String(row.cta_text || "Order Now"),
      href: String(row.cta_link || "https://my.hostao.com"),
    }));
  } catch {
    return FALLBACK_PLANS;
  }
}

export default async function HomePage() {
  const plans = await getHomepagePlans();

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="bg-[#d9ecff] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-2 text-[#0c1434]">Best <span className="text-blue-600">hosting</span> and <span className="text-blue-600">domain</span></h1>
          <div className="text-2xl font-semibold mb-4 text-[#1f2b4d]">
            For your Business.
          </div>
          <p className="text-[#1f2b4d] text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Elevate your website&apos;s performance with our Low cost reseller hosting solution. Say goodbye to losing clients due to sluggish hosting speeds. Secure your hosting package today!
          </p>
          <DomainSearch />
          <p className="text-[#1f2b4d] text-sm mt-4">Reserve your domain today before someone takes it.</p>
          <div className="mt-6">
            <img 
              src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png" 
              alt="Domain Extensions" 
              className="mx-auto h-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* ── RESELLER PROMO ──────────────────────────────────────────── */}
      <section className="bg-[#171734] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-yellow-400">Exciting Reseller Discount at Hostao.com!</h2>
            <h3 className="text-4xl font-bold mb-6 text-red-500">50% Off Reseller Discount</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>2GB RAM - 1CPU CORE</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>20GB NVMe SSD</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>1 Dedicated IP</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>1TB Bandwidth</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Fast 1Gbps Uplink</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Linux OS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">$7</div>
            <div className="text-lg text-gray-300 mb-4">/mo</div>
            <a href="https://hostao.com/vps-dedicated-server-reseller/" 
               className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Claim Deal
            </a>
            <div className="mt-6 flex justify-center">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">&quot;27&quot;</div>
                  <div className="text-xs">Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">&quot;16&quot;</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">&quot;31&quot;</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">&quot;28&quot;</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4">*must have a reseller account with us</p>
          </div>
        </div>
      </section>

      {/* ── PRICING PLANS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wide text-blue-600 font-semibold">PRICING PLAN</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Choose the Best Plan to Grow Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">For individuals and small businesses, our affordable Low cost shared hosting plans start at just $3, ensuring reliable website hosting with 24/7 support and various features. A cost-effective and reliable hosting solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(plan => (
              <div key={plan.name}
                className={`relative flex flex-col rounded-xl p-6 bg-white border transition-all ${plan.popular ? "border-blue-500 shadow-lg" : "border-gray-200"}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.tagline}</p>
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-gray-500 text-sm">{plan.period}</div>
                </div>
                <ul className="flex-1 space-y-3 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? "bg-blue-500 hover:bg-blue-600 text-white" 
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE OFFERS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Domain Offer</h2>
            <p className="text-gray-600 mb-6">
              Get great deals on domain registrations! Find the perfect web address for your business or project at discounted prices. 
              Don't miss our limited-time offers and secure your online identity today!
            </p>
            <a href="https://hostao.com/offers/" target="_blank" rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
              Get Offer
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">50% Off Reseller</h2>
            <p className="text-gray-600 mb-6">
              Start your hosting business with our exclusive 50% discount on all reseller hosting plans. 
              Complete white-label solution with WHMCS, cPanel, and 24/7 support included!
            </p>
            <a href="https://hostao.com/vps-dedicated-server-reseller/" target="_blank" rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg">
              Start Today
            </a>
          </div>
        </div>
      </section>

      {/* ── INSTANT BUSINESS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#d9ecff]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Bring Your Business to Life Instantly</h2>
          <a href="https://my.hostao.com" target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
            Get Started
          </a>
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reliable Hosting Infrastructure</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Enterprise NVMe SSD storage</li>
                <li>• 99.9% uptime guarantee with SLA</li>
                <li>• Multiple global data centers</li>
                <li>• Advanced DDoS protection</li>
                <li>• Daily automated backups</li>
                <li>• Free SSL certificates for life</li>
                <li>• cPanel control panel included</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Features</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Softaculous 1-click installer</li>
                <li>• Free website migration service</li>
                <li>• Email hosting with spam protection</li>
                <li>• Advanced security monitoring</li>
                <li>• 24/7 expert technical support</li>
                <li>• 30-day money-back guarantee</li>
                <li>• Domain registration & management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We Provide Secure & Powerful Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Every hosting plan includes enterprise-grade features that ensure your website runs smoothly, securely, and efficiently. 
            No hidden costs or surprise charges.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "NVMe SSD Storage", icon: "💾", desc: "Lightning-fast NVMe SSD storage for superior performance" },
              { title: "Free SSL Certificate", icon: "🔒", desc: "Secure your website with lifetime free SSL certificates" },
              { title: "99.9% Uptime SLA", icon: "⚡", desc: "Guaranteed uptime with service level agreement" },
              { title: "24/7 Expert Support", icon: "🎧", desc: "Round-the-clock technical support from real experts" },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions about Web Hosting</h2>
            <p className="text-gray-600">
              Hostao offers web hosting services to make websites accessible globally by storing files on dependable servers.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What is web hosting?",
                a: "Web hosting is a service that allows individuals and businesses to publish their websites on the internet. Hosting providers like Hostao store your website files on powerful servers connected to the internet, making your site accessible to visitors worldwide 24/7."
              },
              {
                q: "What types of hosting do you offer?",
                a: "We offer shared hosting, reseller hosting, VPS hosting, and dedicated servers. Each type is designed for different needs and budgets, from personal websites to large enterprise applications."
              },
              {
                q: "Do you provide free SSL certificates?",
                a: "Yes! All our hosting plans include free SSL certificates with automatic installation and renewal. This ensures your website is secure and trusted by visitors and search engines."
              },
              {
                q: "What is your uptime guarantee?",
                a: "We guarantee 99.9% uptime with our Service Level Agreement (SLA). If we don't meet this commitment, we provide compensation according to our SLA terms."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-300 text-xl">Read what our satisfied customers have to say about their experience with Hostao's hosting services</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-4xl font-bold mb-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">ⓕ</span> 5.0 <span className="text-yellow-400">★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">Ⓖ</span> 5.0 <span className="text-yellow-400">★</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✦</span> 4.4 <span className="text-yellow-400">★</span>
              </div>
            </div>
            <div className="text-center text-2xl mb-6"><strong>67</strong> Reviews</div>
            
            <div className="text-center mb-6">
              <a href="https://go.ratinge.com/hostao" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Leave a review
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}