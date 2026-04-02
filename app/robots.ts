import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/admin-seo/", "/admin-dashboard/"],
      },
    ],
    sitemap: "https://hostao.com/sitemap.xml",
    host: "https://hostao.com",
  };
}
