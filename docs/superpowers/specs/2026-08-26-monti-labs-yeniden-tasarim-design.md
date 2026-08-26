# Monti Labs: Site ve Görsel Kimlik Yeniden Tasarımı

Tarih: 2026-08-26
Durum: uygulandı, `yeniden-tasarim` dalında

Uygulama sırasında değişen kararlar bölüm 13'te.

---

## 1. Karar özeti

| Konu | Karar |
|---|---|
| Yön | KOBALT. Renk malzeme olarak kullanılıyor, sayfa bölüm bölüm zemin değiştiriyor. |
| Dil | Türkçe varsayılan, İngilizce ikinci dil. |
| Kapsam | Yalnızca web sitesi. Logo korunuyor. |
| Vitrin | Inkstay, Guardi, EcceHome. Detay sayfası açılmıyor. |
| Kod | Mevcut repo, `yeniden-tasarim` dalı. Astro 5, statik çıktı. |
| Adres | `dogancanh.github.io/monti-labs` alt yolunda kalıyor. |
| Kurucu görseli | Yok. Tipografi çözüyor. |
| Şirket künyesi | Boş alanlar arayüzde hiç görünmüyor. Site arama motorlarına kapalı kalıyor. |

---

## 2. Konumlanma

Monti Labs, işletmeler için dijital ürünler tasarlayan ve geliştiren bir teknoloji şirketi. Kendi ürünlerini de geliştiriyor.

Çekirdek duruş: **gösterilmek için değil, kullanılmak için.**

Bu cümle iki iş görüyor. Tasarımın kısıtlılığını meşrulaştırıyor: efekt yok, çünkü marka efekt satmıyor. Metnin abartısızlığını meşrulaştırıyor: övgü yok, çünkü kanıt çalışan üründe.

Site şu üç şeyi yapmıyor: hizmet listelemiyor, süreç şeması çizmiyor, kabiliyet saymıyor. Kabiliyet işlerin künyesinden okunuyor.

---

## 3. Renk

Renk bu tasarımda dekorasyon değil, malzeme. Sayfanın arkasında tek bir sabit katman var, bölüm sınırlarında rengi değişiyor. Kaydırma odadan odaya geçmek gibi oluyor.

### Marka paleti

| Rol | Değer | Not |
|---|---|---|
| Kobalt | `#1F2FA0` | Giriş ve kapanış zemini, marka rengi |
| Kağıt | `#FBF6EA` | Açık zemin, kobalt ve mürekkep üstü metin |
| Mürekkep | `#0D1128` | Koyu zemin, kağıt üstü metin |
| Kobalt üstü ikincil metin | `#B9BAD4` | Kağıdın kobalt üstünde yüzde 70 karışımı |
| Kağıt üstü ikincil metin | `#676872` | Mürekkebin kağıt üstünde yüzde 62 karışımı |

### Ürün bölümü zeminleri

| Ürün | Zemin | Metin vurgusu | Ortam rengi |
|---|---|---|---|
| Inkstay | `#16130F` | `#C9A961` | `#C9A961` |
| Guardi | `#EDEEF6` | `#4A5FCC` | `#7583F1` |
| EcceHome | `#FBF6EA` | `#8A6218` | `#E1C76D` |

Guardi ve EcceHome'un özgün marka renkleri (`#7583F1`, `#E1C76D`) açık zeminde metin olarak WCAG AA'yı geçmiyor. Bu yüzden ikiye ayrıldı: metin ve bağlantılar koyu varyantı kullanıyor, özgün renk yalnızca görsel içinde ve metin olmayan ince çizgide yaşıyor.

### Doğrulanmış kontrast oranları

Hesaplama WCAG 2.1 bağıl parlaklık formülüyle yapıldı.

