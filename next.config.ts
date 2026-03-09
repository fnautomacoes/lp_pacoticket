// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone', // Para Docker — bundle self-contained

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' },
      { protocol: 'https', hostname: '**.amazonaws.com' },
      { protocol: 'https', hostname: 'help.pacoticket.com.br' },
      // Adicione outros domínios de imagem conforme necessário
    ],
  },

  // Permite dangerouslySetInnerHTML para o conteúdo HTML da documentação
  // (já sanitizado na origem — documentacao_pacoticket.json)
}

export default nextConfig
