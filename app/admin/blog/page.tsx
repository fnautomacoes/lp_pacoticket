// app/admin/blog/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { redirect } from 'next/navigation'
import Link from 'next/link'

function generateSlug(title: string): string {
  return title.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim()
}

async function uniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug
  let suffix = 2
  while (true) {
    const existing = await db.blogPost.findUnique({ where: { slug } })
    if (!existing) return slug
    slug = `${baseSlug}-${suffix++}`
  }
}

async function createPost(formData: FormData) {
  'use server'
  const title    = formData.get('title') as string
  const category = formData.get('category') as string

  try {
    const slug = await uniqueSlug(generateSlug(title))
    const post = await db.blogPost.create({
      data: { slug, title, excerpt:'', content:'', category, coverEmoji:'📝', published:false }
    })
    revalidatePages('blog')
    redirect(`/admin/blog/${post.id}`)
  } catch (e) {
    // redirect() throws, so only catch genuine errors
    if ((e as { digest?: string }).digest?.startsWith('NEXT_REDIRECT')) throw e
    console.error('[createPost] falha:', e)
    redirect('/admin/blog?error=1')
  }
}

async function deletePost(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  try {
    await db.blogPost.delete({ where: { id } })
    revalidatePages('blog')
  } catch (e) {
    console.error('[deletePost] falha:', e)
    redirect('/admin/blog?error=1')
  }
}

export default async function BlogListPage({ searchParams }: { searchParams: { error?: string } }) {
  const posts = await db.blogPost.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <div>
      {searchParams.error && (
        <div className="admin-error">Erro ao processar post. Tente novamente.</div>
      )}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:32 }}>
        <div>
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Blog</h1>
          <p style={{ color:'var(--muted)', marginTop:4 }}>{posts.length} post(s) — clique para editar</p>
        </div>
        <a href="/blog" target="_blank" className="admin-pill-green">Preview blog ↗</a>
      </div>

      {/* New post form */}
      <form action={createPost}
        style={{ background:'rgba(0,209,112,.03)', border:'1px dashed rgba(0,209,112,.2)',
          borderRadius:12, padding:20, marginBottom:24, display:'grid', gridTemplateColumns:'2fr 1fr auto', gap:12 }}>
        <div>
          <label className="admin-label">Título do novo post</label>
          <input name="title" placeholder="Como 5 atendentes usam o mesmo número..." className="admin-input" required />
        </div>
        <div>
          <label className="admin-label">Categoria</label>
          <select name="category" className="admin-input" style={{ cursor:'pointer' }}>
            <option>WhatsApp Business</option>
            <option>Automação</option>
            <option>Cases e resultados</option>
            <option>Inteligência Artificial</option>
            <option>Tutoriais</option>
          </select>
        </div>
        <button type="submit" className="admin-btn admin-btn-green" style={{ alignSelf:'flex-end' }}>
          Criar post
        </button>
      </form>

      {/* Posts list */}
      <div className="admin-card" style={{ borderRadius:12, overflow:'hidden' }}>
        {posts.length === 0 && (
          <div style={{ padding:40, textAlign:'center', color:'var(--muted)', fontSize:14 }}>
            Nenhum post criado ainda. Use o formulário acima para criar o primeiro.
          </div>
        )}
        {posts.map((post, i) => (
          <div key={post.id} style={{ display:'flex', alignItems:'center', gap:16, padding:'14px 20px',
            borderBottom: i < posts.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
            <div style={{ fontSize:24 }}>{post.coverEmoji}</div>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:600 }}>{post.title}</div>
              <div style={{ fontSize:12, color:'var(--muted)', marginTop:2 }}>
                {post.category} · {post.published ? '✓ Publicado' : '● Rascunho'} · /blog/{post.slug}
              </div>
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <Link href={`/admin/blog/${post.id}`} className="admin-pill-muted" style={{ fontSize:12, padding:'6px 14px' }}>
                Editar
              </Link>
              {post.published && (
                <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer"
                  className="admin-pill-green" style={{ fontSize:12, padding:'6px 14px' }}>
                  Ver ↗
                </a>
              )}
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button type="submit" className="admin-btn admin-btn-red" style={{ fontSize:12, borderRadius:100, padding:'6px 14px' }}>
                  Excluir
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
