# Seçili çalışmalar: yayın öncesi kontrol listesi

Bu dosya siteye çıkmaz, Astro içerik şemasının dışında tutuluyor.

## Vitrinin çalışma biçimi

Ana sayfadaki bölüm bir portfolyo vitrini: önce ürünün gerçek arayüzü
görünür, sonra tek cümlelik başlık gelir. Uzun proje anlatısı ana
sayfada yok.

Her dosya bir ürün. Alanlar `src/content.config.ts` içinde tanımlı.
`sunum` alanı o ürünün nasıl gösterileceğini belirler:

| sunum   | görünüm                                    | örnek     |
| ------- | ------------------------------------------ | --------- |
| `mobil` | koyu zeminde telefon ekranları             | Inkstay   |
| `ios`   | uygulama ikonu ve üç ekran yan yana         | Guardi    |
| `web`   | tarayıcı çerçeveli geniş görünüm            | EcceHome  |

## Görsel kuralı

**Görseli olmayan proje vitrine girmez.** Temsilî kutu, akış şeması
veya uydurma arayüz üretilmez. Bütün görseller ürünün kendisinden
alınmış ekran görüntüleridir.

Ham yakalamalar `_assetler/` altında durur ve depoya girmez.
`scripts/is-gorselleri.mjs` seçilenleri ölçeklendirip AVIF ve WebP
olarak `public/isler/` altına yazar. Yeni bir görsel eklerken:

1. Ham dosyayı `_assetler/<proje>/` altına koyun
2. `scripts/is-gorselleri.mjs` içindeki listeye satır ekleyin
3. `node scripts/is-gorselleri.mjs` çalıştırın
4. İlgili `.md` dosyasına `gorseller` girdisini yazın (`en` ve `boy`
   betiğin bastığı ölçülerden alınır; yanlış yazılırsa sayfa görsel
   yüklenirken kayar)

`alt` metni boş geçilemez. Ekranda ne göründüğünü yazın, "ekran
görüntüsü" demeyin.

## Sahiplik: ne diyoruz, ne demiyoruz

Üç ürün de Monti Labs kurucularının geliştirdiği ürünler. Bunlar
**müşteri işi olarak sunulmuyor**. Bölüm alt metni bu yüzden
"Monti Labs ekibinin geliştirdiği seçili ürünler ve dijital
sistemler" diyor.

Sonradan gerçek müşteri işi eklenirse ikisi ayrı ayrı işaretlenmeli;
aynı listede ayrımsız durmamalı.

## Rakam kuralı

Şu an metinlerde tek bir rakam yok. Doğrulanamayan hiçbir sayı
("%40 hızlandı", "30 dakikadan 5 dakikaya") yazılmaz. Rakam
eklenecekse kaynağı bilinmeli.

Görsellerin içinde ürünün kendi verisi görünüyor (örneğin Guardi
ekranındaki engellenen numara sayacı). Bunlar ürünün kendi arayüzü;
bizim iddiamız değil, o yüzden sorun değil.

## Durum

| Proje    | Durum                              | onayBekliyor |
| -------- | ---------------------------------- | ------------ |
| Inkstay  | Erken erişim aşamasında, canlı     | `false`      |
| Guardi   | App Store'da yayında               | `false`      |
| EcceHome | Canlı mağaza                       | `false`      |

`onayBekliyor: true` olan dosyalar vitrine hiç girmez. Yeni bir proje
eklerken içerik onayı gelene kadar bu alanı `true` bırakın.

## Vitrine girmeyen iş

Sigortacılık alanındaki kural motoru çalışması (1413 kontrol kuralı)
gerçek bir iş ama gösterilebilecek arayüzü yok ve müşteri adı
paylaşılamıyor. Vitrinin kuralı "önce göster" olduğu için dışarıda
bırakıldı. İleride ekranı olmayan işler için ayrı bir bölüm
açılabilir; o zaman anlatı biçimi de farklı olmalı.
