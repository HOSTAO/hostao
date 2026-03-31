"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";

const STATS = [
  { icon: "/wp-content/uploads/2024/01/Free-Domain-Reseller.png", value: "1,045+", label: "Domain Names" },
  { icon: "/wp-content/uploads/2024/01/Location.png", value: "25+", label: "Countries Served" },
  { icon: "/wp-content/uploads/2024/01/Developer.webp", value: "10+", label: "Years Experience" },
  { icon: "/wp-content/uploads/2024/01/employees.webp", value: "99.9%", label: "Uptime SLA" },
];

const BRANDS = [
  {
    name: "Hostao Design",
    tagline: "Your One-Stop Shop for Website Solutions",
    desc: "Hostao Design offers a comprehensive suite of services, including domain registration, web hosting, and expert website design. Whether you're looking to establish your online presence or elevate your current website, Hostao Design provides everything you need to bring your business to life online.",
    img: "https://hostao.com/wp-content/uploads/2024/08/Hostao-Design-One-Stop-Shop-for-Website-Needs-1024x492.png",
    href: "https://design.hostao.com",
  },
  {
    name: "Hostao Digital",
    tagline: "Unlock Your Digital Potential",
    desc: "Hostao Digital is your gateway to digital excellence, offering bespoke web design, SEO services, and automation solutions. With a focus on innovation and client-centric strategies, Hostao Digital helps businesses thrive in the ever-evolving digital landscape.",
    img: "https://hostao.com/wp-content/uploads/2024/08/Marketing-Agency-1024x511.jpg",
    href: "https://digital.hostao.com",
  },
  {
    name: "Hostao Tools",
    tagline: "Free SEO & Web Tools",
    desc: "Hostao Tools provides a powerful suite of free web tools designed to enhance your website's performance and SEO strategy. From keyword analysis to DNS checkers and link management, our tools make optimization accessible for everyone.",
    img: "https://hostao.com/wp-content/uploads/2024/08/SEO-Tools-Plagiarism-Checker-Article-Rewriter-Backlink-maker-200-more-tools--1024x511.jpg",
    href: "https://tools.hostao.com",
  },
  {
    name: "RatingE",
    tagline: "Effortless Review Management",
    desc: "RatingE simplifies the process of managing customer reviews with its AI-powered platform. Automate review requests, gather feedback, and showcase positive reviews to enhance your online reputation and attract more customers effortlessly.",
    img: "https://hostao.com/wp-content/uploads/2024/08/RatingE-Revolutionary-Review-Management-Platform-1024x511.jpg",
    href: "https://ratinge.com",
  },
  {
    name: "AutoChat",
    tagline: "Advanced WhatsApp Automation",
    desc: "AutoChat is the most advanced WhatsApp automation platform, enabling businesses to streamline operations and improve customer interactions. With features like no-code chatbot builders and integrated eCommerce, AutoChat helps you achieve your business goals with ease.",
    img: "https://hostao.com/wp-content/uploads/2024/08/Autochat-The-Most-Advanced-WhatsApp-Automation-Platform-AutoChat-1024x511.jpg",
    href: "https://autochat.in",
  },
];

