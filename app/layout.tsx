import type { Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyActionBar from "@/components/StickyActionBar";
import DeferredThirdPartyScripts from "@/components/DeferredThirdPartyScripts";
import Script from "next/script";
import { headers } from "next/headers";
import {
  HOSTAO_AUTOCHAT_LANGUAGE,
  HOSTAO_AUTOCHAT_POSITION,
  HOSTAO_AUTOCHAT_SITE_ID,
  HOSTAO_AUTOCHAT_THEME,
  HOSTAO_AUTOCHAT_WIDGET_SRC,
  HOSTAO_CLOUDFLARE_BEACON_TOKEN,
  HOSTAO_COOKIESEAL_SCRIPT_SRC,
  HOSTAO_COOKIESEAL_SITE_KEY,
  HOSTAO_GTM_ID,
} from "@/lib/hostao-integrations";
import { buildMetadataForPath } from "@/lib/seo";
import { PATHNAME_HEADER, SITE_URL } from "@/lib/seo-constants";

export const viewport: Viewport = {
  themeColor: "#046bd2",
};

export async function generateMetadata() {
  const pathname = (await headers()).get(PATHNAME_HEADER) || "/";
  return buildMetadataForPath(pathname);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-[#F0F5FA]">
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyActionBar />
        <DeferredThirdPartyScripts
          autochatLanguage={HOSTAO_AUTOCHAT_LANGUAGE}
          autochatPosition={HOSTAO_AUTOCHAT_POSITION}
          autochatSiteId={HOSTAO_AUTOCHAT_SITE_ID}
          autochatTheme={HOSTAO_AUTOCHAT_THEME}
          autochatWidgetSrc={HOSTAO_AUTOCHAT_WIDGET_SRC}
          cloudflareBeaconToken={HOSTAO_CLOUDFLARE_BEACON_TOKEN}
          cookieSealScriptSrc={HOSTAO_COOKIESEAL_SCRIPT_SRC}
          cookieSealSiteKey={HOSTAO_COOKIESEAL_SITE_KEY}
          gtmId={HOSTAO_GTM_ID}
        />

        {/* JSON-LD: Organization + WebSite schema */}
        <Script id="org-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://hostao.com/#organization",
                "name": "Hostao",
                "url": "https://hostao.com",
                "logo": { "@type": "ImageObject", "url": "https://hostao.com/images/hostao-logo-300.webp" },
                "sameAs": [
                  "https://twitter.com/HostaoOfficial",
                  "https://www.facebook.com/hostao",
                  "https://www.instagram.com/hostao/",
                  "https://github.com/hostao",
                  "https://www.reddit.com/r/Hostao",
                  "https://www.youtube.com/@HOSTAO",
                  "https://discord.gg/RUXwXTWFpU"
                ],
                "contactPoint": { "@type": "ContactPoint", "telephone": "+1-323-744-7383", "contactType": "customer support" }
              },
              {
                "@type": "WebSite",
                "@id": "https://hostao.com/#website",
                "url": "https://hostao.com",
                "name": "Hostao",
                "publisher": { "@id": "https://hostao.com/#organization" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": { "@type": "EntryPoint", "urlTemplate": "https://hostao.com/domain-registration?search={search_term_string}" },
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })}
        </Script>

      </body>
    </html>
  );
}
