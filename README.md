# Monti Labs sitesi

İşletmeler için dijital ürünler tasarlayan ve geliştiren bir teknoloji
şirketinin kurumsal sitesi. Türkçe ve İngilizce.

Astro 5, statik çıktı, sunucu yok. GitHub Pages üzerinde
`dogancanh.github.io/monti-labs` adresinde yayınlanıyor.

Tasarım yönü: `docs/superpowers/specs/2026-08-26-monti-labs-yeniden-tasarim-design.md`

---

## Çalıştırma

```bash
npm install
npm run dev        # geliştirme sunucusu
npm run dogrula    # tip kontrolü, kontrast ve görsel boyutu
npm run build      # dist/ üretir
npm run preview    # üretilen çıktıyı sunar
```

`npm run dogrula` üç kapıyı birden çalıştırır. Üçü de temiz geçmeden
yayına almayın.

---

## Tasarımın çalışma mantığı

### Zemin katmanı

Sayfanın arkasında tek bir sabit renk katmanı var
(`src/components/ZeminKatmani.astro`). Bölümler saydam; görünen zemin
o katman.

Her bölüm bir `data-tema` özniteliği taşıyor ve o temanın renklerini
kendi üstünde tanımlıyor (`--zemin`, `--metin`, `--ikincil`, `--vurgu`,
`--cizgi`). Kaydırırken bir IntersectionObserver etkin bölümü buluyor
ve renklerini `:root` üstüne yazıyor. Katman geçişi yapıyor, sayfa oda
değiştirmiş gibi oluyor.

Tetikleme, gelen bölümün üst kenarı görüş alanının en üst yüzde
yirmisine girdiğinde. Böylece bölümün metni ekranın ortasına gelmeden
zemin yerine oturuyor ve ara karelerde metin yanlış zeminde kalmıyor.

JavaScript kapalıyken her bölüm kendi zeminini kendisi basıyor ve sabit
başlık statik hale geliyor. Site tam olarak çalışmaya devam ediyor,
yalnızca geçiş animasyonu olmuyor.

### Tipografi

Tek aile: Archivo değişken. Genişlik ekseni yalnızca başlıklarda
açılıyor (`font-stretch: 106%` ile `118%` arası), metin normal
genişlikte kalıyor. Tek aileyle iki ayrı ses üretmenin yolu bu.
Mono font yok.

Font `scripts/font-altkume.sh` ile iki parçaya bölünmüş:

| dosya | içerik | boyut |
| --- | --- | --- |
| `archivo-tr-en.woff2` | latin harfler, rakamlar, noktalama, Ç Ö Ü ç ö ü ı | 51 KB |
| `archivo-tr-ek.woff2` | yalnızca Ğ ğ İ Ş ş | 6.6 KB |

`unicode-range` sayesinde İngilizce sayfa ek dosyayı hiç indirmiyor.
Fontsource'un hazır altkümeleri aynı iş için 172 KB istiyordu.

Font yüzü `src/layouts/Temel.astro` içinde satır içi üretiliyor, ayrı
bir CSS dosyasında değil. Nedeni taban yolu: düz CSS içinde
`/monti-labs` önekini okumanın yolu yok.

### Renk ve erişilebilirlik

Palet `src/styles/temel.css` içindeki tema bloklarında.
`npm run kontrast` bütün metin ve zemin çiftlerini WCAG 2.1 formülüyle
hesaplıyor ve AA altında kalan varsa derlemeyi durduruyor.

Guardi ve EcceHome'un özgün marka renkleri açık zeminde metin olarak
AA geçmiyor. Bu yüzden ikiye ayrıldılar: metin ve bağlantılar koyu
varyantı kullanıyor, özgün renk yalnızca görsel içinde yaşıyor.

Palet değişirse `scripts/kontrast-dogrula.mjs` içindeki liste de
değişmeli, yoksa doğrulama yanlış değerleri kontrol eder.

---

## İki dil

Astro yerleşik i18n. Türkçe varsayılan ve önek almıyor, İngilizce
`/en` altında.

```
/monti-labs/       Türkçe
/monti-labs/en/    İngilizce
```

