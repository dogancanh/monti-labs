# Monti Labs sitesi

İşletmeler için dijital ürünler tasarlayan ve geliştiren bir teknoloji
şirketinin kurumsal sitesi. Türkçe ve İngilizce.

Astro 5, statik çıktı, sunucu yok. GitHub Pages üzerinde
`dogancanh.github.io/monti-labs` adresinde yayınlanıyor.

Tasarım yönü: Işık. Karar kaydı
`docs/superpowers/specs/2026-09-13-isik-yonu.md`; önceki kobalt yönünün
kaydı `2026-08-26-monti-labs-yeniden-tasarim-design.md` içinde duruyor.

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

### Tek zemin, ışık ve cam

Ana sayfa baştan sona mürekkep zeminde. Renk iki yerden geliyor:
zeminin altından süzülen kobalt ışık (`src/components/Isik.astro`,
girişte ve iletişim panelinde) ve o ışığın önünde duran cam paneller
(`.cam`, saydam kağıt ve ince kenar). Bölümler arasında zemin
değişmiyor; ayrım iş kartlarının zeminiyle yapılıyor: kağıt, kobalt
degrade, cam.

Sayfanın arkasındaki sabit renk katmanı (`ZeminKatmani.astro`) ve
`data-tema` mekanizması duruyor: yasal sayfalar kağıt temasında ve
sabit başlık rengini etkin bölümden alıyor. Kartlar `data-tema` değil
`.kart-*` sınıfı taşıyor, yoksa gözlemci kağıt renkli kartı bölüm sanıp
sayfa zeminini değiştirirdi.

Sabit başlık en üstteyken saydam, kaydırınca arkasına yarı saydam
zemin ve bulanıklık geliyor. Kağıt renkli iş kartının üstünden geçerken
yazının kaybolmaması için.

### Hareket

Üç döngü, hepsi dekoratif katmanda: ışığın nefesi (6 s), panellerin
yüzmesi (5 s, üç panel farklı fazda) ve girişte ışığın imleci 30 px'e
kadar gecikmeli izlemesi (yalnızca ince işaretçili cihazlarda). Orta
paneldeki parçalar sayfa açılışında bir kez sırayla oturuyor, sağ
paneldeki kod bir kez yazılıyor.

Kartlar ve Duruş satırları görüş alanına girerken 16 px alttan
beliriyor (`.kayar`); iş kartının üstüne gelince görsel 8 px yükseliyor.
`prefers-reduced-motion` altında hepsi duruyor, son kare kalıyor.

JavaScript kapalıyken bölümler kendi zeminini basıyor, başlık statik
hale geliyor ve `.kayar` parçalar açık başlıyor.

### Tipografi

Tek aile: Archivo değişken. Genişlik ekseni yalnızca başlıklarda
açılıyor (`'wdth' 110`), metin normal genişlikte kalıyor. Tek aileyle
iki ayrı ses üretmenin yolu bu. Mono font yok.

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

Üç zemin var: mürekkep (sayfa ve cam kart), kobalt (kart) ve kağıt
(kart ve yasal sayfalar). Ürünlere özel zemin rengi yok; ürün rengi
yalnızca ekran görüntüsünün içinde yaşıyor.

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

Vitrinde üç iş var: EcceHome, Montipass, Next Shift. Inkstay ve Guardi
dosyaları ve görselleri duruyor, `onayBekliyor: true` ile yayın dışı.
Görsel kaynakları ve kırpma notları `scripts/is-gorselleri.mjs` içinde.

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

Form tek alan: e-posta adresi. Web3Forms'a istemci tarafından
gönderiliyor. Erişim anahtarı boşken form hiç basılmıyor, yerine
e-posta adresi kalıyor. KVKK onay kutusu duruyor.

Discord bildirimi `PUBLIC_DISCORD_WEBHOOK` ortam değişkeninden
okunuyor. Adres depoda durmuyor, `scripts/yayinla.sh` enjekte ediyor.
Ayrıntı ve risk notu `src/data/site.ts` içinde.

### montilabs.co (Vercel)

Asıl adres. Vercel projesi bu depoya bağlı olduğunda `main`'e her
gönderim yayına çıkar. `astro.config.mjs` Vercel ortamını (`VERCEL=1`)
kendisi tanıyor: taban yolu `/`, site adresi
`VERCEL_PROJECT_PRODUCTION_URL`. Panelde ortam değişkeni gerekmiyor.

GitHub Pages adresi (`dogancanh.github.io/monti-labs`) alt yolda
duruyor ve `scripts/yayinla.sh` ile yayınlanıyor; Actions iş akışı
faturalama nedeniyle çalışmıyor.

Koddaki bütün yollar yardımcılardan üretildiği için iki hedef için de
başka değişiklik gerekmiyor.

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
