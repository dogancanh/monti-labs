/* ============================================================
   Görsel üretimi

   Çalıştırma:  node scripts/gorsel-uret.mjs

   Ürettikleri:
     public/logo-yatay.png       başlıktaki kilit (kobalt, şeffaf zemin)
     public/logo-yatay-krem.png  koyu zemin için krem sürüm
     public/og.png               1200x630 paylaşım görseli
     public/icon-192.png
     public/icon-512.png
     public/apple-touch-icon.png

   Kelime markası yeniden dizilmez. Marka paketindeki resmî yatay
   logo dosyası kaynak alınır, yalnızca rengi değiştirilir.
   (02-gorsel-kimlik.md: "Kelime markası farklı bir fontla
   yeniden yazılmaz.")
   ============================================================ */

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const buradan = dirname(fileURLToPath(import.meta.url))
const kok = join(buradan, '..')
const cikti = join(kok, 'public')

const MARKA_KLASORU = '/Users/dogancanh/Downloads/monti-labs-brand/assets/logo'
const YATAY_LOGO = join(MARKA_KLASORU, 'monti-logo-yatay-kobalt.png')

/* Yeniden tasarımın paleti. src/styles/temel.css ile aynı olmalı.
   Eski marka paketindeki #263BAA ve #FBF6EA değerleri bırakıldı. */
const KOBALT = { r: 0x1f, g: 0x2f, b: 0xa0 }
const KREM = { r: 0xfb, g: 0xf6, b: 0xea }

/**
 * Kobalt logoyu şeffaf zeminli, istenen renkte bir PNG'ye çevirir.
 * Kaynak beyaz zemin üzerine kobalt olduğu için parlaklık kanalı
 * ters çevrilip alfa olarak kullanılır. Böylece kenar yumuşaklığı korunur.
 */
async function logoyuBoya(genislik, renk) {
  const kirpilmis = await sharp(YATAY_LOGO)
    .ensureAlpha()
    .trim({ threshold: 20 })
    .resize({ width: genislik, fit: 'inside', kernel: 'lanczos3' })
    .toBuffer({ resolveWithObject: true })

  const { width, height } = kirpilmis.info

  // Kaynak PNG şeffaf zeminli ve gerçek bir alfa kanalı taşıyor.
  // Maske olarak doğrudan o alfa kullanılır: kenar yumuşaklığı korunur,
  // logo tam opak kalır. Parlaklıktan maske türetmek rengi soldururdu.
  const alfa = await sharp(kirpilmis.data).extractChannel('alpha').raw().toBuffer()

  const boyanmis = await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: renk.r, g: renk.g, b: renk.b },
    },
  })
    .joinChannel(alfa, { raw: { width, height, channels: 1 } })
    .png({ compressionLevel: 9 })
    .toBuffer()

  return { veri: boyanmis, genislik: width, yukseklik: height }
}

async function uret() {
  await mkdir(cikti, { recursive: true })

  /* ---- Başlık kilidi: kobalt, 3x çözünürlük ----
     PNG her tarayıcıda çalışır, WebP ve AVIF daha küçüktür.
     Başlıkta <picture> ile sırayla sunulur. */
  const kilit = await logoyuBoya(360, KOBALT)
  await sharp(kilit.veri).toFile(join(cikti, 'logo-yatay.png'))
  await sharp(kilit.veri).webp({ quality: 92, effort: 6 }).toFile(join(cikti, 'logo-yatay.webp'))
  await sharp(kilit.veri).avif({ quality: 70, effort: 6 }).toFile(join(cikti, 'logo-yatay.avif'))

  const kilitKrem = await logoyuBoya(360, KREM)
  await sharp(kilitKrem.veri).toFile(join(cikti, 'logo-yatay-krem.png'))

  /* ---- Paylaşım görseli ----
     Kilit ortalanmış değil, sitedeki gibi sola ve alta hizalı.
     Ortalanmış logo her şirkette aynı görünüyor; sola hizalı kilit
     sitenin kendi kompozisyonunu paylaşım kartında da sürdürüyor. */
  const OG_G = 1200
  const OG_Y = 630
  const OG_KENAR = 88
  const ogLogo = await logoyuBoya(560, KREM)

  await sharp({
    create: {
      width: OG_G,
      height: OG_Y,
      channels: 3,
      background: { r: KOBALT.r, g: KOBALT.g, b: KOBALT.b },
    },
  })
    .composite([
      {
        input: ogLogo.veri,
        left: OG_KENAR,
        top: OG_Y - OG_KENAR - ogLogo.yukseklik,
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(cikti, 'og.png'))

  /* ---- Uygulama ikonları: kare, kobalt zemin, krem işaret ---- */
  const isaretSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 891 546" width="891" height="546"><g fill="#FBF6EA"><path d="M0 0 L451 428 L451 546 L348 546 L170 377 L170 546 L0 546 Z"/><path d="M460 140 L891 546 L642 546 L460 373 Z"/></g></svg>`

  for (const [dosya, boy, dolgu] of [
    ['icon-192.png', 192, 0.2],
    ['icon-512.png', 512, 0.2],
    ['apple-touch-icon.png', 180, 0.22],
  ]) {
    const icGenislik = Math.round(boy * (1 - dolgu * 2))
    const isaret = await sharp(Buffer.from(isaretSvg))
      .resize({ width: icGenislik, fit: 'inside' })
      .toBuffer({ resolveWithObject: true })

    await sharp({
      create: {
        width: boy,
        height: boy,
        channels: 3,
        background: { r: KOBALT.r, g: KOBALT.g, b: KOBALT.b },
      },
    })
      .composite([
        {
          input: isaret.data,
          left: Math.round((boy - isaret.info.width) / 2),
          top: Math.round((boy - isaret.info.height) / 2),
        },
      ])
      .png({ compressionLevel: 9 })
      .toFile(join(cikti, dosya))
  }

  console.log('Üretildi:')
  console.log(`  logo-yatay.png       ${kilit.genislik}x${kilit.yukseklik} (kobalt)`)
  console.log(`  logo-yatay-krem.png  ${kilitKrem.genislik}x${kilitKrem.yukseklik} (krem)`)
  console.log(`  og.png               ${OG_G}x${OG_Y}`)
  console.log('  icon-192.png, icon-512.png, apple-touch-icon.png')
  console.log('')
  console.log('Başlıkta kullanılacak oran:')
  console.log(`  en/boy = ${(kilit.genislik / kilit.yukseklik).toFixed(4)}`)
  console.log(`  26px yükseklikte genişlik = ${Math.round(26 * (kilit.genislik / kilit.yukseklik))}px`)
}

uret().catch((hata) => {
  console.error('Görsel üretimi başarısız:', hata)
  process.exitCode = 1
})
