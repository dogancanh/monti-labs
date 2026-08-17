/* ============================================================
   Çalışma görsellerini web için hazırla

   Çalıştırma:  node scripts/is-gorselleri.mjs

   Kaynak: _assetler/  (ham yakalamalar, depoya girmez)
   Hedef:  public/isler/  (yayınlanan sürümler)

   Her görsel iki biçimde üretilir: AVIF ve WebP.
   AVIF destekleyen tarayıcı onu alır, diğerleri WebP'ye düşer.
   PNG yedeği yok: WebP desteklemeyen tarayıcı bugün pratikte yok
   ve yedek yayına 3,4 MB ekliyordu.

   Görseller gerçek üründen gelir. Temsilî kutu veya sahte
   arayüz üretilmez.
   ============================================================ */

import sharp from 'sharp'
import { mkdir, readdir } from 'node:fs/promises'
import { statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const burasi = dirname(fileURLToPath(import.meta.url))
const kok = join(burasi, '..')
const kaynak = join(kok, '_assetler')
const hedef = join(kok, 'public', 'isler')

/**
 * İşlenecek görseller.
 * genislik: üretilecek piksel genişliği. Gösterim boyutunun iki katı
 * seçildi ki retina ekranda da keskin dursun.
 */
const isler = [
  // ---- Inkstay: koyu zeminde mobil ürün ----
  { kaynak: 'inkstay/inkstay-urun-bugun.png', ad: 'inkstay-bugun', genislik: 840 },
  { kaynak: 'inkstay/inkstay-shot-guides.png', ad: 'inkstay-rehberler', genislik: 720 },
  { kaynak: 'inkstay/inkstay-shot-plan.png', ad: 'inkstay-plan', genislik: 720 },
  { kaynak: 'inkstay/inkstay-icon.png', ad: 'inkstay-ikon', genislik: 180, ikon: true },

  // ---- Guardi: uygulama ikonu ve arayüz ----
  { kaynak: 'guardi/guardi-ekran-01-combo.png', ad: 'guardi-ana', genislik: 840 },
  { kaynak: 'guardi/guardi-ekran-06-lookup.png', ad: 'guardi-sorgu', genislik: 720 },
  { kaynak: 'guardi/guardi-ekran-02-sms.png', ad: 'guardi-sms', genislik: 720 },
  { kaynak: 'guardi/guardi-icon-yeni-keskin-1024.png', ad: 'guardi-ikon', genislik: 256, ikon: true },

  // ---- EcceHome: geniş tarayıcı sunumu ----
  { kaynak: 'eccehome/eccehome-vitrin-masaustu.png', ad: 'eccehome-vitrin', genislik: 1800 },
  { kaynak: 'eccehome/eccehome-vitrin-mobil.png', ad: 'eccehome-mobil', genislik: 600 },
  { kaynak: 'eccehome/eccehome-logo.png', ad: 'eccehome-logo', genislik: 478, ikon: true },
]

const kb = (n) => (n / 1024).toFixed(0) + 'KB'

async function uret() {
  await mkdir(hedef, { recursive: true })

  let hamToplam = 0
  let yeniToplam = 0
  const satirlar = []

  for (const is of isler) {
    const girdi = join(kaynak, is.kaynak)
    let bilgi
    try {
      bilgi = statSync(girdi)
    } catch {
      console.warn('  ATLANDI (kaynak yok): ' + is.kaynak)
      continue
    }
    hamToplam += bilgi.size

    const temel = sharp(girdi).resize({
      width: is.genislik,
      withoutEnlargement: true,
      kernel: 'lanczos3',
    })

    const olcu = await temel.clone().toBuffer({ resolveWithObject: true })
    const { width, height } = olcu.info

    // AVIF: en küçük, modern tarayıcılar
    const avif = await temel.clone().avif({ quality: is.ikon ? 70 : 58, effort: 6 }).toBuffer()
    // WebP: geniş destek
    const webp = await temel.clone().webp({ quality: is.ikon ? 90 : 80, effort: 6 }).toBuffer()
    await sharp(avif).toFile(join(hedef, is.ad + '.avif'))
    await sharp(webp).toFile(join(hedef, is.ad + '.webp'))

    yeniToplam += avif.length
    satirlar.push(
      '  ' +
        is.ad.padEnd(20) +
        (width + 'x' + height).padEnd(12) +
        'avif ' + kb(avif.length).padStart(7) +
        '   webp ' + kb(webp.length).padStart(7),
    )
  }

  console.log('Üretilen görseller:\n')
  satirlar.forEach((s) => console.log(s))
  console.log(
    '\nHam kaynak toplamı : ' + (hamToplam / 1024 / 1024).toFixed(1) + ' MB',
  )
  console.log(
    'AVIF toplamı       : ' + (yeniToplam / 1024).toFixed(0) + ' KB' +
      '  (yayında yüklenecek olan)',
  )

  const uretilen = (await readdir(hedef)).length
  console.log('public/isler/ içinde ' + uretilen + ' dosya')
}

uret().catch((h) => {
  console.error('Görsel üretimi başarısız:', h)
  process.exitCode = 1
})
