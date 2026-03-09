// app/admin/screenshots/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import type { PageKey } from '@/lib/revalidate'

async function saveScreenshot(formData: FormData) {
  'use server'
  const page    = formData.get('page') as string
  const section = formData.get('section') as string
  const url     = (formData.get('url') as string).trim()
  const alt     = formData.get('alt') as string
  const caption = (formData.get('caption') as string).trim() || null

  if (!url) return

  await db.screenshot.upsert({
    where: { page_section: { page, section } },
    update: { url, alt, caption },
    create: { page, section, url, alt, caption },
  })

  const pageMap: Record<string, PageKey> = {
    home:'home', funcionalidades:'funcionalidades', flowbuilder:'flowbuilder',
    ia:'ia', api:'api', sobre:'sobre',
  }
  revalidatePages(pageMap[page] ?? 'home')
}

// All screenshot slots defined here — add new ones as needed
const SLOTS = [
  { page:'home',           section:'hero',         label:'Home — Painel principal (hero)',      alt:'Painel de chats do Pacoticket' },
  { page:'home',           section:'problema',     label:'Home — WhatsApp caótico (problema)',  alt:'WhatsApp desorganizado' },
  { page:'funcionalidades',section:'tickets',      label:'Funcionalidades — Painel de Chats',   alt:'Painel de tickets' },
  { page:'funcionalidades',section:'filas',        label:'Funcionalidades — Gestão de Filas',   alt:'Tela de filas' },
  { page:'funcionalidades',section:'kanban',       label:'Funcionalidades — Kanban de Tags',    alt:'Kanban de leads' },
  { page:'funcionalidades',section:'campanhas',    label:'Funcionalidades — Campanhas',         alt:'Configuração de campanha' },
  { page:'flowbuilder',    section:'builder',      label:'FlowBuilder — Canvas do builder',     alt:'Canvas de automação visual' },
  { page:'ia',             section:'transcricao',  label:'IA — Transcrição de áudio',           alt:'Transcrição automática no chat' },
  { page:'ia',             section:'analise',      label:'IA — Análise de atendimento',         alt:'Painel de análise de qualidade' },
  { page:'ia',             section:'gpt',          label:'IA — GPT Assistant',                  alt:'Configuração do assistente IA' },
  { page:'api',            section:'payload',      label:'API — Exemplo de payload',            alt:'Payload de webhook' },
  { page:'sobre',          section:'equipe',       label:'Sobre — Foto da equipe',              alt:'Equipe Pacoticket' },
]

export default async function ScreenshotsPage() {
  const screenshots = await db.screenshot.findMany()
  const screenshotMap = new Map(screenshots.map(s => [`${s.page}__${s.section}`, s]))

  // Group slots by page
  const pages = [...new Set(SLOTS.map(s => s.page))]

  return (
    <div>
      <div style={{ marginBottom:32 }}>
        <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Screenshots</h1>
        <p style={{ color:'#6B7C93', marginTop:4 }}>
          Cole a URL de cada imagem (hospede no R2, S3, ou qualquer CDN). Ao salvar, a página correspondente é reconstruída.
        </p>
      </div>

      {pages.map(page => {
        const slots = SLOTS.filter(s => s.page === page)
        return (
          <div key={page} style={{ marginBottom:32 }}>
            <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:700, marginBottom:16,
              textTransform:'capitalize' }}>
              {page === 'home' ? 'Home (index)' : page}
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {slots.map(slot => {
                const key = `${slot.page}__${slot.section}`
                const existing = screenshotMap.get(key)
                return (
                  <form key={key} action={saveScreenshot}
                    style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)',
                      borderRadius:12, padding:20 }}>
                    <input type="hidden" name="page" value={slot.page} />
                    <input type="hidden" name="section" value={slot.section} />
                    <div style={{ fontSize:13, fontWeight:600, color:'#9FAFC0', marginBottom:14 }}>{slot.label}</div>
                    <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr auto', gap:12, alignItems:'end' }}>
                      <div>
                        <label style={lS}>URL da imagem</label>
                        <input name="url" defaultValue={existing?.url ?? ''} placeholder="https://..." style={iS} />
                      </div>
                      <div>
                        <label style={lS}>Alt text</label>
                        <input name="alt" defaultValue={existing?.alt ?? slot.alt} style={iS} />
                      </div>
                      <div>
                        <label style={lS}>Legenda (opcional)</label>
                        <input name="caption" defaultValue={existing?.caption ?? ''} style={iS} />
                      </div>
                      <button type="submit" style={bS}>{existing ? 'Atualizar ✓' : 'Salvar'}</button>
                    </div>
                    {existing?.url && (
                      <div style={{ marginTop:12 }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={existing.url} alt={existing.alt}
                          style={{ maxHeight:80, borderRadius:8, border:'1px solid rgba(255,255,255,.1)', objectFit:'cover' }}
                          onError={() => {}} />
                      </div>
                    )}
                  </form>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const lS: React.CSSProperties = { fontSize:11, color:'#9FAFC0', display:'block', marginBottom:5, textTransform:'uppercase', letterSpacing:'.04em' }
const iS: React.CSSProperties = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'9px 11px', color:'#EEF1F5', fontSize:13, outline:'none', fontFamily:'DM Sans,sans-serif', boxSizing:'border-box' }
const bS: React.CSSProperties = { background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'9px 16px', fontSize:13, color:'#EEF1F5', cursor:'pointer', whiteSpace:'nowrap' }
