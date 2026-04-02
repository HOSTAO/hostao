import { put, head } from "@vercel/blob";

export type Link = {
  code: string;
  url: string;
  title: string;
  clicks: number;
  createdAt: string;
  lastClick?: string;
};

const BLOB_KEY = "links/links.json";

// Read all links from Blob
export async function readLinks(): Promise<Link[]> {
  try {
    const blob = await head(BLOB_KEY);
    if (!blob) return defaultLinks();
    const res = await fetch(blob.url, { cache: "no-store" });
    if (!res.ok) return defaultLinks();
    return await res.json();
  } catch {
    return defaultLinks();
  }
}

// Write all links back to Blob
export async function writeLinks(links: Link[]): Promise<void> {
  await put(BLOB_KEY, JSON.stringify(links, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

// Default seed links
function defaultLinks(): Link[] {
  return [
    { code: "chat", url: "https://wa.me/917470111222?text=Hi%20Hostao%2C%20I%27d%20like%20to%20know%20more%20about%20your%20hosting%20plans.", title: "Chat India", clicks: 0, createdAt: new Date().toISOString().slice(0, 10) },
    { code: "chat-us", url: "https://wa.me/13237447383?text=Hi%20Hostao%2C%20I%27d%20like%20to%20know%20more%20about%20your%20hosting%20plans.", title: "Chat USA", clicks: 0, createdAt: new Date().toISOString().slice(0, 10) },
    { code: "reseller", url: "https://my.hostao.com/store/reseller", title: "Reseller Store", clicks: 0, createdAt: new Date().toISOString().slice(0, 10) },
    { code: "hosting", url: "https://my.hostao.com/store/shared-hosting", title: "Shared Hosting", clicks: 0, createdAt: new Date().toISOString().slice(0, 10) },
    { code: "workspace", url: "https://hostao.com/google-workspace", title: "Google Workspace", clicks: 0, createdAt: new Date().toISOString().slice(0, 10) },
  ];
}
