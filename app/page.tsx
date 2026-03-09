// app/page.tsx
import { db } from '@/lib/db'
import { Metadata } from 'next'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Link from 'next/link'

export const revalidate = false // fully static, rebuilt via revalidatePath

export async function generateMetadata(): Promise<Metadata> {
  const seo = await db.pageSeo.findUnique({ where: { page: 'home' } })
  return {
    title:       seo?.title       ?? 'Pacoticket',
    description: seo?.description ?? '',
    openGraph:   seo?.ogImage ? { images: [seo.ogImage] } : {},
  }
}

export default async function HomePage() {
  const [metrics, testimonials, config] = await Promise.all([
    db.siteMetric.findMany({ orderBy: { order: 'asc' } }),
    db.testimonial.findMany({ where: { published: true }, orderBy: { order: 'asc' } }),
    db.siteConfig.findMany({ where: { key: { in: ['whatsapp_cta', 'demo_url'] } } }),
  ])

  const waNumber = config.find(c => c.key === 'whatsapp_cta')?.value ?? '5535997082991'
  const demoUrl  = config.find(c => c.key === 'demo_url')?.value ?? '#'
  const waUrl    = `https://wa.me/${waNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Pacoticket!`

  return (
    <div className="site-body noise-overlay">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ padding:'140px 0 80px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-200, left:'50%', transform:'translateX(-50%)', width:800, height:500,
          background:'radial-gradient(ellipse at center,rgba(0,209,112,.1) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
            <div>
              <span className="site-tag">Atendimento Omnichannel</span>
              <h1 style={{ fontSize:'clamp(40px,5vw,68px)', fontWeight:800, letterSpacing:'-.02em', margin:'20px 0 20px', lineHeight:1.1 }}>
                Toda a sua equipe.<br/>
                Um só número.<br/>
                <span className="grad-text">Zero caos.</span>
              </h1>
              <p style={{ color:'var(--sub)', fontSize:18, maxWidth:480, marginBottom:32, lineHeight:1.7 }}>
                WhatsApp profissional para equipes. Tickets, filas, chatbot, CRM e IA — tudo em um painel, sem trocar de aba.
              </p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                <Link href="/precos" className="btn-primary">→ Começar grátis</Link>
                <a href={demoUrl} className="btn-ghost" target="_blank" rel="noreferrer">▶ Ver demonstração</a>
              </div>
              <div style={{ display:'flex', gap:24, marginTop:32 }}>
                {['Sem cartão de crédito', 'Ativo em 5 minutos', 'Suporte em PT-BR'].map(t => (
                  <div key={t} style={{ display:'flex', gap:6, alignItems:'center', fontSize:13, color:'var(--muted)' }}>
                    <span style={{ color:'var(--green)' }}>✓</span> {t}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:20,
              minHeight:380, display:'flex', alignItems:'center', justifyContent:'center',
              flexDirection:'column', gap:12, padding:32, textAlign:'center' }}>
              <div style={{ fontSize:40 }}>📱</div>
              <div style={{ fontSize:14, fontWeight:600, color:'var(--sub)' }}>Screenshot: Painel Principal</div>
              <div style={{ fontSize:12, color:'var(--muted)' }}>Lista de tickets, status por fila, chat aberto à direita, painel do contato</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ─────────────────────────────────────────────────────── */}
      <section style={{ background:'var(--surface)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'40px 0' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px',
          display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, textAlign:'center' }}>
          {metrics.map(m => (
            <div key={m.key}>
              <div style={{ fontFamily:'var(--display)', fontSize:40, fontWeight:800, color:'var(--green)' }}>{m.value}</div>
              <div style={{ fontSize:14, color:'var(--muted)', marginTop:4 }}>{m.suffix}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEMA ─────────────────────────────────────────────────────── */}
      <section style={{ padding:'80px 0' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
          <div style={{ textAlign:'center', maxWidth:620, margin:'0 auto 56px' }}>
            <span className="site-tag" style={{ background:'rgba(255,107,53,.1)', borderColor:'rgba(255,107,53,.25)', color:'var(--orange)' }}>
              O problema
            </span>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, margin:'16px 0 12px' }}>
              WhatsApp pessoal não escala.
            </h2>
            <p style={{ color:'var(--sub)', fontSize:18 }}>4 sintomas que toda empresa sente antes de contratar o Pacoticket.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }}>
            {[
              ['🚪', 'Vendedor saiu, cliente foi junto', 'O histórico fica no celular pessoal. Quando o funcionário vai embora, os clientes vão com ele.'],
              ['👻', 'Mensagens sem resposta', 'Com múltiplas pessoas no mesmo número informal, ninguém sabe quem deveria responder — e o cliente espera.'],
              ['🔭', 'Zero visibilidade do time', 'Gestores não conseguem ver quem atendeu o quê, quanto tempo demorou, ou se o cliente foi bem atendido.'],
              ['📉', 'Não escala com o crescimento', 'Contratar mais atendentes no WhatsApp pessoal só aumenta o caos. Não existe estrutura, só número.'],
            ].map(([emoji, title, desc]) => (
              <div key={title} className="site-card" style={{ borderColor:'rgba(255,107,53,.15)', background:'rgba(255,107,53,.03)' }}>
                <div style={{ fontSize:32, marginBottom:16 }}>{emoji}</div>
                <h3 style={{ fontFamily:'var(--body)', fontWeight:700, fontSize:18, marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:14, color:'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ──────────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section style={{ background:'var(--surface)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'80px 0' }}>
          <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800 }}>O que nossos clientes dizem</h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {testimonials.map(t => (
                <div key={t.id} className="site-card">
                  <p style={{ fontSize:15, color:'var(--sub)', lineHeight:1.8, marginBottom:24, fontStyle:'italic' }}>
                    "{t.content}"
                  </p>
                  <div style={{ display:'flex', gap:12, alignItems:'center' }}>
                    <div style={{ width:40, height:40, borderRadius:'50%', background:t.avatarBg,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      fontFamily:'var(--display)', fontSize:14, fontWeight:800, color:'#fff' }}>
                      {t.avatarInitials}
                    </div>
                    <div>
                      <div style={{ fontWeight:700, fontSize:14 }}>{t.author}</div>
                      <div style={{ fontSize:12, color:'var(--muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA FINAL ────────────────────────────────────────────────────── */}
      <section style={{ padding:'80px 0', textAlign:'center' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
          <h2 style={{ fontSize:'clamp(28px,4vw,44px)', fontWeight:800, marginBottom:16 }}>
            Pronto para profissionalizar seu atendimento?
          </h2>
          <p style={{ color:'var(--sub)', fontSize:18, marginBottom:32 }}>
            Mais de 3.200 empresas já transformaram o WhatsApp em uma máquina de atendimento.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <Link href="/precos" className="btn-primary">→ Criar minha conta grátis</Link>
            <a href={waUrl} className="btn-ghost" target="_blank" rel="noreferrer">💬 Falar com especialista</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
