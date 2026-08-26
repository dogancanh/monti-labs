// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

/* GitHub Pages yapılandırması.

   Site kullanıcı sayfası değil proje sayfası olarak yayınlanıyor, bu yüzden
   adres bir alt yolda duruyor: https://dogancanh.github.io/monti-labs/
   `base` bu yüzden zorunlu. Koddaki mutlak yollar src/lib/yol.ts içindeki
   yardımcıyla üretilir; elle yazılan "/..." yolları taban yolunu atlar ve
   yayında kırılır.

   Kendi alan adınıza geçtiğinizde: TABAN değerini '/' yapın, SITE_URL'i
   alan adınızla değiştirin ve public/CNAME dosyasını ekleyin. */

const SITE_URL = process.env.SITE_URL ?? 'https://dogancanh.github.io'
const TABAN = process.env.BASE_PATH ?? '/monti-labs'

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
