# İşler: yeni ürün eklerken

Bu dosya siteye çıkmaz, Astro içerik şemasının dışında tutuluyor.

## Bölümün çalışma biçimi

Her ürün ana sayfada kendi tam genişlikteki bölümünü ve kendi zemin
rengini alıyor. Kart yok, çerçeve yok, gölge yok. Ürünü ayıran şey
zemin rengi ve ölçek.

Her markdown dosyası bir ürün. Alanlar `src/content.config.ts` içinde
tanımlı ve şema tip kontrolünden geçiyor: eksik alan derlemeyi
durduruyor.

## Alanlar

| alan | ne işe yarar |
| --- | --- |
| `ad` | Ürün adı. Sitenin kendi tipografisiyle diziliyor, logo kullanılmıyor. |
| `tanim` | Tek paragraf. Ürünün ne olduğunu söyler, problem anlatmaz. `tr` ve `en` zorunlu. |
| `kunye` | Künye satırı. Örnek: "iOS uygulaması, ürün tasarımı ve geliştirme". `tr` ve `en` zorunlu. |
| `sahiplik` | `monti` veya `musteri`. Arayüzde tek etiketle görünür, ayrı bölüme ayrılmaz. |
| `tema` | Bölümün zemin teması. `src/styles/temel.css` içinde tanımlı olmalı. |
| `gorseller` | Her birinde `src`, iki dilli `alt`, `en`, `boy` ve `rol`. |
| `adres` | Varsa canlı adres. Yoksa bağlantı hiç gösterilmez. |
| `sira` | Sayfadaki sıra. |
| `onayBekliyor` | `true` iken ürün yayına çıkmaz. |

## Görsel rolleri

| rol | nerede kullanılır |
| --- | --- |
| `ana` | Kompozisyonun büyük görseli. Yatay olduğunda geniş arayüz düzeni, dikey olduğunda telefon düzeni devreye girer. |
| `yan` | Ana görselin yanındaki küçük görseller. Mobilde yalnızca ilki gösterilir. |
| `ikon` | Ürün adının yanındaki uygulama ikonu. |
| `logo` | Şu an arayüzde kullanılmıyor, arşiv için duruyor. |

## Kurallar

**Görseli olmayan ürün bölüme girmez.** Temsilî kutu, akış şeması veya
uydurma arayüz üretilmez. Bütün görseller ürünün kendisinden alınmış
ekran görüntüleridir.

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
5. Gerekiyorsa `src/styles/temel.css` içine yeni bir tema bloğu ekleyin
   ve `scripts/kontrast-dogrula.mjs` listesine renk çiftlerini işleyin.
6. `npm run dogrula` çalıştırın. Üçü de temiz geçmeden yayına almayın.
