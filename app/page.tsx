"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import CountdownTimer from "@/components/CountdownTimer";
import TypingHero from "@/components/TypingHero";
import TrustBar from "@/components/TrustBar";



function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#046bd2] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const faqData = [
  { q: "What is web hosting?", a: "Web hosting is a service that allows individuals or organizations to make their websites accessible on the internet. It involves storing website files on servers connected to the internet, making the website available for users to access and view." },
  { q: "What are the different types of web hosting?", a: "There are several types of web hosting, including shared hosting, virtual private server (VPS) hosting, dedicated server hosting, cloud hosting, and reseller hosting. Each type offers different levels of resources, control, and scalability." },
  { q: "What is shared hosting?", a: "Shared hosting is a type of hosting where multiple websites are hosted on the same server. It is an affordable option as the server resources are shared among different users. However, the performance and resources may be limited compared to other hosting types." },
  { q: "What is VPS hosting?", a: "VPS hosting, or Virtual Private Server hosting, provides a dedicated portion of a physical server to a single user. It offers better performance and control compared to shared hosting. Users have their own virtual environment with allocated resources and root access." },
  { q: "What is dedicated server hosting?", a: "Dedicated server hosting involves leasing an entire physical server for a single website or organization. It provides maximum control, customization, and performance. Users have exclusive access to all server resources, but it is typically more expensive." },
  { q: "What is Low cost reseller hosting?", a: "Low cost reseller hosting allows individuals or companies to sell web hosting services using resources allocated to them by a hosting provider. It enables entrepreneurs to start their own web hosting business without having to manage the infrastructure." },
  { q: "What is bandwidth and disk space in web hosting?", a: "Bandwidth refers to the amount of data transferred between your website and its visitors. It affects the speed and responsiveness of your website. Disk space, on the other hand, is the amount of storage space available for your website files, databases, emails, and other content." },
  { q: "What security measures should I expect from a web hosting provider?", a: "A good web hosting provider should offer security features such as SSL certificates for encrypted connections, regular backups, firewalls, malware scanning, and DDoS protection. It is important to choose a provider that prioritizes the security of their servers and customer data." },
  { q: "What is uptime and why is it important?", a: "Uptime refers to the amount of time a server or website is operational and accessible to visitors. It is usually measured as a percentage, with higher percentages indicating better uptime. Uptime is crucial for ensuring that your website is available to users at all times and that potential revenue or traffic losses are minimized." },
  { q: "Can I host multiple websites on a single hosting account?", a: "Yes, depending on the type of hosting plan you choose, you can often host multiple websites on a single hosting account. Shared hosting plans typically allow hosting of multiple websites, whereas some providers may limit the number of websites you can host on lower-tier plans. VPS and dedicated server hosting plans offer greater flexibility, allowing you to host multiple websites with separate domains and configurations. It's important to review the hosting provider's specifications and features to determine if hosting multiple websites is supported." }
];

const featureCards = [
  { title: "Reliable Servers", img: "/images/Reliable-Servers.webp", desc: "Hostao\u2019s servers are optimized for speed and performance, ensuring that your website loads quickly and operates smoothly." },
  { title: "Website Migration", img: "/images/Website-Migration.webp", desc: "Hostao offers free website migration services, making it easy to transfer your existing website to our platform without any downtime or data loss." },
  { title: "Loading Speed", img: "/images/Loading-Speed.webp", desc: "Hostao\u2019s optimized servers and advanced caching technology ensure fast website loading speeds for an improved user experience." },
  { title: "Data Security", img: "/images/Data-security.webp", desc: "Hostao prioritizes the security and safety of client websites with trained professionals monitoring data center server locations and performance." },
  { title: "Data Center Locations", img: "/images/Location.webp", desc: "Hostao has multiple data center locations across the world, allowing you to choose a server location that is closest to your target audience." },
  { title: "Security Features", img: "/images/Security.webp", desc: "Hostao provides advanced security features, including SSL certificates, firewalls, and malware scanning, to keep your website and data safe from threats." }
];

const PLANS = [
  { name: "Basic Plan", subtitle: "Little teams and startups", price: "$3", features: ["1GB SSD Disk Space", "100GB/m Bandwidth", "10 Email Accounts", "5 Subdomains", "1 Domain", "Softaculous One-click Installer", "99.9% Uptime Guarantee", "Lifetime Free SSL Certificate", "NVMe SSD Hosting. 2X Faster"], href: "https://my.hostao.com/cart.php?a=add&pid=9", popular: false },
  { name: "Professional Plan", subtitle: "Big teams and members", price: "$4.50", features: ["5GB SSD Disk Space", "150GB/m Bandwidth", "50 Email Accounts", "10 Subdomains", "5 Domains", "Softaculous One-click Installer", "99.9% Uptime Guarantee", "Lifetime Free SSL Certificate", "NVMe SSD Hosting. 2X Faster"], href: "https://my.hostao.com/cart.php?a=add&pid=10", popular: true },
  { name: "Business Plan", subtitle: "Large companies", price: "$6", features: ["10GB SSD Disk Space", "200GB/m Bandwidth", "100 Email Accounts", "20 Subdomains", "10 Domains", "Softaculous One-click Installer", "99.9% Uptime Guarantee", "Lifetime Free SSL Certificate", "NVMe SSD Hosting. 2X Faster"], href: "https://my.hostao.com/cart.php?a=add&pid=11", popular: false },
];

