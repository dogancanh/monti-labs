# Monti Labs Yeniden Tasarım Uygulama Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Monti Labs sitesini spec'teki KOBALT yönüne göre sıfırdan kurmak: yeni palet, tek font ailesi, bölüm bazlı zemin geçişi, iki dil, sıfırdan içerik.

**Architecture:** Astro 5 statik çıktı. Sayfanın arkasında tek bir sabit zemin katmanı, bölümler saydam. Her bölüm kendi CSS değişkenlerini (`--zemin`, `--metin`, `--ikincil`, `--vurgu`) taşıyor; IntersectionObserver etkin bölümü bulup değerleri `:root` üstüne yazıyor, zemin katmanı geçişi yapıyor. JS kapalıyken `<noscript>` her bölüme kendi zeminini basıyor.

**Tech Stack:** Astro 5, TypeScript, `@fontsource-variable/archivo`, Astro i18n, sharp (görsel üretimi), GitHub Pages.

## Global Constraints

- Base path `/monti-labs`. Elle yazılan mutlak yol yasak, hepsi `src/lib/yol.ts` üstünden.
- Varsayılan dil `tr`, ikinci dil `en`, `prefixDefaultLocale: false`.
- Sunucu yok. Form istemci tarafından Web3Forms'a POST ediliyor.
- Tek font ailesi: `@fontsource-variable/archivo@5.3.0`, altkümeler `latin` ve `latin-ext`, yalnızca `standard` normal stil.
- Toplam istemci JS 4 KB altı. Çatı yok, bağımlılık eklenmiyor.
- Yuvarlatma yok, gölge yok, gradient yok, kart yok.
- Türkçe metinlerde uzun tire, ok işareti, ticari ve işareti kullanılmıyor.
- Tüm metin çiftleri WCAG AA. Doğrulama `npm run kontrast` ile.
- Her görev sonunda `npm run check` ve `npm run build` temiz geçmeli.

---

## Dosya haritası

| Dosya | Sorumluluk |
|---|---|
| `astro.config.mjs` | i18n, base, sitemap |
| `package.json` | Archivo eklenir, Outfit ve IBM Plex çıkarılır, `kontrast` betiği eklenir |
| `scripts/kontrast-dogrula.mjs` | Palet kontrast testi, CI kapısı |
| `src/styles/temel.css` | Sıfırlama, belirteçler, tipografi, tema blokları, yardımcı sınıflar |
| `src/lib/yol.ts` | Base path ve dil öneki birlikte |
| `src/lib/diller.ts` | Dil listesi, etkin dil, karşı dil adresi |
| `src/icerik/tip.ts` | `Icerik` tipi |
| `src/icerik/tr.ts` | Türkçe metinler |
| `src/icerik/en.ts` | İngilizce metinler |
| `src/data/site.ts` | Şirket bilgisi, form servisi, yayın bayrağı. Gezinti ve meta çıkarılır |
| `src/content.config.ts` | İki dilli çalışma şeması |
| `src/content/calismalar/*.md` | Frontmatter iki dilli hale gelir |
| `src/components/ZeminKatmani.astro` | Sabit zemin, gözlemci betiği, noscript yedeği |
| `src/components/Baslik.astro` | Sabit başlık, gezinti, mobil panel |
| `src/components/DilDegistirici.astro` | TR / EN |
| `src/components/Giris.astro` | Hero |
| `src/components/UrunBolumu.astro` | Tek ürün bölümü |
| `src/components/Isler.astro` | Üç ürünü sıralar |
| `src/components/Durus.astro` | Üç ilke |
| `src/components/Monti.astro` | Şirket paragrafı, kurucular |
| `src/components/Iletisim.astro` | E-posta ve form |
| `src/components/AltBilgi.astro` | Alt bilgi |
| `src/components/Resim.astro` | AVIF ve WebP, srcset |
| `src/layouts/Temel.astro` | HTML kabuğu, meta, hreflang, font ön yüklemesi |
| `src/layouts/Yasal.astro` | Yasal sayfa kabuğu |
| `src/pages/index.astro` | Türkçe ana sayfa |
| `src/pages/en/index.astro` | İngilizce ana sayfa |
| `src/pages/biz-kimiz.astro` | Ana sayfaya yönlendirme |

### Silinenler

