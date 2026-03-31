import { buildConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { en } from "@payloadcms/translations/languages/en";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "— Hostao Admin",
    },
  },
  collections: [
    // Users / Authors
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "name",
        description: "Hostao admin users and blog authors",
      },
      fields: [
        { name: "name", type: "text", required: true },
        { name: "bio", type: "textarea" },
        { name: "role", type: "text", defaultValue: "Author" },
        { name: "avatar", type: "upload", relationTo: "media" },
        {
          name: "social",
          type: "group",
          fields: [
            { name: "twitter", type: "text" },
            { name: "linkedin", type: "text" },
            { name: "website", type: "text" },
          ],
        },
      ],
    },
    // Media
    {
      slug: "media",
      upload: {
        staticDir: path.resolve(dirname, "public/uploads"),
        imageSizes: [
          { name: "thumbnail", width: 400, height: 300, position: "centre" },
          { name: "card", width: 768, height: 432, position: "centre" },
          { name: "feature", width: 1200, height: 630, position: "centre" },
        ],
        adminThumbnail: "thumbnail",
      },
      fields: [
        { name: "alt", type: "text" },
        { name: "caption", type: "text" },
      ],
    },
    // Blog Posts
    {
      slug: "posts",
      admin: {
        useAsTitle: "title",
        defaultColumns: ["title", "author", "status", "publishedAt"],
        description: "Blog posts published at hostao.com/[slug]/",
      },
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            description: "URL slug — must match WordPress URL format. e.g. how-to-speed-up-wordpress",
          },
        },
        {
          name: "excerpt",
          type: "textarea",
          required: true,
          admin: { description: "Short description for cards and meta" },
        },
        { name: "featuredImage", type: "upload", relationTo: "media" },
        { name: "author", type: "relationship", relationTo: "users" },
        {
          name: "categories",
          type: "select",
          hasMany: true,
          options: [
            { label: "WordPress", value: "wordpress" },
            { label: "Hosting Guide", value: "hosting-guide" },
            { label: "Security", value: "security" },
            { label: "Business", value: "business" },
            { label: "Tutorial", value: "tutorial" },
            { label: "Performance", value: "performance" },
            { label: "Domain", value: "domain" },
            { label: "VPS", value: "vps" },
            { label: "Reseller", value: "reseller" },
          ],
        },
        {
          name: "content",
          type: "richText",
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
        {
          name: "status",
          type: "select",
          required: true,
          defaultValue: "draft",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
        },
        {
          name: "publishedAt",
          type: "date",
          admin: { date: { pickerAppearance: "dayAndTime" } },
        },
        // Note: SEO meta fields are injected automatically by seoPlugin below
      ],
    },
    // Pricing Plans
    {
      slug: "pricing-plans",
      admin: {
        useAsTitle: "name",
        defaultColumns: ["name", "planType", "price", "popular", "active"],
        description: "Manage all pricing plans. Changes reflect live on the site.",
      },
      fields: [
        {
          name: "planType",
          type: "select",
          required: true,
          options: [
            { label: "Shared Hosting", value: "shared" },
            { label: "Reseller Hosting", value: "reseller" },
            { label: "VPS Hosting", value: "vps" },
            { label: "Dedicated Server", value: "dedicated" },
            { label: "WordPress Hosting", value: "wordpress" },
            { label: "SEO Hosting", value: "seo" },
          ],
        },
        { name: "name", type: "text", required: true },
        { name: "tagline", type: "text" },
        { name: "price", type: "text", required: true },
        { name: "period", type: "text", defaultValue: "Per Month*" },
        { name: "popular", type: "checkbox", defaultValue: false },
        { name: "active", type: "checkbox", defaultValue: true },
        {
          name: "features",
          type: "array",
          fields: [{ name: "feature", type: "text" }],
        },
        { name: "ctaText", type: "text", defaultValue: "Order Now" },
        { name: "ctaLink", type: "text" },
        { name: "sortOrder", type: "number", defaultValue: 0 },
      ],
    },
    // Pages
    {
      slug: "pages",
      admin: {
        useAsTitle: "title",
        description: "Manage static page content and SEO",
      },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true },
        {
          name: "meta",
          type: "group",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
          ],
        },
        { name: "content", type: "richText", editor: lexicalEditor() },
      ],
    },
  ],
  plugins: [
    seoPlugin({
      collections: ["posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }: { doc: Record<string, unknown> }) =>
        `${doc?.title} | Hostao`,
      generateDescription: ({ doc }: { doc: Record<string, unknown> }) =>
        doc?.excerpt as string,
    }),
  ],
  db: sqliteAdapter({
    // push: true tells Payload to auto-create/sync all tables on startup
    // (no manual migration needed — perfect for Turso/serverless)
    push: true,
    client: {
      // Turso (libsql) — set in Vercel environment variables:
      // TURSO_DATABASE_URL = libsql://hostao-rejimodiyil.aws-eu-west-1.turso.io
      // TURSO_AUTH_TOKEN   = your-turso-auth-token
      url: process.env.TURSO_DATABASE_URL || "file:./hostao-local.db",
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
  editor: lexicalEditor(),
  i18n: { supportedLanguages: { en } },
  secret:
    process.env.PAYLOAD_SECRET ||
    "hostao-cms-secret-change-in-production",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  localization: undefined,
});
