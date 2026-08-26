import type { APIRoute } from 'astro'
import { yol } from '../lib/yol'

/* Manifest, taban yolunu bilmek zorunda olduğu için statik dosya
   yerine rota olarak üretiliyor. public/ altında sabit dosya olsaydı
   /monti-labs/ ön ekini alamaz, ikonlar 404 verirdi. */
export const GET: APIRoute = () => {
  const manifest = {
    name: 'Monti Labs',
    short_name: 'Monti',
    lang: 'tr',
    dir: 'ltr',
    theme_color: '#1F2FA0',
    background_color: '#FBF6EA',
    display: 'standalone',
    start_url: yol('/'),
    scope: yol('/'),
    icons: [
      { src: yol('/favicon.svg'), sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: yol('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { src: yol('/icon-512.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: yol('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  })
}
