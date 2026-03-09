// app/api-webhooks/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'API & Webhooks — Pacoticket',
  description: 'Acesse a API REST do Pacoticket e configure webhooks para integrar com qualquer sistema.',
}

export default function ApiWebhooksPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag" style={{ background:'rgba(59,158,255,.1)', borderColor:'rgba(59,158,255,.25)', color:'#3B9EFF' }}>
            API & Webhooks
          </span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Construa em cima<br />da <span className="grad-text">nossa plataforma</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            API REST completa e webhooks em tempo real para integrar o Pacoticket com qualquer sistema.
            Esta página está sendo construída — em breve todos os detalhes aqui.
          </p>
          <a href="/docs" style={{ color:'var(--green)', fontSize:15, textDecoration:'none', marginRight:24 }}>
            Ver documentação →
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
