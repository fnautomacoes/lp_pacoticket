// app/admin/login/page.tsx
'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(''); setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.ok) router.push('/admin')
    else setError('Email ou senha incorretos.')
  }

  return (
    <div style={{ minHeight:'100vh', background:'#0a0f14', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ width:400, background:'#0f1520', border:'1px solid rgba(255,255,255,.08)', borderRadius:16, padding:40 }}>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:22, fontWeight:800, color:'#EEF1F5', marginBottom:8 }}>
          Paco<span style={{ color:'#00D170' }}>ticket</span>
        </div>
        <div style={{ fontSize:14, color:'#6B7C93', marginBottom:32 }}>Área administrativa</div>

        {error && (
          <div style={{ background:'rgba(255,59,48,.1)', border:'1px solid rgba(255,59,48,.2)',
            borderRadius:8, padding:'12px 16px', fontSize:14, color:'#ff6b6b', marginBottom:20 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <div>
            <label style={{ fontSize:13, color:'#9FAFC0', display:'block', marginBottom:6 }}>Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)',
                borderRadius:8, padding:'12px 14px', color:'#EEF1F5', fontSize:14, outline:'none',
                boxSizing:'border-box' }}
            />
          </div>
          <div>
            <label style={{ fontSize:13, color:'#9FAFC0', display:'block', marginBottom:6 }}>Senha</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(255,255,255,.1)',
                borderRadius:8, padding:'12px 14px', color:'#EEF1F5', fontSize:14, outline:'none',
                boxSizing:'border-box' }}
            />
          </div>
          <button type="submit" disabled={loading}
            style={{ background:'#00D170', color:'#000', border:'none', borderRadius:100,
              padding:'14px 0', fontWeight:700, fontSize:15, cursor:'pointer',
              opacity: loading ? .6 : 1, marginTop:8 }}>
            {loading ? 'Entrando...' : '→ Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
