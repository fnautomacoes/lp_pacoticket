// app/flowbuilder/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'FlowBuilder — Pacoticket',
  description: 'Crie automações visuais de atendimento com o FlowBuilder da Pacoticket.',
}

export default function FlowBuilderPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag" style={{ background:'rgba(59,158,255,.1)', borderColor:'rgba(59,158,255,.25)', color:'#3B9EFF' }}>
            FlowBuilder
          </span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Automações visuais<br /><span className="grad-text">sem código</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:40 }}>
            Construa fluxos de atendimento e automações arrastando e conectando blocos.
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
