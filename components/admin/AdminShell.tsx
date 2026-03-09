// components/admin/AdminShell.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const NAV_ITEMS = [
  { label: 'Dashboard',     href: '/admin',                  icon: '◉' },
  { label: 'Planos',        href: '/admin/planos',           icon: '💳' },
  { label: 'Depoimentos',   href: '/admin/depoimentos',      icon: '💬' },
  { label: 'Blog',          href: '/admin/blog',             icon: '✍️' },
  { label: 'Métricas',      href: '/admin/metricas',         icon: '📊' },
  { label: 'Screenshots',   href: '/admin/screenshots',      icon: '🖼️' },
  { label: 'SEO',           href: '/admin/seo',              icon: '🔍' },
  { label: 'Analytics',     href: '/admin/analytics',        icon: '📈' },
]

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div style={{ display:'flex', minHeight:'100vh', background:'#080C10', color:'#EEF1F5' }}>
      {/* Sidebar */}
      <aside style={{ width:240, background:'#0F1519', borderRight:'1px solid rgba(255,255,255,.07)',
        display:'flex', flexDirection:'column', position:'fixed', inset:'0 auto 0 0', zIndex:50 }}>
        <div style={{ padding:'24px 20px 20px' }}>
          <div style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:800 }}>
            Paco<span style={{ color:'#00D170' }}>ticket</span>
          </div>
          <div style={{ fontSize:11, color:'#6B7C93', marginTop:2, textTransform:'uppercase', letterSpacing:'.05em' }}>Admin</div>
        </div>

        <nav style={{ flex:1, padding:'8px 12px', display:'flex', flexDirection:'column', gap:2 }}>
          {NAV_ITEMS.map(item => {
            const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href} style={{
                display:'flex', alignItems:'center', gap:10, padding:'9px 12px', borderRadius:8,
                fontSize:14, fontWeight: active ? 600 : 400, textDecoration:'none',
                color: active ? '#EEF1F5' : '#6B7C93',
                background: active ? 'rgba(0,209,112,.1)' : 'transparent',
                border: active ? '1px solid rgba(0,209,112,.15)' : '1px solid transparent',
                transition: 'all .15s',
              }}>
                <span>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div style={{ padding:16, borderTop:'1px solid rgba(255,255,255,.07)' }}>
          <a href="/" target="_blank" rel="noreferrer"
            style={{ display:'block', fontSize:13, color:'#6B7C93', textDecoration:'none', marginBottom:8,
              padding:'8px 12px', borderRadius:8, border:'1px solid rgba(255,255,255,.07)',
              textAlign:'center' }}>
            ↗ Ver site
          </a>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })}
            style={{ width:'100%', background:'transparent', border:'1px solid rgba(255,255,255,.07)',
              borderRadius:8, padding:'8px 12px', fontSize:13, color:'#6B7C93', cursor:'pointer' }}>
            Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ marginLeft:240, flex:1, padding:32 }}>
        {children}
      </main>
    </div>
  )
}
