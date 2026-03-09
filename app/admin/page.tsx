// app/admin/page.tsx
import { db } from '@/lib/db'
import Link from 'next/link'

export default async function AdminDashboard() {
  const [plans, testimonials, posts, metrics] = await Promise.all([
    db.plan.count(),
    db.testimonial.count(),
    db.blogPost.count(),
    db.siteMetric.findMany({ orderBy: { order: 'asc' } }),
  ])

  const PAGES = [
    { label: 'Home',          path: '/',                 edit: null },
    { label: 'Preços',        path: '/precos',           edit: '/admin/planos' },
    { label: 'Funcionalidades', path: '/funcionalidades', edit: '/admin/screenshots' },
    { label: 'FlowBuilder',   path: '/flowbuilder',      edit: '/admin/screenshots' },
    { label: 'IA',            path: '/ia',               edit: '/admin/screenshots' },
    { label: 'Blog',          path: '/blog',             edit: '/admin/blog' },
    { label: 'Sobre',         path: '/sobre',            edit: '/admin/seo' },
    { label: 'Contato',       path: '/contato',          edit: null },
    { label: 'Primeiros Passos', path: '/primeiros-passos', edit: null },
    { label: 'Documentação',  path: '/docs',             edit: null },
    { label: 'Status',        path: '/status',           edit: null },
  ]

  return (
    <div>
      <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800, marginBottom:4 }}>Dashboard</h1>
      <p style={{ color:'#6B7C93', marginBottom:40 }}>Gerencie o conteúdo e configurações do site.</p>

      {/* Cards de resumo */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, marginBottom:40 }}>
        {[
          { label:'Planos',       value: plans,        href:'/admin/planos' },
          { label:'Depoimentos',  value: testimonials, href:'/admin/depoimentos' },
          { label:'Posts',        value: posts,        href:'/admin/blog' },
          { label:'Métricas',     value: metrics.length, href:'/admin/metricas' },
        ].map(c => (
          <Link key={c.label} href={c.href} style={{ textDecoration:'none' }}>
            <div style={{ background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.07)',
              borderRadius:12, padding:20, cursor:'pointer', transition:'border-color .2s' }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontSize:36, fontWeight:800, color:'#00D170' }}>{c.value}</div>
              <div style={{ fontSize:13, color:'#9FAFC0', marginTop:4 }}>{c.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Métricas atuais */}
      <div style={{ marginBottom:40 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:700 }}>Métricas do site</h2>
          <Link href="/admin/metricas" style={{ fontSize:13, color:'#00D170', textDecoration:'none' }}>Editar →</Link>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
          {metrics.map(m => (
            <div key={m.key} style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.06)',
              borderRadius:10, padding:'14px 16px' }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800, color:'#EEF1F5' }}>{m.value}</div>
              <div style={{ fontSize:12, color:'#6B7C93', marginTop:2 }}>{m.suffix}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Todas as páginas com preview */}
      <div>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:700, marginBottom:16 }}>Páginas do site</h2>
        <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.06)', borderRadius:12, overflow:'hidden' }}>
          {PAGES.map((page, i) => (
            <div key={page.path} style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'14px 20px', borderBottom: i < PAGES.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:600 }}>{page.label}</div>
                <div style={{ fontSize:12, color:'#6B7C93' }}>{page.path}</div>
              </div>
              <div style={{ display:'flex', gap:8 }}>
                {page.edit && (
                  <Link href={page.edit}
                    style={{ fontSize:12, color:'#9FAFC0', textDecoration:'none', padding:'6px 14px',
                      background:'rgba(255,255,255,.05)', borderRadius:100, border:'1px solid rgba(255,255,255,.08)' }}>
                    Editar
                  </Link>
                )}
                <a href={`/api/preview?page=${page.path}`} target="_blank" rel="noreferrer"
                  style={{ fontSize:12, color:'#00D170', textDecoration:'none', padding:'6px 14px',
                    background:'rgba(0,209,112,.08)', borderRadius:100, border:'1px solid rgba(0,209,112,.2)' }}>
                  Preview ↗
                </a>
                <a href={page.path} target="_blank" rel="noreferrer"
                  style={{ fontSize:12, color:'#6B7C93', textDecoration:'none', padding:'6px 14px',
                    background:'rgba(255,255,255,.03)', borderRadius:100, border:'1px solid rgba(255,255,255,.06)' }}>
                  Live ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
