# İşler: yeni ürün eklerken

Bu dosya siteye çıkmaz, Astro içerik şemasının dışında tutuluyor.

## Bölümün çalışma biçimi

Her ürün ana sayfada bir kart alıyor. Kartın zemini ürünü ayırıyor:
kağıt (açık), kobalt (degrade) veya cam (saydam). İki sütunlu kafeste
`genis: true` olan kart iki sütuna yayılıyor; yatay ana görseli olan
iş için.

Her markdown dosyası bir ürün. Alanlar `src/content.config.ts` içinde
tanımlı ve şema tip kontrolünden geçiyor: eksik alan derlemeyi
durduruyor.

## Alanlar

| alan | ne işe yarar |
| --- | --- |
| `ad` | Ürün adı. Sitenin kendi tipografisiyle diziliyor, logo kullanılmıyor. |
| `tanim` | Tek paragraf. Ürünün ne olduğunu söyler, problem anlatmaz. `tr` ve `en` zorunlu. |
| `kunye` | Künye satırı. Örnek: "iOS uygulaması, ürün tasarımı ve geliştirme". `tr` ve `en` zorunlu. |
| `platform` | Sahiplik etiketinin yanındaki ortam. Örnek: "Web, Apple Wallet". `tr` ve `en` zorunlu. |
| `sahiplik` | `monti` veya `musteri`. Arayüzde tek etiketle görünür, ayrı bölüme ayrılmaz. |
| `kart` | Kart zemini: `kagit`, `kobalt` veya `cam`. `src/styles/temel.css` içindeki `.kart-*` blokları. |
| `genis` | `true` ise kart iki sütuna yayılır. Yalnızca bir kartta kullanın. |
| `gorseller` | Her birinde `src`, iki dilli `alt`, `en`, `boy` ve `rol`. |
| `adres` | Varsa canlı adres. Bağlantı metni adresin alan adı olur (eccehome.com.tr). Yoksa bağlantı hiç gösterilmez. |
| `sira` | Sayfadaki sıra. |
| `onayBekliyor` | `true` iken ürün yayına çıkmaz. |

## Görsel rolleri

| rol | nerede kullanılır |
| --- | --- |
| `ana` | Kartın görsel alanına giren tek görsel. Alanı `object-fit: cover` ile sol üstten doldurur. |
| `yan` | Şu an arayüzde kullanılmıyor, arşiv için duruyor. |
| `ikon` | Şu an arayüzde kullanılmıyor, arşiv için duruyor. |
| `logo` | Şu an arayüzde kullanılmıyor, arşiv için duruyor. |

## Kurallar

**Uydurma arayüz üretilmez.** Bütün görseller ürünün kendisinden
alınmış ekran görüntüleridir. Görseli henüz gelmemiş ürünün kartında
görsel alanı boş cam panel olarak durur; yer tutucu yazısı basılmaz.

**Pazarlama kompozisyonu kullanılmaz.** App Store görselleri kendi
başlık tipografilerini, degradelerini ve parlamalarını taşıyor. Bunlar
sitenin diliyle çakışıyor. `scripts/is-gorselleri.mjs` içindeki `kirp`
alanıyla cihaz çerçevesine kırpılıyorlar, geriye yalnızca gerçek
arayüz kalıyor.

**Boyutlar içerikle dosyanın birebir aynı olmak zorunda.** Uyuşmazsa
tarayıcı yanlış oranda yer ayırır ve görsel yüklenince sayfa zıplar.
`npm run boyut` bunu doğruluyor ve uyuşmazlıkta hata veriyor.

## Yeni ürün ekleme adımları

1. Ham görselleri `_assetler/<urun>/` altına koyun.
2. `scripts/is-gorselleri.mjs` içindeki listeye ekleyin. Pazarlama
   kompozisyonuysa `kirp` oranını verin.
3. `node scripts/is-gorselleri.mjs` çalıştırın, çıktıdaki boyutları not alın.
4. Bu klasöre markdown dosyasını yazın, boyutları oradan girin.
5. `kart` değerini seçin. Üç kart zemininden başkası yok; yeni zemin
   eklemek gerekiyorsa `temel.css` ve `scripts/kontrast-dogrula.mjs`
   birlikte değişir.
6. `npm run dogrula` çalıştırın. Üçü de temiz geçmeden yayına almayın.
