import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/* Seçili çalışmalar.

   Ana sayfada portfolyo vitrini olarak gösterilir: önce ürün görünür,
   sonra tek cümlelik başlık. Uzun anlatı ana sayfada yer almaz;
   ileride /calismalar/<slug> detay sayfasına taşınır.

   Görseller gerçek üründen gelir. Temsilî kutu, akış şeması veya
   uydurma arayüz kullanılmaz. Görseli olmayan proje vitrine girmez. */

const gorsel = z.object({
  /** public/ altına göre yol. */
  src: z.string(),
  /** Ekran okuyucu için ne gösterdiği. Boş geçilemez. */
  alt: z.string(),
  en: z.number(),
  boy: z.number(),
  /** Kompozisyonda hangi rolü üstlendiği. */
  rol: z.enum(['ana', 'yan', 'ikon', 'logo']).default('yan'),
})

const calismalar = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/OKUBENI.md'],
    base: './src/content/calismalar',
  }),
  schema: z.object({
    /** Ürün adı. Logo yoksa tipografi olarak gösterilir. */
    ad: z.string(),
    /** Tek kısa cümle. Ürünün ne olduğunu söyler, problem anlatmaz. */
    baslik: z.string(),
    /** Örnek: "B2B SaaS · Mobil ürün". Nokta ile ayrılır. */
    kategori: z.string(),

    /**
     * Sunum biçimi. Her ürün kendi karakterine göre sunulur,
     * hepsine aynı kart uygulanmaz.
     *   mobil  koyu zeminde telefon ekranları
     *   ios    uygulama ikonu ve arayüz birlikte
     *   web    geniş tarayıcı sunumu
     */
    sunum: z.enum(['mobil', 'ios', 'web']),

    /** Ürünün kendi vurgu rengi. Kompozisyonda ölçülü kullanılır. */
    vurguRengi: z.string().optional(),
    /** Sunum zemini koyu mu. Inkstay gibi koyu ürünler için. */
    koyuZemin: z.boolean().default(false),

    gorseller: z.array(gorsel).default([]),

    /** Varsa canlı adres. Yoksa bağlantı gösterilmez. */
    adres: z.string().optional(),
    /** İleride detay sayfası açılırsa true yapılır. */
    detayVar: z.boolean().default(false),

    sira: z.number().default(99),
    /** Yayına girmeden önce içerik onayı bekliyor mu. */
    onayBekliyor: z.boolean().default(true),
  }),
})

export const collections = { calismalar }
