// app/privacidade/page.tsx
// ATENÇÃO: Este texto é juridicamente vinculante. Não alterar sem validação legal.
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Política de Privacidade — Pacoticket',
  description: 'Política de Privacidade da plataforma Pacoticket.',
}

export default function PrivacidadePage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <article style={{ padding:'140px 0 80px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <h1 style={{ fontSize:'clamp(28px,4vw,40px)', fontWeight:800, marginBottom:8, letterSpacing:'-.02em' }}>
            Política de Privacidade
          </h1>
          <p style={{ color:'var(--muted)', fontSize:14, marginBottom:48 }}>
            Última atualização: Janeiro de 2025
          </p>

          <div style={{ color:'var(--sub)', fontSize:16, lineHeight:1.8, display:'flex', flexDirection:'column', gap:32 }}>
            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                1. Informações que coletamos
              </h2>
              <p>Coletamos informações necessárias para fornecer e melhorar nossos serviços, incluindo dados de conta, informações de uso da plataforma e dados técnicos do dispositivo.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                2. Como usamos suas informações
              </h2>
              <p>Utilizamos suas informações para operar a plataforma, fornecer suporte técnico, melhorar nossos serviços e cumprir obrigações legais.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                3. Compartilhamento de dados
              </h2>
              <p>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. Podemos compartilhar dados com prestadores de serviço que nos auxiliam na operação da plataforma.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                4. Segurança dos dados
              </h2>
              <p>Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou destruição.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                5. Seus direitos (LGPD)
              </h2>
              <p>Nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem direito a: acessar, corrigir, excluir e portar seus dados, além de revogar consentimento a qualquer momento. Para exercer esses direitos, entre em contato via <a href="/contato" style={{ color:'var(--green)' }}>nossa página de contato</a>.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                6. Contato
              </h2>
              <p>Para dúvidas sobre esta política ou sobre o tratamento de seus dados, entre em contato pelo nosso <a href="/contato" style={{ color:'var(--green)' }}>formulário de contato</a>.</p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