| Çift | Oran | Sonuç |
|---|---|---|
| Kağıt üstü kobalt zemin | 9.87:1 | AAA |
| Kağıt üstü mürekkep | 17.26:1 | AAA |
| Inkstay vurgusu / koyu zemin | 8.23:1 | AAA |
| Guardi koyu vurgusu / açık zemin | 4.78:1 | AA |
| EcceHome koyu vurgusu / kağıt | 5.07:1 | AA |
| Kobalt üstü ikincil metin | 5.60:1 | AA |
| Kağıt üstü ikincil metin | 5.12:1 | AA |
| Guardi zemini üstü mürekkep metin | 16.10:1 | AAA |

Reddedilen değerler: `#7583F1` açık zeminde 2.90:1, `#E1C76D` kağıt üstünde 1.55:1. İkisi de metin olarak kullanılmıyor.

### Logo çözümü

Başlıkta yalnızca işaret kullanılıyor: iki keskin tepe. Kelime markası sitenin kendi tipografisiyle diziliyor. Böylece logo korunuyor ama başlıkta iki farklı font çakışmıyor.

Tam kilit (işaret ve kelime markası birlikte) alt bilgide, OG görselinde ve favicon setinde kalıyor.

İşaret kobalt zeminde kağıt renginde, açık zeminlerde kobalt renginde, koyu zeminlerde kağıt renginde basılıyor. Tek renk, her zaman düz.

---

## 4. Tipografi

Tek aile: **Archivo**, değişken sürüm.

Paket doğrulandı: `@fontsource-variable/archivo@5.3.0`, OFL-1.1, `font-weight: 100 900`, `font-stretch: 62% 125%`, altkümeler `latin`, `latin-ext`, `vietnamese`. Türkçe karakterler `latin-ext` altkümesinde.

Mono font yok. Mono etiket hem geliştirici portfolyosu klişesi hem de eski Monti sitesinde zaten vardı. Tek aile daha kısıtlı, daha karakterli.

### Ölçek

| Rol | Ayarlar |
|---|---|
| Görüntü başlığı | `font-stretch: 118%`, ağırlık 600, `clamp(2.75rem, 7.5vw, 7rem)`, tracking `-0.03em`, satır yüksekliği `0.94` |
| Bölüm başlığı | `font-stretch: 110%`, ağırlık 600, `clamp(1.75rem, 4vw, 3rem)`, tracking `-0.02em`, satır yüksekliği `1.05` |
| Ürün adı | `font-stretch: 118%`, ağırlık 600, `clamp(2.25rem, 5vw, 4rem)`, tracking `-0.025em` |
| Metin | `font-stretch: 100%`, ağırlık 400, `1.0625rem`, satır yüksekliği `1.55`, ölçü 58ch |
| Etiket | `font-stretch: 100%`, ağırlık 500, `0.6875rem`, tracking `+0.16em`, büyük harf |

Genişlik ekseni yalnızca başlıklarda açılıyor. Metin normal genişlikte kalıyor. Bu, tek aileyle iki ayrı ses üretmenin yolu.

### İki dil davranışı

Türkçe başlıklar İngilizce'den yaklaşık dörtte bir uzun. Aynı `clamp` her iki dilde çalışıyor, ayrı boyut tablosu tutulmuyor.

Görüntü başlıkları elle iki satıra kurgulanıyor, `text-wrap` kararına bırakılmıyor. Hero'da satır sonu içerik dosyasında tanımlı, çünkü satır kırımı tasarımın parçası.

`lang` özniteliği doğru basılıyor, `hyphens` kapalı.

### Yükleme

Fontsource'un hazır altkümeleri kullanılmıyor: Türkçe bir sayfa için latin ve latin-ext dosyalarının ikisi birden gerekiyor ve toplam 172 KB ediyor. Bunun yerine `scripts/font-altkume.sh` iki ekseni koruyarak kendi alt kümesini üretiyor. Ayrıntı bölüm 13'te.

