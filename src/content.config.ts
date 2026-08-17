import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/* Vaka çalışmaları.
   Teknik olmayan biri src/content/calismalar/ altına yeni bir .md
   dosyası koyarak vaka ekleyebilir. Alanlar aşağıdaki şemayı izler.

   OKUBENI.md içerik değil, not dosyasıdır; şema dışında tutulur. */
const calismalar = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/OKUBENI.md'],
    base: './src/content/calismalar',
  }),
  schema: z.object({
    /**
     * Bloğun en üstünde duran büyük sonuç cümlesi.
     * Teknolojiyi değil, ne değiştiğini söyler.
     * Örnek: "1.413 kural. Yeni kural için kod değişikliği yok."
     */
    vurgu: z.string(),
    /** Kısa, problem odaklı başlık. */
    baslik: z.string(),
    /** Müşteri adı yerine sektör yazılır. */
    sektor: z.string(),
    tur: z.enum(['uygulama', 'b2b-urun', 'web-sitesi', 'otomasyon', 'entegrasyon']),
    /** Bir iki cümle, okuyucunun tanıyacağı biçimde. */
    problem: z.string(),
    /** İki dört cümle, kurulan sistemin ne yaptığı. */
    neYaptik: z.string(),
    /** Ölçülebilir sonuç. Doğrulanamıyorsa alan hiç yazılmaz. */
    sonuc: z.string().optional(),
    teknolojiler: z.array(z.string()).default([]),
    /** Blokta çizilecek sistem şeması. Sahte ekran görüntüsü yerine
        gerçek yapıyı anlatan hairline diyagram. */
    sema: z.enum(['besleme', 'kural-motoru', 'tek-kaynak', 'uyku']).optional(),
    /** Ana sayfadaki gösterim sırası. */
    sira: z.number().default(99),
    /** true ise yayına girmeden önce içerik onayı bekliyor demektir. */
    onayBekliyor: z.boolean().default(true),
  }),
})

export const collections = { calismalar }
