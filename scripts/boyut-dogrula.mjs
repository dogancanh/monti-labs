/* Görsel boyutu doğrulaması.

   İçerik dosyalarındaki en ve boy değerleri, public/isler/ altındaki
   gerçek dosyalarla birebir aynı olmak zorunda. Uyuşmazsa tarayıcı
   yanlış oranda yer ayırır ve görsel yüklenince sayfa zıplar (CLS).

   Bu betik kaynak görseller yeniden üretildiğinde kaçınılmaz olarak
   ortaya çıkan kaymayı yakalar. is-gorselleri.mjs bir kırpma eklendiği
   anda boyutlar değişiyor ve markdown geride kalıyor.

   Çalıştırma: npm run boyut */

import sharp from 'sharp'
import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const burasi = dirname(fileURLToPath(import.meta.url))
const kok = join(burasi, '..')
const icerikKlasoru = join(kok, 'src', 'content', 'calismalar')
const gorselKlasoru = join(kok, 'public')

/** Frontmatter içindeki görsel bloklarını okur. Tam YAML çözümlemesine
    gerek yok: aranan yapı sabit ve tek seviyeli. */
const gorselleriOku = (metin) => {
  const bulunan = []
  const satirlar = metin.split('\n')
  let simdiki = null

  for (const satir of satirlar) {
    const kaynak = satir.match(/^\s*-\s*src:\s*(\S+)/)
    if (kaynak) {
      if (simdiki) bulunan.push(simdiki)
      simdiki = { src: kaynak[1] }
      continue
    }
    if (!simdiki) continue

    const en = satir.match(/^\s{4}en:\s*(\d+)\s*$/)
    if (en) simdiki.en = Number(en[1])

    const boy = satir.match(/^\s{4}boy:\s*(\d+)\s*$/)
    if (boy) simdiki.boy = Number(boy[1])
  }
  if (simdiki) bulunan.push(simdiki)

  return bulunan.filter((g) => g.en && g.boy)
}

const dosyalar = (await readdir(icerikKlasoru)).filter(
  (d) => d.endsWith('.md') && d !== 'OKUBENI.md',
)

let hata = 0
console.log('Görsel boyutu doğrulaması\n')

for (const dosya of dosyalar) {
  const metin = await readFile(join(icerikKlasoru, dosya), 'utf8')

  for (const gorsel of gorselleriOku(metin)) {
    const yol = join(gorselKlasoru, gorsel.src + '.webp')

    let gercek
    try {
      gercek = await sharp(yol).metadata()
    } catch {
      console.log(`  KALDI  ${gorsel.src}  dosya yok: ${gorsel.src}.webp`)
      hata += 1
      continue
    }

    const uyuyor = gercek.width === gorsel.en && gercek.height === gorsel.boy
    if (!uyuyor) {
      console.log(
        `  KALDI  ${gorsel.src}  icerik ${gorsel.en}x${gorsel.boy}, dosya ${gercek.width}x${gercek.height}`,
      )
      hata += 1
    } else {
      console.log(`  gecti  ${gorsel.src}  ${gercek.width}x${gercek.height}`)
    }
  }
}

console.log()

if (hata > 0) {
  console.error(`${hata} gorselin boyutu icerik dosyasiyla uyusmuyor.`)
  process.exit(1)
}

console.log('Butun gorsel boyutlari uyuyor.')
