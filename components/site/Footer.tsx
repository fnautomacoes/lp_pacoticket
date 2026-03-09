// components/site/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ padding:'48px 0', borderTop:'1px solid var(--border)' }}>
      <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40 }}>
          <div>
            <div style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:800, marginBottom:12 }}>
              Paco<span style={{ color:'var(--green)' }}>ticket</span>
            </div>
            <div style={{ fontSize:14, color:'var(--muted)', lineHeight:1.7, maxWidth:260, marginBottom:20 }}>
              A plataforma de atendimento omnichannel para empresas que levam o cliente a sério. Feito no Brasil, para o Brasil.
            </div>
          </div>

          <FooterCol title="Produto" links={[
            ['Funcionalidades', '/funcionalidades'],
            ['FlowBuilder',     '/flowbuilder'],
            ['Inteligência Artificial', '/ia'],
            ['Integrações',     '/integracoes'],
            ['API & Webhooks',  '/api-webhooks'],
            ['Preços',          '/precos'],
          ]} />

          <FooterCol title="Empresa" links={[
            ['Sobre',     '/sobre'],
            ['Blog',      '/blog'],
            ['Parceiros', '/parceiros'],
            ['Afiliados', '/afiliados'],
          ]} />

          <FooterCol title="Suporte" links={[
            ['Central de Ajuda',  'https://help.pacoticket.com.br'],
            ['Contato',           '/contato'],
            ['Primeiros Passos',  '/primeiros-passos'],
            ['Documentação',      '/docs'],
            ['Status do Sistema', '/status'],
            ['Política de Privacidade', '/privacidade'],
            ['Termos de Uso',     '/termos'],
          ]} />
        </div>

        <div style={{ marginTop:48, paddingTop:24, borderTop:'1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize:13, color:'var(--muted)' }}>© 2025 Pacoticket. Todos os direitos reservados.</div>
          <div style={{ fontSize:13, color:'var(--muted)' }}>Desenvolvido com ❤️ no Brasil</div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 style={{ fontFamily:'var(--body)', fontWeight:700, fontSize:13, textTransform:'uppercase', letterSpacing:'.06em', color:'var(--sub)', marginBottom:16 }}>
        {title}
      </h4>
      <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:10 }}>
        {links.map(([label, href]) => (
          <li key={href}>
            {href.startsWith('http') ? (
              <a href={href} target="_blank" rel="noreferrer" style={{ fontSize:14, color:'var(--muted)', textDecoration:'none' }}>{label}</a>
            ) : (
              <Link href={href} style={{ fontSize:14, color:'var(--muted)', textDecoration:'none' }}>{label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
