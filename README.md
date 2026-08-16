# Monti Labs kurumsal sitesi

Astro 5 ile kurulmuş, tek sayfalık kurumsal site. Türkçe.

Marka kimliği ve metinler `monti-labs-brand` paketinden gelir. Renkler, logo
kuralları, marka sesi ve sayfa yapısı o paketin şartlarına göre uygulanmıştır.

---

**Yayın:** GitHub Pages, `main` dalına her gönderimde otomatik.
Adres: `https://dogancanh.github.io/monti-labs/`

---

## Çalıştırma

```bash
npm install
npm run dev          # http://localhost:4321/monti-labs
```

Derleme ve önizleme:

```bash
npm run build
npm run preview
```

Site bir alt yolda yayınlandığı için yerel adres de `/monti-labs` ile
başlar. Koddaki bütün mutlak yollar `src/lib/yol.ts` içindeki yardımcıdan
geçer; elle yazılan `"/dosya.png"` yolları taban yolunu atlar ve yayında
kırılır.

Marka görsellerini yeniden üretmek için (logo, paylaşım görseli, ikonlar):

```bash
node scripts/gorsel-uret.mjs
```

Bu betik `monti-labs-brand/assets/logo/` klasörünü kaynak alır. Marka paketi
başka bir yerdeyse betiğin içindeki `MARKA_KLASORU` sabiti güncellenir.

---

## Yayına almadan önce

Aşağıdaki üç iş tamamlanmadan site canlıya alınmamalıdır.

### 1. Şirket bilgileri

`src/data/site.ts` içinde `DEGISTIR` ile işaretli alanlar var. Hepsi
doldurulmalı. Eksik kalan alanlar sayfada gösterilmez, yani site kırılmaz,
ama iletişim bilgisi olmayan bir site iş yapmaz.

Kontrol için:

```bash
grep -n "DEGISTIR" src/data/site.ts
```

### 2. Yasal metinler

`src/data/legal/` altındaki üç dosya **taslaktır**. Her birinin başında bu
uyarı yazılı, ve sayfalar taslak olduğu sürece ekranda uyarı kutusu gösterir.

İki iş gerekiyor:

- Köşeli parantezli alanların doldurulması (`[RESMİ UNVAN]`, `[ADRES]` gibi)
- Hukuki inceleme

İnceleme tamamlandığında her dosyada `hukukiIncelemeGerekli: false` yapılır,
uyarı kutusu kendiliğinden kalkar.

Kontrol için:

```bash
grep -roh "\[[A-ZÇĞİÖŞÜ][A-ZÇĞİÖŞÜ /-]*\]" src/data/legal/*.ts | sort | uniq -c
```

### 3. Vaka çalışmaları

`src/content/calismalar/` altında dört vaka var, hepsi `onayBekliyor: true`.
Metinler projelerin bilinen kapsamından yazıldı; müşteri adı, marka adı ve
canlı bağlantı hiçbirinde yok.

Ayrıntılar ve doğrulanacak tek rakam için:
`src/content/calismalar/OKUBENI.md`

Onaylanan vakalarda `onayBekliyor: false` yapılır.

---

## Yapı

```
src/
├── content.config.ts        vaka çalışması şeması
├── content/calismalar/      vaka içerikleri (markdown)
├── data/
│   ├── site.ts              şirket bilgisi, gezinti, meta
│   ├── icerik.ts            tüm sayfa metinleri
│   └── legal/               yasal metin taslakları
├── styles/
│   ├── tokens.css           marka token'ları
│   └── global.css           temel stil katmanı
├── components/
│   ├── Isaret.astro         logo işareti (SVG)
│   ├── SurecSeridi.astro    hero'daki süreç karşılaştırması
│   ├── BolumBasi.astro      bölüm başlığı ve kama
│   ├── KalemListesi.astro   ad + metin listesi
│   ├── Yaklasim.astro       dört adımlı akış
│   ├── Calismalar.astro     vaka kartları
│   └── IletisimFormu.astro  form ve istemci mantığı
├── layouts/
│   ├── Temel.astro          head, başlık, alt bilgi
│   └── Yasal.astro          yasal sayfa düzeni
└── pages/
    ├── index.astro
    ├── kvkk.astro, gizlilik.astro, cerezler.astro
    ├── 404.astro
    ├── robots.txt.ts
    └── api/iletisim.ts      form uç noktası (sunucuda çalışır)
```

Metinler koddan ayrıdır. İleride İngilizce sürüm eklenirse `src/data/` altına
`icerik.en.ts` konur ve seçim yapılır; bileşenlerin değişmesi gerekmez.

---

## Yeni vaka eklemek

`src/content/calismalar/` altına bir `.md` dosyası koymak yeterli. Şema
`src/content.config.ts` içinde tanımlı, alanlar `OKUBENI.md` içinde anlatılmış.

