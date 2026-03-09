// app/termos/page.tsx
// ATENÇÃO: Este texto é juridicamente vinculante. Não alterar sem validação legal.
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import { Metadata } from 'next'

export const revalidate = false

export const metadata: Metadata = {
  title: 'Termos de Uso — Pacoticket',
  description: 'Termos de Uso da plataforma Pacoticket.',
}

export default function TermosPage() {
  return (
    <div className="site-body noise-overlay">
      <Nav />
      <article style={{ padding:'140px 0 80px' }}>
        <div style={{ maxWidth:760, margin:'0 auto', padding:'0 24px' }}>
          <h1 style={{ fontSize:'clamp(28px,4vw,40px)', fontWeight:800, marginBottom:8, letterSpacing:'-.02em' }}>
            Termos de Uso
          </h1>
          <p style={{ color:'var(--muted)', fontSize:14, marginBottom:48 }}>
            Última atualização: Janeiro de 2025
          </p>

          <div style={{ color:'var(--sub)', fontSize:16, lineHeight:1.8, display:'flex', flexDirection:'column', gap:32 }}>
            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                1. Aceitação dos termos
              </h2>
              <p>Ao criar uma conta ou usar os serviços da Pacoticket, você concorda com estes Termos de Uso. Se não concordar, não utilize a plataforma.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                2. Uso permitido
              </h2>
              <p>Você pode usar a plataforma para fins comerciais legítimos de atendimento ao cliente. É proibido usar o serviço para envio de spam, conteúdo ilegal, assédio ou qualquer atividade que viole as políticas do WhatsApp Business.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                3. Responsabilidades
              </h2>
              <p>Você é responsável pelo conteúdo enviado através da plataforma e pela conformidade com as leis aplicáveis. A Pacoticket não se responsabiliza por danos decorrentes do uso indevido da plataforma.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                4. Pagamentos e cancelamento
              </h2>
              <p>Os planos são cobrados mensalmente ou anualmente conforme escolhido. O cancelamento pode ser feito a qualquer momento e terá efeito ao final do período pago.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                5. Propriedade intelectual
              </h2>
              <p>A Pacoticket detém todos os direitos sobre a plataforma, marca e tecnologia. O usuário não adquire nenhum direito de propriedade intelectual ao usar o serviço.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                6. Alterações nos termos
              </h2>
              <p>Podemos atualizar estes termos periodicamente. Usuários serão notificados sobre mudanças significativas. O uso continuado da plataforma após as alterações implica aceitação dos novos termos.</p>
            </section>

            <section>
              <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>
                7. Lei aplicável
              </h2>
              <p>Estes termos são regidos pelas leis brasileiras. Eventuais disputas serão resolvidas no foro da comarca de Minas Gerais, Brasil.</p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}
