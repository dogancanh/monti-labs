/* ============================================================
   SAYFA METİNLERİ

   Yön: daha az yazı, daha fazla ürün. Ziyaretçi uzun paragraf
   okuyarak değil, işleri görerek güveniyor.

   "Problem" fikri markanın tamamı değil. Sitede yalnızca bir kez,
   manifestoda kullanılıyor. Hero'dan iletişime kadar tekrarlanmıyor.

   Dil: kısa, net, kendinden emin. Yapay kurumsal Türkçe yok.
   Yasaklı: inovatif çözümler, dijital dönüşüm partneriniz,
   uçtan uca çözümler, yeni nesil teknoloji, geleceğin teknolojileri,
   işinizi geleceğe taşıyoruz, çözüm ortağınız.
   ============================================================ */

export const tr = {
  /* ---------- Gezinti ----------
     Dört bağlantıdan fazlası yok. "Nasıl çalışıyoruz" ana sayfada
     bölüm olarak duruyor ama menüde yer kaplamıyor. */
  gezinti: {
    baglantilar: [
      { etiket: 'Çalışmalar', hedef: '#calismalar' },
      { etiket: 'Ne yapıyoruz', hedef: '#ne-yapiyoruz' },
      { etiket: 'Biz kimiz', hedef: '/biz-kimiz' },
    ],
    cagri: 'Birlikte çalışalım',
    /* Mobil panelde ek olarak gösterilenler */
    mobilEk: [{ etiket: 'İletişim', hedef: '#iletisim' }],
    menuAc: 'Menüyü aç',
    menuKapat: 'Menüyü kapat',
  },

  /* ---------- Hero ----------
     Otomasyon danışmanlığı gibi değil, ürün şirketi gibi konuşuyor.
     Uzun paragraf yok: başlık, kısa açıklama, çağrı, alan şeridi. */
  hero: {
    baslik: 'Fikirden ürüne, sistemden ölçeğe.',
    altMetin:
      'B2B ürünlerden özel yazılıma, otomasyondan entegrasyona kadar dijital sistemler tasarlıyor ve geliştiriyoruz.',
    alanlar: ['Dijital ürünler', 'Yazılım sistemleri', 'Otomasyon', 'Entegrasyon'],
    birincilEylem: { etiket: 'Birlikte çalışalım', hedef: '#iletisim' },
    ikincilEylem: { etiket: 'Çalışmalarımız', hedef: '#calismalar' },
  },

  /* ---------- Seçili çalışmalar ----------
     Sahiplik konusunda dürüst ama markayı küçültmeyen tek cümle. */
  calismalar: {
    kunye: 'Seçili çalışmalar',
    baslik: 'Geliştirdiğimiz ürünler.',
    altMetin: 'Monti Labs ekibinin geliştirdiği seçili ürünler ve dijital sistemler.',
    detayCagri: 'Projeyi incele',
    adresCagri: 'Siteyi aç',
  },

  /* ---------- Ne yapıyoruz ----------
     Dört alan. İkon kartı yok, numaralı editoryal satırlar. */
  neYapiyoruz: {
    kunye: 'Ne yapıyoruz',
    baslik: 'Dört alan.',
    kalemler: [
      {
        ad: 'Dijital ürünler',
        metin: 'SaaS, B2B, web ve mobil ürünler. Fikirden yayına.',
      },
      {
        ad: 'Yazılım sistemleri',
        metin: 'Özel platformlar, uygulamalar ve şirket içi sistemler.',
      },
      {
        ad: 'Otomasyon',
        metin: 'Tekrarlayan operasyonları hızlandıran ve güvenilir kılan sistemler.',
      },
      {
        ad: 'Entegrasyon',
        metin: "API'leri, servisleri ve veri kaynaklarını birbirine bağlayan çözümler.",
      },
    ],
  },

  /* ---------- Manifesto ----------
     Görsel bir duruş anı, makale değil. Sitede "problem" fikrinin
     kullanıldığı tek yer burası. */
  manifesto: {
    baslik: 'Teknoloji, ancak işe yaradığında değerlidir.',
    satirlar: [
      'Bazen yeni bir ürün geliştiririz.',
      'Bazen mevcut sistemleri birbirine bağlarız.',
      'Bazen tek bir otomasyon bütün akışı değiştirir.',
    ],
    kapanis: 'Ne gerekiyorsa onu tasarlar ve geliştiririz.',
    vurgu: 'Ne eksik, ne fazla.',
  },

  /* ---------- Nasıl çalışıyoruz ----------
     Dört adım, her biri tek cümle. Ürün şirketi dili. */
  nasilCalisiyoruz: {
    kunye: 'Nasıl çalışıyoruz',
    adimlar: [
      { no: '01', ad: 'Keşfet', metin: 'İşin nasıl yürüdüğünü ve neyin eksik olduğunu anlarız.' },
      { no: '02', ad: 'Tasarla', metin: 'Kullanılacak şeyi tasarlarız, gösterilecek şeyi değil.' },
      { no: '03', ad: 'Geliştir', metin: 'Küçük parçalar halinde yayına alır, erken göstermeye başlarız.' },
      { no: '04', ad: 'Ölçekle', metin: 'İşleyen sistemi büyütür, ekibinize devrederiz.' },
    ],
  },

  /* ---------- Biz kimiz ----------
     Ana sayfada önizleme. Uzun biyografi yok. */
  bizKimiz: {
    kunye: 'Biz kimiz',
    ozet: 'Monti Labs, ürün tasarımı ile mühendisliği aynı masada birleştiren iki kurucu ortak tarafından geliştiriliyor.',
    cagri: 'Biz kimiz',
    cagriHedef: '/biz-kimiz',
  },

  /* ---------- İletişim ---------- */
  iletisim: {
    kunye: 'İletişim',
    baslik: 'Birlikte bir şey geliştirelim.',
    metin:
      'Yeni bir ürün, mevcut bir sistem veya geliştirmek istediğiniz bir fikir. Biraz anlatın, devamını birlikte konuşalım.',
    alanlar: {
      adSoyad: 'Ad soyad',
      eposta: 'E-posta',
      sirket: 'Şirket',
      mesaj: 'Projenizden biraz bahsedin',
    },
    opsiyonelEtiketi: 'isteğe bağlı',
    gonderButonu: 'Gönder',
    gonderiliyor: 'Gönderiliyor',
    basariMesaji: 'Mesajınız bize ulaştı. {sure} içinde dönüş yapacağız.',
    hataMesaji:
      'Mesaj gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin, ya da doğrudan {eposta} adresine yazın.',
    kvkkOnayOncesi:
      'Formu göndererek, iletişim bilgilerimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum. Detaylar için ',
    kvkkOnayBaglantiEtiketi: 'Aydınlatma Metni',
    kvkkOnaySonrasi: '.',
    alternatifOnce: 'Doğrudan yazmayı tercih ederseniz: ',
    formAltMetin: '{sure} içinde dönüş yapıyoruz.',
  },

  /* ---------- Alt bilgi ---------- */
  footer: {
    kisaTanim: 'Dijital ürünler ve iş sistemleri geliştiriyoruz.',
    baglantilar: [
      { etiket: 'Çalışmalar', hedef: '/#calismalar' },
      { etiket: 'Ne yapıyoruz', hedef: '/#ne-yapiyoruz' },
      { etiket: 'Biz kimiz', hedef: '/biz-kimiz' },
      { etiket: 'İletişim', hedef: '/#iletisim' },
    ],
    telifSablonu: '© {yil} Monti Labs',
  },

  /* ---------- /biz-kimiz sayfası ---------- */
  bizKimizSayfasi: {
    baslik: 'Monti Labs',
    ozet:
      'Dijital ürünler ve iş sistemleri geliştiren bir teknoloji şirketi. Kendi ürünlerimizi geliştiriyor, aynı işi başka şirketler için de yapıyoruz.',
    kurucularKunye: 'Kurucular',
    yaklasimKunye: 'Yaklaşım',
    yaklasimBaslik: 'Ürün, mühendislik ve iş sistemleri aynı masada.',
    yaklasimMetin:
      'Bir ürünün tasarımı, altyapısı ve işletmeye dokunan tarafı birbirinden ayrı düşünülmez. Üçünü birlikte kurar, çalışır halde teslim ederiz.',
    cagriBaslik: 'Birlikte bir şey geliştirelim.',
    cagri: 'Bize yazın',
  },

  /* ---------- 404 ---------- */
  bulunamadi: {
    baslik: 'Bu sayfa yok.',
    metin: 'Aradığınız adres değişmiş veya hiç var olmamış olabilir.',
    buton: 'Ana sayfaya dön',
  },
} as const

export const icerik = tr
export type Icerik = typeof tr