Ölçülmüş bir sonuç yoksa `sonuc` alanı hiç yazılmaz. Kart o satırı basmaz.
Marka sesi doğrulanamayan sayı yazılmasını yasaklıyor.

---

## Form

GitHub Pages yalnızca statik dosya sunar, sunucu tarafı uç nokta çalışmaz.
Bu yüzden form üçüncü taraf bir servise gönderilir.

**Bağlamak için:** [web3forms.com](https://web3forms.com) adresine e-posta
adresinizi yazın, gelen ücretsiz erişim anahtarını `src/data/site.ts`
içindeki `FORM_SERVISI.anahtar` alanına yapıştırın. Hesap açmak gerekmiyor.

Anahtar boşken form devre dışı kalır ve üstünde bunu söyleyen bir not
gösterilir. Not yalnızca alan boşken görünür.

Doğrulama istemcide yapılır. Statik barındırmada bu bir güvenlik sınırı
değildir; istenmeyen gönderimi asıl eleyen servisin kendi filtresi ve
formdaki bal küpü alanıdır.

### Sunucuya taşımak isterseniz

Sunucu tarafı uç nokta silinmedi, `sunucu/iletisim-uc-noktasi.ts`
dosyasında duruyor. Railway, Vercel veya herhangi bir Node ortamına
geçerseniz:

1. `@astrojs/node` (veya ilgili adaptör) kurulur
2. Dosya `src/pages/api/iletisim.ts` konumuna geri taşınır
3. `astro.config.mjs` içine adaptör eklenir
4. Formun `data-adres` hedefi `/api/iletisim` yapılır
5. `.env.example` içindeki değişkenler tanımlanır

Uç nokta sunucu tarafı doğrulama, bal küpü ve iki kademeli hız sınırı
içerir: beş gönderim ve altmış ham istek, on beş dakikalık pencerede.
Doğrulama hataları gönderim sayılmaz, yani formu yanlış dolduran kullanıcı
kilitlenmez.

---

## Tasarım kararları

**Fontlar.** Başlıklarda Outfit, gövdede IBM Plex Sans, etiket ve veride
IBM Plex Mono. Outfit logodaki kelime markasıyla akraba geometrik bir grotesk.
Üçünün de `latin` ve `latin-ext` altkümeleri yüklenir: `ı` latin içinde,
`İ ğ Ğ ş Ş` latin-ext içindedir. İkisi birden yüklenmezse Türkçe metin bozulur.

**Kelime markası.** Hiçbir yerde yeniden dizilmez. Başlıkta ve paylaşım
görselinde marka paketindeki resmî yatay kilit kullanılır, yalnızca rengi
değiştirilir. Kaynak PNG vektöre çevrildiğinde `logo-yatay.png` yerine SVG
konabilir.

**Renk dağılımı.** Sayfa kağıt renginde yaşar. Çalışmalar ve Ürünler krem
zeminde, kapanış bölümü kobalt. Kobalt zemin sayfada yalnızca bir kez kullanılır,
marka kuralı bunu şart koşuyor.

**Diyagonal.** Logodaki 43.5 derecelik açı iki yerde yapısal öğe olarak
kullanılır: bölüm başlıklarındaki kama ve süreç şeridi. Başka yerde yoktur.

**İmza öğe.** Hero'daki süreç şeridi. Aynı işin elle ve sistemle yapılan iki
hali, gerçek dakikalarla orantılı çizilir. Sayılar temsilîdir ve ekranda öyle
etiketlenmiştir.

---

## Yayın

`main` dalına gönderim yapıldığında `.github/workflows/yayinla.yml`
çalışır: bağımlılıkları kurar, tip denetimi yapar, derler ve GitHub
Pages'e yükler. Ayrı bir gizli anahtar gerekmez.

Adres ve taban yolu `actions/configure-pages` çıktısından gelir, bu yüzden
depo adı değişirse yollar kendiliğinden güncellenir.

### Arama motorları

Site şu anda **arama motorlarına kapalı**. İçerik taslak durumda olduğu
için her sayfada `noindex, nofollow` etiketi var ve `robots.txt` tüm
botlara kapalı üretiliyor. Adres çalışır, link paylaşabilirsiniz.

Açmak için `src/data/site.ts` içindeki `ARAMA_MOTORLARINA_ACIK` değerini
`true` yapmak yeterli. Hem etiket hem `robots.txt` aynı değere bakıyor.

### Kendi alan adınıza geçmek

1. `public/CNAME` dosyasına alan adını yazın
2. `astro.config.mjs` içinde `TABAN` değerini `'/'` yapın
3. DNS kayıtlarını GitHub Pages'e yönlendirin
4. Depo ayarlarından özel alan adını tanımlayın
