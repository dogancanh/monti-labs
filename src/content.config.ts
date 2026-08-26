import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/* İşler.

   Her ürün ana sayfada tam genişlikte kendi bölümünü alıyor. Kart yok,
   çerçeve yok. Ürünü zemin rengi ve ölçek ayırıyor.

   Görseller gerçek üründen gelir. Temsilî kutu, akış şeması veya
   uydurma arayüz kullanılmaz. Görseli olmayan ürün vitrine girmez. */

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

    /**
     * Ürün Monti'nin kendi ürünü mü, müşteri işi mi.
     * Arayüzde tek etiketle gösteriliyor, ayrı bölüme ayrılmıyor.
     */
    sahiplik: z.enum(['monti', 'musteri']),

    /**
     * Bölümün zemin teması. src/styles/temel.css içinde tanımlı
     * tema bloklarından biri olmak zorunda.
     */
    tema: z.enum(['inkstay', 'guardi', 'eccehome', 'kagit', 'murekkep']),

    gorseller: z.array(gorsel).default([]),

    /** Varsa canlı adres. Yoksa bağlantı gösterilmez. */
    adres: z.string().optional(),

    sira: z.number().default(99),

    /** Yayına girmeden önce içerik onayı bekliyor mu. */
    onayBekliyor: z.boolean().default(true),
  }),
})

export const collections = { isler }
