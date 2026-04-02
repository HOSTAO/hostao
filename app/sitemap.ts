import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE = "https://hostao.com";

function getBlogPosts() {
  try {
    const file = path.join(process.cwd(), "posts-data", "posts-clean.json");
    const posts = JSON.parse(fs.readFileSync(file, "utf-8")) as Array<{slug: string; date: string}>;
    return posts.map(p => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch { return []; }
}

const PAGES = [
  { url: "/", priority: 1.0, changeFrequency: "daily" },
  { url: "/shared-hosting", priority: 0.9, changeFrequency: "weekly" },
  { url: "/reseller-hosting", priority: 0.9, changeFrequency: "weekly" },
  { url: "/wordpress-hosting", priority: 0.9, changeFrequency: "weekly" },
  { url: "/vps", priority: 0.9, changeFrequency: "weekly" },
  { url: "/seo-hosting", priority: 0.9, changeFrequency: "weekly" },
  { url: "/free-whmcs", priority: 0.8, changeFrequency: "monthly" },
  { url: "/features", priority: 0.8, changeFrequency: "monthly" },
  { url: "/about-us", priority: 0.7, changeFrequency: "monthly" },
  { url: "/contact-us", priority: 0.7, changeFrequency: "monthly" },
  { url: "/blog", priority: 0.8, changeFrequency: "daily" },
  { url: "/affiliate", priority: 0.6, changeFrequency: "monthly" },
  { url: "/offers", priority: 0.8, changeFrequency: "weekly" },
  { url: "/latest-offers", priority: 0.8, changeFrequency: "weekly" },
  { url: "/domain-registration", priority: 0.8, changeFrequency: "weekly" },
  { url: "/website-design-and-development", priority: 0.7, changeFrequency: "monthly" },
  { url: "/bahrain-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/ae-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/qa-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/sa-domains", priority: 0.8, changeFrequency: "monthly" },
  { url: "/kw-domains", priority: 0.8, changeFrequency: "monthly" },
  { url: "/om-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/in-domains", priority: 0.8, changeFrequency: "monthly" },
  { url: "/pk-domains", priority: 0.7, changeFrequency: "monthly" },
  // Google Workspace
  { url: "/google-workspace", priority: 0.9, changeFrequency: "weekly" },
  // Global gTLD domain pages
  { url: "/com-domain", priority: 0.8, changeFrequency: "monthly" },
  { url: "/net-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/org-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/io-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/tech-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/app-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/online-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/store-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/shop-domain", priority: 0.7, changeFrequency: "monthly" },
  { url: "/co-domain", priority: 0.7, changeFrequency: "monthly" },
  // Western & regional ccTLD pages
  { url: "/uk-domains", priority: 0.8, changeFrequency: "monthly" },
  { url: "/us-domains", priority: 0.8, changeFrequency: "monthly" },
  { url: "/ca-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/au-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/sg-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/my-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/ng-domains", priority: 0.7, changeFrequency: "monthly" },
  { url: "/our-partners", priority: 0.5, changeFrequency: "monthly" },
  { url: "/careers", priority: 0.6, changeFrequency: "monthly" },
  { url: "/network-status", priority: 0.5, changeFrequency: "daily" },
  // Reseller locations
  { url: "/cheap-reseller-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/usa-reseller-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/europe-uk-reseller-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/singapore-reseller-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/netherlands-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/german-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/canada-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/indian-reseller-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/china-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/australian-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/south-africa-reseller-hosting", priority: 0.7, changeFrequency: "weekly" },
  { url: "/multi-location-reseller", priority: 0.8, changeFrequency: "weekly" },
  // VPS locations
  { url: "/usa-vps-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/singapore-vps-hosting", priority: 0.8, changeFrequency: "weekly" },
  { url: "/uk-europe-vps-hosting", priority: 0.8, changeFrequency: "weekly" },
  // Dedicated locations
  { url: "/usa-dedicated-servers", priority: 0.8, changeFrequency: "weekly" },
  { url: "/singapore-dedicated-servers", priority: 0.8, changeFrequency: "weekly" },
  { url: "/uk-dedicated-servers", priority: 0.8, changeFrequency: "weekly" },
  { url: "/vps-dedicated-server-reseller", priority: 0.8, changeFrequency: "weekly" },
  // Policy pages
  { url: "/terms-of-service", priority: 0.4, changeFrequency: "yearly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
  { url: "/refund-policy", priority: 0.4, changeFrequency: "yearly" },
  { url: "/actionable-feedback-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/corrections-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/diversity-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/diversity-staffing-report", priority: 0.3, changeFrequency: "yearly" },
  { url: "/ethics-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/hybrid-workplace-policy", priority: 0.3, changeFrequency: "yearly" },
  { url: "/publishing-principles", priority: 0.3, changeFrequency: "yearly" },
  { url: "/ownership", priority: 0.3, changeFrequency: "yearly" },
  { url: "/vaccine-policy", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = PAGES.map(page => ({
    url: `${BASE}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: page.priority,
  }));
  return [...staticPages, ...getBlogPosts()];
}
