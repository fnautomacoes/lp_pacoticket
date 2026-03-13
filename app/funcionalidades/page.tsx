// app/funcionalidades/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Funcionalidades — Pacoticket',
  description: 'Conheça todas as funcionalidades da plataforma Pacoticket para atendimento omnichannel.',
}

export default function FuncionalidadesPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Funcionalidades</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Tudo que você precisa<br />para atender <span className="grad-text">melhor</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            Gestão de filas, kanban de leads, campanhas em massa, flowbuilder visual e muito mais.
            Esta página está sendo construída — em breve todos os detalhes aqui.
          </p>
          <a href="/precos" className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
            → Ver planos
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
