import { createClient } from '@libsql/client';
import { NextRequest, NextResponse } from 'next/server';

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const client = getClient();
    const data = await request.json();
    const { id: rawId } = await context.params;
    const id = Number(rawId);

    await client.execute({
      sql: `
        UPDATE posts
        SET title = ?, slug = ?, excerpt = ?, content = ?, status = ?, published_at = ?, updated_at = ?
        WHERE id = ?
      `,
      args: [
        data.title,
        data.slug,
        data.excerpt,
        JSON.stringify(data.content || {}),
        data.status || 'draft',
        data.publishedAt || null,
        new Date().toISOString(),
        id,
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const client = getClient();
    const { id: rawId } = await context.params;
    const id = Number(rawId);
    await client.execute({ sql: 'DELETE FROM posts WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
