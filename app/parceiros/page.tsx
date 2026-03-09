// app/parceiros/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Parceiros — Pacoticket',
  description: 'Seja um parceiro Pacoticket e ofereça nossa plataforma para seus clientes.',
}

export default function ParceirosPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Parceiros</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Cresça com<br />a <span className="grad-text">Pacoticket</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            Agências, revendas e consultores: faça parte do nosso programa de parceiros e ofereça
            o Pacoticket para seus clientes com condições especiais.
          </p>
          <a href="/contato" className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
            → Quero ser parceiro
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
