// app/admin/planos/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { redirect } from 'next/navigation'

// ── Server Actions ───────────────────────────────────────────────────────────

async function updatePlan(formData: FormData) {
  'use server'
  const id      = formData.get('id') as string
  const price   = (formData.get('price') as string).trim() || null
  const period  = (formData.get('period') as string).trim() || null
  const badge   = (formData.get('badge') as string).trim() || null
  const ctaLabel = formData.get('ctaLabel') as string
  const ctaUrl   = formData.get('ctaUrl') as string
  const highlighted = formData.get('highlighted') === 'on'
  const published   = formData.get('published') === 'on'

  try {
    await db.plan.update({ where: { id }, data: { price, period, badge, ctaLabel, ctaUrl, highlighted, published } })
    revalidatePages('precos', 'home')
  } catch (e) {
    console.error('[updatePlan] falha:', e)
    redirect('/admin/planos?error=1')
  }
}

async function updateFeature(formData: FormData) {
  'use server'
  const id       = formData.get('id') as string
  const text     = formData.get('text') as string
  const included = formData.get('included') === 'on'
  try {
    await db.planFeature.update({ where: { id }, data: { text, included } })
    revalidatePages('precos')
  } catch (e) {
    console.error('[updateFeature] falha:', e)
    redirect('/admin/planos?error=1')
  }
}

async function addFeature(formData: FormData) {
  'use server'
  const planId = formData.get('planId') as string
  const text   = formData.get('text') as string
  if (!text.trim()) return
  try {
    const count = await db.planFeature.count({ where: { planId } })
    await db.planFeature.create({ data: { planId, text, included: true, order: count } })
    revalidatePages('precos')
  } catch (e) {
    console.error('[addFeature] falha:', e)
    redirect('/admin/planos?error=1')
  }
}

