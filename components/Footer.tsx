import Link from "next/link";
import Image from "next/image";
import {
  HOSTAO_COMPLIANCE_BADGE_HREF,
  HOSTAO_COMPLIANCE_BADGE_SRC,
  HOSTAO_HELP_CENTER_URL,
  HOSTAO_HELP_TICKETS_URL,
} from "@/lib/hostao-integrations";

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
  { label: "Transfer Domain",      href: "/contact-us" },
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
  { label: "Help Center",         href: HOSTAO_HELP_CENTER_URL },
  { label: "Support Tickets",     href: HOSTAO_HELP_TICKETS_URL },
  { label: "Network Status",    href: "https://status.hostao.com/", external: true },
  { label: "WhatsApp Updates",  href: "https://whatsapp.com/channel/0029Va4ev5sKmCPZFF4Xzm1u", external: true },
  { label: "Book Appointment",  href: "https://meet.hostao.com", external: true },
  { label: "DNS Checker",       href: HOSTAO_HELP_CENTER_URL },
  { label: "DMARC Checker",     href: HOSTAO_HELP_CENTER_URL },
  { label: "Privacy Policy",    href: "/privacy-policy" },
  { label: "Terms of Service",  href: "/terms-of-service" },
  { label: "Refund Policy",     href: "/refund-policy" },
];

const socials = [
  { href: "https://facebook.com/hostao", brand: "Facebook", bg: "#1877F2", viewBox: "0 0 24 24", path: "M13.135 22v-8.846h2.988l.447-3.45h-3.435V7.5c0-.999.277-1.68 1.71-1.68h1.826V2.734C15.783 2.64 15.097 2.6 14.3 2.6c-2.4 0-4.043 1.465-4.043 4.157v2.947H7.54v3.45h2.717V22h2.878z" },
  { href: "https://twitter.com/HostaoOfficial", brand: "X", bg: "#111827", viewBox: "0 0 24 24", path: "M18.244 2H21l-6.56 7.497L22.16 22h-6.048l-4.736-6.19L5.96 22H3.2l7.016-8.016L2 2h6.2l4.28 5.654L18.244 2zm-1.056 18h1.528L7.376 3.894H5.736L17.188 20z" },
  { href: "https://www.linkedin.com/company/hostao/", brand: "LinkedIn", bg: "#0A66C2", viewBox: "0 0 24 24", path: "M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.94 1.97h.03c1.09 0 1.97-.89 1.97-1.97A1.97 1.97 0 0 0 5.25 3zM20.44 13.02c0-3.4-1.82-4.98-4.24-4.98-1.96 0-2.84 1.08-3.33 1.84V8.5H9.5c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20h3.38l.01-6.98z" },
  { href: "https://www.instagram.com/hostao/", brand: "Instagram", bg: "#E4405F", viewBox: "0 0 24 24", path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.9 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.36 3.36 0 0 0 12 8.65z" },
  { href: "https://wa.me/919647000111", brand: "WhatsApp", bg: "#25D366", viewBox: "0 0 32 32", path: "M19.11 17.21c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.19-.31.21-.59.07-.28-.14-1.18-.43-2.24-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.31.41-.47.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.28-.96.93-.96 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32zM16.02 3C8.84 3 3 8.74 3 15.83c0 2.26.59 4.47 1.71 6.4L3 29l6.98-1.8a13.18 13.18 0 0 0 6.04 1.45H16c7.18 0 13.02-5.74 13.02-12.82C29.02 8.74 23.18 3 16.02 3zm0 23.5h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.23-4.14 1.07 1.1-4.01-.26-.41a10.65 10.65 0 0 1-1.64-5.57C5.12 9.97 10.03 5.1 16.02 5.1c5.98 0 10.9 4.87 10.9 10.73 0 5.9-4.91 10.67-10.9 10.67z" },
];

const paymentLogos = [
  { src: '/images/payment/visa.svg', alt: 'Visa', width: 44 },
  { src: '/images/payment/mastercard.svg', alt: 'Mastercard', width: 34 },
  { src: '/images/payment/paypal.svg', alt: 'PayPal', width: 62 },
  { src: '/images/payment/american-express.svg', alt: 'American Express', width: 60 },
  { src: '/images/payment/maestro.svg', alt: 'Maestro', width: 40 },
];

/* ─── Sub-components ─────────────────────────────────────── */
function FLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const cls = "group flex min-h-7 items-center gap-2 text-[#7a8599] hover:text-white text-xs transition-all duration-150 py-1.5 lg:min-h-0 lg:py-0.5";
  const dot = <span className="w-1 h-1 rounded-full bg-[#046bd2]/50 group-hover:bg-[#046bd2] group-hover:scale-150 transition-all flex-shrink-0" />;
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{dot}{label}</a>
    : <Link href={href} className={cls}>{dot}{label}</Link>;
}