`font-display: swap`. Her iki font dosyası da `<link rel="preload">` ile öne alınıyor; ek dosya yalnızca Türkçe sayfada ön yükleniyor. İtalik hiç yüklenmiyor.

---

## 5. Layout

Sayfa kenar boşluğu: `clamp(1.25rem, 5vw, 6rem)`. İçerik 1440 px'te duruyor, ürün görselleri kenardan kenara taşabiliyor.

Grid 6 kolon. On iki kolon bu kadar az içerik için fazla; altı kolon hizalamayı daha kararlı yapıyor. Metin blokları 3 kolon, ürün görselleri 4 ile 6 kolon arası.

Boşluk ölçeği 4 px tabanlı: 4, 8, 12, 20, 32, 52, 84, 136. Eşit aralıklı ölçekten daha ritmik.

Yuvarlatma yok. Gölge yok. Kart yok. Bento yok. Ayırıcı olarak yalnızca zemin rengi değişimi ve tek piksel çizgi.

### Mobil

Mobil masaüstünün küçültülmüşü değil.

- Hero `min-height: 100svh` kullanıyor, `100vh` değil. Tarayıcı çubuğu açılıp kapandığında zıplama olmuyor.
- Ürün bölümleri mobilde tam ekran yüksekliğe zorlanmıyor, doğal yükseklikte akıyor. Zorlanırsa üç ürün mobilde beş ekran boyu sürüyor ve son ürüne kimse varmıyor.
- Ürün görselleri mobilde metnin üstünde, tam genişlikte.
- Başlık ölçeği `clamp` alt sınırında 2.75rem'de duruyor, daha aşağı inmiyor.
- Görseller AVIF önce, WebP yedek. Tek boyut sunuluyor; kaynak görseller zaten sunum ölçeğinde üretiliyor ve ikinci bir boyut dosya sayısını iki katına çıkarırken gözle görülür kazanç vermiyor.

---

## 6. Navigasyon

Sabit başlık. Solda işaret ve kelime markası. Sağda üç bağlantı ve dil değiştirici.

TR: İşler, Monti, İletişim
EN: Work, Monti, Contact

Dil değiştirici `TR / EN` biçiminde, etkin olan tam opaklıkta, diğeri ikincil metin renginde. Tıklayınca aynı sayfanın diğer dildeki karşılığına gidiyor, ana sayfaya atmıyor.

Başlık, altındaki bölümün zemin rengini alıyor ve metin rengini ona göre çeviriyor. Kendi arka planı yok, blur yok, kenarlık yok.

Mobilde işaret ve tek kelime (`Menü` / `Menu`). Tıklayınca tam ekran panel açılıyor, zemin o anki bölümün rengi. Bağlantılar görüntü başlığı ölçeğinde. Dil değiştirici panelin altında.

---

## 7. Sayfa mimarisi

Beş bölüm ve alt bilgi.

### 7.1 Giriş (kobalt zemin)

Ekranın büyük kısmı boş. Sol alt hizada iki satırlık görüntü başlığı. Altında tek satır alt metin. Sayfanın altında üç ürün adı, ince bir satır halinde, her biri kendi bölümüne bağlantı.

Buton yok. Kaydırma oku yok. Üç ürün adı hem yönlendirme hem de ilk kanıt.

### 7.2 İşler (üç bölüm, her biri kendi zemininde)

Her ürün ayrı bir bölüm ve ayrı bir zemin rengi.

Solda dikey sırayla: sahiplik etiketi, ürün adı, tek paragraf tanım, künye satırı, tek bağlantı.
Sağda gerçek ekran görselleri, ürünün karakterine göre kurgulanmış.

Sahiplik etiketi renk kodlu: Monti ürünlerinde o ürünün metin vurgusu, müşteri işinde ikincil metin rengi.

Kart yok, çerçeve yok, gölge yok. Ürünü zemin rengi ve ölçek ayırıyor.

### 7.3 Duruş (mürekkep zemin)

