import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "Domain Registration — Register Your Domain Name with Us Today | Hostao",
  description: "Register Your Domain Name with Us Today. Get Affordable and Reliable Domain Registration Services with 24/7 Support."
};

const FEATURED_DOMAINS = [
  {
    extension: ".com",
    price: "$ 15.00",
    description: "Get the domain that will never go out of style",
    discount: "Save 21%",
    href: "https://my.hostao.com/cart.php?a=add&domain=register&query"
  },
  {
    extension: ".in",
    price: "$ 06.73", 
    description: "Get the domain that will never go out of style",
    discount: "Save 18%",
    href: "https://my.hostao.com/cart.php?a=add&domain=register&query"
  },
  {
    extension: ".net",
    price: "$ 15.19",
    description: "Get the domain that will never go out of style",
    discount: "Save 15%",
    href: "https://my.hostao.com/cart.php?a=add&domain=register&query"
  }
];

const DOMAIN_EXTENSIONS = [
  { name: "domain-club", image: "https://hostao.com/wp-content/uploads/2024/01/domain-club.png" },
  { name: "domain-live", image: "https://hostao.com/wp-content/uploads/2024/01/domain-live.png" },
  { name: "domain-app", image: "https://hostao.com/wp-content/uploads/2024/01/domain-app.png" },
  { name: "domain-online", image: "https://hostao.com/wp-content/uploads/2024/01/domain-online.png" },
  { name: "domain-site", image: "https://hostao.com/wp-content/uploads/2024/01/domain-site.png" }
];

const FAQ_ITEMS = [
  {
    question: "What is domain registration?",
    answer: "Domain registration is the process of acquiring a unique web address (like yourname.com) for your website. It gives you the right to use that domain name for a specific period (usually 1 year) and can be renewed."
  },
  {
    question: "How long does domain registration take?",
    answer: "Domain registration is typically instant for most extensions. Once payment is confirmed, your domain is usually active within minutes and ready to use."
  },
  {
    question: "Can I transfer my existing domain to Hostao?",
    answer: "Yes, you can transfer your domain from another registrar to Hostao. Domain transfers usually take 5-7 days to complete and extend your registration by 1 year."
  },
  {
    question: "Do you offer domain privacy protection?",
    answer: "Yes, we offer WHOIS privacy protection to keep your personal information private in the domain registration database. This helps protect against spam and unwanted contact."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and various other payment methods depending on your location."
  }
];