const DESIGN_FEATURES = ["Basic Web Hosting", "Free .Com Domain", "Premium Design", "6 Page Dynamic Website", "Content Creation", "Image / Video Gallery", "Admin Dashboard", "100% Responsive Design", "Social Media Integration", "Location Map Integration", "Page SEO Optimization", "24/7 Technical support"];

const PAGE_TYPES_LEFT = [
  { title: "Home Page", desc: "Your website\u2019s digital storefront showcases your brand\u2019s unique value proposition and invites visitors to learn more." },
  { title: "About Page", desc: "Where you tell your brand\u2019s story, highlight your team\u2019s expertise, and build trust and credibility with your audience." },
  { title: "Product / Service Page", desc: "Where you showcase your offerings in detail, including pricing, specifications, and features." },
];

const PAGE_TYPES_RIGHT = [
  { title: "Contact Page", desc: "Where you provide visitors with a way to get in touch with you, including your email, phone number, and physical location." },
  { title: "Terms Page", desc: "The legal agreement between your brand and your customers covers areas such as refunds, warranties, and liability." },
  { title: "Privacy Policy Page", desc: "Where you inform visitors about how you collect, use, and protect their personal data, in accordance with privacy regulations." },
];

const WHY_FEATURES = [
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "99.9% Uptime Guarantee" },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "NVMe SSD Performance" },
  { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Global Data Centers" },
  { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "24/7 Expert Support" },
  { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Free SSL Certificates" },
  { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Free Website Migration" },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>

      {/* SECTION 2: HERO */}
      <section className="hero-gradient-bg py-20 px-4" style={{ marginTop: '-90px', paddingTop: 'calc(90px + 5rem)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text + Search */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#1e293b]">
                Fast <span className="text-[#0071FB]">Web Hosting</span> & <span className="text-[#0071FB]">Domain</span> Registration
              </h1>
              <TypingHero />
              <p className="text-[#334155] text-lg mb-8 leading-relaxed">
                Launch, grow, and scale your website with fast NVMe SSD hosting. Reliable servers, free SSL, and 24/7 expert support — starting at just $3/month.
              </p>
              <DomainSearch />
              <p className="text-[#334155] text-sm mt-4">
                Reserve your domain today before someone takes it.
              </p>
            </div>
            {/* Right: Girl image */}
            <div className="flex justify-center">
              <img
                src="/images/hostao-llc-2.png"
                alt="Hostao web hosting - fast and affordable hosting plans"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 50% RESELLER DISCOUNT (white bg) */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#1e293b]">
            Exciting Reseller Discount at Hostao.com!
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#046bd2]">
            50% Off Reseller Discount
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/images/corporate-man-35.png" alt="Hostao reseller hosting - 50% discount" className="w-full max-w-md h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {["2GB RAM - 1CPU CORE", "20GB NVMe SSD", "1 Dedicated IP", "1TB Bandwidth", "Fast 1Gbps Uplink", "Linux OS"].map(feat => (
                  <div key={feat} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-[#334155]">{feat}</span>
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <span className="text-6xl font-bold text-[#046bd2]">$7</span>
                <span className="text-xl text-[#334155] ml-2">/mo</span>
              </div>
              <CountdownTimer className="mb-6" label="Offer ends in:" />
              <p className="text-sm text-[#334155] mb-6">*Available exclusively for Hostao reseller account holders</p>
              <a href="https://my.hostao.com/store/reseller" target="_blank" rel="noopener noreferrer" className="btn-hostao-primary text-lg font-bold px-10 py-4">
                Get This Deal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING PLAN (hero gradient bg) */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <p className="text-[#334155] text-sm uppercase tracking-widest font-medium">PRICING PLAN</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e293b]">
            Choose the Best Plan to Grow<br />Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map(plan => (
              <div key={plan.name} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? "border-2 border-[#046bd2] relative" : ""}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#046bd2] text-white text-center py-2 text-sm font-semibold">Most Popular</div>
                )}
                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <h3 className="text-2xl font-bold mb-2 text-[#1e293b]">{plan.name}</h3>
                  <p className="text-[#334155] mb-6">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-[#046bd2]">{plan.price}</span>
                    <span className="text-[#334155] ml-2">Per Month*</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map(feat => (
                      <li key={feat} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-[#334155]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.href} className="btn-hostao-primary w-full text-center">Order Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: DOMAIN OFFER + RESELLER DISCOUNT (white bg) */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border-2 border-[#1e293b] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img src="/images/banner-separator-1.png" alt="Domain offer" className="w-32 h-auto" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-[#1e293b]">Exclusive Domain Offer</h2>
              <p className="text-[#334155] mb-6">Get great deals on domain registrations! Find the perfect web address for your business or project at discounted prices. Don&apos;t miss our limited-time offers and secure your online identity today!</p>
              <a href="/offers" className="btn-hostao-outline">Get Offer</a>
            </div>
          </div>
          <div className="border-2 border-[#1e293b] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img src="/images/corporate-man-35.png" alt="Reseller discount" className="w-32 h-auto rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-[#1e293b]">50% Off Reseller Discount!</h2>
              <p className="text-[#334155] mb-6">Hostao.com provides an exceptional opportunity for individuals interested in becoming a reseller. Upon signing up, you can receive a substantial 50% discount on your purchases.</p>
              <a href="/vps-dedicated-server-reseller" className="btn-hostao-outline">Get Discount</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOSTAO DESIGNS (hero gradient bg) */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-2 text-[#1e293b]">Introducing Hostao Designs</h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-[#334155]">Bring Your Business to Life Instantly</h3>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-6">
              {PAGE_TYPES_LEFT.map(p => (
                <div key={p.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="text-lg font-bold mb-1 text-[#1e293b]">{p.title}</h4>
                  <p className="text-sm text-[#334155]">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-2 text-[#1e293b]">Hostao Design</h4>
              <div className="text-5xl font-bold text-[#046bd2] mb-1">$300</div>
              <p className="text-[#334155] mb-6 text-lg">One Time Payment</p>
              <ul className="text-left space-y-3 mb-8">
                {DESIGN_FEATURES.map(feat => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#334155] text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              <a href="https://my.hostao.com" className="btn-hostao-primary w-full text-center text-lg font-bold">Get Started</a>
            </div>
            <div className="space-y-6">
              {PAGE_TYPES_RIGHT.map(p => (
                <div key={p.title} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="text-lg font-bold mb-1 text-[#1e293b]">{p.title}</h4>
                  <p className="text-sm text-[#334155]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT WE PROVIDE + FAQ (white bg) */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#334155] text-sm uppercase tracking-widest font-medium mb-2">WHAT WE PROVIDE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e293b]">We Provide Secure & Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {featureCards.map((card, i) => (
              <div key={i} className="bg-[#F0F5FA] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
                <img src={card.img} alt={card.title} width={80} height={80} className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold mb-3 text-[#1e293b]">{card.title}</h3>
                <p className="text-[#334155]">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1e293b]">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full px-6 py-4 text-left bg-[#F0F5FA] hover:bg-[#e6f2ff] transition-colors flex items-center justify-between group">
                    <span className="font-semibold text-[#1e293b]">{faq.q}</span>
                    <svg className={`w-5 h-5 text-[#046bd2] transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-[#334155]">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE US (hero gradient bg) */}
      <section className="hero-gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/images/Hosting3.png" alt="Why choose Hostao web hosting services" className="w-full max-w-md h-auto" />
            </div>
            <div>
              <p className="text-[#334155] text-sm uppercase tracking-widest font-medium mb-2">WHY CHOOSE US</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e293b]">Grow Faster By Using<br />Our Hosting Services</h2>
              <p className="text-[#334155] mb-8 text-lg leading-relaxed">
                Choose Hostao for reliable and secure Low cost hosting services that are tailored
                to your specific needs. Our advanced technology, 24/7 support, and affordable
                pricing make us the ideal choice for individuals and businesses looking to grow
                their online presence.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {WHY_FEATURES.map(feat => (
                  <div key={feat.title} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#046bd2]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#046bd2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feat.icon} />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#1e293b]">{feat.title}</span>
                  </div>
                ))}
              </div>
              <Link href="/about-us" className="btn-hostao-primary text-lg font-bold">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS with animated gradient bg */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* SECTION 10: TRUST BAR */}
      <TrustBar />

      {/* SECTION 11: PARTNER LOGOS — horizontal strip */}
      <section className="bg-[#F0F5FA] py-10 px-4 border-b border-[#D1D5DB]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-nowrap justify-center items-center gap-10 overflow-x-auto">
            <img src="/images/cloudfare.webp" alt="Cloudflare" className="h-10 object-contain flex-shrink-0" />
            <img src="/images/lightspeed.webp" alt="LiteSpeed" className="h-10 object-contain flex-shrink-0" />
            <img src="/images/jetbackup.webp" alt="JetBackup" className="h-10 object-contain flex-shrink-0" />
            <img src="/images/google-cloud.webp" alt="Google Cloud" className="h-10 object-contain flex-shrink-0" />
            <img src="/images/wordpress.webp" alt="WordPress" className="h-10 object-contain flex-shrink-0" />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hostao",
            "url": "https://hostao.com",
            "logo": "https://hostao.com/images/hostao-logo.webp",
            "description": "Affordable web hosting, domain registration, reseller hosting, and VPS hosting provider",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://facebook.com/hostao",
              "https://twitter.com/HostaoOfficial",
              "https://www.linkedin.com/company/hostao/",
              "https://www.instagram.com/hostao/"
            ]
          })
        }}
      />

    </div>
  );
}
