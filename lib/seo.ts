import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, PATHNAME_HEADER, SITE_NAME, SITE_URL } from "@/lib/seo-constants";

const APP_ROOT = path.join(process.cwd(), "app");
const WP_ROOT = path.join(process.cwd(), "wp-pages");
const staticRouteSeoCache = new Map<string, { title?: string; description?: string; image?: string }>();
let staticRouteSeoLoaded = false;

function normalizePathname(input: string) {
  if (!input || input === "/") return "/";
  const cleaned = `/${input.replace(/^\/+|\/+$/g, "")}/`;
  return cleaned.replace(/\/+/g, "/");
}

function routeFromAppPath(filePath: string) {
  const relativeDir = path.relative(APP_ROOT, path.dirname(filePath));
  if (!relativeDir || relativeDir === ".") return "/";

  const segments = relativeDir
    .split(path.sep)
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("(") && !segment.startsWith("["));

  if (!segments.length) return "/";
  return normalizePathname(segments.join("/"));
}

function extractLiteral(source: string, field: "title" | "description") {
  const quoted = new RegExp(`${field}\\s*:\\s*(["'\`])([\\s\\S]*?)\\1`, "m");
  const match = source.match(quoted);
  return match?.[2]?.replace(/\\(["'`])/g, "$1").trim();
}

function extractMetadataBlock(source: string) {
  const match = source.match(/export\s+const\s+metadata(?:\s*:\s*Metadata)?\s*=\s*\{([\s\S]*?)\n\};/m);
  return match?.[1] || null;
}

function loadStaticRouteSeo() {
  if (staticRouteSeoLoaded) return;
  staticRouteSeoLoaded = true;

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.name !== "page.tsx") continue;
      if (fullPath.includes(`${path.sep}api${path.sep}`)) continue;

      const route = routeFromAppPath(fullPath);
      const source = fs.readFileSync(fullPath, "utf8");
      const metadataBlock = extractMetadataBlock(source);
      if (!metadataBlock) continue;
      const title = extractLiteral(metadataBlock, "title");
      const description = extractLiteral(metadataBlock, "description");

      if (title || description) {
        staticRouteSeoCache.set(route, { title, description });
      }
    }
  };

  if (fs.existsSync(APP_ROOT)) walk(APP_ROOT);
}

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHostaoSuffix(title?: string) {
  if (!title) return title;
  return title.replace(/\s*\|\s*Hostao\s*$/i, "").trim();
}

function humanizeSegment(segment: string) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function inferTitleFromPath(pathname: string) {
  if (pathname === "/") return `Fast Web Hosting with Free SSL, cPanel & NVMe SSD | ${SITE_NAME}`;
  const segments = pathname.split("/").filter(Boolean).map(humanizeSegment);
  return `${segments.join(" · ")} | ${SITE_NAME}`;
}

function inferDescriptionFromPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) return DEFAULT_DESCRIPTION;
  return `Explore Hostao ${segments.map(humanizeSegment).join(" ")} information, plans, and support guidance.`;
}

export function getWpMirrorMetadata(pathname: string) {
  const slugPath = pathname.replace(/^\/+|\/+$/g, "");
  if (!slugPath) return null;

  const candidates = [
    path.join(WP_ROOT, slugPath, "index.html"),
    path.join(WP_ROOT, `${slugPath}.html`),
  ];

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) continue;
    const html = fs.readFileSync(candidate, "utf8");
    const title = decodeHtml(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").trim();
    const description = decodeHtml(
      html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)?.[1] ||
        html.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)/i)?.[1] ||
        "",
    ).trim();
    const image = decodeHtml(
      html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']*)/i)?.[1] || "",
    ).trim();

    return {
      title: title || undefined,
      description: description || undefined,
      image: image || undefined,
    };
  }

  return null;
}

function getStaticRouteSeo(pathname: string) {
  loadStaticRouteSeo();
  return staticRouteSeoCache.get(pathname);
}

function getAuthorSeo(pathname: string) {
  const match = pathname.match(/^\/author\/([^/]+)\/$/);
  if (!match) return null;
  const slug = match[1];
  const humanName = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  return {
    title: `${humanName} | Hostao Editorial Profile`,
    description: `${humanName} — editorial profile, article archive, and publishing credentials on Hostao.`,
  };
}

export function buildOgImageUrl(title?: string) {
  const url = new URL("/api/og", SITE_URL);
  if (title) url.searchParams.set("title", stripHostaoSuffix(title) || title);
  return url.toString();
}

export function resolveSeoForPath(pathname: string) {
  const normalizedPath = normalizePathname(pathname);
  const staticSeo = getStaticRouteSeo(normalizedPath);
  const authorSeo = getAuthorSeo(normalizedPath);
  const wpSeo = getWpMirrorMetadata(normalizedPath);

  const title = staticSeo?.title || authorSeo?.title || wpSeo?.title || inferTitleFromPath(normalizedPath);
  const description =
    staticSeo?.description || authorSeo?.description || wpSeo?.description || inferDescriptionFromPath(normalizedPath);
  const image = staticSeo?.image || buildOgImageUrl(title);
  const canonical = new URL(normalizedPath === "/" ? "/" : normalizedPath, SITE_URL).toString();
  const noIndex = normalizedPath.startsWith("/admin/") || normalizedPath === "/admin/";

  return { title, description, image, canonical, pathname: normalizedPath, noIndex };
}

export function buildMetadataForPath(pathname: string): Metadata {
  const seo = resolveSeoForPath(pathname);
  const ogTitle = stripHostaoSuffix(seo.title) || seo.title;

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    robots: seo.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: ogTitle,
      description: seo.description,
      url: seo.canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: seo.image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@HostaoOfficial",
      title: ogTitle,
      description: seo.description,
      images: [seo.image],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
  };
}

export function getPathnameHeaderName() {
  return PATHNAME_HEADER;
}
