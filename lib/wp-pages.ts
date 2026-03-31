import { readdirSync, statSync } from 'fs'
import path from 'path'

const WP_PAGES_ROOT = path.join(process.cwd(), 'wp-pages')

function walkDir(dir: string, baseDir: string): string[] {
  const results: string[] = []
  let entries: string[]
  try {
    entries = readdirSync(dir)
  } catch {
    return results
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry)
    let stat
    try {
      stat = statSync(fullPath)
    } catch {
      continue
    }

    if (stat.isDirectory()) {
      results.push(...walkDir(fullPath, baseDir))
    } else if (entry.endsWith('.html')) {
      const rel = path.relative(baseDir, fullPath)
      results.push(rel)
    }
  }
  return results
}

export function getAllWPPageSlugs(): { slug: string[] }[] {
  const htmlFiles = walkDir(WP_PAGES_ROOT, WP_PAGES_ROOT)
  const slugs: { slug: string[] }[] = []

  for (const file of htmlFiles) {
    const normalized = file.replace(/\\/g, '/')

    let urlPath: string
    if (normalized === 'index.html') {
      continue // homepage handled separately
    } else if (normalized.endsWith('/index.html')) {
      urlPath = normalized.slice(0, -'/index.html'.length)
    } else if (normalized.endsWith('.html')) {
      urlPath = normalized.slice(0, -'.html'.length)
    } else {
      continue
    }

    const parts = urlPath.split('/').filter(Boolean)
    if (parts.length > 0) {
      slugs.push({ slug: parts })
    }
  }

  return slugs
}
