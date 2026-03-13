// app/contato/page.tsx
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { db } from '@/lib/db'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Contato — Pacoticket',
  description: 'Entre em contato com a equipe Pacoticket. Estamos prontos para ajudar.',
}

export default async function ContatoPage() {
  const configs = await db.siteConfig.findMany({
    where: { key: { in: ['whatsapp_cta', 'demo_url'] } }
  }).catch(() => [])

  const whatsapp = configs.find(c => c.key === 'whatsapp_cta')?.value || '5535997082991'
  const demoUrl  = configs.find(c => c.key === 'demo_url')?.value || '#'

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', textAlign:'center' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <span className="site-tag">Contato</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 16px' }}>
            Fale com<br />a <span className="grad-text">nossa equipe</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, lineHeight:1.6, marginBottom:48 }}>
            Tire dúvidas, solicite uma demonstração ou fale com o suporte.
            Respondemos rápido pelo WhatsApp.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"
              className="btn-primary" style={{ padding:'14px 32px', fontSize:16 }}>
              → Falar no WhatsApp
            </a>
            {demoUrl !== '#' && (
              <a href={demoUrl} target="_blank" rel="noreferrer"
                className="btn-ghost" style={{ padding:'14px 32px', fontSize:16 }}>
                Agendar demonstração
              </a>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
