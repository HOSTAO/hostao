import { createClient } from "@libsql/client";
import { NextRequest, NextResponse } from "next/server";

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

export async function GET() {
    const client = getClient();
  try {
    const result = await client.execute(`
      SELECT 
        p.*,
        u.name as author_name
      FROM posts p
      LEFT JOIN users u ON p.author_id = u.id
      ORDER BY p.created_at DESC
    `);

    const posts = result.rows.map(row => ({
      id: row.id,
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      status: row.status,
      publishedAt: row.published_at,
      author: row.author_name || 'Unknown',
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = getClient();
    const data = await request.json();
    
    const result = await client.execute({
      sql: `
        INSERT INTO posts (
          title, slug, excerpt, content, status, published_at, 
          author_id, updated_at, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        data.title,
        data.slug,
        data.excerpt,
        JSON.stringify(data.content || {}),
        data.status || 'draft',
        data.publishedAt || null,
        data.authorId || 1, // Default to admin user
        new Date().toISOString(),
        new Date().toISOString(),
      ],
    });

    return NextResponse.json({ id: result.lastInsertRowid, success: true });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}