`src/components/NeYapiyoruz.astro`, `NasilCalisiyoruz.astro`, `Manifesto.astro`, `BizKimizOnizleme.astro`, `Vitrin.astro`, `Gezinti.astro`, `IletisimFormu.astro`, `Gorsel.astro`, `src/styles/tokens.css`, `src/styles/global.css`, `src/data/icerik.ts`, `src/data/kurucular.ts`.

---

## Görev 1: Temel katman (yapılandırma, palet, kontrast testi)

**Files:**
- Modify: `package.json`, `astro.config.mjs`
- Create: `scripts/kontrast-dogrula.mjs`, `src/styles/temel.css`
- Modify: `src/lib/yol.ts`
- Create: `src/lib/diller.ts`
- Delete: `src/styles/tokens.css`, `src/styles/global.css`

**Interfaces:**
- Produces: `yol(hedef, dil?)`, `diller`, `varsayilanDil`, `karsiDil(dil)`, `dilYolu(dil, hedef)`
- Produces: CSS değişkenleri `--zemin --metin --ikincil --vurgu --cizgi`, tema blokları `[data-tema="kobalt|murekkep|kagit|inkstay|guardi|eccehome"]`

- [ ] Archivo kur, Outfit ve IBM Plex kaldır, `kontrast` betiğini `package.json`'a ekle
- [ ] `scripts/kontrast-dogrula.mjs` yaz: spec bölüm 3'teki her çift için WCAG 2.1 oranını hesapla, AA altındaysa sıfırdan farklı çıkış kodu ver
- [ ] `npm run kontrast` çalıştır, hepsinin geçtiğini gör
- [ ] `astro.config.mjs` içine i18n ekle
- [ ] `src/lib/yol.ts` ve `src/lib/diller.ts` yaz
- [ ] `src/styles/temel.css` yaz: sıfırlama, font yüzü, belirteçler, tema blokları, tipografi ölçeği, odak halkası, reduced motion
- [ ] Eski stil dosyalarını sil
- [ ] `npm run check` ve `npm run build` temiz

## Görev 2: İçerik katmanı

**Files:**
- Create: `src/icerik/tip.ts`, `src/icerik/tr.ts`, `src/icerik/en.ts`
- Modify: `src/data/site.ts`, `src/content.config.ts`, `src/content/calismalar/*.md`
- Delete: `src/data/icerik.ts`, `src/data/kurucular.ts`

**Interfaces:**
- Produces: `Icerik` tipi; `tr` ve `en` nesneleri aynı tipi karşılar. Tip uyuşmazlığı derlemede hata verir.
- Produces: Çalışma şeması `{ ad, baslik: {tr,en}, kategori: {tr,en}, sahiplik: 'monti'|'musteri', tema, gorseller, adres?, sira }`

- [ ] `tip.ts` yaz: spec bölüm 9'daki bütün metin alanlarını kapsayan tip
- [ ] `tr.ts` ve `en.ts` yaz, metinler spec'ten birebir
- [ ] `site.ts` sadeleştir: gezinti ve meta çıkar, şirket bilgisi ve form ayarları kalsın
- [ ] `content.config.ts` şemasını iki dilli yap, `sunum` ve `koyuZemin` alanlarını çıkar, `sahiplik` ve `tema` ekle
- [ ] Üç markdown dosyasının frontmatter'ını yeni şemaya taşı
- [ ] `npm run check` temiz

## Görev 3: Kabuk (zemin katmanı, başlık, düzen)

**Files:**
- Create: `src/components/ZeminKatmani.astro`, `src/components/Baslik.astro`, `src/components/DilDegistirici.astro`
- Rewrite: `src/layouts/Temel.astro`
- Delete: `src/components/Gezinti.astro`

**Interfaces:**
- Consumes: `yol`, `diller`, `Icerik`
- Produces: `Temel.astro` props `{ dil, icerik, baslik, aciklama, sayfa? }`
- Produces: Bölümler `data-tema` özniteliği taşır, `ZeminKatmani` bunu okur

- [ ] `ZeminKatmani.astro`: sabit div, `background-color: var(--aktif-zemin)`, `transition: background-color 640ms`, `will-change`, `translateZ(0)`
- [ ] Gözlemci betiği: `rootMargin: '0px 0px -80% 0px'`, etkin bölümün `--zemin` ve `--metin` değerlerini `:root` üstüne yazar
- [ ] `<noscript>` bloğu: her `[data-tema]` kendi zeminini basar
- [ ] `Baslik.astro`: işaret, kelime markası, üç bağlantı, dil değiştirici, mobil tam ekran panel
- [ ] `Temel.astro`: meta, OG, hreflang ve x-default, font ön yüklemesi, `lang` özniteliği
- [ ] `npm run build`, üretilen HTML'de hreflang ve base path doğru mu kontrol et

