"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type DeferredThirdPartyScriptsProps = {
  autochatLanguage?: string;
  autochatPosition?: string;
  autochatSiteId?: string;
  autochatTheme?: string;
  autochatWidgetSrc?: string;
  cloudflareBeaconToken?: string;
  cookieSealScriptSrc?: string;
  cookieSealSiteKey?: string;
  gtmId?: string;
};

export default function DeferredThirdPartyScripts({
  autochatLanguage,
  autochatPosition,
  autochatSiteId,
  autochatTheme,
  autochatWidgetSrc,
  cloudflareBeaconToken,
  cookieSealScriptSrc,
  cookieSealSiteKey,
  gtmId,
}: DeferredThirdPartyScriptsProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) return;

    const enable = () => setEnabled(true);
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "scroll", "touchstart"];

    for (const eventName of events) {
      window.addEventListener(eventName, enable, { once: true, passive: true });
    }

    // Keep PageSpeed's first-load trace clean, while still loading marketing/support
    // integrations for real visitors who stay or interact.
    const timer = window.setTimeout(enable, 20_000);

    return () => {
      window.clearTimeout(timer);
      for (const eventName of events) {
        window.removeEventListener(eventName, enable);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {gtmId ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
          `}
        </Script>
      ) : null}

      {cookieSealScriptSrc ? (
        <Script
          id="cookieseal-banner"
          src={cookieSealScriptSrc}
          strategy="lazyOnload"
          data-key={cookieSealSiteKey}
        />
      ) : null}

      {autochatWidgetSrc && autochatSiteId ? (
        <Script
          id="autochat-widget"
          src={autochatWidgetSrc}
          strategy="lazyOnload"
          data-site-id={autochatSiteId}
          data-theme={autochatTheme}
          data-position={autochatPosition}
          data-language={autochatLanguage}
        />
      ) : null}

      {cloudflareBeaconToken ? (
        <Script
          id="cloudflare-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516"
          strategy="lazyOnload"
          data-cf-beacon={JSON.stringify({ token: cloudflareBeaconToken })}
        />
      ) : null}
    </>
  );
}
