
import { useState } from "react"

const sections = [
  { status: "done", title: "Completed", items: [
    { title: "Shared Hosting", desc: "Reliable shared hosting plans" },
    { title: "Domain Registration", desc: "Register and manage domains" },
    { title: "SSL Certificates", desc: "Free SSL with all plans" },
    { title: "Email Hosting", desc: "Professional email services" },
    { title: "cPanel Access", desc: "Full cPanel control panel" },
    { title: "24/7 Support", desc: "Round-the-clock customer support" },
    { title: "WordPress Hosting", desc: "Optimized WordPress plans" }
  ]},
  { status: "progress", title: "In Progress", items: [
    { title: "Cloud VPS Hosting", desc: "Scalable virtual private servers" },
    { title: "Serverless Hosting", desc: "Next.js and Vercel-style deployments" },
    { title: "Auto-Scaling", desc: "Automatic resource scaling" },
    { title: "Enhanced Security Suite", desc: "Advanced malware and DDoS protection" },
    { title: "New Dashboard UI", desc: "Modern client management dashboard" }
  ]},
  { status: "planned", title: "Planned", items: [
    { title: "Managed Kubernetes", desc: "Container orchestration for teams" },
    { title: "Edge CDN", desc: "Global content delivery network" },
    { title: "AI Site Optimization", desc: "AI-powered performance tuning" },
    { title: "White-Label Reseller", desc: "Start your own hosting brand" },
    { title: "API & CLI Tools", desc: "Manage hosting programmatically" },
    { title: "Mobile App", desc: "Server management on the go" }
  ]}
]

export default function RoadmapPage() {
  const [filter, setFilter] = useState("all")
  const filtered = filter === "all" ? sections : sections.filter(s => s.status === filter)

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#f1f5f9", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>Product Roadmap</h1>
          <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 24 }}>See what we have built, what we are working on, and what is coming next.</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {["all", "done", "progress", "planned"].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding: "8px 18px", borderRadius: 20, border: filter === f ? "2px solid #3b82f6" : "1px solid #334155",
                background: filter === f ? "#3b82f622" : "#1e293b", color: filter === f ? "#3b82f6" : "#94a3b8",
                fontWeight: 600, fontSize: 13, cursor: "pointer"
              }}>
                {{ all: "All", done: "✅ Completed", progress: "🚧 In Progress", planned: "📋 Planned" }[f]}
              </button>
            ))}
          </div>
        </div>

        {filtered.map((section, si) => (
          <div key={si} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <span>{{ done: "✅", progress: "🚧", planned: "📋" }[section.status]}</span>
              <span>{section.title}</span>
              <span style={{ background: "#334155", padding: "2px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>{section.items.length}</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10 }}>
              {section.items.map((item, i) => (
                <div key={i} style={{
                  background: "#1e293b", border: "1px solid #334155", borderRadius: 10, padding: "14px 16px",
                  borderLeft: `3px solid ${{ done: "#22c55e", progress: "#3b82f6", planned: "#64748b" }[section.status]}`
                }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                  <div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{item.desc}</div>
                  {section.status === "planned" && (
                    <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                      <span style={{ background: "#334155", padding: "2px 8px", borderRadius: 6, fontSize: 11, cursor: "pointer" }}>👍 Upvote</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 14, padding: "28px", textAlign: "center", marginTop: 20 }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>💡</div>
          <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Suggest a Feature</h2>
          <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 16 }}>Have an idea that would make Hostao better? We would love to hear it.</p>
          <a href="mailto:support@hostao.com?subject=Feature%20Suggestion" style={{ display: "inline-block", background: "#3b82f6", color: "white", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Send Suggestion</a>
        </div>
      </div>
    </div>
  )
}
