// app/admin/screenshots/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { redirect } from 'next/navigation'
import type { PageKey } from '@/lib/revalidate'
import ImageUpload from '@/components/admin/ImageUpload'

async function saveScreenshot(formData: FormData) {
  'use server'
  const page    = formData.get('page') as string
  const section = formData.get('section') as string
  const url     = (formData.get('url') as string).trim()
  const alt     = formData.get('alt') as string
  const caption = (formData.get('caption') as string).trim() || null

  if (!url) return

  try {
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
  } catch (e) {
    console.error('[saveScreenshot] falha:', e)
    redirect('/admin/screenshots?error=1')
  }
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

export default async function ScreenshotsPage({ searchParams }: { searchParams: { error?: string } }) {
  const screenshots = await db.screenshot.findMany()
  const screenshotMap = new Map(screenshots.map(s => [`${s.page}__${s.section}`, s]))
  const r2Enabled = !!process.env.R2_PUBLIC_URL

  // Group slots by page
  const pages = Array.from(new Set(SLOTS.map(s => s.page)))

  return (
    <div>
      {searchParams.error && (
        <div className="admin-error">Erro ao salvar screenshot. Tente novamente.</div>
      )}
      <div style={{ marginBottom:32 }}>
        <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Screenshots</h1>
        <p style={{ color:'var(--muted)', marginTop:4 }}>
          {r2Enabled
            ? 'Faça upload direto ou cole uma URL. Ao salvar, a página correspondente é reconstruída.'
            : 'Cole a URL de cada imagem (hospede no R2, S3, ou qualquer CDN). Configure R2_PUBLIC_URL para habilitar upload direto.'}
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
                  <form key={key} action={saveScreenshot} className="admin-card" style={{ padding:20 }}>
                    <input type="hidden" name="page" value={slot.page} />
                    <input type="hidden" name="section" value={slot.section} />
                    <div style={{ fontSize:13, fontWeight:600, color:'var(--sub)', marginBottom:14 }}>{slot.label}</div>
                    <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr auto', gap:12, alignItems:'end' }}>
                      <div>
                        <label className="admin-label" style={{ fontSize:11 }}>URL / upload</label>
                        <ImageUpload name="url" defaultValue={existing?.url} r2Enabled={r2Enabled} />
                      </div>
                      <div>
                        <label className="admin-label" style={{ fontSize:11 }}>Alt text</label>
                        <input name="alt" defaultValue={existing?.alt ?? slot.alt} className="admin-input" style={{ fontSize:13, padding:'9px 11px' }} />
                      </div>
                      <div>
                        <label className="admin-label" style={{ fontSize:11 }}>Legenda (opcional)</label>
                        <input name="caption" defaultValue={existing?.caption ?? ''} className="admin-input" style={{ fontSize:13, padding:'9px 11px' }} />
                      </div>
                      <button type="submit" className="admin-btn" style={{ padding:'9px 16px', fontSize:13 }}>
                        {existing ? 'Atualizar ✓' : 'Salvar'}
                      </button>
                    </div>
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
