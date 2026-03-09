// app/admin/seo/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import type { PageKey } from '@/lib/revalidate'

async function updateSeo(formData: FormData) {
  'use server'
  const page        = formData.get('page') as string
  const title       = formData.get('title') as string
  const description = formData.get('description') as string
  const ogImage     = (formData.get('ogImage') as string).trim() || null

  await db.pageSeo.upsert({
    where: { page },
    update: { title, description, ogImage },
    create: { page, title, description, ogImage },
  })
  revalidatePages((page === 'home' ? 'home' : page) as PageKey)
}

export default async function SeoPage() {
  const seoList = await db.pageSeo.findMany({ orderBy: { page: 'asc' } })

  const PAGE_LABELS: Record<string, string> = {
    home:'Home (index)','precos':'Preços','funcionalidades':'Funcionalidades',
    'flowbuilder':'FlowBuilder','ia':'Inteligência Artificial','integracoes':'Integrações',
    'api':'API & Webhooks','sobre':'Sobre','blog':'Blog','parceiros':'Parceiros',
    'afiliados':'Afiliados','contato':'Contato','primeiros-passos':'Primeiros Passos',
    'status':'Status','privacidade':'Privacidade','termos':'Termos de Uso','docs':'Documentação',
  }

  return (
    <div>
      <div style={{ marginBottom:32 }}>
        <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>SEO por Página</h1>
        <p style={{ color:'#6B7C93', marginTop:4 }}>
          Title, description e imagem Open Graph para cada página. Ao salvar, a página é reconstruída.
        </p>
      </div>

      <div style={{ marginBottom:16, padding:'12px 16px', background:'rgba(59,158,255,.06)',
        border:'1px solid rgba(59,158,255,.15)', borderRadius:10, fontSize:13, color:'#9FAFC0' }}>
        💡 O title ideal tem entre 50–60 caracteres. A description entre 120–155 caracteres.
        A OG Image deve ter 1200×630px.
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        {seoList.map(seo => (
          <form key={seo.page} action={updateSeo}
            style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', borderRadius:12, padding:24 }}>
            <input type="hidden" name="page" value={seo.page} />
            <div style={{ fontSize:14, fontWeight:600, marginBottom:16, color:'#EEF1F5' }}>
              {PAGE_LABELS[seo.page] ?? seo.page}
              <span style={{ fontSize:12, color:'#6B7C93', marginLeft:8 }}>/{seo.page === 'home' ? '' : seo.page}</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12 }}>
              <div>
                <label style={lS}>Title <CharCount str={seo.title} max={60} /></label>
                <input name="title" defaultValue={seo.title} style={iS} />
              </div>
              <div>
                <label style={lS}>OG Image URL (1200×630)</label>
                <input name="ogImage" defaultValue={seo.ogImage ?? ''} placeholder="https://..." style={iS} />
              </div>
            </div>
            <div style={{ marginBottom:12 }}>
              <label style={lS}>Description <CharCount str={seo.description} max={155} /></label>
              <textarea name="description" defaultValue={seo.description} rows={2} style={{ ...iS, resize:'vertical' }} />
            </div>
            <div style={{ display:'flex', justifyContent:'flex-end' }}>
              <button type="submit" style={bS}>Salvar SEO ✓</button>
            </div>
          </form>
        ))}
      </div>
    </div>
  )
}

function CharCount({ str, max }: { str: string; max: number }) {
  const len = str?.length ?? 0
  const over = len > max
  return (
    <span style={{ fontSize:11, marginLeft:6, color: over ? '#ff6b6b' : '#6B7C93' }}>
      {len}/{max}
    </span>
  )
}

const lS: React.CSSProperties = { fontSize:11, color:'#9FAFC0', display:'block', marginBottom:5, textTransform:'uppercase', letterSpacing:'.04em' }
const iS: React.CSSProperties = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'9px 11px', color:'#EEF1F5', fontSize:13, outline:'none', fontFamily:'DM Sans,sans-serif', boxSizing:'border-box' }
const bS: React.CSSProperties = { background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 20px', fontSize:13, color:'#EEF1F5', cursor:'pointer' }