## Görev 4: Giriş bölümü

**Files:**
- Create: `src/components/Giris.astro`
- Modify: `src/pages/index.astro`
- Create: `src/pages/en/index.astro`

- [ ] `Giris.astro`: `min-height: 100svh`, iki satırlık başlık, alt metin, üç ürün bağlantısı
- [ ] Satır satır maske açılımı, 640 ms, 80 ms gecikme, `cubic-bezier(0.16, 1, 0.3, 1)`
- [ ] `prefers-reduced-motion` altında maske kapalı
- [ ] İki dilde de sayfayı derle, başlığın iki satırda kaldığını doğrula

## Görev 5: İşler bölümü

**Files:**
- Create: `src/components/Resim.astro`, `src/components/UrunBolumu.astro`, `src/components/Isler.astro`
- Delete: `src/components/Vitrin.astro`, `src/components/Gorsel.astro`

**Interfaces:**
- Consumes: çalışma koleksiyonu, `Icerik.isler`
- Produces: `UrunBolumu` props `{ calisma, dil, icerik }`

- [ ] `Resim.astro`: `<picture>`, AVIF sonra WebP, `srcset` 640 1024 1600, `width` `height`, `loading` ve `decoding`
- [ ] `UrunBolumu.astro`: solda etiket, ad, tanım, künye, bağlantı; sağda görseller. Kart yok, çerçeve yok
- [ ] Mobilde görsel üstte, doğal yükseklik, tam ekran zorlaması yok
- [ ] Görsel maske açılımı, bölüm görüş alanına girince
- [ ] Üç ürün için de sıra ve tema doğru mu kontrol et

## Görev 6: Duruş, Monti, İletişim, alt bilgi

**Files:**
- Create: `src/components/Durus.astro`, `src/components/Monti.astro`, `src/components/Iletisim.astro`, `src/components/AltBilgi.astro`
- Delete: `src/components/NeYapiyoruz.astro`, `NasilCalisiyoruz.astro`, `Manifesto.astro`, `BizKimizOnizleme.astro`, `IletisimFormu.astro`

- [ ] `Durus.astro`: üç ilke, mürekkep teması
- [ ] `Monti.astro`: tek paragraf, iki kurucu adı, kağıt teması
- [ ] `Iletisim.astro`: e-posta başlık ölçeğinde, form altında. Web3Forms POST, Discord bildirimi, KVKK onayı, başarı ve hata durumları
- [ ] Form gönderimi anahtar boşken devre dışı, yerine e-posta gösteriliyor
- [ ] `AltBilgi.astro`: tam logo kilidi, bağlantılar, yasal sayfalar, telif. Boş künye alanları basılmıyor

## Görev 7: Yan sayfalar ve yayın

**Files:**
- Rewrite: `src/layouts/Yasal.astro`, `src/pages/404.astro`
- Modify: `src/pages/kvkk.astro`, `gizlilik.astro`, `cerezler.astro`, `robots.txt.ts`, `site.webmanifest.ts`
- Rewrite: `src/pages/biz-kimiz.astro` (yönlendirme)
- Modify: `README.md`

- [ ] `Yasal.astro` yeni tasarıma uyarlanır, metinler değişmez
- [ ] `biz-kimiz.astro` ana sayfaya yönlendirir
- [ ] 404 yeni tasarımda, iki dilde
- [ ] Site haritası iki dili de içeriyor mu kontrol et
- [ ] `README.md` yeni yapıyı anlatacak biçimde güncellenir
- [ ] `npm run check`, `npm run kontrast`, `npm run build` üçü de temiz
- [ ] `npm run preview` ile masaüstü ve mobil genişlikte gözden geçir

---

## Doğrulama kapıları

Her görev sonunda:
```
npm run check      # astro check, tip hatası yok
npm run kontrast   # palet WCAG AA
npm run build      # statik çıktı üretiliyor
```

Son görevde ek olarak:
- Üretilen HTML'de `/monti-labs` öneki eksiksiz mi
- `hreflang` ve `x-default` doğru mu
- `dist/sitemap-0.xml` iki dili de içeriyor mu
- İstemci JS toplamı 4 KB altında mı
