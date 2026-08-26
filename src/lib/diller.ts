/* ============================================================
   Diller

   Türkçe varsayılan dil ve adreste önek almıyor. İngilizce /en
   altında duruyor. Taban yolu (/monti-labs) ikisinin de başında.

   Sayfa bağlantıları sayfaYolu() üstünden üretilir, varlık yolları
   (görsel, font, ikon) yol() üstünden. İkisini karıştırmayın:
   varlıklara dil öneki takılırsa yayında 404 verir.
   ============================================================ */

import { yol } from './yol'

export const diller = ['tr', 'en'] as const
export type Dil = (typeof diller)[number]

export const varsayilanDil: Dil = 'tr'

/** Dil değiştiricide ve hreflang etiketlerinde görünen adlar. */
export const dilAdlari: Record<Dil, string> = {
  tr: 'TR',
  en: 'EN',
}

/** html lang özniteliğine ve hreflang değerine basılan kodlar. */
export const dilKodlari: Record<Dil, string> = {
  tr: 'tr-TR',
  en: 'en',
}

/** İki dilli bir alanın o dildeki karşılığını verir. */
export type CiftDil<T> = Record<Dil, T>

/**
 * Site içi bir sayfa yolunu dil öneki ve taban yoluyla birleştirir.
 *
 *   sayfaYolu('/', 'tr')          -> '/monti-labs/'
 *   sayfaYolu('/', 'en')          -> '/monti-labs/en/'
 *   sayfaYolu('/#iletisim', 'en') -> '/monti-labs/en/#iletisim'
 *   sayfaYolu('#iletisim', 'en')  -> '#iletisim'
 *
 * Yasal sayfalar tek dilde tutulduğu için onlara bağlanırken
 * doğrudan yol() kullanılır, bu yardımcı değil.
 */
export function sayfaYolu(hedef: string, dil: Dil): string {
  if (hedef.startsWith('#')) return hedef
  if (/^[a-z]+:/i.test(hedef) || hedef.startsWith('//')) return hedef

  const onek = dil === varsayilanDil ? '' : `/${dil}`

  if (hedef === '/' || hedef === '') return yol(`${onek}/`)
  if (hedef.startsWith('/#')) return yol(`${onek}/${hedef.slice(1)}`)

  return yol(onek + (hedef.startsWith('/') ? hedef : `/${hedef}`))
}

/** Dil değiştiricinin göstereceği diğer dil. */
export function karsiDil(dil: Dil): Dil {
  return dil === 'tr' ? 'en' : 'tr'
}

/**
 * Aynı sayfanın bütün dillerdeki adresleri.
 * hreflang etiketleri ve dil değiştirici bunu kullanır.
 */
export function tumDilAdresleri(hedef: string): Array<{ dil: Dil; adres: string }> {
  return diller.map((dil) => ({ dil, adres: sayfaYolu(hedef, dil) }))
}
