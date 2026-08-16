/* ============================================================
   Yol yardımcısı

   Site GitHub Pages'te bir alt yolda duruyor (/monti-labs/).
   Elle yazılan "/logo.png" gibi yollar bu tabanı atlar ve yayında
   404 verir. Bütün mutlak yollar bu yardımcıdan geçer.

   Astro `import.meta.env.BASE_URL` değerini derleme sırasında
   astro.config.mjs içindeki `base` alanından üretir.
   ============================================================ */

/** Baştaki ve sondaki eğik çizgiler tekilleştirilmiş taban. */
const taban = import.meta.env.BASE_URL.replace(/\/+$/, '')

/**
 * Site içi bir yolu taban yoluyla birleştirir.
 *
 *   yol('/kvkk')        -> '/monti-labs/kvkk'
 *   yol('/')            -> '/monti-labs/'
 *   yol('#iletisim')    -> '#iletisim'        (sayfa içi bağlantı)
 *   yol('/#iletisim')   -> '/monti-labs/#iletisim'
 *
 * Dış bağlantılar ve mailto adresleri olduğu gibi döner.
 */
export function yol(hedef: string): string {
  if (!hedef) return taban + '/'
  if (hedef.startsWith('#')) return hedef
  if (/^[a-z]+:/i.test(hedef) || hedef.startsWith('//')) return hedef
  if (hedef === '/') return taban + '/'
  return taban + (hedef.startsWith('/') ? hedef : '/' + hedef)
}

/** Tam adres üretir. OG görseli ve kanonik bağlantı için gerekir. */
export function tamAdres(hedef: string, site: URL | undefined): string {
  const kok = (site?.origin ?? 'https://dogancanh.github.io').replace(/\/+$/, '')
  return kok + yol(hedef)
}
