// app/precos/page.tsx
import { db } from '@/lib/db'
import { Metadata } from 'next'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Link from 'next/link'

export const revalidate = false

export async function generateMetadata(): Promise<Metadata> {
  const seo = await db.pageSeo.findUnique({ where: { page: 'precos' } })
  return { title: seo?.title ?? 'Preços — Pacoticket', description: seo?.description ?? '' }
}

export default async function PrecosPage() {
  const plans = await db.plan.findMany({
    where: { published: true },
    include: { features: { orderBy: { order: 'asc' } } },
    orderBy: { order: 'asc' },
  })

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-200, left:'50%', transform:'translateX(-50%)', width:800, height:500,
          background:'radial-gradient(ellipse at center,rgba(0,209,112,.1) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
          <span className="site-tag">Planos</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:800, letterSpacing:'-.02em', margin:'20px 0 16px' }}>
            Simples de entender.<br/><span className="grad-text">Fácil de escalar.</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, maxWidth:560 }}>
            Escolha o plano que cabe no momento do seu negócio. Sem taxa de setup, sem surpresa no boleto.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom:80 }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${plans.length},1fr)`, gap:24, alignItems:'start' }}>
            {plans.map(plan => (
              <div key={plan.id} className="site-card" style={{
                position:'relative',
                ...(plan.highlighted ? { borderColor:'rgba(0,209,112,.4)', background:'rgba(0,209,112,.04)' } : {})
              }}>
                {plan.badge && (
                  <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)',
                    background:'var(--green)', color:'#000', fontSize:11, fontWeight:800,
                    padding:'4px 16px', borderRadius:100, textTransform:'uppercase',
                    letterSpacing:'.05em', whiteSpace:'nowrap' }}>
                    {plan.badge}
                  </div>
                )}
                <div style={{ fontSize:13, fontWeight:700, color: plan.highlighted ? 'var(--green)' : 'var(--sub)',
                  textTransform:'uppercase', letterSpacing:'.06em', marginBottom:12 }}>
                  {plan.name}
                </div>
                {plan.price ? (
                  <>
                    <div style={{ fontFamily:'var(--display)', fontSize:48, fontWeight:800, color:'var(--text)' }}>
                      {plan.price}
                    </div>
                    <div style={{ fontSize:13, color:'var(--muted)', marginBottom:28 }}>{plan.period}</div>
                  </>
                ) : (
                  <>
                    <div style={{ fontFamily:'var(--display)', fontSize:36, fontWeight:800, lineHeight:1.2, marginBottom:4 }}>
                      Sob consulta
                    </div>
                    <div style={{ fontSize:13, color:'var(--muted)', marginBottom:28 }}>{plan.period}</div>
                  </>
                )}
                <a href={plan.ctaUrl} className={plan.highlighted ? 'btn-primary' : 'btn-ghost'}
                  style={{ width:'100%', justifyContent:'center', marginBottom:28 }}>
                  {plan.ctaLabel}
                </a>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {plan.features.map(f => (
                    <li key={f.id} style={{ fontSize:14, color: f.included ? 'var(--sub)' : 'var(--muted)',
                      display:'flex', gap:10 }}>
                      <span style={{ color: f.included ? 'var(--green)' : 'var(--muted)' }}>
                        {f.included ? '✓' : '—'}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign:'center', marginTop:28, fontSize:13, color:'var(--muted)' }}>
            Fale pelo WhatsApp para receber proposta personalizada.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
