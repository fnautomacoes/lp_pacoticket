// components/site/Nav.tsx
import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(8,12,16,.8)',
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 24px', maxWidth:1180, margin:'0 auto' }}>
        <Link href="/" style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:800, color:'var(--text)', textDecoration:'none' }}>
          Paco<span style={{ color:'var(--green)' }}>ticket</span>
        </Link>
        <ul style={{ display:'flex', gap:28, listStyle:'none', margin:0, padding:0 }}>
          {[
            ['Funcionalidades', '/funcionalidades'],
            ['FlowBuilder',     '/flowbuilder'],
            ['IA',              '/ia'],
            ['Integrações',     '/integracoes'],
            ['Preços',          '/precos'],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} style={{ color:'var(--sub)', textDecoration:'none', fontSize:14, fontWeight:500 }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}>
          <a href="https://app.pacoticket.com.br" style={{ color:'var(--sub)', textDecoration:'none', fontSize:14, fontWeight:500 }}>
            Entrar
          </a>
          <Link href="/precos" className="btn-primary" style={{ padding:'12px 24px', fontSize:14 }}>
            → Testar grátis
          </Link>
        </div>
      </div>
    </nav>
  )
}
