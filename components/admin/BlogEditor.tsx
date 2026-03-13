'use client'
// components/admin/BlogEditor.tsx
// Rich markdown editor for blog posts (client component).
// Wraps @uiw/react-md-editor and feeds the markdown value into a hidden
// textarea so the existing Server Action receives it unchanged.

import dynamic from 'next/dynamic'
import { useState } from 'react'
import type { BlogPost } from '@prisma/client'
import ImageUpload from './ImageUpload'

// SSR must be disabled for the markdown editor (it uses browser APIs)
const MDEditor = dynamic(() => import('@uiw/react-md-editor').then(m => m.default), { ssr: false })

const CATEGORIES = [
  'WhatsApp Business',
  'Automação',
  'Cases e resultados',
  'Inteligência Artificial',
  'Tutoriais',
]

interface Props {
  post: BlogPost
  r2Enabled: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  savePost: (formData: FormData) => Promise<any>
}

export default function BlogEditor({ post, r2Enabled, savePost }: Props) {
  const [content, setContent] = useState(post.content)

  return (
    <form action={savePost} style={{ display:'flex', flexDirection:'column', gap:20 }}>
      <input type="hidden" name="id" value={post.id} />
      {/* hidden textarea carries the markdown/html value to the Server Action */}
      <textarea name="content" value={content} onChange={() => {}} style={{ display:'none' }} readOnly />

      <div style={{ display:'grid', gridTemplateColumns:'3fr 1fr', gap:16 }}>
        <div>
          <label className="admin-label">Título</label>
          <input name="title" defaultValue={post.title} className="admin-input" style={{ fontSize:18, fontWeight:600 }} required />
        </div>
        <div>
          <label className="admin-label">Emoji de capa</label>
          <input name="coverEmoji" defaultValue={post.coverEmoji} maxLength={4} className="admin-input" />
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>
        <div>
          <label className="admin-label">Imagem de capa (opcional)</label>
          <ImageUpload name="coverImage" defaultValue={post.coverImage} r2Enabled={r2Enabled} />
        </div>
        <div>
          <label className="admin-label">Categoria</label>
          <select name="category" defaultValue={post.category} className="admin-input" style={{ cursor:'pointer' }}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="admin-label">Resumo (excerpt — aparece na listagem do blog)</label>
        <textarea name="excerpt" defaultValue={post.excerpt} rows={2} className="admin-input" style={{ resize:'vertical' }} />
      </div>

      <div data-color-mode="dark">
        <label className="admin-label" style={{ marginBottom:10 }}>Conteúdo (Markdown)</label>
        <MDEditor
          value={content}
          onChange={v => setContent(v ?? '')}
          height={480}
          style={{ borderRadius:8, border:'1px solid rgba(255,255,255,.1)' }}
        />
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 0',
        borderTop:'1px solid rgba(255,255,255,.07)' }}>
        <label style={{ display:'flex', gap:10, alignItems:'center', fontSize:14, color:'var(--sub)', cursor:'pointer' }}>
          <input type="checkbox" name="published" defaultChecked={post.published} />
          Publicado (visível no site)
        </label>
        <button type="submit" className="admin-btn admin-btn-green" style={{ fontSize:15, padding:'12px 24px' }}>
          Salvar post ✓
        </button>
      </div>
    </form>
  )
}
