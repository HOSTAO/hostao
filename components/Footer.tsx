"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ─── Link data ─────────────────────────────────────────── */
const resellerLinks = [
  { label: "Reseller in Budget",      href: "/reseller-hosting" },
  { label: "Reseller in USA",          href: "/usa-reseller-hosting" },
  { label: "Reseller in Europe UK",    href: "/europe-uk-reseller-hosting" },
  { label: "Reseller in Singapore",    href: "/singapore-reseller-hosting" },
  { label: "Reseller in Netherlands",  href: "/netherlands-reseller-hosting" },
  { label: "Reseller in Germany",      href: "/german-reseller-hosting" },
  { label: "Reseller in Japan",        href: "/japan-reseller-hosting" },
  { label: "Multi Location Reseller",  href: "/multi-location-reseller" },
];
const dedicatedLinks = [
  { label: "Dedicated in USA",       href: "/usa-dedicated-servers" },
  { label: "Dedicated in Singapore", href: "/singapore-dedicated-servers" },
  { label: "Dedicated in Europe UK", href: "/uk-dedicated-servers" },
];
const vpsLinks = [
  { label: "VPS in USA",        href: "/usa-vps-hosting" },
  { label: "VPS in Singapore",  href: "/singapore-vps-hosting" },
  { label: "VPS in Europe UK",  href: "/uk-europe-vps-hosting" },
];
const quickLinks = [
  { label: "Shared Hosting",       href: "/shared-hosting" },
  { label: "WordPress Hosting",   href: "/wordpress-hosting" },
  { label: "Reseller Hosting",     href: "/reseller-hosting" },
  { label: "VPS Hosting",          href: "/vps" },
  { label: "Dedicated Hosting",    href: "/dedicated" },
  { label: "Free WHMCS",           href: "/free-whmcs" },
  { label: "cPanel Hosting",       href: "/cpanel-web-hosting" },
  { label: "SEO Hosting",          href: "/seo-hosting" },
  { label: "Domain Registration",  href: "/domain-registration" },
  { label: "Transfer Domain",      href: "https://my.hostao.com/cart.php?a=add&domain=transfer", external: true },
  { label: "Bahrain Domain (.bh)", href: "/bahrain-domains" },
  { label: "UAE Domain (.ae)",     href: "/ae-domains" },
  { label: "Qatar Domain (.qa)",   href: "/qa-domains" },
  { label: ".SA Domain — Saudi Arabia", href: "/sa-domains" },
  { label: ".KW Domain — Kuwait", href: "/kw-domains" },
  { label: ".OM Domain — Oman", href: "/om-domains" },
  { label: ".IN Domain — India", href: "/in-domains" },
  { label: ".PK Domain — Pakistan", href: "/pk-domains" },
  { label: "Latest Offers",        href: "/latest-offers" },
  { label: "Web Design",           href: "/website-design-and-development" },
];
const usefulLinks = [
  { label: "About Us",          href: "/about-us" },
  { label: "Contact Us",        href: "/contact-us" },
  { label: "Blog",              href: "/blog" },
  { label: "Our Partners",      href: "/our-partners" },
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "Careers",           href: "/careers" },
  { label: "Client Portal",     href: "https://my.hostao.com", external: true },
  { label: "Support Tickets",   href: "https://my.hostao.com/submitticket.php?step=2&deptid=1", external: true },
  { label: "Network Status",    href: "https://status.hostao.com/", external: true },
  { label: "Book Appointment",  href: "https://meet.hostao.com", external: true },
  { label: "DNS Checker",       href: "https://dnschecker.hostao.com/", external: true },
  { label: "DMARC Checker",     href: "https://dmarcchecker.hostao.com/", external: true },
  { label: "Privacy Policy",    href: "/privacy-policy" },
  { label: "Terms of Service",  href: "/terms-of-service" },
  { label: "Refund Policy",     href: "/refund-policy" },
];

const ecosystemLinks = [
  { label: "Hostao",          href: "https://hostao.com",             icon: "🌐", desc: "Web Hosting" },
  { label: "AutoChat",        href: "https://autochat.in",            icon: "💬", desc: "WhatsApp Automation" },
  { label: "RatingE",         href: "https://ratinge.com",            icon: "⭐", desc: "Reputation Management" },
  { label: "BestEmail",       href: "https://bestemail.in",           icon: "✉️", desc: "Email Marketing" },
  { label: "SuperLaunch",     href: "https://superlaunch.in",         icon: "🚀", desc: "Startup Directory" },
  { label: "Hostao Design",   href: "https://design.hostao.com",      icon: "🎨", desc: "Web Design" },
  { label: "Hostao Digital",  href: "https://digital.hostao.com",     icon: "📱", desc: "Digital Marketing" },
  { label: "Hostao Tools",    href: "https://tools.hostao.com",       icon: "🔧", desc: "Free Web Tools" },
];