async function deleteFeature(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  try {
    await db.planFeature.delete({ where: { id } })
    revalidatePages('precos')
  } catch (e) {
    console.error('[deleteFeature] falha:', e)
    redirect('/admin/planos?error=1')
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function PlanosPage({ searchParams }: { searchParams: { error?: string } }) {
  const plans = await db.plan.findMany({
    include: { features: { orderBy: { order: 'asc' } } },
    orderBy: { order: 'asc' },
  })

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
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Planos de Preço</h1>
          <p style={{ color:'#6B7C93', marginTop:4 }}>
            Ao salvar, a página /precos é reconstruída automaticamente.
          </p>
        </div>
        <a href="/precos" target="_blank" rel="noreferrer"
          style={{ fontSize:13, color:'#00D170', textDecoration:'none', padding:'8px 16px',
            background:'rgba(0,209,112,.08)', borderRadius:100, border:'1px solid rgba(0,209,112,.2)' }}>
          Preview ↗
        </a>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
        {plans.map(plan => (
          <div key={plan.id} style={{ background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)',
            borderRadius:14, overflow:'hidden' }}>
            {/* Plan header */}
            <div style={{ padding:'20px 24px', borderBottom:'1px solid rgba(255,255,255,.06)',
              display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div style={{ fontFamily:'Syne,sans-serif', fontSize:18, fontWeight:700 }}>{plan.name}</div>
              {plan.highlighted && <span style={{ fontSize:12, color:'#00D170', background:'rgba(0,209,112,.1)',
                padding:'3px 10px', borderRadius:100, border:'1px solid rgba(0,209,112,.2)' }}>Destacado</span>}
            </div>

            {/* Plan form */}
            <form action={updatePlan} style={{ padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <input type="hidden" name="id" value={plan.id} />

              <Field label="Preço (ex: R$ 197 — deixe vazio para &quot;Sob consulta&quot;)">
                <input name="price" defaultValue={plan.price ?? ''} placeholder="R$ 197" style={inputStyle} />
              </Field>
              <Field label="Período (ex: /mês · cobrado mensalmente)">
                <input name="period" defaultValue={plan.period ?? ''} style={inputStyle} />
              </Field>
              <Field label="Badge (ex: Mais popular — deixe vazio para nenhum)">
                <input name="badge" defaultValue={plan.badge ?? ''} placeholder="Mais popular" style={inputStyle} />
              </Field>
              <Field label="Label do botão CTA">
                <input name="ctaLabel" defaultValue={plan.ctaLabel} style={inputStyle} />
              </Field>
              <Field label="URL do botão CTA" cols={2}>
                <input name="ctaUrl" defaultValue={plan.ctaUrl} style={inputStyle} />
              </Field>

              <div style={{ display:'flex', gap:24 }}>
                <label style={{ display:'flex', gap:8, alignItems:'center', fontSize:14, color:'#9FAFC0', cursor:'pointer' }}>
                  <input type="checkbox" name="highlighted" defaultChecked={plan.highlighted} />
                  Plano em destaque
                </label>
                <label style={{ display:'flex', gap:8, alignItems:'center', fontSize:14, color:'#9FAFC0', cursor:'pointer' }}>
                  <input type="checkbox" name="published" defaultChecked={plan.published} />
                  Publicado
                </label>
              </div>

              <div style={{ display:'flex', justifyContent:'flex-end' }}>
                <SaveBtn />
              </div>
            </form>

            {/* Features */}
            <div style={{ padding:'0 24px 24px' }}>
              <div style={{ fontSize:13, color:'#9FAFC0', marginBottom:12, textTransform:'uppercase', letterSpacing:'.05em' }}>
                Features ({plan.features.length})
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {plan.features.map(f => (
                  <form key={f.id} action={updateFeature}
                    style={{ display:'flex', gap:8, alignItems:'center' }}>
                    <input type="hidden" name="id" value={f.id} />
                    <input name="text" defaultValue={f.text} style={{ ...inputStyle, flex:1 }} />
                    <label style={{ display:'flex', gap:6, alignItems:'center', fontSize:13, color:'#9FAFC0',
                      whiteSpace:'nowrap', cursor:'pointer' }}>
                      <input type="checkbox" name="included" defaultChecked={f.included} />
                      Incluído
                    </label>
                    <button type="submit" style={saveBtnStyle}>Salvar</button>
                    <form action={deleteFeature}>
                      <input type="hidden" name="id" value={f.id} />
                      <button type="submit" style={{ ...saveBtnStyle, background:'rgba(255,59,48,.1)',
                        borderColor:'rgba(255,59,48,.2)', color:'#ff6b6b' }}>✕</button>
                    </form>
                  </form>
                ))}

                {/* Add feature */}
                <form action={addFeature} style={{ display:'flex', gap:8, marginTop:8 }}>
                  <input type="hidden" name="planId" value={plan.id} />
                  <input name="text" placeholder="+ Nova feature" style={{ ...inputStyle, flex:1 }} />
                  <button type="submit" style={{ ...saveBtnStyle, background:'rgba(0,209,112,.1)',
                    borderColor:'rgba(0,209,112,.2)', color:'#00D170' }}>Adicionar</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function Field({ label, children, cols=1 }: { label:string; children:React.ReactNode; cols?:number }) {
  return (
    <div style={{ gridColumn: cols === 2 ? 'span 2' : 'span 1' }}>
      <label style={{ fontSize:12, color:'#9FAFC0', display:'block', marginBottom:6,
        textTransform:'uppercase', letterSpacing:'.04em' }}
        dangerouslySetInnerHTML={{ __html: label }} />
      {children}
    </div>
  )
}

function SaveBtn() {
  return (
    <button type="submit" style={saveBtnStyle}>
      Salvar plano ✓
    </button>
  )
}

const inputStyle: React.CSSProperties = {
  width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)',
  borderRadius:8, padding:'10px 12px', color:'#EEF1F5', fontSize:14, outline:'none',
  fontFamily:'DM Sans,sans-serif', boxSizing:'border-box',
}

const saveBtnStyle: React.CSSProperties = {
  background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)',
  borderRadius:8, padding:'10px 16px', fontSize:13, color:'#EEF1F5',
  cursor:'pointer', whiteSpace:'nowrap',
}
