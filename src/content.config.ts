import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/* İşler.

   Her ürün ana sayfada bir kart alıyor. Kartın zemini ürünü ayırıyor:
   kağıt, kobalt veya cam. İlk kart iki sütuna yayılıyor.

   Görseller gerçek üründen gelir. Uydurma arayüz kullanılmaz. Görseli
   henüz gelmemiş ürünün kartında görsel alanı boş cam panel olarak
   duruyor; görsel eklendiğinde yerini alıyor. */

/** İki dilde de yazılması zorunlu metin alanı. */
const ciftDil = z.object({
  tr: z.string(),
  en: z.string(),
})

const gorsel = z.object({
  /** public/ altına göre yol, uzantısız. Resim bileşeni avif ve webp ekler. */
  src: z.string(),
  /** Ekran okuyucu için ne gösterdiği. İki dilde de zorunlu. */
  alt: ciftDil,
  en: z.number(),
  boy: z.number(),
  /** Kompozisyonda hangi rolü üstlendiği. */
  rol: z.enum(['ana', 'yan', 'ikon', 'logo']).default('yan'),
})

const isler = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/OKUBENI.md'],
    base: './src/content/calismalar',
  }),
  schema: z.object({
    /** Ürün adı. Sitenin kendi tipografisiyle diziliyor, logo kullanılmıyor. */
    ad: z.string(),

    /** Ürünün ne olduğunu söyleyen tek paragraf. Problem anlatmaz. */
    tanim: ciftDil,

    /** Künye satırı. Örnek: "iOS uygulaması, ürün tasarımı ve geliştirme". */
    kunye: ciftDil,

    /** Sahiplik etiketinin yanında görünen ortam. Örnek: "Web, Apple Wallet". */
    platform: ciftDil,

    /**
     * Ürün Monti'nin kendi ürünü mü, müşteri işi mi.
     * Arayüzde tek etiketle gösteriliyor, ayrı bölüme ayrılmıyor.
     */
    sahiplik: z.enum(['monti', 'musteri']),

    /**
     * Kartın zemini. src/styles/temel.css içindeki .kart-* bloklarından
     * biri. Kağıt açık kart, kobalt degrade kart, cam saydam kart.
     */
    kart: z.enum(['kagit', 'kobalt', 'cam']).default('cam'),

    /** Kart iki sütuna yayılsın mı. Yatay ana görseli olan iş için. */
    genis: z.boolean().default(false),

    gorseller: z.array(gorsel).default([]),

    /** Varsa canlı adres. Yoksa bağlantı gösterilmez. */
    adres: z.string().optional(),

    sira: z.number().default(99),

    /** Yayına girmeden önce içerik onayı bekliyor mu. */
    onayBekliyor: z.boolean().default(true),
  }),
})

export const collections = { isler }
