// app/admin/analytics/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'

async function saveAnalytics(formData: FormData) {
  'use server'
  const ga_id         = (formData.get('ga_id') as string).trim()
  const meta_pixel_id = (formData.get('meta_pixel_id') as string).trim()

  await db.siteConfig.upsert({ where:{key:'ga_id'},         update:{value:ga_id},         create:{key:'ga_id',value:ga_id} })
  await db.siteConfig.upsert({ where:{key:'meta_pixel_id'}, update:{value:meta_pixel_id}, create:{key:'meta_pixel_id',value:meta_pixel_id} })

  // Rebuild all pages so the scripts are included
  revalidatePages('all')
}

async function saveSiteLinks(formData: FormData) {
  'use server'
  const fields = ['favicon_url','whatsapp_cta','app_url','help_url','demo_url']
  for (const key of fields) {
    const value = (formData.get(key) as string).trim()
    await db.siteConfig.upsert({ where:{key}, update:{value}, create:{key,value} })
  }
  revalidatePages('all')
}

export default async function AnalyticsPage() {
  const configs = await db.siteConfig.findMany()
  const get = (key: string) => configs.find(c => c.key === key)?.value ?? ''

  return (
    <div>
      <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800, marginBottom:4 }}>Analytics & Config Global</h1>
      <p style={{ color:'#6B7C93', marginBottom:32 }}>Scripts e links globais — ao salvar, todas as páginas são reconstruídas.</p>

      {/* Analytics */}
      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', borderRadius:14, marginBottom:24 }}>
        <div style={{ padding:'16px 24px', borderBottom:'1px solid rgba(255,255,255,.06)', fontWeight:700, fontSize:16 }}>
          📈 Scripts de Analytics
        </div>
        <form action={saveAnalytics} style={{ padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          <div>
            <label style={lS}>Google Analytics 4 — Measurement ID</label>
            <input name="ga_id" defaultValue={get('ga_id')} placeholder="G-XXXXXXXXXX" style={iS} />
            <div style={{ fontSize:12, color:'#6B7C93', marginTop:6 }}>
              Deixe vazio para não incluir. Encontre em GA4 → Admin → Data Streams.
            </div>
          </div>
          <div>
            <label style={lS}>Meta Pixel ID</label>
            <input name="meta_pixel_id" defaultValue={get('meta_pixel_id')} placeholder="000000000000000" style={iS} />
            <div style={{ fontSize:12, color:'#6B7C93', marginTop:6 }}>
              Encontre em Meta Business Suite → Events Manager → Pixel.
            </div>
          </div>
          <div style={{ gridColumn:'span 2', display:'flex', justifyContent:'flex-end', gap:8 }}>
            {get('ga_id') && (
              <span style={{ fontSize:12, color:'#00D170', padding:'4px 10px', background:'rgba(0,209,112,.1)',
                borderRadius:100, border:'1px solid rgba(0,209,112,.2)', alignSelf:'center' }}>
                GA4 ativo
              </span>
            )}
            {get('meta_pixel_id') && (
              <span style={{ fontSize:12, color:'#3B9EFF', padding:'4px 10px', background:'rgba(59,158,255,.1)',
                borderRadius:100, border:'1px solid rgba(59,158,255,.2)', alignSelf:'center' }}>
                Meta Pixel ativo
              </span>
            )}
            <button type="submit" style={bS}>Salvar e publicar em todo o site ✓</button>
          </div>
        </form>
      </div>

      {/* Site links */}
      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', borderRadius:14 }}>
        <div style={{ padding:'16px 24px', borderBottom:'1px solid rgba(255,255,255,.06)', fontWeight:700, fontSize:16 }}>
          🔗 Links globais do site
        </div>
        <form action={saveSiteLinks} style={{ padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          <div>
            <label style={lS}>URL do Favicon</label>
            <input name="favicon_url" defaultValue={get('favicon_url')} placeholder="/favicon.ico" style={iS} />
          </div>
          <div>
            <label style={lS}>Número WhatsApp CTA (só dígitos, com DDI)</label>
            <input name="whatsapp_cta" defaultValue={get('whatsapp_cta')} placeholder="5535997082991" style={iS} />
          </div>
          <div>
            <label style={lS}>URL do App</label>
            <input name="app_url" defaultValue={get('app_url')} style={iS} />
          </div>
          <div>
            <label style={lS}>URL da Central de Ajuda</label>
            <input name="help_url" defaultValue={get('help_url')} style={iS} />
          </div>
          <div style={{ gridColumn:'span 2' }}>
            <label style={lS}>URL de agendamento de demo</label>
            <input name="demo_url" defaultValue={get('demo_url')} style={iS} />
          </div>
          <div style={{ gridColumn:'span 2', display:'flex', justifyContent:'flex-end' }}>
            <button type="submit" style={bS}>Salvar links globais ✓</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const lS: React.CSSProperties = { fontSize:12, color:'#9FAFC0', display:'block', marginBottom:6, textTransform:'uppercase', letterSpacing:'.04em' }
const iS: React.CSSProperties = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 12px', color:'#EEF1F5', fontSize:14, outline:'none', fontFamily:'DM Sans,sans-serif', boxSizing:'border-box' }
const bS: React.CSSProperties = { background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 20px', fontSize:13, color:'#EEF1F5', cursor:'pointer' }
