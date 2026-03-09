// app/blog/[slug]/page.tsx
import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import Link from 'next/link'
import { Metadata } from 'next'

export const revalidate = false

export async function generateStaticParams() {
  const posts = await db.blogPost.findMany({ where: { published: true }, select: { slug: true } })
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await db.blogPost.findUnique({ where: { slug: params.slug } })
  if (!post) return {}
  return {
    title: `${post.title} — Pacoticket`,
    description: post.excerpt,
    openGraph: post.coverImage ? { images: [post.coverImage] } : {},
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await db.blogPost.findUnique({ where: { slug: params.slug, published: true } })
  if (!post) notFound()

  return (
    <div className="site-body noise-overlay">
      <Nav />
      <article style={{ padding:'140px 0 80px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <Link href="/blog" style={{ fontSize:13, color:'var(--muted)', textDecoration:'none', display:'inline-block', marginBottom:24 }}>
            ← Blog
          </Link>
          <span style={{ display:'inline-block', fontSize:12, color:'var(--green)', fontWeight:600,
            marginBottom:12, textTransform:'uppercase', letterSpacing:'.05em' }}>
            {post.category}
          </span>
          <h1 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, marginBottom:24, letterSpacing:'-.02em' }}>
            {post.title}
          </h1>
          {post.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.coverImage} alt={post.title}
              style={{ width:'100%', borderRadius:16, border:'1px solid var(--border)', marginBottom:40, objectFit:'cover', maxHeight:400 }} />
          )}
          <div className="blog-content" style={{ color:'var(--sub)', fontSize:16, lineHeight:1.8 }}
            dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
      <Footer />
      <style>{`
        .blog-content h2 { font-family: var(--display); font-size: 28px; color: var(--text); margin: 40px 0 16px; }
        .blog-content h3 { font-family: var(--body); font-size: 20px; font-weight: 700; color: var(--text); margin: 28px 0 12px; }
        .blog-content p  { margin-bottom: 18px; }
        .blog-content ul, .blog-content ol { padding-left: 20px; margin-bottom: 18px; }
        .blog-content li { margin-bottom: 8px; }
        .blog-content strong { color: var(--text); }
        .blog-content a { color: var(--green); }
        .blog-content blockquote { border-left: 3px solid var(--green); padding-left: 20px; margin: 24px 0; color: var(--sub); font-style: italic; }
        .blog-content code { background: rgba(255,255,255,.06); padding: 2px 7px; border-radius: 4px; font-size: 14px; }
        .blog-content pre { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; overflow-x: auto; margin: 20px 0; }
      `}</style>
    </div>
  )
}
