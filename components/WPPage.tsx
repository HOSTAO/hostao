import { readFileSync } from 'fs'
import Script from 'next/script'
import BodyClassSetter from './BodyClassSetter'

interface ParsedPage {
  title: string
  headContent: string
  bodyContent: string
  bodyClass: string
}

function parseWPPage(filePath: string): ParsedPage {
  let html: string
  try {
    html = readFileSync(filePath, 'utf8')
  } catch {
    return {
      title: 'Page Not Found',
      headContent: '',
      bodyContent: '<div style="padding:2rem;font-family:sans-serif"><h1>404 - Page not found</h1></div>',
      bodyClass: '',
    }
  }

  // Extract title
  const title = html.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] || 'Hostao'

  // Extract head content (everything inside <head>)
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
  const headContent = headMatch?.[1] || ''

  // Extract body class
  const bodyClass = html.match(/<body[^>]*class=["']([^"']*)["']/i)?.[1] || ''

  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const bodyContent = bodyMatch?.[1] || ''

  return { title, headContent, bodyContent, bodyClass }
}

function extractCSSLinks(headContent: string): string[] {
  const links: string[] = []
  const re = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi
  let m
  while ((m = re.exec(headContent)) !== null) {
    links.push(m[0])
  }
  return links
}

function extractHrefFromLink(linkTag: string): string {
  return linkTag.match(/href=["']([^"']+)["']/i)?.[1] || ''
}

function extractMediaFromLink(linkTag: string): string {
  return linkTag.match(/media=["']([^"']+)["']/i)?.[1] || 'all'
}

function extractInlineStyles(headContent: string): string[] {
  const styles: string[] = []
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi
  let m
  while ((m = re.exec(headContent)) !== null) {
    styles.push(m[1])
  }
  return styles
}

interface ScriptEntry {
  src?: string
  content?: string
  id?: string
}

function extractScripts(html: string): ScriptEntry[] {
  const scripts: ScriptEntry[] = []
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1]
    const content = m[2].trim()
    const srcMatch = attrs.match(/src=["']([^"']+)["']/i)
    const idMatch = attrs.match(/id=["']([^"']+)["']/i)
    if (srcMatch) {
      scripts.push({ src: srcMatch[1], id: idMatch?.[1] })
    } else if (content) {
      scripts.push({ content, id: idMatch?.[1] })
    }
  }
  return scripts
}

interface WPPageProps {
  filePath: string
}

export default function WPPage({ filePath }: WPPageProps) {
  const { title, headContent, bodyContent, bodyClass } = parseWPPage(filePath)

  const cssLinks = extractCSSLinks(headContent)
  const inlineStyles = extractInlineStyles(headContent)
  const headScripts = extractScripts(headContent)
  const bodyScripts = extractScripts(bodyContent)

  // Deduplicate external scripts by src (head + body)
  const seenSrcs = new Set<string>()
  const allExternalScripts: ScriptEntry[] = []
  for (const s of [...headScripts, ...bodyScripts]) {
    if (s.src && !seenSrcs.has(s.src)) {
      seenSrcs.add(s.src)
      allExternalScripts.push(s)
    }
  }

  const allInlineScripts = [...headScripts, ...bodyScripts].filter(s => s.content)

  return (
    <>
      <title>{title}</title>

      {/* Set WordPress body classes on document.body */}
      <BodyClassSetter bodyClass={bodyClass} />

      {/* WordPress stylesheet links - React 19 hoists these to <head> */}
      {cssLinks.map((link, i) => {
        const href = extractHrefFromLink(link)
        const media = extractMediaFromLink(link)
        if (!href) return null
        return <link key={`css-${i}`} rel="stylesheet" href={href} media={media} precedence="default" />
      })}

      {/* WordPress inline styles from <head> */}
      {inlineStyles.map((css, i) => (
        <style key={`style-${i}`} dangerouslySetInnerHTML={{ __html: css }} />
      ))}

      {/* WordPress inline scripts (head + body) */}
      {allInlineScripts.map((s, i) => (
        <script key={`inline-${i}`} dangerouslySetInnerHTML={{ __html: s.content! }} />
      ))}

      {/* External scripts from head and body (Elementor, plugins, etc.) */}
      {allExternalScripts.map((s, i) => (
        <Script
          key={`ext-${i}`}
          id={s.id || `wp-ext-${i}`}
          src={s.src}
          strategy="afterInteractive"
        />
      ))}

      {/* WordPress body content */}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  )
}
