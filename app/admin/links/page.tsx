import type { Metadata } from "next";
import AdminLinksClient from "./AdminLinksClient";
import { readLinks } from "@/lib/links-store";

export const metadata: Metadata = {
  title: "Link Manager | Hostao Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLinksPage() {
  const links = await readLinks();
  const totalClicks = links.reduce((s, l) => s + (l.clicks || 0), 0);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hostao.com";

  return (
    <div className="min-h-screen bg-[#F0F5FA] py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <a href="/admin" className="text-[#046bd2] hover:underline text-sm">← Admin</a>
            <span className="text-[#94a3b8] text-sm">/</span>
            <span className="text-[#64748b] text-sm">Links</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1e293b]">🔗 Link Manager</h1>
          <p className="text-[#64748b] mt-1">
            Short links live at <code className="bg-white border border-[#e2e8f0] px-2 py-0.5 rounded text-sm">{siteUrl}/go/code</code> — track clicks, manage destinations.
          </p>
          <p className="text-xs text-[#94a3b8] mt-1">{links.length} links · {totalClicks.toLocaleString()} total clicks</p>
        </div>

        <AdminLinksClient links={links} siteUrl={siteUrl} />

      </div>
    </div>
  );
}
