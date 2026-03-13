// app/admin/blog/[id]/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { markdownToHtml } from '@/lib/sanitize'
import { notFound, redirect } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

function generateSlug(title: string): string {
  return title.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').trim()
}

async function uniqueSlug(baseSlug: string, excludeId: string): Promise<string> {
  let slug = baseSlug
  let suffix = 2
  while (true) {
    const existing = await db.blogPost.findUnique({ where: { slug } })
    if (!existing || existing.id === excludeId) return slug
    slug = `${baseSlug}-${suffix++}`
  }
}

async function savePost(formData: FormData) {
  'use server'
  const id          = formData.get('id') as string
  const title       = formData.get('title') as string
  const excerpt     = formData.get('excerpt') as string
  const rawContent  = formData.get('content') as string
  const content     = await markdownToHtml(rawContent)
  const category    = formData.get('category') as string
  const coverEmoji  = formData.get('coverEmoji') as string
  const coverImage  = (formData.get('coverImage') as string).trim() || null
  const published   = formData.get('published') === 'on'

  const slug = await uniqueSlug(generateSlug(title), id)

  try {
    await db.blogPost.update({
      where: { id },
      data: {
        title, slug, excerpt, content, category,
        coverEmoji, coverImage, published,
        publishedAt: published ? new Date() : null,
      }
    })
    revalidatePages('blog')
  } catch (e) {
    console.error('[savePost] falha ao salvar post:', e)
    redirect(`/admin/blog/${id}?error=1`)
  }
}

export default async function BlogPostEditor({ params, searchParams }: { params: { id: string }; searchParams: { error?: string } }) {
  const post = await db.blogPost.findUnique({ where: { id: params.id } })
  if (!post) notFound()

  return (
    <div>
      {searchParams.error && (
        <div className="admin-error">
          Erro ao salvar o post. Verifique os dados e tente novamente.
        </div>
      )}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:32 }}>
        <div>
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:24, fontWeight:800 }}>Editar Post</h1>
          <div style={{ fontSize:13, color:'var(--muted)', marginTop:4 }}>/blog/{post.slug}</div>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          {post.published && (
            <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="admin-pill-green">
              Ver publicado ↗
            </a>
          )}
          <a href="/admin/blog" className="admin-pill-muted">← Voltar</a>
        </div>
      </div>

      <BlogEditor post={post} r2Enabled={!!process.env.R2_PUBLIC_URL} savePost={savePost} />
    </div>
  )
}
