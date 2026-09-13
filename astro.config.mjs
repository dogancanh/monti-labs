// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

/* İki yayın hedefi.

   montilabs.co (Vercel): site kökte duruyor, taban yolu yok. Vercel
   derleme ortamında VERCEL=1 ve VERCEL_PROJECT_PRODUCTION_URL tanımlı;
   ikisi de kendiliğinden okunuyor, panelde ayar gerekmiyor.

   dogancanh.github.io/monti-labs (GitHub Pages): proje sayfası olduğu
   için adres bir alt yolda duruyor ve `base` zorunlu. Koddaki mutlak
   yollar src/lib/yol.ts içindeki yardımcıyla üretilir; elle yazılan
   "/..." yolları taban yolunu atlar ve alt yolda kırılır.

   SITE_URL ve BASE_PATH ortam değişkenleri ikisini de ezer. */

const VERCEL = process.env.VERCEL === '1'
const VERCEL_ALAN = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'montilabs.co'

const SITE_URL =
  process.env.SITE_URL ?? (VERCEL ? `https://${VERCEL_ALAN}` : 'https://dogancanh.github.io')
const TABAN = process.env.BASE_PATH ?? (VERCEL ? '/' : '/monti-labs')

/* Türkçe varsayılan dil ve önek almıyor, İngilizce /en altında duruyor.
   Alt yolla birlikte adresler şöyle çıkıyor:
     /monti-labs/      Türkçe
     /monti-labs/en/   İngilizce */
const DILLER = ['tr', 'en']
const VARSAYILAN_DIL = 'tr'

export default defineConfig({
  site: SITE_URL,
  base: TABAN,

  // GitHub Pages yalnızca statik dosya sunar. Sunucu tarafı uç nokta yok.
  output: 'static',
  trailingSlash: 'ignore',

  i18n: {
    locales: DILLER,
    defaultLocale: VARSAYILAN_DIL,
    routing: {
      prefixDefaultLocale: false,
      // Tarayıcı diline göre otomatik yönlendirme yok. Statik sunumda
      // yönlendirme sunucu tarafı gerektiriyor, ayrıca kullanıcının
      // seçtiği dili ezmek istemiyoruz.
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Yönlendirme sayfası dizine girmemeli, haritada da yeri yok.
      filter: (adres) => !adres.includes('/biz-kimiz'),
      i18n: {
        defaultLocale: VARSAYILAN_DIL,
        locales: { tr: 'tr-TR', en: 'en' },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },
})