Üç ilke, her biri iki cümle. Süreç şeması değil, numaralı adım değil.

### 7.4 Monti (kağıt zemin)

Tek paragraf ve iki kurucu adı. Fotoğraf yok, biyografi yok, unvan enflasyonu yok.

### 7.5 İletişim (kobalt zemin)

Başlık bir soru. Altında e-posta adresi görüntü başlığı ölçeğinde, tıklanabilir. Form onun altında, daha sessiz.

E-posta öne alınıyor çünkü Türkiye'de B2B alıcısı forma yazmaktan çok e-posta atıyor. Form yine de duruyor, kaldırılmıyor.

### 7.6 Alt bilgi (mürekkep zemin)

Tam logo kilidi, kısa tanım, bağlantılar, yasal sayfalar, telif satırı. Şirket künyesi alanları dolu olduğunda görünüyor, boşken hiç basılmıyor.

---

## 8. Hareket

Üç süre belirteci: `--hizli: 260ms`, `--temel: 640ms`, `--yavas: 900ms`.
Tek yumuşatma eğrisi: `cubic-bezier(0.16, 1, 0.3, 1)`.

- Giriş başlığı: satır satır maske açılımı, `--temel`, satırlar arası 80 ms gecikme. Her şeyin aşağıdan yukarı belirmesi yok.
- Zemin rengi geçişi: `--yavas`. Sayfanın imza hareketi bu. IntersectionObserver bölüm sınırını görüyor, sabit katmanın `background-color` değeri değişiyor.
- Ürün görselleri: bölüm görüş alanına girerken maske aşağıdan yukarı açılıyor, `--temel`. Paralaks yok.
- Bağlantılar: alt çizgi soldan sağa, `--hizli`.

Sabit zemin katmanına `will-change: background-color` ve `transform: translateZ(0)` veriliyor, düşük güçlü Android cihazlarda kaydırma takılmasını önlemek için.

`prefers-reduced-motion: reduce` altında maske açılımları kapanıyor, zemin geçişi 200 ms'ye iniyor. Renk değişimi korunuyor çünkü hareket değil, durum değişimi.

---

## 9. Metin

### Kurallar

Kısa cümle. Fiil önde. Sıfat az. Övgü yok.
Uzun tire, ok işareti, ticari ve işareti kullanılmıyor.
Yasaklı: inovatif, dijital dönüşüm, uçtan uca, çözüm ortağı, yeni nesil, geleceğe taşıma, tutkulu ekip, müşteri odaklı.
İngilizce metin Türkçe'den çevrilmiyor, ayrı yazılıyor.

### Giriş

TR başlık, iki satır:
```
Gösterilmek için değil,
kullanılmak için.
```
TR alt metin: "İşletmeler için dijital ürünler tasarlıyor ve geliştiriyoruz. Kendi ürünlerimizi de."

EN başlık, iki satır:
```
Built to be used,
not demoed.
```
EN alt metin: "We design and build digital products for businesses. Our own included."

### İşler

**Inkstay**
Etiket: Monti ürünü / Monti product
Künye: iOS uygulaması, ürün tasarımı ve geliştirme / iOS app, product design and development
TR: "Dövme sonrası bakımı gün gün takip eden iOS uygulaması. Her dövme kendi iyileşme planını alır, hatırlatmalar o plana göre kurulur."
EN: "An iOS app that tracks tattoo aftercare day by day. Each tattoo gets its own healing plan, and reminders follow that plan."
Bağlantı: inkstay.app

**Guardi**
Etiket: Monti ürünü / Monti product
Künye: iOS uygulaması, ürün tasarımı ve geliştirme / iOS app, product design and development
TR: "İstenmeyen aramaları ve mesajları telefona ulaşmadan eler. Bilinmeyen numara sorgusu topluluk kayıtlarından beslenir."
EN: "Filters unwanted calls and messages before they reach the phone. Unknown number lookup draws on community records."

