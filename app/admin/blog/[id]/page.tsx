// app/admin/blog/[id]/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { notFound, redirect } from 'next/navigation'

async function savePost(formData: FormData) {
  'use server'
  const id          = formData.get('id') as string
  const title       = formData.get('title') as string
  const excerpt     = formData.get('excerpt') as string
  const content     = formData.get('content') as string
  const category    = formData.get('category') as string
  const coverEmoji  = formData.get('coverEmoji') as string
  const coverImage  = (formData.get('coverImage') as string).trim() || null
  const published   = formData.get('published') === 'on'

  const slug = title.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').trim()

  await db.blogPost.update({
    where: { id },
    data: {
      title, slug, excerpt, content, category,
      coverEmoji, coverImage, published,
      publishedAt: published ? new Date() : null,
    }
  })
  revalidatePages('blog')
}

export default async function BlogPostEditor({ params }: { params: { id: string } }) {
  const post = await db.blogPost.findUnique({ where: { id: params.id } })
  if (!post) notFound()

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:32 }}>
        <div>
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:24, fontWeight:800 }}>Editar Post</h1>
          <div style={{ fontSize:13, color:'#6B7C93', marginTop:4 }}>/blog/{post.slug}</div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          {post.published && (
            <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer"
              style={{ fontSize:13, color:'#00D170', textDecoration:'none', padding:'8px 16px',
                background:'rgba(0,209,112,.08)', borderRadius:100, border:'1px solid rgba(0,209,112,.2)' }}>
              Ver publicado ↗
            </a>
          )}
          <a href="/admin/blog" style={{ fontSize:13, color:'#9FAFC0', textDecoration:'none', padding:'8px 16px',
            background:'rgba(255,255,255,.05)', borderRadius:100, border:'1px solid rgba(255,255,255,.08)' }}>
            ← Voltar
          </a>
        </div>
      </div>

      <form action={savePost} style={{ display:'flex', flexDirection:'column', gap:20 }}>
        <input type="hidden" name="id" value={post.id} />

        <div style={{ display:'grid', gridTemplateColumns:'3fr 1fr', gap:16 }}>
          <div>
            <label style={lS}>Título</label>
            <input name="title" defaultValue={post.title} style={{ ...iS, fontSize:18, fontWeight:600 }} required />
          </div>
          <div>
            <label style={lS}>Emoji de capa</label>
            <input name="coverEmoji" defaultValue={post.coverEmoji} maxLength={4} style={iS} />
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>
          <div>
            <label style={lS}>URL da imagem de capa (opcional)</label>
            <input name="coverImage" defaultValue={post.coverImage ?? ''} placeholder="https://..." style={iS} />
          </div>
          <div>
            <label style={lS}>Categoria</label>
            <select name="category" defaultValue={post.category} style={{ ...iS, cursor:'pointer' }}>
              {['WhatsApp Business','Automação','Cases e resultados','Inteligência Artificial','Tutoriais'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label style={lS}>Resumo (excerpt — aparece na listagem do blog)</label>
          <textarea name="excerpt" defaultValue={post.excerpt} rows={2} style={{ ...iS, resize:'vertical' }} />
        </div>

        <div>
          <label style={lS}>Conteúdo (HTML ou Markdown — será renderizado)</label>
          <textarea name="content" defaultValue={post.content} rows={20}
            style={{ ...iS, resize:'vertical', fontFamily:'monospace', fontSize:13 }} />
        </div>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0',
          borderTop:'1px solid rgba(255,255,255,.07)' }}>
          <label style={{ display:'flex', gap:10, alignItems:'center', fontSize:14, color:'#9FAFC0', cursor:'pointer' }}>
            <input type="checkbox" name="published" defaultChecked={post.published} />
            Publicado (visível no site)
          </label>
          <button type="submit" style={{ ...bS, background:'rgba(0,209,112,.1)', borderColor:'rgba(0,209,112,.2)',
            color:'#00D170', fontSize:15, padding:'12px 24px' }}>
            Salvar post ✓
          </button>
        </div>
      </form>
    </div>
  )
}

const lS: React.CSSProperties = { fontSize:12, color:'#9FAFC0', display:'block', marginBottom:6, textTransform:'uppercase', letterSpacing:'.04em' }
const iS: React.CSSProperties = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 12px', color:'#EEF1F5', fontSize:14, outline:'none', fontFamily:'DM Sans,sans-serif', boxSizing:'border-box' }
const bS: React.CSSProperties = { background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 20px', fontSize:13, color:'#EEF1F5', cursor:'pointer' }
