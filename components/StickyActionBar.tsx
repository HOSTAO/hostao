"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HOSTAO_HELP_TICKETS_URL, HOSTAO_WHATSAPP_USA_NUMBER, openHostaoChat } from "@/lib/hostao-integrations";

type PanelConfig = {
  primaryLabel: string;
  primaryText: string;
  primaryButton: string;
  mobileCartButton: string;
  mobileBrowseButton: string;
  panelEyebrow: string;
  panelTitle: string;
  panelSubtitle: string;
  panelValue: string;
  panelValueLabel: string;
  panelHref: string;
  whatsappMessage: string;
  supportCtaEyebrow: string;
  supportCtaTitle: string;
  supportCtaSubtitle: string;
  supportButtonLabel: string;
};

const HOME_PANEL: PanelConfig = {
  primaryLabel: "Starting at $3/month • Free Migration • 30-Day Guarantee",
  primaryText: "Starting at $3/month • Free Migration • 30-Day Guarantee",
  primaryButton: "Get Started",
  mobileCartButton: "Buy Now",
  mobileBrowseButton: "View Plans",
  panelEyebrow: "Selected plan",
  panelTitle: "Professional Plan",
  panelSubtitle: "Big teams and members",
  panelValue: "$4.50",
  panelValueLabel: "per month",
  panelHref: "https://my.hostao.com/cart.php?a=add&pid=10",
  whatsappMessage: "Hi Hostao, I need help choosing the right hosting plan.",
  supportCtaEyebrow: "Need help before checkout?",
  supportCtaTitle: "Open the Hostao support section",
  supportCtaSubtitle: "Get help with plan selection, migration questions, billing, or technical guidance from the support team.",
  supportButtonLabel: "Go to Support",
};

const GOOGLE_WORKSPACE_PANEL: PanelConfig = {
  primaryLabel: "Google Workspace • Secure email and collaboration for your team",
  primaryText: "Google Workspace • Secure email and collaboration for your team",
  primaryButton: "View Workspace Plans",
  mobileCartButton: "Order Now",
  mobileBrowseButton: "See Plans",
  panelEyebrow: "Current page",
  panelTitle: "Google Workspace",
  panelSubtitle: "Business email, storage, and collaboration tools with setup support.",
  panelValue: "Email",
  panelValueLabel: "business",
  panelHref: "/google-workspace/",
  whatsappMessage: "Hi Hostao, I need help with Google Workspace for my business.",
  supportCtaEyebrow: "Need Workspace help?",
  supportCtaTitle: "Open Workspace support",
  supportCtaSubtitle: "Get help with setup, migration, user planning, and choosing the right Google Workspace edition.",
  supportButtonLabel: "Workspace Support",
};

function CartIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2m0 0L7 13h10l2-8H5.4zM7 13l-1 5h13M9 21a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-23.1-115-67.1-157zM223.9 438.7c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54.1 81.2 54.1 130.5-.1 101.8-82.9 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function isHomeRoute(pathname: string) {
  return pathname === "/" || pathname === "/shared-hosting";
}

function getPanel(pathname: string): PanelConfig {
  if (isHomeRoute(pathname)) return HOME_PANEL;
  if (pathname === "/google-workspace" || pathname === "/google-workspace/") return GOOGLE_WORKSPACE_PANEL;
  return {
    primaryLabel: `${humanizePath(pathname)} • Fast support and direct help when you need it`,
    primaryText: `${humanizePath(pathname)} • Fast support and direct help when you need it`,
    primaryButton: "Open Page",
    mobileCartButton: "Get Offer",
    mobileBrowseButton: "See Details",
    panelEyebrow: "Current page",
    panelTitle: humanizePath(pathname),
    panelSubtitle: "Open this page or message Hostao for help.",
    panelValue: "Live",
    panelValueLabel: "page",
    panelHref: pathname,
    whatsappMessage: `Hi Hostao, I need help with ${humanizePath(pathname)}.`,
    supportCtaEyebrow: "Need help?",
    supportCtaTitle: `Open support for ${humanizePath(pathname)}`,
    supportCtaSubtitle: "Get direct help, pricing clarity, and technical guidance from the Hostao support section.",
    supportButtonLabel: "Open Support",
  };
}

function humanizePath(pathname: string) {
  if (pathname === "/") return "Home";
  return pathname
    .replace(/\/$/, "")
    .replace(/^\//, "")
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/[-_]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()))
    .join(" • ");
}