**EcceHome**
Etiket: Müşteri işi / Client work
Künye: E-ticaret platformu ve yönetim paneli / Commerce platform and admin panel
TR: "Ev tekstili markası için mağaza, ödeme akışı ve yönetim paneli. Sipariş, stok ve kargo tek yerden yürüyor."
EN: "Storefront, checkout and admin panel for a home textile brand. Orders, stock and shipping run from one place."
Bağlantı: eccehome.com.tr

### Duruş

Başlık TR: "Duruş" / EN: "Where we stand"

1. TR: "Küçük parçalar halinde yayına alırız. Erken görürsünüz, geç sürpriz olmaz."
   EN: "We ship in small pieces. You see it early, so nothing surprises you late."
2. TR: "Tasarım ile mühendislik aynı masada durur. İkisi ayrı yürüdüğünde ürün bozulur."
   EN: "Design and engineering sit at the same table. Products break when the two run apart."
3. TR: "Kurduğumuz sistemi ekibinize devrederiz. Bize bağlı kalmanız gerekmez."
   EN: "We hand the system over to your team. You do not have to stay dependent on us."

Üçüncü ilke markanın ajans olmadığını en net söyleyen cümle. Vitrinde tutulacak.

### Monti

Başlık TR: "Monti" / EN: "Monti"
TR: "Monti Labs, ürün tasarımı ile mühendisliği aynı masada tutan iki kurucu ortak tarafından yürütülüyor. Kendi ürünlerimizi geliştiriyoruz. Aynı işi başka şirketler için de yapıyoruz."
EN: "Monti Labs is run by two founding partners who keep product design and engineering at the same table. We build our own products. We do the same work for other companies."

İsimler: İsmail Semih Pehlivan, Doğancan Hırdavatçıoğlu. İkisi de kurucu ortak.

### İletişim

TR başlık: "Ne geliştirmek istiyorsunuz?"
EN başlık: "What do you want to build?"
E-posta: merhaba@montilabs.com
TR alt metin: "Kısa bir mesaj yeterli. Bir iş günü içinde dönüş yapıyoruz."
EN alt metin: "A short message is enough. We reply within one business day."

Form alanları: Ad soyad, E-posta, Şirket (isteğe bağlı), Mesaj. KVKK onayı. Gönder.

### Alt bilgi

TR: "İşletmeler için dijital ürünler."
EN: "Digital products for businesses."
Telif: "© 2026 Monti Labs"

### Sayfa üst verisi

TR başlık: "Monti Labs · İşletmeler için dijital ürünler"
TR açıklama: "Monti Labs, işletmeler için dijital ürünler tasarlayan ve geliştiren bir teknoloji şirketi. Kendi ürünlerini de geliştiriyor."
EN başlık: "Monti Labs · Digital products for businesses"
EN açıklama: "Monti Labs is a technology company that designs and builds digital products for businesses, and builds its own."

---

## 10. Teknik yapı

### Yığın

Astro 5, TypeScript, statik çıktı. Ek çatı yok. Etkileşim vanilla JS, toplam 4 KB'ın altında.

### İki dil

Astro yerleşik i18n. `defaultLocale: 'tr'`, `locales: ['tr', 'en']`, `prefixDefaultLocale: false`.

Alt yol ile birlikte adresler: `/monti-labs/` Türkçe, `/monti-labs/en/` İngilizce. Mevcut `src/lib/yol.ts` yardımcısı dil önekini de üstlenecek biçimde genişletiliyor.

Her sayfa `hreflang` bağlantılarını ve `x-default` değerini basıyor. Site haritası iki dili de içeriyor.

Metinler `src/icerik/tr.ts` ve `src/icerik/en.ts` içinde, aynı tipi paylaşıyor. Tip uyuşmazlığı derlemede hata veriyor, böylece bir dilde eksik metin yayına çıkamıyor.

### Çalışmalar koleksiyonu

