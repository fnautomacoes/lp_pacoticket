// app/admin/depoimentos/page.tsx
import { db } from '@/lib/db'
import { revalidatePages } from '@/lib/revalidate'
import { redirect } from 'next/navigation'

async function saveTestimonial(formData: FormData) {
  'use server'
  const id       = formData.get('id') as string | null
  const author   = formData.get('author') as string
  const role     = formData.get('role') as string
  const content  = formData.get('content') as string
  const avatarBg = formData.get('avatarBg') as string
  const avatarInitials = formData.get('avatarInitials') as string
  const published = formData.get('published') === 'on'
  const order    = parseInt(formData.get('order') as string) || 0

  try {
    if (id) {
      await db.testimonial.update({ where: { id }, data: { author, role, content, avatarBg, avatarInitials, published, order } })
    } else {
      // Compute MAX(order)+1 server-side to avoid collisions when testimonials are deleted
      const agg = await db.testimonial.aggregate({ _max: { order: true } })
      const nextOrder = (agg._max.order ?? -1) + 1
      await db.testimonial.create({ data: { author, role, content, avatarBg, avatarInitials, published, order: nextOrder } })
    }
    revalidatePages('home')
  } catch (e) {
    console.error('[saveTestimonial] falha:', e)
    redirect('/admin/depoimentos?error=1')
  }
}

async function deleteTestimonial(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  try {
    await db.testimonial.delete({ where: { id } })
    revalidatePages('home')
  } catch (e) {
    console.error('[deleteTestimonial] falha:', e)
    redirect('/admin/depoimentos?error=1')
  }
}

export default async function DepoimentosPage({ searchParams }: { searchParams: { error?: string } }) {
  const testimonials = await db.testimonial.findMany({ orderBy: { order: 'asc' } })

  return (
    <div>
      {searchParams.error && (
        <div className="admin-error">Erro ao salvar. Verifique os dados e tente novamente.</div>
      )}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start', marginBottom:32 }}>
        <div>
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800 }}>Depoimentos</h1>
          <p style={{ color:'var(--muted)', marginTop:4 }}>Aparecem na seção de depoimentos da home. Ao salvar, home é reconstruída.</p>
        </div>
        <a href="/" target="_blank" className="admin-pill-green">Preview home ↗</a>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
        {/* Existing testimonials */}
        {testimonials.map(t => (
          <div key={t.id} className="admin-card">
            <form action={saveTestimonial} style={{ padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <input type="hidden" name="id" value={t.id} />
              <F label="Nome do cliente">
                <input name="author" defaultValue={t.author} className="admin-input" />
              </F>
              <F label="Cargo / empresa">
                <input name="role" defaultValue={t.role} className="admin-input" />
              </F>
              <F label="Depoimento" cols={2}>
                <textarea name="content" defaultValue={t.content} rows={3} className="admin-input" style={{ resize:'vertical' }} />
              </F>
              <F label="Cor do avatar (hex)">
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <input name="avatarBg" defaultValue={t.avatarBg} className="admin-input" style={{ flex:1 }} />
                  <div style={{ width:32, height:32, borderRadius:'50%', background:t.avatarBg, flexShrink:0 }} />
                </div>
              </F>
              <F label="Iniciais do avatar">
                <input name="avatarInitials" defaultValue={t.avatarInitials} maxLength={2} className="admin-input" />
              </F>
              <F label="Ordem">
                <input name="order" type="number" defaultValue={t.order} className="admin-input" />
              </F>
              <div style={{ display:'flex', gap:16, alignItems:'center' }}>
                <label style={{ display:'flex', gap:8, alignItems:'center', fontSize:14, color:'var(--sub)', cursor:'pointer' }}>
                  <input type="checkbox" name="published" defaultChecked={t.published} />
                  Publicado
                </label>
              </div>
              <div style={{ display:'flex', gap:8, justifyContent:'flex-end' }}>
                <form action={deleteTestimonial}>
                  <input type="hidden" name="id" value={t.id} />
                  <button type="submit" className="admin-btn admin-btn-red">Excluir</button>
                </form>
                <button type="submit" className="admin-btn">Salvar ✓</button>
              </div>
            </form>
          </div>
        ))}

        {/* New testimonial */}
        <div style={{ background:'rgba(0,209,112,.03)', border:'1px dashed rgba(0,209,112,.2)', borderRadius:14 }}>
          <div style={{ padding:'16px 24px', borderBottom:'1px dashed rgba(0,209,112,.1)', fontSize:14, fontWeight:600, color:'var(--green)' }}>
            + Novo depoimento
          </div>
          <form action={saveTestimonial} style={{ padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
            <F label="Nome do cliente">
              <input name="author" placeholder="Ana Silva" className="admin-input" required />
            </F>
            <F label="Cargo / empresa">
              <input name="role" placeholder="Proprietária · Clínica XYZ" className="admin-input" required />
            </F>
            <F label="Depoimento" cols={2}>
              <textarea name="content" placeholder="O que o cliente disse..." rows={3} className="admin-input" style={{ resize:'vertical' }} required />
            </F>
            <F label="Cor do avatar (hex)">
              <input name="avatarBg" defaultValue="#1A2B3C" className="admin-input" />
            </F>
            <F label="Iniciais">
              <input name="avatarInitials" placeholder="AS" maxLength={2} className="admin-input" />
            </F>
            <div style={{ display:'flex', gap:16, alignItems:'center' }}>
              <label style={{ display:'flex', gap:8, alignItems:'center', fontSize:14, color:'var(--sub)', cursor:'pointer' }}>
                <input type="checkbox" name="published" defaultChecked={true} />
                Publicado
              </label>
            </div>
            <div style={{ display:'flex', justifyContent:'flex-end' }}>
              <button type="submit" className="admin-btn admin-btn-green">Adicionar depoimento</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function F({ label, children, cols=1 }: { label:string; children:React.ReactNode; cols?:number }) {
  return (
    <div style={{ gridColumn: cols === 2 ? 'span 2' : 'span 1' }}>
      <label className="admin-label">{label}</label>
      {children}
    </div>
  )
}