/* Accordion column — collapses on mobile, always open on lg+ */
function AccordionCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-white/5 lg:border-none" open>
      {/* Mobile toggle header */}
      <summary className="flex w-full cursor-pointer list-none items-center justify-between py-3.5 text-left lg:hidden [&::-webkit-details-marker]:hidden">
        <span className="text-white font-bold text-[11px] uppercase tracking-widest">{title}</span>
        <svg
          className="w-4 h-4 text-[#046bd2] transition-transform duration-200 group-open:rotate-180"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      {/* Desktop always-visible header */}
      <div className="hidden lg:block mb-4">
        <h3 className="text-white font-bold text-[11px] uppercase tracking-widest mb-2">{title}</h3>
        <div className="h-px" style={{ background: "linear-gradient(90deg,#046bd2,transparent)" }} />
      </div>
      {/* Content */}
      <div className="pb-4 lg:pb-0">
        {children}
      </div>
    </details>
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
      {/* ── Main grid ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 pt-8 pb-28 lg:pt-12 lg:pb-10">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(260px,1.05fr)_minmax(0,2.95fr)] lg:gap-10 xl:gap-12 lg:items-start">

          {/* Brand column — always full width on mobile */}
          <div className="space-y-5 pb-6 mb-2 border-b border-white/8 text-center lg:text-left lg:border-none lg:mb-0 lg:pb-0 lg:pr-4 xl:pr-6">
            <Link href="/" className="inline-flex max-w-[140px] mx-auto lg:mx-0">
              <Image src="/images/dark-new-300.webp" alt="Hostao" width={120} height={41} className="h-7 w-auto max-w-full object-contain" unoptimized />
            </Link>

            <p className="text-[#7a8599] text-xs leading-relaxed max-w-[320px] mx-auto lg:mx-0 lg:max-w-none">
              Reliable, secure, and blazing-fast web hosting since 2009. Trusted by 50,000+ customers worldwide.
            </p>

            {/* Contact */}
            <div className="space-y-2 max-w-[280px] mx-auto lg:mx-0 lg:max-w-none text-left">
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
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {socials.map((s) => (
                <a
                  key={s.brand}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.brand}
                  title={s.brand}
                  style={{ background: `linear-gradient(180deg, ${s.bg}, ${s.bg})` }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
                >
                  <svg className="h-4.5 w-4.5 text-white" fill="currentColor" viewBox={s.viewBox}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mx-auto max-w-[280px] space-y-4 rounded-2xl border border-white/10 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.22)] lg:mx-0" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))" }}>
              <div>
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#8fbaf2] lg:text-left">Verified Partners</p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white px-3">
                    <Image
                      src="/images/hostao-cloud-partner-264.webp"
                      alt="Google Cloud Partner"
                      width={132}
                      height={31}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <div className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white px-3">
                    <Image
                      src="/images/nixi-registrar.png"
                      alt="NIXI Registrar"
                      width={92}
                      height={28}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#8fbaf2] lg:text-left">Accepted Payments</p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                  {paymentLogos.map((logo) => (
                    <span
                      key={logo.alt}
                      className="inline-flex h-9 min-w-[54px] items-center justify-center rounded-xl border border-slate-200 bg-white px-2.5 shadow-sm"
                    >
                      <Image src={logo.src} alt={logo.alt} width={logo.width} height={18} className="h-[18px] w-auto object-contain" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0f2548] text-[#8fbaf2]">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
                      <path d="m9.5 12 1.7 1.7L14.8 10" />
                    </svg>
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8fbaf2]">Privacy & Compliance</p>
                </div>
                <a
                  href={HOSTAO_COMPLIANCE_BADGE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center rounded-xl border border-white/10 bg-white px-3 py-3 transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Image
                    src={HOSTAO_COMPLIANCE_BADGE_SRC}
                    alt="Euverify verified GDPR compliance badge"
                    width={168}
                    height={50}
                    className="h-11 w-auto max-w-[168px] object-contain opacity-100"
                    unoptimized
                  />
                </a>
                <p className="text-center text-[11px] leading-5 text-[#94a3b8] lg:text-left">
                  Euverify verified privacy, security, and trust posture.
                </p>
              </div>

              <a
                href="https://whatsapp.com/channel/0029Va4ev5sKmCPZFF4Xzm1u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#25d366]/30 bg-[#25d366]/12 px-3 py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#25d366]/18"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25d366] text-[#04110a]">
                  <svg className="h-3 w-3" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M19.11 17.21c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.19-.31.21-.59.07-.28-.14-1.18-.43-2.24-1.37-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.31.41-.47.14-.16.18-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.28-.96.93-.96 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.31.23-.64.23-1.19.16-1.31-.07-.11-.25-.18-.53-.32z" />
                    <path d="M16.02 3C8.84 3 3 8.74 3 15.83c0 2.26.59 4.47 1.71 6.4L3 29l6.98-1.8a13.18 13.18 0 0 0 6.04 1.45H16c7.18 0 13.02-5.74 13.02-12.82C29.02 8.74 23.18 3 16.02 3zm0 23.5h-.01a10.9 10.9 0 0 1-5.55-1.52l-.4-.23-4.14 1.07 1.1-4.01-.26-.41a10.65 10.65 0 0 1-1.64-5.57C5.12 9.97 10.03 5.1 16.02 5.1c5.98 0 10.9 4.87 10.9 10.73 0 5.9-4.91 10.67-10.9 10.67z" />
                  </svg>
                </span>
                Follow WhatsApp updates
              </a>
            </div>
          </div>

          {/* Link columns — accordion on mobile, normal on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 xl:gap-10 lg:items-start mt-3 lg:mt-0 divide-y divide-white/5 lg:divide-y-0">

            {/* Reseller Hosting */}
            <AccordionCol title="Reseller Hosting">
              <ul className="space-y-1">{resellerLinks.map(l => <li key={l.label}><FLink {...l} /></li>)}</ul>
            </AccordionCol>

            {/* Dedicated + VPS */}
            <div className="lg:space-y-8">
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
      <div className="border-t border-white/8 pb-24 lg:pb-0" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#3d4759] text-xs text-center md:text-left">
            © 2009–{year} <span className="text-[#5a6475]">Hostao LLC.</span> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1">
            <Link href="/privacy-policy" className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">Terms of Service</Link>
            <Link href="/refund-policy" className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">Refund Policy</Link>
            <Link href={HOSTAO_HELP_CENTER_URL} className="text-[#3d4759] hover:text-[#046bd2] text-xs transition-colors">Help Center</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
