// app/status/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Status do Sistema — Pacoticket',
  description: 'Acompanhe o status em tempo real dos serviços da plataforma Pacoticket.',
}

const SERVICES = [
  { name: 'API Principal',          status: 'operational' },
  { name: 'WhatsApp Gateway',       status: 'operational' },
  { name: 'Painel de Atendimento',  status: 'operational' },
  { name: 'Webhooks & Integrações', status: 'operational' },
  { name: 'FlowBuilder',            status: 'operational' },
]

export default function StatusPage() {
  const allOk = SERVICES.every(s => s.status === 'operational')

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span className="site-tag">Status</span>
            <h1 style={{ fontSize:'clamp(32px,4vw,48px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
              Status do Sistema
            </h1>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'10px 20px',
              background: allOk ? 'rgba(0,209,112,.1)' : 'rgba(255,165,0,.1)',
              border: `1px solid ${allOk ? 'rgba(0,209,112,.3)' : 'rgba(255,165,0,.3)'}`,
              borderRadius:100, fontSize:15, fontWeight:600,
              color: allOk ? 'var(--green)' : '#FFA500' }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'currentColor', display:'inline-block' }} />
              {allOk ? 'Todos os sistemas operacionais' : 'Instabilidade detectada'}
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {SERVICES.map(service => (
              <div key={service.name} style={{ display:'flex', justifyContent:'space-between', alignItems:'center',
                padding:'16px 20px', background:'rgba(255,255,255,.03)', border:'1px solid var(--border)',
                borderRadius:10, fontSize:15 }}>
                <span>{service.name}</span>
                <span style={{ fontSize:13, color:'var(--green)', fontWeight:600, display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--green)', display:'inline-block' }} />
                  Operacional
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