Mevcut içerik koleksiyonu korunuyor, şeması iki dilli olacak biçimde genişletiliyor: `baslik` ve `kategori` alanları `{ tr, en }` nesnesine dönüyor. Görsel yolları ve boyutları aynı kalıyor.

Şemadan çıkarılanlar: `sunum` (her ürün zaten kendi kurgusuna sahip), `koyuZemin` (zemin rengi bölüme taşındı).

### Korunanlar

Yasal metinler (KVKK, gizlilik, çerezler) ve veri yapıları. Yalnızca sunumları yeni tasarıma uyarlanıyor, metinleri değişmiyor. İngilizce karşılıkları bu turda yazılmıyor, İngilizce sayfadan Türkçe yasal metinlere bağlanıyor.

Web3Forms form altyapısı, Discord bildirimi, GitHub Pages iş akışı, görsel varlıklar, favicon seti.

### Silinen bileşenler

`NeYapiyoruz.astro`, `NasilCalisiyoruz.astro`, `Manifesto.astro`, `BizKimizOnizleme.astro`, `Vitrin.astro`, `Gezinti.astro`, `IletisimFormu.astro`, `Gorsel.astro`, `Temel.astro`, `tokens.css`, `global.css`, `src/data/icerik.ts`. Hepsi yeniden yazılıyor.

`/biz-kimiz` sayfası kaldırılıyor. İçeriği ana sayfadaki Monti bölümüne iniyor. Eski adres 404'e düşmesin diye ana sayfaya yönlendiriliyor.

### Erişilebilirlik

Tüm metin çiftleri WCAG AA'yı geçiyor, tablo bölüm 3'te.
Odak halkası her zaman görünür, zemin rengine göre kağıt veya mürekkep.
Bölümler `<section>` ve `aria-labelledby` ile işaretli.
Görsellerin alt metinleri mevcut koleksiyondan geliyor, hepsi dolu.
Dil değiştirici `<a>` etiketi, `hreflang` ve `lang` öznitelikleriyle.
Formda görünür etiket var, yalnızca yer tutucu yok.

### Performans hedefleri

LCP 2.0 s altı, CLS 0.02 altı, toplam JS 4 KB altı, ilk ekran için yalnızca bir font dosyası.

---

## 11. Değerlendirilip reddedilenler

| Öneri | Neden reddedildi |
|---|---|
| "Neden Monti" bölümü, üç madde | Tam olarak yasaklanan kurumsal pazarlama dolgusu. Duruş bölümü zaten bu işi yapıyor. |
| "Aşağı kaydırın" yönlendirmesi | Üç ürün adı zaten yönlendirme. Ok ve kaydırma ipucu klişe. |
| Kurucu portreleri ve istatistik satırı | Kullanıcı fotoğraf istemedi. Önerilen istatistikler uydurmaydı. |
| Ürünlerin üç kolonlu grid'e alınması | Kart yapısını geri getiriyor, tam ekran kurguyu bozuyor. Mobil uzunluk sorunu doğal yükseklikle çözüldü. |
| Tüm hareketlerin tek 800 ms değerine sabitlenmesi | Farklı ölçekteki hareketler farklı süre ister. Üç belirteç yeterli ve tutarlı. |
| Archivo genişlik ekseninin açık kaynakta olmadığı iddiası | Yanlış. Paket doğrulandı, `font-stretch: 62% 125%` mevcut. |
| KAĞIT yönü | En zamansız ve en az riskli, ama ilk açılışta çarpmıyor. Wow şartını karşılamıyor. |
| RAKIM yönü | Mühendislik tarafını iyi taşıyor ama soğuk, ürün şirketinden çok altyapı şirketi gibi konuşuyor. Teknik notasyon estetiği son iki yılda yoruldu. |

---

## 12. Açık kalan konular

