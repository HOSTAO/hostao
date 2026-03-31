import { createClient } from '@libsql/client';
import { NextRequest, NextResponse } from 'next/server';

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

async function ensureTable() {
  await getClient().execute(`
    CREATE TABLE IF NOT EXISTS site_settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);
}

export async function GET() {
    const client = getClient();
  try {
    await ensureTable();
    const result = await client.execute('SELECT key, value FROM site_settings');
    const map: Record<string, string> = {};
    result.rows.forEach((row) => {
      map[String(row.key)] = String(row.value);
    });

    return NextResponse.json({
      siteTitle: map.siteTitle || 'Hostao - Premium Web Hosting',
      supportEmail: map.supportEmail || 'support@hostao.com',
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = getClient();
    await ensureTable();
    const data = await request.json();
    const now = new Date().toISOString();

    await client.execute({
      sql: `INSERT INTO site_settings (key, value, updated_at) VALUES ('siteTitle', ?, ?)
            ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at`,
      args: [data.siteTitle || 'Hostao - Premium Web Hosting', now],
    });

    await client.execute({
      sql: `INSERT INTO site_settings (key, value, updated_at) VALUES ('supportEmail', ?, ?)
            ON CONFLICT(key) DO UPDATE SET value=excluded.value, updated_at=excluded.updated_at`,
      args: [data.supportEmail || 'support@hostao.com', now],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
