import type { APIRoute } from 'astro'
import { ARAMA_MOTORLARINA_ACIK } from '../data/site'

/* İçerik taslak olduğu sürece site arama motorlarına kapalıdır.
   Açmak için src/data/site.ts içindeki ARAMA_MOTORLARINA_ACIK
   değerini true yapmak yeterli; sayfa başlıklarındaki noindex
   etiketi de aynı değere bakıyor. */
export const GET: APIRoute = ({ site }) => {
  const kok = (site?.href ?? 'https://dogancanh.github.io').replace(/\/+$/, '')
  const taban = import.meta.env.BASE_URL.replace(/\/+$/, '')

  const govde = ARAMA_MOTORLARINA_ACIK
    ? `User-agent: *\nAllow: /\n\nSitemap: ${kok}${taban}/sitemap-index.xml\n`
    : `# Site henüz yayına hazır değil, içerik taslak durumda.\n` +
      `# Açmak için src/data/site.ts icindeki ARAMA_MOTORLARINA_ACIK degerini true yapin.\n` +
      `User-agent: *\nDisallow: /\n`

  return new Response(govde, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
