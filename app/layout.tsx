import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

const SITE_URL = "https://hostao.com";
const SITE_NAME = "Hostao";
const SITE_DESC = "Hostao offers affordable web hosting plans starting at $3/month with NVMe SSD, free SSL, cPanel, 99.9% uptime, and 24/7 expert support. Perfect for individuals, startups, and resellers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `Fast & Affordable Web Hosting | Free SSL & cPanel | ${SITE_NAME}`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  keywords: ["web hosting", "reseller hosting", "low cost hosting", "VPS hosting", "dedicated server", "domain registration", "NVMe SSD hosting", "hostao"],
  authors: [{ name: "Hostao LLC", url: SITE_URL }],
  robots: { index: true, follow: true },
  openGraph: {
    title: `Fast & Affordable Web Hosting | Free SSL & cPanel | ${SITE_NAME}`,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{
      url: "/images/hostao-og.png",
      width: 1200,
      height: 630,
      alt: "Hostao - Fast & Affordable Web Hosting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HostaoOfficial",
    title: `Fast & Affordable Web Hosting | Free SSL & cPanel | ${SITE_NAME}`,
    description: SITE_DESC,
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#046bd2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WH3PL3WL');
          `}
        </Script>
        
        {/* Google reCAPTCHA (load only on approved host domains to avoid invalid-domain widget errors) */}
        <Script id="conditional-recaptcha" strategy="afterInteractive">
          {`
            (function() {
              var h = window.location.hostname || '';
              if (h === 'hostao.com' || h.endsWith('.hostao.com')) {
                var s = document.createElement('script');
                s.src = 'https://www.google.com/recaptcha/api.js?render=6Le1GqoaAAAAAKlRlaEcUgFTBI-7__yvB5WG8fZg';
                s.async = true;
                document.head.appendChild(s);
              }
            })();
          `}
        </Script>
      </head>
      <body className="bg-[#F0F5FA]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH3PL3WL"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            aria-hidden="true"
          />
        </noscript>
        
        <Nav />
        <main>{children}</main>
        <Footer />
        
        {/* Live Chat Widget - aligned with hostao.com config */}
        <Script id="live-chat-widget" strategy="afterInteractive">
          {`
            window.__lc = window.__lc || {};
            if (!window.__lc.license) {
              window.__lc.license = 2340051;
              window.__lc.integration_name = 'Wordpress';
              window.__lc.origin = 'livechat';
            }
            (function(n,t,c){
              function i(n){ return e._h ? e._h.apply(null,n) : e._q.push(n); }
              var e={
                _q:[],_h:null,_v:'2.0',
                on:function(){i(['on',c.call(arguments)])},
                once:function(){i(['once',c.call(arguments)])},
                off:function(){i(['off',c.call(arguments)])},
                get:function(){if(!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(['get',c.call(arguments)])},
                call:function(){i(['call',c.call(arguments)])},
                init:function(){
                  var s=t.createElement('script');
                  s.async=true;
                  s.type='text/javascript';
                  s.src='https://cdn.livechatinc.com/tracking.js';
                  t.head.appendChild(s);
                }
              };
              if (!n.__lc.asyncInit) e.init();
              n.LiveChatWidget = n.LiveChatWidget || e;
            })(window,document,[].slice);
          `}
        </Script>
        
        {/* Cloudflare Web Analytics (same tracking family used on hostao.com) */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516"
          strategy="afterInteractive"
          data-cf-beacon='{"token":"3fea44721b6d4734a2246113203adda4"}'
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
                "logo": { "@type": "ImageObject", "url": "https://hostao.com/images/hostao-logo.png" },
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
