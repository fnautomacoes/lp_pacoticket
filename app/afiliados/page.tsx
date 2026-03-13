// app/afiliados/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Afiliados — Pacoticket',
  description: 'Indique o Pacoticket e ganhe comissões recorrentes por cada cliente indicado.',
}

export default function AfiliadosPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Afiliados</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Indique e<br /><span className="grad-text">ganhe recorrente</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            Ganhe comissões mensais recorrentes por cada empresa que você indicar para o Pacoticket.
            Nosso programa de afiliados está em breve.
          </p>
          <a href="/contato" className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
            → Quero ser afiliado
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
