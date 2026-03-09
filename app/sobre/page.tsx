// app/sobre/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Sobre — Pacoticket',
  description: 'Conheça a história da Pacoticket, nossa missão e o time por trás da plataforma.',
}

export default function SobrePage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Nossa história</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Feito no Brasil,<br />para o <span className="grad-text">Brasil</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            A Pacoticket nasceu da necessidade real de empresas brasileiras que precisavam organizar
            seu atendimento via WhatsApp sem perder a humanização. Esta página está sendo construída.
          </p>
          <a href="/contato" style={{ color:'var(--green)', fontSize:15, textDecoration:'none' }}>
            Entre em contato →
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