const PARTNERS = [
  { src: "/images/cloudfare.webp", alt: "Cloudflare" },
  { src: "/images/lightspeed.webp", alt: "LiteSpeed" },
  { src: "/images/jetbackup.webp", alt: "JetBackup" },
  { src: "/images/google-cloud.webp", alt: "Google Cloud" },
  { src: "/images/wordpress.webp", alt: "WordPress" },
  { src: "/images/Hostao-cloud-partner.png", alt: "Hostao Cloud Partner" },
  { src: "/images/nixi-registrar.png", alt: "NIXI Registrar" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("ABOUT US");

  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#0c1434]">About Us</h1>
          <p className="text-[#1f2b4d] text-lg">Welcome to Hostao – Your Partner in Reliable and Affordable Website Hosting Solutions</p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(s => (
            <div key={s.label} className="rounded-3xl p-6 text-center" style={{ background: "#161640" }}>
              <Image src={s.icon} alt={s.label} width={40} height={40} className="h-10 w-auto mx-auto mb-3" unoptimized />
              <div className="text-white text-sm font-medium mb-1">{s.label}</div>
              <div className="text-3xl font-extrabold text-white leading-none">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TAB NAVIGATION ───────────────────────────────────── */}
      <section className="bg-white px-4 py-2">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
          {["WHY US", "ABOUT US", "CONTACT US", "REVIEWS"].map(label => (
            <button 
              key={label} 
              onClick={() => setActiveTab(label)}
              className={`text-center py-4 font-bold text-lg md:text-2xl cursor-pointer transition-colors ${
                activeTab === label 
                  ? "bg-[#0056A7] text-white" 
                  : "bg-[#1677E8] text-white hover:bg-[#1167cb]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── TAB CONTENT ──────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        {activeTab === "ABOUT US" && (
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="https://hostao.com/wp-content/uploads/2024/04/hostao-llc-2-1-1024x1024.png"
                alt="Hostao Company"
                width={420}
                height={420}
                className="w-full max-w-sm"
                unoptimized
              />
            </div>
            <div className="text-[#0A6CF1] text-5xl font-bold mb-3">Our Story</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Do You Know the Amazing Story of Our Company?</h2>
            <div className="space-y-4 text-gray-800 text-2xl leading-relaxed text-left">
              <p>In 2010, Hostao was founded with the mission of providing affordable and reliable web hosting to all. The company&apos;s goal was to make web hosting accessible to everyone, regardless of their technical expertise or budget.</p>
              <p>Fast forward to 2023, Hostao has grown into a registered and active web hosting provider that consistently prioritizes its clients. Over the years, Hostao has built a reputation for delivering dependable services that cater to the diverse needs of its customers.</p>
              <p>One of Hostao&apos;s standout features is its exclusive live tutorial sessions. These sessions are designed to ensure that clients are comfortable with the platform and can fully utilize all the tools and features available. This hands-on approach helps clients get the most out of their hosting experience.</p>
              <p>Additionally, Hostao offers 24/7 customer support to ensure that help is always available when needed. Whether you&apos;re facing a technical issue or have a simple question, Hostao&apos;s support team is ready to assist.</p>
            </div>
          </div>
        )}

        {activeTab === "WHY US" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Hostao?</h2>
              <p className="text-gray-600 text-lg">Discover what makes us the preferred choice for web hosting</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "24/7 Expert Support", desc: "Real hosting experts available round the clock via live chat, email, and tickets." },
                { title: "99.9% Uptime Guarantee", desc: "Industry-leading uptime backed by our service level agreement." },
                { title: "NVMe SSD Performance", desc: "Lightning-fast loading speeds with NVMe SSD storage technology." },
                { title: "Free SSL & Security", desc: "Lifetime free SSL certificates and advanced security features included." },
                { title: "Global Data Centers", desc: "Choose from data centers in USA, India, UK, UAE, Singapore, and more." },
                { title: "Free Migration", desc: "We move your existing website for free with zero downtime." }
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "CONTACT US" && (
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📞 Phone Support</h3>
                <p className="text-gray-600">+1 (323) 744-7383</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">💬 Live Chat</h3>
                <p className="text-gray-600">Available 24/7 on our website</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📧 Email</h3>
                <p className="text-gray-600">sales@hostao.com</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="bg-[#0056A7] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#004085]">
                Visit Contact Page
              </Link>
            </div>
          </div>
        )}

        {activeTab === "REVIEWS" && (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-[#0056A7] text-3xl font-bold">5.0</div>
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <div className="text-sm text-gray-600 mt-2">Facebook Reviews</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-[#0056A7] text-3xl font-bold">5.0</div>
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <div className="text-sm text-gray-600 mt-2">Google Reviews</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-[#0056A7] text-3xl font-bold">4.4</div>
                <div className="text-yellow-400 text-xl">★★★★★</div>
                <div className="text-sm text-gray-600 mt-2">Trustpilot Reviews</div>
              </div>
            </div>
            <p className="text-gray-600">Join thousands of satisfied customers who trust Hostao for their hosting needs.</p>
          </div>
        )}
      </section>

      {/* ── BRANDS ───────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-3">
            <p className="text-gray-500 text-sm">Discover the diverse range of services and solutions offered by our family of brands, each dedicated to helping your business succeed in the digital world.</p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Your One-Stop Shop for Domain Registration, Web Hosting, and Beautiful Website Design</h2>
          <div className="space-y-10">
            {BRANDS.map((brand, i) => (
              <div key={brand.name} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center border border-gray-100 rounded-2xl p-6 card-hover hover:border-[#0056A7]/20`}>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{brand.name}</h3>
                  <div className="text-[#0056A7] text-sm font-semibold mb-3">{brand.tagline}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{brand.desc}</p>
                  <a href={brand.href} target="_blank" rel="noopener noreferrer"
                    className="text-[#0056A7] text-sm font-semibold hover:underline">Visit {brand.name} →</a>
                </div>
                <div className="flex-shrink-0 w-full md:w-80">
                  <Image src={brand.img} alt={brand.name} width={320} height={160}
                    className="rounded-xl w-full h-44 object-cover shadow-sm" unoptimized />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAIN SEARCH ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#171734]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#0056A7] text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Domain Registration</div>
          <h2 className="text-3xl font-bold text-white mb-3">Find Your New Domain</h2>
          <p className="text-white/60 mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-white/50 text-xs mb-6">Reserve your domain today before someone takes it.</p>
          <DomainSearch />
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-8">Powered by the world&apos;s best infrastructure partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {PARTNERS.map(p => (
              <Image key={p.alt} src={p.src} alt={p.alt} width={100} height={40}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" unoptimized />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience the Hostao Difference Today</h2>
          <p className="text-white/80 mb-6">Join 50,000+ websites. 30-day money-back guarantee. No risk.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/hosting" className="bg-white text-[#0056A7] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 text-sm">View Hosting Plans</Link>
            <Link href="/contact" className="btn-outline-white px-8 py-3.5 text-sm">Contact Our Team</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
