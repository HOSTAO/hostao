"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const HOSTING_DROPDOWN = [
  { label: "Shared Hosting", href: "/shared-hosting" },
  { label: "WordPress Hosting", href: "/wordpress-hosting" },
  { label: "Multi Location Hosting", href: "/cpanel-web-hosting" },
];

const RESELLER_DROPDOWN = [
  { label: "Master Reseller", href: "/reseller-hosting" },
  { label: "Budget Reseller", href: "/cheap-reseller-hosting" },
  { label: "USA Reseller", href: "/usa-reseller-hosting" },
  { label: "Europe UK Reseller", href: "/europe-uk-reseller-hosting" },
  { label: "Singapore Reseller", href: "/singapore-reseller-hosting" },
  { label: "Netherlands Reseller", href: "/netherlands-reseller-hosting" },
  { label: "German Reseller", href: "/german-reseller-hosting" },
  { label: "Canada Reseller", href: "/canada-reseller-hosting" },
  { label: "Asia Indian Reseller", href: "/indian-reseller-hosting" },
  { label: "Asia China Reseller", href: "/china-reseller-hosting" },
  { label: "Asia Japan Reseller", href: "/japan-reseller-hosting" },
  { label: "Australian Reseller", href: "/australian-reseller-hosting" },
  { label: "South Africa Reseller", href: "/south-africa-reseller-hosting" },
  { label: "Multi Reseller Hosting", href: "/multi-location-reseller" },
];

const VPS_DROPDOWN = [
  { label: "USA VPS", href: "/usa-vps-hosting" },
  { label: "Singapore VPS", href: "/singapore-vps-hosting" },
  { label: "UK Europe VPS", href: "/uk-europe-vps-hosting" },
  { label: "USA Dedicated", href: "/usa-dedicated-servers" },
  { label: "Singapore Dedicated", href: "/singapore-dedicated-servers" },
  { label: "UK Dedicated", href: "/uk-dedicated-servers" },
];

const DOMAINS_DROPDOWN = [
  { label: "Domain Registration", href: "/domain-registration" },
  { label: ".AE Domain — UAE", href: "/ae-domains" },
  { label: ".SA Domain — Saudi Arabia", href: "/sa-domains" },
  { label: ".BH Domain — Bahrain", href: "/bahrain-domains" },
  { label: ".QA Domain — Qatar", href: "/qa-domains" },
  { label: ".KW Domain — Kuwait", href: "/kw-domains" },
  { label: ".OM Domain — Oman", href: "/om-domains" },
  { label: ".IN Domain — India", href: "/in-domains" },
  { label: ".PK Domain — Pakistan", href: "/pk-domains" },
];

