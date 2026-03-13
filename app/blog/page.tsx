// app/blog/page.tsx
import { db } from '@/lib/db'
import { Metadata } from 'next'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Link from 'next/link'

const PAGE_SIZE = 10

export async function generateMetadata(): Promise<Metadata> {
  const seo = await db.pageSeo.findUnique({ where: { page: 'blog' } })
  return { title: seo?.title ?? 'Blog — Pacoticket', description: seo?.description ?? '' }
}

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Math.max(1, parseInt(searchParams.page ?? '1', 10))
  const skip = (currentPage - 1) * PAGE_SIZE

  const [posts, total] = await Promise.all([
    db.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: PAGE_SIZE,
      skip,
    }),
    db.blogPost.count({ where: { published: true } }),
  ])

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const categories = Array.from(new Set(posts.map(p => p.category)))

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <section style={{ padding:'140px 0 80px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-200, left:'50%', transform:'translateX(-50%)', width:800, height:500, background:'radial-gradient(ellipse at center,rgba(0,209,112,.1) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:1 }}>
          <span className="site-tag">Blog</span>
          <h1 style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:800, margin:'20px 0 16px', letterSpacing:'-.02em' }}>
            Atendimento que <span className="grad-text">gera resultado.</span>
          </h1>
          <p style={{ color:'var(--sub)', fontSize:18, maxWidth:560 }}>Estratégias práticas, tutoriais e cases para profissionalizar o atendimento pelo WhatsApp.</p>
        </div>
      </section>
      <section style={{ padding:'0 0 80px' }}>
        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
          {posts.length === 0 ? (
            <div style={{ textAlign:'center', padding:'60px 0', color:'var(--muted)', fontSize:16 }}>Em breve — novos artigos chegando.</div>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:48 }}>
              <div>
                <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                  {posts.map(post => (
                    <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration:'none' }}>
                      <div className="site-card" style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:24 }}>
                        <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:36, aspectRatio:'16/9' }}>{post.coverEmoji}</div>
                        <div>
                          <div style={{ fontSize:12, color:'var(--green)', fontWeight:600, marginBottom:8 }}>{post.category.toUpperCase()}</div>
                          <h3 style={{ fontFamily:'var(--body)', fontWeight:700, fontSize:18, marginBottom:8, color:'var(--text)' }}>{post.title}</h3>
                          <p style={{ fontSize:14, color:'var(--muted)', marginBottom:12 }}>{post.excerpt}</p>
                          <span style={{ fontSize:13, color:'var(--green)', fontWeight:600 }}>Ler artigo →</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div style={{ display:'flex', gap:8, alignItems:'center', justifyContent:'center', marginTop:40 }}>
                    {currentPage > 1 && (
                      <Link href={`/blog?page=${currentPage - 1}`}
                        style={{ padding:'10px 18px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:8, fontSize:14, color:'var(--sub)', textDecoration:'none' }}>
                        ← Anterior
                      </Link>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <Link key={p} href={`/blog?page=${p}`}
                        style={{ padding:'10px 16px', background: p === currentPage ? 'rgba(0,209,112,.1)' : 'var(--card)',
                          border: p === currentPage ? '1px solid rgba(0,209,112,.25)' : '1px solid var(--border)',
                          borderRadius:8, fontSize:14, color: p === currentPage ? 'var(--green)' : 'var(--sub)',
                          textDecoration:'none', fontWeight: p === currentPage ? 600 : 400 }}>
                        {p}
                      </Link>
                    ))}
                    {currentPage < totalPages && (
                      <Link href={`/blog?page=${currentPage + 1}`}
                        style={{ padding:'10px 18px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:8, fontSize:14, color:'var(--sub)', textDecoration:'none' }}>
                        Próxima →
                      </Link>
                    )}
                  </div>
                )}
              </div>

              <div>
                <h2 style={{ fontFamily:'var(--body)', fontWeight:700, fontSize:14, color:'var(--sub)', textTransform:'uppercase', letterSpacing:'.05em', marginBottom:20 }}>Categorias</h2>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {categories.map(cat => (
                    <div key={cat} style={{ display:'flex', justifyContent:'space-between', padding:'12px 16px', background:'var(--card)', border:'1px solid var(--border)', borderRadius:10 }}>
                      <span style={{ fontSize:14, color:'var(--sub)' }}>{cat}</span>
                      <span style={{ fontSize:12, color:'var(--muted)', background:'rgba(255,255,255,.05)', padding:'2px 10px', borderRadius:100 }}>{posts.filter(p => p.category === cat).length}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop:16, fontSize:13, color:'var(--muted)', textAlign:'center' }}>
                  {total} artigo{total !== 1 ? 's' : ''} publicado{total !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