Metinler `src/icerik/tr.ts` ve `src/icerik/en.ts` içinde, ikisi de
`src/icerik/tip.ts` içindeki `Icerik` tipini karşılamak zorunda. Bir
dilde eksik kalan alan derlemede hata verir, yarım çevrilmiş bir sayfa
yayına çıkamaz.

Sayfa bağlantıları `sayfaYolu()` üstünden, varlık yolları `yol()`
üstünden üretilir. İkisini karıştırmayın: varlığa dil öneki takılırsa
yayında 404 verir.

Tam adres üretirken iki yardımcı var:

| yardımcı | girdi | kullanım |
| --- | --- | --- |
| `tamAdres()` | taban yolu eklenmemiş | OG görseli gibi varlıklar |
| `mutlak()` | taban yolu zaten eklenmiş | `sayfaYolu()` çıktısı |

`sayfaYolu()` çıktısını `tamAdres()` içine verirseniz taban ikinci kez
eklenir ve adres `/monti-labs/monti-labs/` olur.

Yasal metinler yalnızca Türkçe yayınlanıyor. İngilizce sayfa da aynı
adreslere bağlanıyor, alt bilgide dil notu gösteriliyor.

---

## İçerik

### Sayfa metinleri

`src/icerik/tr.ts` ve `src/icerik/en.ts`.

Metin kuralları: kısa cümle, fiil önde, sıfat az, övgü yok. Uzun tire,
ok işareti ve ticari ve işareti kullanılmıyor. İngilizce metin
Türkçe'den çevrilmiyor, ayrı yazılıyor.

Yasaklı kalıplar: inovatif çözümler, dijital dönüşüm partneriniz, uçtan
uca çözümler, yeni nesil teknoloji, çözüm ortağınız, işinizi geleceğe
taşıyoruz, tutkulu ekip, müşteri odaklı.

### İşler

`src/content/calismalar/` altında, her ürün bir markdown dosyası.
Yeni ürün ekleme adımları o klasördeki `OKUBENI.md` içinde.

### Şirket bilgileri

`src/data/site.ts`. `DEGISTIR` ile başlayan alanlar arayüzde hiç
görünmez. Yayına çıkmadan önce doldurulmalı.

---

## Yayın

`main` dalına her gönderimde `.github/workflows/` altındaki iş akışı
siteyi derleyip GitHub Pages'e atıyor.

### Arama motorları

`src/data/site.ts` içindeki `ARAMA_MOTORLARINA_ACIK` şu an `false`.
Bu haldeyken her sayfaya `noindex, nofollow` basılıyor ve `robots.txt`
tüm botlara kapalı üretiliyor. Adres çalışmaya devam ediyor, link
paylaşılabiliyor, ama Google dizine almıyor.

İçerik ve şirket künyesi kesinleşince `true` yapın.

### Form

Form Web3Forms'a istemci tarafından gönderiliyor. Erişim anahtarı
boşken form hiç basılmıyor, yerine e-posta adresi kalıyor.

Discord bildirimi `PUBLIC_DISCORD_WEBHOOK` ortam değişkeninden
okunuyor. Adres depoda durmuyor, `scripts/yayinla.sh` enjekte ediyor.
Ayrıntı ve risk notu `src/data/site.ts` içinde.

### Kendi alan adına geçiş

1. `astro.config.mjs` içinde `TABAN` değerini `'/'` yapın.
2. `SITE_URL` değerini alan adınızla değiştirin.
3. `public/CNAME` dosyasını ekleyin.

Koddaki bütün yollar yardımcılardan üretildiği için başka değişiklik
gerekmiyor.

---

## Betikler

| komut | ne yapar |
| --- | --- |
| `npm run dogrula` | tip kontrolü, kontrast ve görsel boyutu |
| `npm run check` | Astro tip kontrolü |
| `npm run kontrast` | palet WCAG AA doğrulaması |
| `npm run boyut` | içerikteki görsel boyutları dosyalarla uyuşuyor mu |
| `npm run gorseller` | logo, OG ve uygulama ikonlarını üretir |
| `node scripts/is-gorselleri.mjs` | ham yakalamaları AVIF ve WebP'ye çevirir |
| `./scripts/font-altkume.sh` | Archivo alt kümelerini üretir (fonttools gerekir) |

`_assetler/` ham yakalamaları tutuyor ve yayına girmiyor.
`public/isler/` yayınlanan sürümleri tutuyor.
