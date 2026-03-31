import { useState } from "react"

const quickLinks = [
  { icon: "🖥️", title: "Hosting Setup", description: "Get started with your hosting account and cPanel" },
  { icon: "🌐", title: "Domain Management", description: "Register, transfer, and manage domain names" },
  { icon: "📧", title: "Email Hosting", description: "Set up professional email with your domain" },
  { icon: "📦", title: "WordPress Help", description: "Install, manage, and optimize WordPress sites" },
  { icon: "🔒", title: "SSL & Security", description: "SSL certificates, malware protection, and backups" },
  { icon: "💳", title: "Billing", description: "Invoices, payments, upgrades, and refunds" }
]

const topQuestions = [
  { q: "How do I set up my hosting account?", a: "After purchase, you'll receive a welcome email with cPanel login details. Log in to cPanel to set up your website, create email accounts, and manage files.", category: "Hosting" },
  { q: "How do I transfer my domain to Hostao?", a: "Go to your current registrar and unlock the domain, get the EPP/auth code. Then submit a transfer request through your Hostao dashboard.", category: "Domains" },
  { q: "How do I set up email with my domain?", a: "Log in to cPanel → Email Accounts → Create. Enter your desired address and password. Use the provided IMAP/SMTP settings in your email client.", category: "Email" },
  { q: "How do I install WordPress?", a: "Log in to cPanel → Softaculous → WordPress → Install. Choose your domain, set admin credentials, and click Install. Takes about 60 seconds.", category: "WordPress" },
  { q: "How do I get a free SSL certificate?", a: "All Hostao plans include free SSL via Let's Encrypt. Go to cPanel → SSL/TLS → Enable AutoSSL.", category: "Security" },
  { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee on all shared hosting plans. Contact support@hostao.com within 30 days.", category: "Billing" }
]

const categories = [
  { icon: "🖥️", name: "Hosting", count: "12 articles" },
  { icon: "🌐", name: "Domains", count: "8 articles" },
  { icon: "📧", name: "Email", count: "6 articles" },
  { icon: "📦", name: "WordPress", count: "10 articles" },
  { icon: "🔒", name: "Security", count: "7 articles" },
  { icon: "💳", name: "Billing", count: "5 articles" }
]

export default function SupportPage() {
  const [search, setSearch] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const filtered = topQuestions.filter(q => q.q.toLowerCase().includes(search.toLowerCase()) || q.a.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#f1f5f9", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 10 }}>How can we help you?</h1>
          <p style={{ color: "#94a3b8", fontSize: 16, marginBottom: 24 }}>Find answers or contact our support team directly.</p>
          <div style={{ maxWidth: 500, margin: "0 auto" }}>
            <input type="text" placeholder="🔍 Search for help..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: "100%", padding: "14px 18px", borderRadius: 12, border: "1px solid #334155", background: "#1e293b", color: "#f1f5f9", fontSize: 15, outline: "none" }} />
          </div>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Quick links</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12, marginBottom: 40 }}>
          {quickLinks.map((link, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "16px 18px" }}><div style={{ fontSize: 24, marginBottom: 6 }}>{link.icon}</div><div style={{ fontWeight: 700, fontSize: 14 }}>{link.title}</div><div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{link.description}</div></div>))}
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Frequently asked questions</h2>
        <div style={{ marginBottom: 40 }}>
          {filtered.map((faq, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 10, marginBottom: 8 }}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "none", border: "none", color: "#f1f5f9", cursor: "pointer", fontSize: 14, fontWeight: 600, textAlign: "left" }}><span>{faq.q}</span><span style={{ color: "#64748b", fontSize: 18, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▼</span></button>{openFaq === i && (<div style={{ padding: "0 18px 14px", color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}><span style={{ display: "inline-block", background: "#334155", padding: "2px 8px", borderRadius: 4, fontSize: 11, fontWeight: 600, marginBottom: 8, color: "#3b82f6" }}>{faq.category}</span><p>{faq.a}</p></div>)}</div>))}
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Browse by category</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 12, marginBottom: 40 }}>
          {categories.map((cat, i) => (<div key={i} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "16px 18px" }}><div style={{ fontSize: 24, marginBottom: 6 }}>{cat.icon}</div><div style={{ fontWeight: 700, fontSize: 14 }}>{cat.name}</div><div style={{ color: "#64748b", fontSize: 12, marginTop: 4 }}>{cat.count}</div></div>))}
        </div>
        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 14, padding: "28px", textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>💬</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Still need help?</h2>
          <p style={{ color: "#94a3b8", fontSize: 14, marginBottom: 16 }}>Our support team typically responds within a few hours during business hours.</p>
          <a href="mailto:support@hostao.com" style={{ display: "inline-block", background: "#3b82f6", color: "white", padding: "12px 28px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Contact Support</a>
          <p style={{ color: "#475569", fontSize: 12, marginTop: 12 }}>Business hours: Monday–Friday, 9 AM – 6 PM IST</p>
        </div>
      </div>
    </div>
  )
}
