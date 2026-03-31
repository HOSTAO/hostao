import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const tables = [
  // Users table
  `CREATE TABLE IF NOT EXISTS "users" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" text NOT NULL,
    "bio" text,
    "role" text DEFAULT 'Author',
    "avatar_id" integer,
    "social_twitter" text,
    "social_linkedin" text,
    "social_website" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "email" text NOT NULL,
    "reset_password_token" text,
    "reset_password_expiration" text,
    "salt" text,
    "hash" text,
    "login_attempts" integer DEFAULT 0,
    "lock_until" text
  )`,
  // Users sessions
  `CREATE TABLE IF NOT EXISTS "users_sessions" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
    "created_at" text,
    "expires_at" text
  )`,
  // Media table
  `CREATE TABLE IF NOT EXISTS "media" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "alt" text,
    "caption" text,
    "prefix" text DEFAULT 'media',
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "url" text,
    "thumbnail_u_r_l" text,
    "filename" text,
    "mime_type" text,
    "filesize" integer,
    "width" integer,
    "height" integer,
    "focal_x" integer,
    "focal_y" integer,
    "sizes_thumbnail_url" text,
    "sizes_thumbnail_width" integer,
    "sizes_thumbnail_height" integer,
    "sizes_thumbnail_mime_type" text,
    "sizes_thumbnail_filesize" integer,
    "sizes_thumbnail_filename" text,
    "sizes_card_url" text,
    "sizes_card_width" integer,
    "sizes_card_height" integer,
    "sizes_card_mime_type" text,
    "sizes_card_filesize" integer,
    "sizes_card_filename" text,
    "sizes_feature_url" text,
    "sizes_feature_width" integer,
    "sizes_feature_height" integer,
    "sizes_feature_mime_type" text,
    "sizes_feature_filesize" integer,
    "sizes_feature_filename" text
  )`,
  // Posts table
  `CREATE TABLE IF NOT EXISTS "posts" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "title" text NOT NULL,
    "slug" text NOT NULL UNIQUE,
    "excerpt" text NOT NULL,
    "featured_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
    "author_id" integer REFERENCES "users"("id") ON DELETE SET NULL,
    "content" text,
    "status" text DEFAULT 'draft',
    "published_at" text,
    "meta_title" text,
    "meta_description" text,
    "meta_image_id" integer REFERENCES "media"("id") ON DELETE SET NULL,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`,
  // Posts categories (select hasMany)
  `CREATE TABLE IF NOT EXISTS "posts_categories" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL REFERENCES "posts"("id") ON DELETE CASCADE,
    "value" text
  )`,
  // Pricing plans table
  `CREATE TABLE IF NOT EXISTS "pricing_plans" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "plan_type" text NOT NULL,
    "name" text NOT NULL,
    "tagline" text,
    "price" text NOT NULL,
    "period" text DEFAULT 'Per Month*',
    "popular" integer DEFAULT 0,
    "active" integer DEFAULT 1,
    "cta_text" text DEFAULT 'Order Now',
    "cta_link" text,
    "sort_order" integer DEFAULT 0,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`,
  // Pricing plans features
  `CREATE TABLE IF NOT EXISTS "pricing_plans_features" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL REFERENCES "pricing_plans"("id") ON DELETE CASCADE,
    "feature" text
  )`,
  // Pages table
  `CREATE TABLE IF NOT EXISTS "pages" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "title" text NOT NULL,
    "slug" text NOT NULL,
    "meta_title" text,
    "meta_description" text,
    "content" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`,
  // Payload preferences (required by Payload internals)
  `CREATE TABLE IF NOT EXISTS "payload_preferences" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "key" text,
    "value" text,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`,
  // Payload preferences rels
  `CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL REFERENCES "payload_preferences"("id") ON DELETE CASCADE,
    "path" text NOT NULL,
    "users_id" integer REFERENCES "users"("id") ON DELETE CASCADE
  )`,
  // Payload migrations
  `CREATE TABLE IF NOT EXISTS "payload_migrations" (
    "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
    "name" text,
    "batch" integer,
    "updated_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
    "created_at" text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  )`,
  // Indexes
  `CREATE INDEX IF NOT EXISTS "users_sessions_order_idx" ON "users_sessions" ("_order")`,
  `CREATE INDEX IF NOT EXISTS "users_sessions_parent_id_idx" ON "users_sessions" ("_parent_id")`,
  `CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email")`,
  `CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at")`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename")`,
  `CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" ("slug")`,
  `CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at")`,
  `CREATE INDEX IF NOT EXISTS "posts_categories_order_idx" ON "posts_categories" ("_order")`,
  `CREATE INDEX IF NOT EXISTS "posts_categories_parent_id_idx" ON "posts_categories" ("_parent_id")`,
  `CREATE INDEX IF NOT EXISTS "pricing_plans_updated_at_idx" ON "pricing_plans" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "pricing_plans_created_at_idx" ON "pricing_plans" ("created_at")`,
  `CREATE INDEX IF NOT EXISTS "pricing_plans_features_order_idx" ON "pricing_plans_features" ("_order")`,
  `CREATE INDEX IF NOT EXISTS "pricing_plans_features_parent_id_idx" ON "pricing_plans_features" ("_parent_id")`,
  `CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id")`,
  `CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path")`,
  `CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" ("updated_at")`,
  `CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at")`,
];

async function run() {
  for (const sql of tables) {
    try {
      await client.execute(sql);
      const name = sql.match(/"([^"]+)"/)?.[1] || "index";
      console.log("✓", name);
    } catch (e) {
      console.error("✗", e.message);
    }
  }
  // Verify
  const result = await client.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name");
  console.log("\nTables created:", result.rows.map(r => r.name).join(", "));
}
run().catch(console.error);
