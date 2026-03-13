// app/admin/metricas/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { redirect } from 'next/navigation'

async function updateMetric(formData: FormData) {
  'use server'
  const key    = formData.get('key') as string
  const value  = formData.get('value') as string
  const suffix = formData.get('suffix') as string
  const label  = `${value} ${suffix}`.trim()
  try {
    await db.siteMetric.update({ where: { key }, data: { value, suffix, label } })
    revalidatePages('home')
  } catch (e) {
    console.error('[updateMetric] falha:', e)
    redirect('/admin/metricas?error=1')
  }
}

export default async function MetricasPage({ searchParams }: { searchParams: { error?: string } }) {
  const metrics = await db.siteMetric.findMany({ orderBy: { order: 'asc' } })

  const DESCRIPTIONS: Record<string, string> = {
    companies:     'Número de empresas usando o Pacoticket. Aparece na barra de números da home.',
    tickets_month: 'Volume de tickets processados por mês.',
    setup_minutes: 'Tempo médio para configurar e começar a usar.',
    channels:      'Quantos canais estão disponíveis (WhatsApp, Instagram, Telegram, etc.).',
  }

  return (
    <div>
      {searchParams.error && (
        <div style={{ background:'rgba(255,59,48,.1)', border:'1px solid rgba(255,59,48,.2)', borderRadius:10,
          padding:'12px 16px', marginBottom:24, fontSize:14, color:'#ff6b6b' }}>
          Erro ao salvar. Verifique os dados e tente novamente.
        </div>
      )}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:32 }}>
        <div>
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Métricas do Site</h1>
          <p style={{ color:'#6B7C93', marginTop:4 }}>Barra de números na home. Ao salvar, home é reconstruída.</p>
        </div>
        <a href="/" target="_blank" style={{ fontSize:13, color:'#00D170', textDecoration:'none',
          padding:'8px 16px', background:'rgba(0,209,112,.08)', borderRadius:100, border:'1px solid rgba(0,209,112,.2)' }}>
          Preview home ↗
        </a>
      </div>

      {/* Preview */}
      <div style={{ background:'rgba(0,209,112,.05)', border:'1px solid rgba(0,209,112,.15)', borderRadius:12,
        padding:24, marginBottom:32, display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, textAlign:'center' }}>
        {metrics.map(m => (
          <div key={m.key}>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:32, fontWeight:800, color:'#00D170' }}>{m.value}</div>
            <div style={{ fontSize:13, color:'#9FAFC0', marginTop:4 }}>{m.suffix}</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize:13, color:'#6B7C93', marginBottom:32, textAlign:'center' }}>↑ Preview em tempo real</p>

      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        {metrics.map(m => (
          <form key={m.key} action={updateMetric}
            style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)',
              borderRadius:12, padding:24 }}>
            <input type="hidden" name="key" value={m.key} />
            <div style={{ fontSize:13, color:'#6B7C93', marginBottom:16 }}>{DESCRIPTIONS[m.key]}</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr auto', gap:16, alignItems:'end' }}>
              <div>
                <label style={lS}>Valor (ex: +3.200, 5, 99%)</label>
                <input name="value" defaultValue={m.value} style={iS} />
              </div>
              <div>
                <label style={lS}>Sufixo / descrição</label>
                <input name="suffix" defaultValue={m.suffix} style={iS} />
              </div>
              <button type="submit" style={bS}>Salvar ✓</button>
            </div>
          </form>
        ))}
      </div>
    </div>
  )
}

const lS: React.CSSProperties = { fontSize:12, color:'#9FAFC0', display:'block', marginBottom:6, textTransform:'uppercase', letterSpacing:'.04em' }
const iS: React.CSSProperties = { width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 12px', color:'#EEF1F5', fontSize:14, outline:'none', fontFamily:'DM Sans,sans-serif', boxSizing:'border-box' }
const bS: React.CSSProperties = { background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', borderRadius:8, padding:'10px 20px', fontSize:13, color:'#EEF1F5', cursor:'pointer', whiteSpace:'nowrap', alignSelf:'flex-end' }
