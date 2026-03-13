// app/docs/page.tsx
import { db } from '@/lib/db'
import { sanitizeContent } from '@/lib/sanitize'
import { Metadata } from 'next'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'

export const revalidate = false

export async function generateMetadata(): Promise<Metadata> {
  const seo = await db.pageSeo.findUnique({ where: { page: 'docs' } })
  return { title: seo?.title ?? 'Documentação — Pacoticket', description: seo?.description ?? '' }
}

export default async function DocsPage() {
  const sections = await db.docSection.findMany({ orderBy: { ordem: 'asc' } })

  // Build category groups from menu_pai
  const categories = Array.from(new Set(sections.map(s => s.menuPai).filter(Boolean)))
  const noCategory = sections.filter(s => !s.menuPai)

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 40px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-200, left:'50%', transform:'translateX(-50%)', width:800, height:500,
          background:'radial-gradient(ellipse at center,rgba(59,158,255,.08) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
          <span className="site-tag" style={{ background:'rgba(59,158,255,.1)', borderColor:'rgba(59,158,255,.25)', color:'#3B9EFF' }}>
            Documentação
          </span>
          <h1 style={{ fontSize:'clamp(36px,5vw,56px)', fontWeight:800, letterSpacing:'-.02em', margin:'16px 0 12px' }}>
            Central de <span className="grad-text">Documentação</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, maxWidth:560 }}>
            Guias completos de configuração e uso da plataforma Pacoticket.
          </p>
        </div>
      </section>

      <section style={{ padding:'0 0 80px' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', display:'grid', gridTemplateColumns:'240px 1fr', gap:40 }}>
          {/* Sidebar */}
          <aside style={{ position:'sticky', top:80, alignSelf:'start' }}>
            <nav style={{ display:'flex', flexDirection:'column', gap:4 }}>
              {noCategory.map(s => (
                <a key={s.id} href={`#section-${s.id}`}
                  style={{ fontSize:14, color:'var(--muted)', textDecoration:'none', padding:'6px 12px',
                    borderRadius:8, border:'1px solid transparent' }}>
                  {s.title}
                </a>
              ))}
              {categories.map(cat => (
                <div key={cat}>
                  <div style={{ fontSize:11, color:'var(--sub)', fontWeight:700, textTransform:'uppercase',
                    letterSpacing:'.06em', padding:'12px 12px 6px' }}>{cat}</div>
                  {sections.filter(s => s.menuPai === cat).map(s => (
                    <a key={s.id} href={`#section-${s.id}`}
                      style={{ display:'block', fontSize:14, color:'var(--muted)', textDecoration:'none',
                        padding:'6px 12px', borderRadius:8 }}>
                      {s.title}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div style={{ display:'flex', flexDirection:'column', gap:48 }}>
            {sections.map(s => (
              <article key={s.id} id={`section-${s.id}`}
                style={{ paddingBottom:48, borderBottom:'1px solid var(--border)' }}>
                <h2 style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:800, marginBottom:24, color:'var(--text)' }}>
                  {s.title}
                </h2>
                <div
                  className="docs-content"
                  style={{ color:'var(--sub)', lineHeight:1.8, fontSize:15 }}
                  dangerouslySetInnerHTML={{ __html: sanitizeContent(s.content) }}
                />
                {s.link && (
                  <a href={s.link} target="_blank" rel="noreferrer"
                    style={{ display:'inline-flex', alignItems:'center', gap:6, marginTop:16,
                      fontSize:13, color:'var(--green)', textDecoration:'none' }}>
                    Ver na Central de Ajuda ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      <style>{`
        .docs-content h2, .docs-content h3 { font-family: var(--display); color: var(--text); margin: 24px 0 12px; }
        .docs-content h3 { font-size: 18px; }
        .docs-content h4 { font-family: var(--body); font-weight: 700; color: var(--sub); margin: 16px 0 8px; }
        .docs-content p  { margin-bottom: 12px; }
        .docs-content ul, .docs-content ol { padding-left: 20px; margin-bottom: 12px; }
        .docs-content li { margin-bottom: 6px; }
        .docs-content strong { color: var(--text); }
        .docs-content a { color: var(--green); }
        .docs-content img { max-width: 100%; border-radius: 10px; margin: 12px 0; border: 1px solid var(--border); }
        .docs-content code { background: rgba(255,255,255,.06); padding: 2px 6px; border-radius: 4px; font-size: 13px; }
        .docs-content pre { background: rgba(255,255,255,.04); border: 1px solid var(--border); border-radius: 10px; padding: 16px; overflow-x: auto; margin: 16px 0; }
      `}</style>
    </div>
  )
}
