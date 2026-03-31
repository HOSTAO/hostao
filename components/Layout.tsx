import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { brand } from '../lib/brand'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  canonical?: string
}

export default function Layout({ children, title = 'Hostao — Web Hosting & Domain', description = 'Best Hosting and Domain For Your Business. Elevate your website performance with Hostao affordable web hosting solutions.', canonical }: LayoutProps) {
  const pageTitle = title.includes('Hostao') ? title : `${title} | Hostao — Web Hosting & Domain`
  const canonicalUrl = canonical ? `${brand.siteUrl}${canonical}` : brand.siteUrl

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hostao" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { font-family: system-ui, -apple-system, sans-serif; }
          body { background: ${brand.darkBg}; color: ${brand.text}; line-height: 1.6; -webkit-font-smoothing: antialiased; }
          a { transition: opacity 0.2s; }
          a:hover { opacity: 0.8; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          @keyframes countdown { from { opacity: 1; } to { opacity: 0.7; } }
        `}</style>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