export default function DomainRegistrationPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">Domain Registration</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Register Your Domain Name with Us Today. Get Affordable and Reliable Domain Registration Services with 24/7 Support.
          </p>
        </div>
      </section>

      {/* ── FEATURED DOMAIN PRICING ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {FEATURED_DOMAINS.map((domain, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-8 text-center bg-white hover:shadow-lg transition-shadow relative">
              <div className="mb-6">
                <div className="text-6xl font-bold text-gray-900 mb-2">{domain.extension}</div>
                <div className="text-3xl font-extrabold text-[#0056A7] mb-2">{domain.price}</div>
                <p className="text-gray-600 text-sm mb-4">{domain.description}</p>
                <a 
                  href={domain.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0056A7] text-white py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors mb-3"
                >
                  Order Now
                </a>
                <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {domain.discount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOMAIN EXTENSIONS CAROUSEL ─────────────────────── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center mb-8">
            {DOMAIN_EXTENSIONS.map((ext, i) => (
              <div key={i} className="w-full">
                <Image 
                  src={ext.image} 
                  alt={ext.name} 
                  width={120} 
                  height={80}
                  className="w-full h-auto max-h-20 object-contain"
                  unoptimized 
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="https://my.hostao.com/domain/pricing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors"
            >
              View Domain Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOMAIN EXTENSIONS BY REGION ──────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Domain Extensions by Region</h2>
          <p className="text-center text-gray-600 mb-10">Find the perfect domain for your target market — country-code and global TLDs</p>

          {/* Gulf & Middle East */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Gulf &amp; Middle East</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {[
              { flag: "🇦🇪", tld: ".AE", country: "UAE", price: "from $45/yr", href: "/ae-domains" },
              { flag: "🇧🇭", tld: ".BH", country: "Bahrain", price: "from $45/yr", href: "/bahrain-domains" },
              { flag: "🇶🇦", tld: ".QA", country: "Qatar", price: "from $55/yr", href: "/qa-domains" },
              { flag: "🇸🇦", tld: ".SA", country: "Saudi Arabia", price: "from $55/yr", href: "/sa-domains" },
              { flag: "🇰🇼", tld: ".KW", country: "Kuwait", price: "from $50/yr", href: "/kw-domains" },
              { flag: "🇴🇲", tld: ".OM", country: "Oman", price: "from $60/yr", href: "/om-domains" },
            ].map(d => (
              <Link key={d.href} href={d.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#046bd2] hover:shadow-md transition-all group text-center">
                <div className="text-2xl mb-1">{d.flag}</div>
                <h4 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] text-sm">{d.tld}</h4>
                <p className="text-xs text-[#334155]">{d.country}</p>
                <p className="text-xs text-[#046bd2] font-semibold mt-1">{d.price}</p>
              </Link>
            ))}
          </div>

          {/* Asia & South Asia */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">🌏 Asia &amp; South Asia</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { flag: "🇮🇳", tld: ".IN", country: "India", price: "from $8/yr", href: "/in-domains" },
              { flag: "🇵🇰", tld: ".PK", country: "Pakistan", price: "from $25/yr", href: "/pk-domains" },
              { flag: "🇸🇬", tld: ".SG", country: "Singapore", price: "from $45/yr", href: "/sg-domains" },
              { flag: "🇲🇾", tld: ".MY", country: "Malaysia", price: "from $30/yr", href: "/my-domains" },
            ].map(d => (
              <Link key={d.href} href={d.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#046bd2] hover:shadow-md transition-all group text-center">
                <div className="text-2xl mb-1">{d.flag}</div>
                <h4 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] text-sm">{d.tld}</h4>
                <p className="text-xs text-[#334155]">{d.country}</p>
                <p className="text-xs text-[#046bd2] font-semibold mt-1">{d.price}</p>
              </Link>
            ))}
          </div>

          {/* Global & Popular */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">🌐 Global &amp; Popular</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {[
              { tld: ".COM", price: "$15/yr", href: "/com-domain" },
              { tld: ".NET", price: "$15/yr", href: "/net-domain" },
              { tld: ".ORG", price: "$15/yr", href: "/org-domain" },
              { tld: ".IO", price: "$45/yr", href: "/io-domain" },
              { tld: ".CO", price: "$30/yr", href: "/co-domain" },
              { tld: ".TECH", price: "$35/yr", href: "/tech-domain" },
              { tld: ".APP", price: "$20/yr", href: "/app-domain" },
              { tld: ".ONLINE", price: "$8/yr", href: "/online-domain" },
              { tld: ".STORE", price: "$12/yr", href: "/store-domain" },
              { tld: ".SHOP", price: "$12/yr", href: "/shop-domain" },
            ].map(d => (
              <Link key={d.href} href={d.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#046bd2] hover:shadow-md transition-all group text-center">
                <h4 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] text-sm">{d.tld}</h4>
                <p className="text-xs text-[#046bd2] font-semibold mt-1">{d.price}</p>
              </Link>
            ))}
          </div>

          {/* Western Markets */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">🌎 Western &amp; Emerging Markets</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { flag: "🇬🇧", tld: ".UK", country: "United Kingdom", price: "from $12/yr", href: "/uk-domains" },
              { flag: "🇺🇸", tld: ".US", country: "USA", price: "from $10/yr", href: "/us-domains" },
              { flag: "🇨🇦", tld: ".CA", country: "Canada", price: "$20/yr", href: "/ca-domains" },
              { flag: "🇦🇺", tld: ".AU", country: "Australia", price: "from $20/yr", href: "/au-domains" },
              { flag: "🇳🇬", tld: ".NG", country: "Nigeria", price: "from $30/yr", href: "/ng-domains" },
            ].map(d => (
              <Link key={d.href} href={d.href} className="border border-gray-200 rounded-xl p-4 hover:border-[#046bd2] hover:shadow-md transition-all group text-center">
                <div className="text-2xl mb-1">{d.flag}</div>
                <h4 className="font-bold text-[#1e293b] group-hover:text-[#046bd2] text-sm">{d.tld}</h4>
                <p className="text-xs text-[#334155]">{d.country}</p>
                <p className="text-xs text-[#046bd2] font-semibold mt-1">{d.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIXI ACCREDITED EXCELLENCE ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/NIXI-Registrar.png"
              alt="NIXI Accredited Excellence"
              width={400}
              height={400}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NIXI Accredited Excellence</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Hostao LLC, we are proud to be recognized as a NIXI (National Internet Exchange of India) accredited registrar, 
                setting us apart as a leader in the web hosting and domain registration industry. This prestigious accreditation 
                underscores our commitment to excellence, security, and reliability, providing you with the assurance that your 
                online presence is in capable hands.
              </p>
              <p>
                Are you ready to elevate your online presence? Look no further! Hostao LLC is here to offer you unparalleled 
                web hosting and domain registration services. As the Best Web Hosting and Web Designing Company of 2023, we take 
                pride in delivering top-notch solutions to meet all your digital needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMAIN SEARCH ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#171734]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#0056A7] text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Domain Registration</div>
          <h2 className="text-3xl font-bold text-white mb-3">Find Your New Domain</h2>
          <p className="text-white/60 mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-white/50 text-xs mb-6">Reserve your domain today before someone takes it.</p>
          <DomainSearch />
          <div className="mt-6">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png"
              alt="Domain Extensions"
              width={400}
              height={60}
              className="mx-auto h-auto max-w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/04/corporate-man-35-767x1024.png"
              alt="Low cost hosting"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow Faster By Using Our Hosting Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choose Hostao for reliable and secure hosting services that are tailored to your specific needs. 
                Our advanced technology, 24/7 support, and affordable pricing make us the ideal choice for individuals 
                and businesses looking to grow their online presence.
              </p>
              <p>Experience the Hostao difference today.</p>
            </div>
            <div className="mt-6">
              <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#0056A7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions about Domain Registration</h2>
            <p className="text-gray-600">If you have any further questions or require assistance, please don't hesitate to reach out to our support team for prompt and reliable assistance.</p>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hostao.com" },
          { "@type": "ListItem", "position": 2, "name": "Domain Registration", "item": "https://hostao.com/domain-registration" }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is domain registration?",
            "acceptedAnswer": { "@type": "Answer", "text": "Domain registration is the process of acquiring a unique web address (like yourname.com) for your website. It gives you the right to use that domain name for a specific period (usually 1 year) and can be renewed." }
          },
          {
            "@type": "Question",
            "name": "How long does domain registration take?",
            "acceptedAnswer": { "@type": "Answer", "text": "Domain registration is typically instant for most extensions. Once payment is confirmed, your domain is usually active within minutes and ready to use." }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my existing domain to Hostao?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can transfer your domain from another registrar to Hostao. Domain transfers usually take 5-7 days to complete and extend your registration by 1 year." }
          },
          {
            "@type": "Question",
            "name": "Do you offer domain privacy protection?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer WHOIS privacy protection to keep your personal information private in the domain registration database. This helps protect against spam and unwanted contact." }
          },
          {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": { "@type": "Answer", "text": "We accept all major credit cards, PayPal, bank transfers, and various other payment methods depending on your location." }
          }
        ]
      }) }} />

    </div>
  );
}