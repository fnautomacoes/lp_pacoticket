// app/integracoes/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Integrações — Pacoticket',
  description: 'Conecte o Pacoticket com seus sistemas favoritos: CRM, ERP, e-commerce e muito mais.',
}

export default function IntegracoesPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Integrações</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Conecte com<br /><span className="grad-text">tudo que você usa</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            Integre o Pacoticket com CRM, ERP, e-commerce e outros sistemas via API ou webhooks nativos.
            Esta página está sendo construída — em breve todos os detalhes aqui.
          </p>
          <a href="/api-webhooks" style={{ color:'var(--green)', fontSize:15, textDecoration:'none', marginRight:24 }}>
            Ver API & Webhooks →
          </a>
          <a href="/precos" className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
            → Ver planos
          </a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
