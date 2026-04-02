import { NextResponse } from "next/server";
import { readLinks, writeLinks } from "@/lib/links-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const links = await readLinks();
  const idx = links.findIndex(l => l.code === code);

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://hostao.com";

  if (idx === -1) {
    return NextResponse.redirect(new URL("/", base), { status: 302 });
  }

  // Increment click count (fire-and-forget — don't block the redirect)
  const updated = [...links];
  updated[idx] = {
    ...updated[idx],
    clicks: (updated[idx].clicks || 0) + 1,
    lastClick: new Date().toISOString().slice(0, 10),
  };
  writeLinks(updated).catch(() => {}); // async, don't await

  return NextResponse.redirect(updated[idx].url, { status: 302 });
}