const FEATURES_DROPDOWN = [
  { label: "Standard Features", href: "/features" },
  { label: "Domain Reseller", href: "/domain-reseller" },
  { label: "Merchant Account", href: "/merchant-account" },
  { label: "SSL Reseller Account", href: "/ssl-reseller-account" },
  { label: "CloudFlare CDN", href: "/cloudflare" },
  { label: "Overselling Enabled", href: "/overselling" },
  { label: "FREE WHMCS License", href: "/free-whmcs" },
  { label: "My Company Web", href: "/mycompanyweb" },
  { label: "Reseller Templates", href: "/reseller-web-templates" },
  { label: "MailChannels", href: "/mailchannels-corporate-mail" },
  { label: "NVMe SSD Reseller", href: "/nvme-ssd-reseller" },
  { label: "50% Reseller Off", href: "/vps-dedicated-server-reseller" },
  { label: "Web Site Builder", href: "/reseller-hosting-website-builders" },
  { label: "Softaculous Hosting", href: "/softaculous" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-14 lg:h-16 gap-3 lg:gap-5">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 max-w-[130px] lg:max-w-[145px]">
          <Image
            src="/images/hostao-logo-300.webp"
            alt="Hostao home"
            width={145}
            height={50}
            className="h-7 lg:h-8 w-auto max-w-full object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1">
          {/* Hosting dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("hosting")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
              Hosting
              <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "hosting" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {activeDropdown === "hosting" && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 shadow-xl py-2 z-50">
                {HOSTING_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-[#334155] hover:text-[#045cb4] hover:bg-[#F0F5FA] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Reseller dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("reseller")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
              Reseller
              <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "reseller" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {activeDropdown === "reseller" && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 shadow-xl py-2 z-50 max-h-96 overflow-y-auto">
                {RESELLER_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-[#334155] hover:text-[#045cb4] hover:bg-[#F0F5FA] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* VPS & Dedicated dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("vps")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
              VPS & Dedicated
              <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "vps" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {activeDropdown === "vps" && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-200 shadow-xl py-2 z-50">
                {VPS_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-[#334155] hover:text-[#045cb4] hover:bg-[#F0F5FA] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Features dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("features")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
              Features
              <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "features" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {activeDropdown === "features" && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 shadow-xl py-2 z-50 max-h-96 overflow-y-auto">
                {FEATURES_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-[#334155] hover:text-[#045cb4] hover:bg-[#F0F5FA] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Domains dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("domains")} onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
              Domains
              <svg className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "domains" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {activeDropdown === "domains" && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 shadow-xl py-2 z-50 max-h-96 overflow-y-auto">
                {DOMAINS_DROPDOWN.map(item => (
                  <Link key={item.href} href={item.href} className="block px-4 py-3 text-sm text-[#334155] hover:text-[#045cb4] hover:bg-[#F0F5FA] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Google Workspace */}
          <Link href="/google-workspace" className="px-4 py-5 text-sm font-semibold text-[#0071FB] hover:text-[#045cb4] transition-colors whitespace-nowrap">
            📧 Google Workspace
          </Link>

          {/* SEO Hosting */}
          <Link href="/seo-hosting" className="px-4 py-5 text-sm font-medium text-[#334155] hover:text-[#045cb4] transition-colors">
            SEO Hosting
          </Link>
        </nav>

        {/* Right: Icons only */}
        <div className="flex items-center gap-1 ml-auto">
          {/* Desktop icons */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Phone → /call-us */}
            <Link href="/call-us" className="w-9 h-9 rounded-md flex items-center justify-center text-[#046bd2] hover:bg-[#F0F5FA] transition-colors" title="Call Us" aria-label="Call Hostao">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </Link>
            {/* WhatsApp */}
            <a href="https://wa.me/919467000111" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md flex items-center justify-center text-[#25D366] hover:bg-[#F0F5FA] transition-colors" title="WhatsApp" aria-label="Chat with Hostao on WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            {/* Live Chat */}
            <a href="https://livechat.hostao.com/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md flex items-center justify-center text-[#046bd2] hover:bg-[#F0F5FA] transition-colors" title="Live Chat" aria-label="Open Hostao live chat">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </a>

            {/* Get Started → /shared-hosting */}
            <Link href="/shared-hosting"
              className="ml-2 bg-[#046bd2] hover:bg-[#045cb4] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap">
              Get Started
            </Link>
          </div>

          {/* Mobile icons */}
          <div className="lg:hidden flex items-center gap-1">
            <Link href="/call-us" className="flex min-h-10 min-w-10 items-center justify-center rounded-md p-2" aria-label="Call Hostao">
              <svg className="w-5 h-5 text-[#046bd2]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </Link>
            <a href="https://wa.me/919467000111" target="_blank" rel="noopener noreferrer" className="flex min-h-10 min-w-10 items-center justify-center rounded-md p-2" aria-label="Chat with Hostao on WhatsApp">
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="https://livechat.hostao.com/" target="_blank" rel="noopener noreferrer" className="flex min-h-10 min-w-10 items-center justify-center rounded-md p-2" aria-label="Open Hostao live chat">
              <svg className="w-5 h-5 text-[#046bd2]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </a>
            <button type="button" onClick={() => setMobileOpen(o => !o)} className="flex min-h-10 min-w-10 items-center justify-center rounded-md p-2" aria-label="Toggle mobile menu" aria-expanded={mobileOpen} aria-controls="hostao-mobile-menu">
              <svg className="w-6 h-6 text-[#334155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="hostao-mobile-menu" className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-1">
          {[
            { key: "hosting", label: "Hosting", items: HOSTING_DROPDOWN, primaryHref: "/shared-hosting" },
            { key: "reseller", label: "Reseller", items: RESELLER_DROPDOWN, primaryHref: "/reseller-hosting" },
            { key: "vps", label: "VPS & Dedicated", items: VPS_DROPDOWN, primaryHref: "/usa-vps-hosting" },
            { key: "features", label: "Features", items: FEATURES_DROPDOWN, primaryHref: "/features" },
            { key: "domains", label: "Domains", items: DOMAINS_DROPDOWN, primaryHref: "/domain-registration" },
          ].map(section => (
            <div key={section.key} className="border-b border-gray-100 last:border-b-0">
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={section.primaryHref}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 px-4 py-3 text-sm font-medium text-[#334155] hover:bg-[#F0F5FA] hover:text-[#045cb4] transition-all"
                >
                  {section.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileSectionOpen(mobileSectionOpen === section.key ? null : section.key)}
                  className="px-3 py-3 text-[#334155]"
                  aria-label={`Toggle ${section.label} menu`}
                  aria-expanded={mobileSectionOpen === section.key}
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileSectionOpen === section.key ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
              </div>
              {mobileSectionOpen === section.key && (
                <div className="pb-2 pl-4 pr-2">
                  {section.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileSectionOpen(null);
                      }}
                      className="block px-4 py-2.5 text-sm text-[#475569] hover:bg-[#F0F5FA] hover:text-[#045cb4] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {[
            { href: "/google-workspace", label: "Google Workspace" },
            { href: "/seo-hosting", label: "SEO Hosting" },
            { href: "/contact", label: "Contact" },
          ].map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-[#334155] hover:bg-[#F0F5FA] hover:text-[#045cb4] transition-all">
              {link.label}
            </Link>
          ))}

          <Link href="/shared-hosting" onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-center text-white bg-[#046bd2] rounded-lg">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
