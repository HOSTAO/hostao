import path from 'path'
import { notFound } from 'next/navigation'
import WPPage from '@/components/WPPage'
import { getAllWPPageSlugs } from '@/lib/wp-pages'

export const dynamic = 'force-static'

// Routes that have dedicated Next.js pages — never fall through to WP catch-all
const NEXT_ROUTES = new Set([
  'blog', 'about', 'contact', 'reseller', 'hosting', 'vps', 'dedicated',
  'domain-registration', 'features', 'careers', 'offers', 'affiliate',
  'privacy', 'terms', 'refund-policy', 'sitemap', 'network-status',
])

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  return getAllWPPageSlugs().filter(({ slug }) => !NEXT_ROUTES.has(slug[0]))
}

export default async function WPCatchAllPage({ params }: PageProps) {
  const { slug } = await params
  const slugPath = slug.join('/')

  // Don't intercept routes that have dedicated Next.js pages
  if (NEXT_ROUTES.has(slug[0])) {
    notFound()
  }

  // Try index.html inside the directory first, then direct .html file
  const wpPagesRoot = path.join(process.cwd(), 'wp-pages')

  const candidates = [
    path.join(wpPagesRoot, slugPath, 'index.html'),
    path.join(wpPagesRoot, `${slugPath}.html`),
  ]

  let filePath: string | null = null
  for (const candidate of candidates) {
    try {
      const { existsSync } = await import('fs')
      if (existsSync(candidate)) {
        filePath = candidate
        break
      }
    } catch {
      // continue
    }
  }

  if (!filePath) {
    notFound()
  }

  return <WPPage filePath={filePath} />
}