const socials = [
  { href: "http://Facebook.com/hostao", bg: "#1877f2", label: "FB", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
  { href: "https://twitter.com/HostaoOfficial", bg: "#1da1f2", label: "TW", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
  { href: "https://www.linkedin.com/company/hostao/", bg: "#0a66c2", label: "LI", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  { href: "https://www.instagram.com/hostao/", bg: "#e4405f", label: "IG", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" },
  { href: "http://wa.me/+919647000111", bg: "#25d366", label: "WA", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.141 1.545 5.874L0 24l6.336-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
];

/* ─── Sub-components ─────────────────────────────────────── */
function FLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const cls = "group flex items-center gap-2 text-[#7a8599] hover:text-white text-xs transition-all duration-150 py-0.5";
  const dot = <span className="w-1 h-1 rounded-full bg-[#046bd2]/50 group-hover:bg-[#046bd2] group-hover:scale-150 transition-all flex-shrink-0" />;
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{dot}{label}</a>
    : <Link href={href} className={cls}>{dot}{label}</Link>;
}

/* Accordion column — collapses on mobile, always open on lg+ */
function AccordionCol({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 lg:border-none">
      {/* Mobile toggle header */}
      <button
        className="w-full flex items-center justify-between py-3 lg:hidden"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-white font-bold text-[11px] uppercase tracking-widest">{title}</span>
        <svg
          className={`w-4 h-4 text-[#046bd2] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Desktop always-visible header */}
      <div className="hidden lg:block mb-4">
        <h3 className="text-white font-bold text-[11px] uppercase tracking-widest mb-2">{title}</h3>
        <div className="h-px" style={{ background: "linear-gradient(90deg,#046bd2,transparent)" }} />
      </div>
      {/* Content */}
      <div className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${open ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0 lg:opacity-100"}`}>
        {children}
      </div>
    </div>
  );
}

/* ─── Newsletter form ────────────────────────────────────── */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://bestemail-platform.vercel.app/api/forms/hostao-newsletter/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setMsg("🎉 Subscribed! Watch your inbox for great deals.");
        setEmail("");
      } else {
        const f = document.createElement("form");
        f.method = "post"; f.action = "https://sendfox.com/form/m5wz9l/3ed72p";
        const inp = document.createElement("input");
        inp.type = "hidden"; inp.name = "email"; inp.value = email;
        f.appendChild(inp); document.body.appendChild(f); f.submit();
        setStatus("success");
        setMsg("🎉 Subscribed!");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      {status === "success" ? (
        <p className="text-green-400 text-sm font-medium text-center md:text-left">{msg}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-white/50 bg-white disabled:opacity-60 w-full"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-white text-[#046bd2] font-bold px-6 py-3 rounded-lg text-sm hover:bg-blue-50 active:scale-95 transition-all shadow-lg whitespace-nowrap disabled:opacity-60 w-full sm:w-auto"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && <p className="text-red-300 text-xs mt-1">{msg}</p>}
    </div>
  );
}

/* ─── Main Footer ────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg,#070e20 0%,#050b18 60%,#030810 100%)" }}>

      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06] blur-3xl" style={{ background: "#046bd2" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04] blur-3xl" style={{ background: "#0044aa" }} />

      {/* ── Newsletter bar ── */}
      <div className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(100deg,#0356a8 0%,#046bd2 50%,#0047b3 100%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%,rgba(255,255,255,0.15),transparent 60%),radial-gradient(circle at 80% 50%,rgba(255,255,255,0.1),transparent 60%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-white font-extrabold text-lg tracking-tight">
              ✉️ Get Exclusive Hosting Deals
            </h3>
            <p className="text-blue-100/80 text-xs mt-1">Join 50,000+ subscribers — offers, tips, and early access.</p>
          </div>
          <div className="w-full md:w-auto md:min-w-[420px]">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── Our Brands / Ecosystem ── */}
      <div className="border-b border-white/8" style={{ background: "rgba(4,107,210,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-[#4b5563] text-[10px] uppercase tracking-widest text-center mb-4">Our Brands &amp; Ecosystem</p>
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {ecosystemLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl border border-white/6 hover:border-[#046bd2]/50 hover:bg-[#046bd2]/10 transition-all duration-200 text-center">
                <span className="text-xl sm:text-2xl leading-none">{l.icon}</span>
                <span className="text-white text-[10px] sm:text-xs font-semibold group-hover:text-[#046bd2] transition-colors leading-tight">{l.label}</span>
                <span className="text-[#4b5563] text-[9px] sm:text-[10px] leading-tight hidden sm:block">{l.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-4 lg:pt-12 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-5">

          {/* Brand column — always full width on mobile */}
          <div className="lg:col-span-2 space-y-5 pb-6 mb-4 border-b border-white/8 lg:border-none lg:mb-0 lg:pb-0">
            <Link href="/">
              <Image src="/images/Dark-new.png" alt="Hostao" width={150} height={44} className="h-10 w-auto" unoptimized />
            </Link>

            <p className="text-[#7a8599] text-xs leading-relaxed">
              Reliable, secure, and blazing-fast web hosting since 2009. Trusted by 50,000+ customers worldwide.
            </p>

            {/* Contact */}
            <div className="space-y-2">
              <a href="tel:+13237447383"
                className="flex items-start gap-2 text-[#7a8599] hover:text-white text-xs transition-colors group">
                <span className="w-6 h-6 rounded-full bg-[#046bd2]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#046bd2]/30 transition-colors">
                  <svg className="w-3 h-3 text-[#046bd2]" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                  </svg>
                </span>
                <span className="break-all">+1 (323) 744-7383<br />+91 9647 000 111</span>
              </a>
              <a href="mailto:contact@hostao.com"
                className="flex items-center gap-2 text-[#7a8599] hover:text-white text-xs transition-colors group">
                <span className="w-6 h-6 rounded-full bg-[#046bd2]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#046bd2]/30 transition-colors">
                  <svg className="w-3 h-3 text-[#046bd2]" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                </span>
                contact@hostao.com
              </a>
              <p className="text-[#4b5563] text-xs pl-8">30 N Gould St Ste R, Sheridan, WY 82801</p>
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ background: s.bg }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 hover:brightness-110 transition-all duration-200 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-white/8 p-4 space-y-3" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="flex flex-wrap items-center gap-4">
                <img src="https://hostao.com/wp-content/uploads/2024/01/Hostao-cloud-partner.png"
                  alt="Google Cloud Partner" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="https://hostao.com/wp-content/uploads/2024/01/NIXI-Registrar.png"
                  alt="NIXI Registrar" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <img src="https://hostao.com/wp-content/uploads/elementor/thumbs/payment_gateways_imgs-qv7a5kp32o03eq2wwx8d2n4m6u09euxwjsyk058kqo.png"
                alt="Payment Gateways" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <a href="https://gdpr.euverify.com/verify/11172608-cbe5-4070-b46a-678b95ffb83f"
                target="_blank" rel="noopener noreferrer" className="inline-block">
                <img src="https://gdpr.euverify.com/images/BOTH.png" alt="GDPR Compliant"
                  className="h-14 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-200" />
              </a>
            </div>

            {/* Tao AI */}
            <a href="https://gogl.in/4iBUEP" target="_blank" rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-[#046bd2]/25 hover:border-[#046bd2]/60 p-3.5 transition-all duration-200"
              style={{ background: "rgba(4,107,210,0.07)" }}>
              <div className="relative flex-shrink-0">
                <img src="https://hostao.com/wp-content/uploads/2024/01/Whatsapp.png"
                  alt="Tao" className="w-10 h-10 rounded-full ring-2 ring-[#046bd2]/30 group-hover:ring-[#046bd2]/70 transition-all" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2"
                  style={{ borderColor: "#050b18" }} />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Tao — AI Assistant 🤖</p>
                <p className="text-[#7a8599] text-xs mt-0.5 group-hover:text-[#9ca3af] transition-colors">
                  Chat on WhatsApp for instant Hostao support.
                </p>
              </div>
            </a>
          </div>

          {/* Link columns — accordion on mobile, normal on desktop */}
          <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-4 lg:gap-5">

            {/* Reseller Hosting */}
            <AccordionCol title="Reseller Hosting">
              <ul className="space-y-1">{resellerLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
            </AccordionCol>

            {/* Dedicated + VPS */}
            <div>
              <AccordionCol title="Dedicated Hosting">
                <ul className="space-y-1">{dedicatedLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
              </AccordionCol>
              <AccordionCol title="VPS Hosting">
                <ul className="space-y-1">{vpsLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
              </AccordionCol>
            </div>

            {/* Quick Links */}
            <AccordionCol title="Quick Links">
              <ul className="space-y-1">{quickLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
            </AccordionCol>

            {/* Useful Links */}
            <AccordionCol title="Useful Links">
              <ul className="space-y-1">{usefulLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
            </AccordionCol>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#3d4759] text-xs text-center md:text-left">
            © 2009–{year} <span className="text-[#5a6475]">Hostao LLC.</span> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Refund Policy", href: "/refund-policy" },
              { label: "Client Portal", href: "https://my.hostao.com", external: true },
            ].map(l => (
              l.external
                ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">{l.label}</a>
                : <Link key={l.label} href={l.href}
                    className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
