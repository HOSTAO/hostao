import { useState } from 'react'
import Link from 'next/link'
import { useIsMobile } from '../hooks/useIsMobile'
import { brand, navItems } from '../lib/brand'

export default function Navbar() {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'rgba(11,15,20,0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${brand.border}`,
    padding: '0 24px',
  }

  const innerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  }

  const logoStyle: React.CSSProperties = {
    fontSize: 22,
    fontWeight: 800,
    color: brand.text,
    textDecoration: 'none',
    letterSpacing: '-0.5px',
  }

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        {/* Logo */}
        <Link href="/" style={logoStyle}>
          <span style={{ color: brand.primary }}>H</span>ostao
        </Link>

        {/* Desktop Nav */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {navItems.map(item => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                {item.href ? (
                  <Link href={item.href} style={{ color: brand.text, textDecoration: 'none', padding: '8px 12px', fontSize: 14, fontWeight: 500, borderRadius: 6, display: 'block', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                ) : (
                  <button style={{ color: brand.text, background: 'none', border: 'none', padding: '8px 12px', fontSize: 14, fontWeight: 500, borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                    {item.label}
                    <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>
                  </button>
                )}
                {item.dropdown && openDropdown === item.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    background: '#111827', border: `1px solid ${brand.border}`,
                    borderRadius: 12, padding: 8, minWidth: 220,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    zIndex: 100,
                  }}>
                    {item.dropdown.map(d => (
                      <Link key={d.label} href={d.href} style={{
                        display: 'block', color: brand.muted, textDecoration: 'none',
                        padding: '8px 14px', fontSize: 13, borderRadius: 8,
                        transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { (e.target as HTMLElement).style.color = brand.text; (e.target as HTMLElement).style.background = 'rgba(59,130,246,0.1)' }}
                        onMouseLeave={e => { (e.target as HTMLElement).style.color = brand.muted; (e.target as HTMLElement).style.background = 'transparent' }}>
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 8 }}>
            <a href={brand.loginUrl} style={{ color: brand.text, textDecoration: 'none', padding: '8px 16px', fontSize: 14, fontWeight: 500, border: `1px solid ${brand.border}`, borderRadius: 8, transition: 'all 0.2s' }}>
              Login
            </a>
            <a href={brand.orderUrl} style={{ background: brand.primary, color: '#fff', textDecoration: 'none', padding: '8px 18px', fontSize: 14, fontWeight: 600, borderRadius: 8, transition: 'all 0.2s' }}>
              Get Started
            </a>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: brand.text, cursor: 'pointer', fontSize: 24, padding: 4 }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div style={{ background: brand.cardBg, borderTop: `1px solid ${brand.border}`, padding: '16px 24px', maxHeight: '80vh', overflowY: 'auto' }}>
          {navItems.map(item => (
            <div key={item.label}>
              {item.href ? (
                <Link href={item.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', color: brand.text, textDecoration: 'none', padding: '12px 0', fontSize: 16, fontWeight: 500, borderBottom: `1px solid ${brand.border}` }}>
                  {item.label}
                </Link>
              ) : (
                <>
                  <button onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', color: brand.text, padding: '12px 0', fontSize: 16, fontWeight: 500, cursor: 'pointer', borderBottom: `1px solid ${brand.border}` }}>
                    {item.label}
                    <span style={{ fontSize: 12, opacity: 0.6 }}>{openDropdown === item.label ? '▲' : '▼'}</span>
                  </button>
                  {openDropdown === item.label && item.dropdown && (
                    <div style={{ paddingLeft: 16, paddingBottom: 8 }}>
                      {item.dropdown.map(d => (
                        <Link key={d.label} href={d.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null) }}
                          style={{ display: 'block', color: brand.muted, textDecoration: 'none', padding: '8px 0', fontSize: 14 }}>
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <a href={brand.loginUrl} style={{ flex: 1, textAlign: 'center', color: brand.text, textDecoration: 'none', padding: '12px', fontSize: 15, fontWeight: 500, border: `1px solid ${brand.border}`, borderRadius: 10 }}>Login</a>
            <a href={brand.orderUrl} style={{ flex: 1, textAlign: 'center', background: brand.primary, color: '#fff', textDecoration: 'none', padding: '12px', fontSize: 15, fontWeight: 600, borderRadius: 10 }}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  )
}
