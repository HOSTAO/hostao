import { createClient } from '@libsql/client';
import { NextRequest, NextResponse } from 'next/server';

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

async function ensureTable(client: ReturnType<typeof getClient>) {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS media_library (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      url TEXT NOT NULL,
      type TEXT DEFAULT 'image',
      created_at TEXT NOT NULL
    )
  `);
}

export async function GET() {
  try {
    const client = getClient();
    await ensureTable(client);
    const result = await client.execute('SELECT * FROM media_library ORDER BY id DESC');

    const items = result.rows.map((row) => ({
      id: row.id,
      name: row.name,
      url: row.url,
      type: row.type,
      createdAt: row.created_at,
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = getClient();
    await ensureTable(client);
    const data = await request.json();

    const result = await client.execute({
      sql: 'INSERT INTO media_library (name, url, type, created_at) VALUES (?, ?, ?, ?)',
      args: [data.name, data.url, data.type || 'image', new Date().toISOString()],
    });

    return NextResponse.json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error('Error adding media:', error);
    return NextResponse.json({ error: 'Failed to add media' }, { status: 500 });
  }
}