1. Şirket künyesi alanları (resmî unvan, adres, vergi dairesi ve numarası, MERSİS) boş. Doldurulana kadar `ARAMA_MOTORLARINA_ACIK` false kalıyor.
2. LinkedIn ve GitHub adresleri tanımlı değil. Tanımlanana kadar alt bilgide sosyal satır basılmıyor.
3. İngilizce yasal metinler bu turda yazılmıyor.
4. Alan adı `montilabs.com`'a taşınırsa `base` ve `SITE_URL` değişecek, `public/CNAME` eklenecek. Yapı buna hazır bırakılıyor.

---

## 13. Uygulama sırasında değişen kararlar

### Zemin geçişi 900 ms yerine 640 ms

Gelen bölümün metni kendi son rengiyle geliyor, zemin ise geçiş
halinde. 900 ms boyunca metin ara renklerin üstünde kalıyordu ve
kobalttan kağıda geçerken kontrast bir an için 2:1'in altına düşüyordu.

Süre 640 ms'ye indi ve tetikleme öne alındı: gelen bölümün üst kenarı
görüş alanının en üst yüzde yirmisine girdiğinde zemin değişmeye
başlıyor. Metin ekranın ortasına geldiğinde zemin çoktan yerine
oturmuş oluyor.

### Duruş bölümünde ölçü başlığın kendi üstüne taşındı

`ch` birimi kapsayıcının gövde yazı boyutundan hesaplanıyor. Ölçü
kapsayıcıya verildiğinde 3 rem'lik başlık dört satıra sıkışıyordu.
Ölçü artık başlığın kendi üstünde.

### Guardi görselleri cihaz çerçevesine kırpıldı

Kaynaklar App Store pazarlama kompozisyonlarıydı: kendi başlık
tipografileri, mor degrade ve parlama taşıyorlardı. Bunlar hem brief'in
yasakladığı şeyler hem de sitenin diliyle çakışıyorlardı.

`scripts/is-gorselleri.mjs` içine oran tabanlı bir kırpma adımı eklendi.
Geriye yalnızca gerçek arayüz kaldı.

### Font kendi alt kümesine indirgendi

Fontsource'un hazır altkümeleri Türkçe bir sayfa için 172 KB istiyordu
(latin 88 KB artı latin-ext 84 KB). Site yalnızca Türkçe ve İngilizce
metin gösterdiği için `scripts/font-altkume.sh` iki eksen korunarak
kendi alt kümesini üretiyor:

| dosya | içerik | boyut |
| --- | --- | --- |
| `archivo-tr-en.woff2` | latin, rakam, noktalama, Ç Ö Ü ç ö ü ı | 51 KB |
| `archivo-tr-ek.woff2` | yalnızca Ğ ğ İ Ş ş | 6.6 KB |

İngilizce sayfa ikinci dosyayı hiç indirmiyor.

### Görsel boyutu doğrulaması eklendi

Kırpma eklendiğinde üretilen dosyaların boyutu değişti ve içerik
dosyalarındaki `en` ve `boy` değerleri geride kaldı. Bu, görsel
yüklenirken sayfanın zıplamasına yol açıyor.

`npm run boyut` içerikteki değerleri gerçek dosyalarla karşılaştırıyor
ve uyuşmazlıkta derlemeyi durduruyor.

### Ölçülen sonuçlar

| Ölçüt | Hedef | Sonuç |
|---|---|---|
| İstemci JavaScript | 4 KB altı | 2.5 KB, satır içi, ayrı istek yok |
| İlk ekran font yükü (TR) | tek dosya | 58 KB, iki dosya, ikincisi 6.6 KB |
| Ana sayfa HTML | belirtilmedi | 24 KB, gzip 5.9 KB |
| CSS | belirtilmedi | 17 KB, gzip 4.3 KB |
| Kontrast çiftleri | hepsi AA | 19 çiftin hepsi geçti |
| Tip kontrolü | hatasız | 0 hata, 0 uyarı |
