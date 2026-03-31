import { createClient } from '@libsql/client';
import { NextRequest, NextResponse } from 'next/server';

function getClient() {
  return createClient({
    url: process.env.TURSO_DATABASE_URL || '',
    authToken: process.env.TURSO_AUTH_TOKEN || '',
  });
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const client = getClient();
    const { id: rawId } = await context.params;
    const id = Number(rawId);
    await client.execute({ sql: 'DELETE FROM media_library WHERE id = ?', args: [id] });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json({ error: 'Failed to delete media' }, { status: 500 });
  }
}
