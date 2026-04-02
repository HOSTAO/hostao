"use client";
import { useState } from "react";

type Link = {
  code: string; url: string; title: string;
  clicks: number; createdAt: string; lastClick?: string;
};

export default function AdminLinksClient({ links: initialLinks, siteUrl }: { links: Link[]; siteUrl: string }) {
  const [links, setLinks] = useState(initialLinks);
  const [code, setCode] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  async function createLink(e: React.FormEvent) {
    e.preventDefault();
    if (!code || !url) return;
    setLoading(true);
    try {
      const res = await fetch("/api/links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim().toLowerCase(), url: url.trim(), title: title.trim() || url.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setLinks(l => [...l, data]);
        setCode(""); setUrl(""); setTitle("");
        setMsg("✅ Link created!");
      } else {
        setMsg(`❌ ${data.error}`);
      }
    } catch { setMsg("❌ Failed to create link"); }
    setLoading(false);
    setTimeout(() => setMsg(""), 3000);
  }

  async function deleteLink(code: string) {
    if (!confirm(`Delete /${code}?`)) return;
    const res = await fetch("/api/links", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (res.ok) setLinks(l => l.filter(x => x.code !== code));
  }

  function copyLink(code: string) {
    navigator.clipboard.writeText(`${siteUrl}/go/${code}`);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  }

  const totalClicks = links.reduce((s, l) => s + (l.clicks || 0), 0);

  return (
    <div className="space-y-6">

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#046bd2]">{links.length}</div>
          <div className="text-sm text-[#64748b] mt-1">Total Links</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 text-center">
          <div className="text-3xl font-extrabold text-[#046bd2]">{totalClicks.toLocaleString()}</div>
          <div className="text-sm text-[#64748b] mt-1">Total Clicks</div>
        </div>
        <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 text-center col-span-2 md:col-span-1">
          <div className="text-3xl font-extrabold text-[#046bd2]">
            {links.length > 0 ? Math.round(totalClicks / links.length) : 0}
          </div>
          <div className="text-sm text-[#64748b] mt-1">Avg Clicks / Link</div>
        </div>
      </div>

      {/* Create form */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
        <h2 className="font-bold text-[#1e293b] mb-4">Create New Short Link</h2>
        <form onSubmit={createLink} className="flex flex-col md:flex-row gap-3">
          <div className="flex-shrink-0">
            <label className="text-xs font-semibold text-[#64748b] block mb-1">Code</label>
            <div className="flex items-center border border-[#e2e8f0] rounded-lg overflow-hidden focus-within:border-[#046bd2]">
              <span className="px-2 py-2 bg-[#f8fafc] text-[#94a3b8] text-sm border-r border-[#e2e8f0]">/go/</span>
              <input value={code} onChange={e => setCode(e.target.value.replace(/\s/g, ""))}
                placeholder="chat" required
                className="px-3 py-2 text-sm outline-none w-28 bg-white" />
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs font-semibold text-[#64748b] block mb-1">Destination URL</label>
            <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://hostao.com/google-workspace" required
              className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#046bd2]" />
          </div>
          <div className="w-40">
            <label className="text-xs font-semibold text-[#64748b] block mb-1">Title (optional)</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Google Workspace"
              className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#046bd2]" />
          </div>
          <div className="flex items-end">
            <button type="submit" disabled={loading}
              className="btn-hostao-primary px-5 py-2 text-sm disabled:opacity-50">
              {loading ? "..." : "Create"}
            </button>
          </div>
        </form>
        {msg && <p className="text-sm mt-3 font-medium">{msg}</p>}
      </div>

      {/* Links table */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#f1f5f9] flex items-center justify-between">
          <h2 className="font-bold text-[#1e293b]">All Short Links</h2>
          <span className="text-sm text-[#64748b]">{links.length} links</span>
        </div>
        {links.length === 0 ? (
          <div className="px-6 py-12 text-center text-[#94a3b8]">No links yet — create one above.</div>
        ) : (
          <div className="divide-y divide-[#f1f5f9]">
            {[...links].sort((a, b) => (b.clicks || 0) - (a.clicks || 0)).map(link => (
              <div key={link.code} className="px-6 py-4 flex items-center gap-4 hover:bg-[#f8fafc] transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-[#046bd2] text-sm">/go/{link.code}</span>
                    <button onClick={() => copyLink(link.code)}
                      className="text-xs text-[#94a3b8] hover:text-[#1e293b] border border-[#e2e8f0] px-2 py-0.5 rounded transition-colors">
                      {copied === link.code ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div className="text-xs text-[#94a3b8] truncate">{link.title || link.url}</div>
                  <div className="text-xs text-[#cbd5e1] mt-0.5 truncate">{link.url}</div>
                </div>
                <div className="text-center flex-shrink-0">
                  <div className="text-2xl font-extrabold text-[#1e293b]">{(link.clicks || 0).toLocaleString()}</div>
                  <div className="text-xs text-[#94a3b8]">clicks</div>
                </div>
                <div className="text-center flex-shrink-0 hidden md:block">
                  <div className="text-xs text-[#64748b]">{link.createdAt}</div>
                  {link.lastClick && <div className="text-xs text-[#94a3b8]">Last: {link.lastClick.slice(0, 10)}</div>}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a href={`${siteUrl}/go/${link.code}`} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-[#64748b] hover:text-[#1e293b] border border-[#e2e8f0] px-2 py-1 rounded transition-colors">
                    Test ↗
                  </a>
                  <button onClick={() => deleteLink(link.code)}
                    className="text-xs text-red-500 hover:text-red-700 border border-red-100 hover:border-red-200 px-2 py-1 rounded transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
