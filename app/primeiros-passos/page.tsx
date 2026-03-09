// app/primeiros-passos/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Primeiros Passos — Pacoticket',
  description: 'Configure sua conta Pacoticket em menos de 5 minutos e comece a atender.',
}

const STEPS = [
  { n: '01', title: 'Crie sua conta', desc: 'Acesse o app e crie sua conta em menos de 2 minutos. Sem cartão de crédito.' },
  { n: '02', title: 'Conecte o WhatsApp', desc: 'Leia o QR Code no celular para vincular seu número comercial.' },
  { n: '03', title: 'Convide sua equipe', desc: 'Adicione os atendentes e configure filas de atendimento.' },
  { n: '04', title: 'Comece a atender', desc: 'Distribua chats, use tags, histórico e relatórios desde o primeiro dia.' },
]

export default function PrimeirosPassosPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px' }}>
        <div style={{ maxWidth:860, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <span className="site-tag">Primeiros Passos</span>
            <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
              Configure em<br /><span className="grad-text">menos de 5 minutos</span>
            </h1>
            <p style={{ color:'var(--sub)', fontSize:18, maxWidth:540, margin:'0 auto' }}>
              Siga os passos abaixo e sua equipe já estará atendendo pelo WhatsApp de forma organizada.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:24 }}>
            {STEPS.map(step => (
              <div key={step.n} className="site-card" style={{ padding:28 }}>
                <div style={{ fontFamily:'var(--display)', fontSize:40, fontWeight:800, color:'var(--green)', opacity:.4, lineHeight:1, marginBottom:16 }}>
                  {step.n}
                </div>
                <h3 style={{ fontWeight:700, fontSize:18, marginBottom:8 }}>{step.title}</h3>
                <p style={{ color:'var(--sub)', fontSize:14, lineHeight:1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:56 }}>
            <a href="https://app.pacoticket.com.br" target="_blank" rel="noreferrer"
              className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
              → Criar conta grátis
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
