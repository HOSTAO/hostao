import { NextResponse } from "next/server";
import { readLinks, writeLinks, type Link } from "@/lib/links-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET — list all links
export async function GET() {
  const links = await readLinks();
  return NextResponse.json(links);
}

// POST — create new short link
export async function POST(req: Request) {
  const body = await req.json();
  const { code, url, title } = body;

  if (!code || !url) {
    return NextResponse.json({ error: "code and url required" }, { status: 400 });
  }

  const links = await readLinks();

  if (links.find(l => l.code === code)) {
    return NextResponse.json({ error: "code already exists" }, { status: 409 });
  }

  const link: Link = {
    code: code.trim().toLowerCase().replace(/[^a-z0-9-_]/g, ""),
    url: url.trim(),
    title: title?.trim() || url.trim(),
    clicks: 0,
    createdAt: new Date().toISOString().slice(0, 10),
  };

  links.push(link);
  await writeLinks(links);

  return NextResponse.json(link, { status: 201 });
}

// DELETE — remove a link by code
export async function DELETE(req: Request) {
  const { code } = await req.json();
  const links = await readLinks();
  const filtered = links.filter(l => l.code !== code);

  if (filtered.length === links.length) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  await writeLinks(filtered);
  return NextResponse.json({ ok: true });
}

// PATCH — update click count or URL
export async function PATCH(req: Request) {
  const body = await req.json();
  const { code, url, title } = body;

  if (!code) {
    return NextResponse.json({ error: "code required" }, { status: 400 });
  }

  const links = await readLinks();
  const idx = links.findIndex(l => l.code === code);

  if (idx === -1) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const updated = [...links];
  updated[idx] = {
    ...updated[idx],
    ...(url ? { url: url.trim() } : {}),
    ...(title ? { title: title.trim() } : {}),
  };

  await writeLinks(updated);
  return NextResponse.json(updated[idx]);
}