export default function StickyActionBar() {
  const pathname = usePathname() || "/";
  const panel = useMemo(() => getPanel(pathname), [pathname]);
  const cartHref = isHomeRoute(pathname) ? HOME_PANEL.panelHref : panel.panelHref;
  const whatsAppUrl = `https://wa.me/${HOSTAO_WHATSAPP_USA_NUMBER}?text=${encodeURIComponent(panel.whatsappMessage)}`;
  const supportUrl = HOSTAO_HELP_TICKETS_URL;

  const openSupportChat = () => {
    openHostaoChat(supportUrl);
  };

  const scrollToPricing = () => {
    const pricing = document.getElementById("pricing");
    if (pricing) {
      pricing.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (panel.panelHref.startsWith("/")) {
      window.location.href = panel.panelHref;
      return;
    }
    window.location.href = panel.panelHref;
  };

  const openPanelTarget = () => {
    if (isHomeRoute(pathname)) {
      window.location.href = HOME_PANEL.panelHref;
      return;
    }
    if (pathname === "/google-workspace" || pathname === "/google-workspace/") {
      scrollToPricing();
      return;
    }
    window.location.href = panel.panelHref;
  };

  return (
    <>
      <div className="md:hidden">
        <a
          href={whatsAppUrl}
          className="fixed left-3 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white p-[10px] text-[#25D366] shadow-[0_18px_40px_rgba(15,23,42,0.18)] ring-1 ring-black/5 transition hover:scale-[1.02]"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
          aria-label="Chat with Hostao on WhatsApp"
        >
          <WhatsAppIcon className="h-full w-full" />
        </a>

        <div
          className="fixed left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-3xl border border-[#dbe5f0] bg-white/95 px-3 py-2 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur"
          style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
        >
          <a href={cartHref} className="flex min-w-[78px] flex-col items-center gap-1 rounded-2xl bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-[#1e293b] transition">
            <CartIcon />
            {panel.mobileCartButton}
          </a>
          <button type="button" onClick={scrollToPricing} className="flex min-w-[98px] flex-col items-center gap-1 rounded-2xl bg-[#f8fbff] px-4 py-2 text-xs font-semibold text-[#1e293b] transition">
            <PlusIcon />
            {panel.mobileBrowseButton}
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#dbe5f0] bg-white/95 backdrop-blur shadow-[0_-8px_30px_rgba(15,23,42,0.08)] transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-sm md:text-base font-semibold text-[#1e293b] text-center sm:text-left">{panel.primaryText}</div>
            <button onClick={scrollToPricing} className="btn-hostao-primary w-full sm:w-auto min-h-[48px] px-8">{panel.primaryButton}</button>
          </div>
        </div>

        <div className="fixed right-4 bottom-24 z-40 w-[340px] rounded-2xl border border-[#046bd2]/15 bg-white shadow-2xl transition-all duration-300">
          <div className="px-4 py-3 border-b border-[#e5edf6] flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#64748b] font-semibold">{panel.panelEyebrow}</p>
              <h3 className="text-sm font-bold text-[#1e293b]">{panel.panelEyebrow}</h3>
            </div>
            <button onClick={scrollToPricing} className="text-sm font-semibold text-[#046bd2] hover:underline">Change</button>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="font-bold text-[#1e293b]">{panel.panelTitle}</p>
                <p className="text-sm text-[#334155]">{panel.panelSubtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#046bd2]">{panel.panelValue}</div>
                <div className="text-xs text-[#64748b]">{panel.panelValueLabel}</div>
              </div>
            </div>
            <button onClick={openPanelTarget} className="btn-hostao-primary w-full text-center min-h-[48px]">{isHomeRoute(pathname) ? "Checkout" : "Open Page"}</button>
          </div>
        </div>

        <div className="fixed left-4 bottom-24 z-40 w-[320px] rounded-2xl border border-[#046bd2]/15 bg-white shadow-2xl transition-all duration-300">
          <div className="p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#046bd2]">{panel.supportCtaEyebrow}</p>
            <h3 className="mt-2 text-base font-bold text-[#1e293b]">{panel.supportCtaTitle}</h3>
            <p className="mt-1 text-sm leading-6 text-[#475569]">{panel.supportCtaSubtitle}</p>
            <button
              type="button"
              onClick={openSupportChat}
              className="mt-4 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#046bd2] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:brightness-95"
            >
              <PlusIcon />
              {panel.supportButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
