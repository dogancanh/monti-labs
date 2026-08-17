/* ============================================================
   SAYFA METİNLERİ

   Metinler koddan ayrı tutulur. İleride İngilizce sürüm eklenirse
   bu dosyanın yanına `en.ts` konur ve `icerik` seçimi yapılır.

   Dil kuralı: kısa, net, kendinden emin. Yapay kurumsal Türkçe yok.
   Yasaklı ifadeler: inovatif çözümler, dijital dönüşüm partneriniz,
   uçtan uca çözümler, yeni nesil teknoloji, geleceğin teknolojileri,
   işinizi geleceğe taşıyoruz.
   ============================================================ */

export const tr = {
  /* ---------- 1. Gezinti ---------- */
  gezinti: {
    baglantilar: [
      { etiket: 'Çalışmalar', hedef: '#calismalar' },
      { etiket: 'Neler geliştiriyoruz', hedef: '#gelistirdiklerimiz' },
      { etiket: 'Nasıl çalışıyoruz', hedef: '#nasil-calisiyoruz' },
      { etiket: 'Monti Labs', hedef: '#monti-labs' },
    ],
    cagri: 'Projenizi anlatın',
  },

  /* ---------- 2. Hero ---------- */
  hero: {
    baslik: 'Her şirkette çözülmeyi bekleyen bir süreç vardır.',
    altMetin:
      'Elle yürüyen, hata veren, birbirinden kopuk sistemler arasında kaybolan işleri bulur; yazılım, otomasyon ve entegrasyonlarla çalışan sistemlere dönüştürürüz.',
    alanlar: ['Yazılım', 'Otomasyon', 'Entegrasyon', 'Dijital Ürünler'],
    birincilEylem: { etiket: 'Projenizi anlatın', hedef: '#iletisim' },
    ikincilEylem: { etiket: 'Çalışmaları görün', hedef: '#calismalar' },
  },

  /* ---------- 3. Manifesto ---------- */
  manifesto: {
    baslik: 'Teknolojiyle başlamıyoruz. Problemle başlıyoruz.',
    girisParagraflar: [
      'Bir işletmenin ihtiyacı her zaman yeni bir yazılım değildir.',
    ],
    bazen: [
      'Bazen iki sistemin doğru şekilde konuşması yeterlidir.',
      'Bazen saatler süren bir işi otomatikleştirmek gerekir.',
      'Bazen küçük bir araç, büyük bir operasyonel problemi çözer.',
      'Bazen de tekrar eden bir problem yeni bir ürüne dönüşür.',
    ],
    sorularGiris: 'Biz önce süreci anlamaya çalışırız.',
    sorular: [
      'Nerede zaman kaybediliyor?',
      'Nerede hata oluşuyor?',
      'Hangi iş hâlâ insanlara gereksiz yük bindiriyor?',
      'Hangi sistemler birbirinden kopuk çalışıyor?',
    ],
    kapanisGiris: 'Sonra probleme gereken kadar teknoloji uygularız.',
    vurgu: 'Ne eksik, ne fazla.',
    kapanisMetin: 'Çünkü iyi teknoloji en karmaşık olan değil,',
    kapanisVurgu: 'işi gerçekten çözen teknolojidir.',
    adimlar: [
      'Problemi anla.',
      'Süreci sadeleştir.',
      'Çözümü geliştir.',
      'Tekrar ediyorsa ürüne dönüştür.',
    ],
  },

  /* ---------- 4. Süreç görseli ----------
     Sayılar temsilîdir ve ekranda öyle etiketlenmiştir.
     Marka paketi örnek verinin açıkça örnek olmasını şart koşuyor. */
  surec: {
    kunye: 'Örnek süreç',
    baslik: 'Aynı iş, iki farklı hâli.',
    ad: 'Gelen siparişin faturaya dönmesi',
    not: 'Temsilî bir akıştır, müşteri verisi değildir. Süreçler şirkete göre değişir.',
    birim: 'dk',
    basinaEtiketi: 'sipariş başına',
    anlikEtiketi: 'anlık',
    oncesiEtiket: 'Bugün',
    sonrasiEtiket: 'Sistemle',
    gosterge: { elle: 'İnsanın yaptığı', sistem: 'Sistemin yaptığı' },
    adimlar: [
      { ad: 'Sipariş e-postası okunur', dakika: 5, kalir: false },
      { ad: 'Bilgiler tabloya girilir', dakika: 10, kalir: false },
      { ad: 'Stok elle kontrol edilir', dakika: 8, kalir: false },
      { ad: 'Fatura programına yeniden girilir', dakika: 12, kalir: false },
      { ad: 'Muhasebeye e-posta atılır', dakika: 5, kalir: false },
    ],
    sonrasiAdimlar: [
      { ad: 'Sipariş sisteme düşer', dakika: 0, otomatik: true },
      { ad: 'Stok ve fatura tek akışta üretilir', dakika: 0, otomatik: true },
      { ad: 'Yalnızca istisnalar kontrol edilir', dakika: 6, otomatik: false },
    ],
  },

  /* ---------- 5. Çalışmalar ---------- */
  calismalar: {
    kunye: 'Çalışmalar',
    baslik: 'Yaptığımız işler',
    altMetin: 'Her iş bir problemle başladı.',
    gizlilikNotu:
      'Müşteri adı ve canlı bağlantı paylaşılmıyor. Aşağıdaki anlatımlar kurulan sistemlerin yapısını gösteriyor.',
    alanlar: {
      problem: 'Problem',
      mudahale: 'Müdahale',
      sonuc: 'Sonuç',
    },
  },

  /* ---------- 6. Neler geliştiriyoruz ---------- */
  gelistirdiklerimiz: {
    kunye: 'Neler geliştiriyoruz',
    baslik: 'Çözümün biçimi problemin kendisine göre değişir.',
    kalemler: [
      {
        ad: 'Yazılım',
        metin:
          'İşletmenin çalışma biçimine göre tasarlanmış özel sistemler ve şirket içi araçlar. Hazır yazılımın yetmediği yerde.',
      },
      {
        ad: 'Otomasyon',
        metin:
          'Tekrarlayan operasyonel işleri insanlardan alan sistemler. Veri girişi, kontrol, bildirim, raporlama.',
      },
      {
        ad: 'Entegrasyon',
        metin:
          'Birbirinden kopuk yazılımları, API\'leri ve veri kaynaklarını konuşturan çözümler. Veri tek yerden akar.',
      },
      {
        ad: 'Dijital Ürünler',
        metin:
          'Tekrar eden iş problemlerini ölçeklenebilir dijital ürünlere ve B2B yazılımlara dönüştüren sistemler.',
      },
    ],
  },

  /* ---------- 7. Nasıl çalışıyoruz ---------- */
  nasilCalisiyoruz: {
    kunye: 'Nasıl çalışıyoruz',
    baslik: 'Dört adım. Sırayla ve atlamadan.',
    adimlar: [
      {
        no: '01',
        ad: 'Problem',
        eylem: 'Anla',
        metin:
          'Önce gerçek problemi anlarız. Talep edilen şey ile çözülmesi gereken şey her zaman aynı olmaz. Süreci konuşarak, gözlemleyerek ve doğru soruları sorarak başlarız.',
      },
      {
        no: '02',
        ad: 'Süreç',
        eylem: 'Sadeleştir',
        metin:
          'Mevcut akışı, kullanılan sistemleri ve darboğazları çıkarırız. Kimin ne zaman ne yaptığı netleşmeden hiçbir şey geliştirilmez.',
      },
      {
        no: '03',
        ad: 'Çözüm',
        eylem: 'Geliştir',
        metin:
          'Ölçüt tek: bu sistem olmasa problem çözülür mü? Çözülüyorsa yazılmaz. Çözülmüyorsa, gerektiği kadarı yazılır ve ekibinize devredilir.',
      },
      {
        no: '04',
        ad: 'Ürün',
        eylem: 'Ölçekle',
        metin:
          'Aynı problem farklı şirketlerde tekrar ediyorsa, çözümün bağımsız bir ürüne dönüşme potansiyelini değerlendiririz.',
      },
    ],
  },

  /* ---------- 8. Monti Labs ---------- */
  montiLabs: {
    kunye: 'Monti Labs',
    baslik: 'Gerçek iş problemlerinin etrafında teknoloji geliştiriyoruz.',
    paragraflar: [
      'Sektör seçmiyoruz. Bizi ilgilendiren şey problemin hangi alanda olduğu değil, ne kadar net tarif edilebildiği.',
      'Çalışan bir şeyi sırf yenisini yazmak için sökmüyoruz. Mevcut sistemleri değiştirmek yerine, gerektiğinde onların üzerine doğru katmanı kuruyoruz.',
      'Müşteriyi bize bağımlı hale getirmeyi hedeflemiyoruz. Geliştirdiğimiz sistemlerin biz olmadan da çalışabilir olması gerektiğine inanıyoruz. Devrettiğimizde iş biter, abonelik başlamaz.',
      'Bir problemi farklı şirketlerde tekrar tekrar görüyorsak, çözümün bağımsız bir ürüne dönüşüp dönüşemeyeceğine bakıyoruz.',
    ],
    akis: ['Müşteri problemi', 'İçgörü', 'Tekrar eden problem', 'Ürün'],
    urunNotu: 'Monti Labs ürünleri geliştiriliyor.',
  },

  /* ---------- 9. Kapanış ---------- */
  kapanis: {
    baslik: 'Çözmeye değer bir probleminiz mi var?',
    metin:
      'Ne yapılması gerektiğini bilmek zorunda değilsiniz. Problemi anlatmanız yeterli.',
    cagri: 'Projenizi anlatın',
  },

  /* ---------- 10. Form ---------- */
  iletisim: {
    kunye: 'İletişim',
    formBaslik: 'Projenizi anlatın',
    formAltMetin: 'Formu doldurun, {sure} içinde dönüş yapalım.',
    alanlar: {
      adSoyad: 'Ad soyad',
      eposta: 'E-posta',
      sirket: 'Şirket',
      mesaj: 'Probleminiz',
    },
    opsiyonelEtiketi: 'isteğe bağlı',
    mesajYardim:
      'Teknik detay gerekmiyor. Şu an işin nasıl yürüdüğünü ve nerede takıldığını anlatmanız yeterli.',
    gonderButonu: 'Gönder',
    gonderiliyor: 'Gönderiliyor',
    basariMesaji: 'Mesajınız bize ulaştı. {sure} içinde dönüş yapacağız.',
    hataMesaji:
      'Mesaj gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin, ya da doğrudan {eposta} adresine yazın.',
    kvkkOnayOncesi:
      'Formu göndererek, iletişim bilgilerimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum. Detaylar için ',
    kvkkOnayBaglantiEtiketi: 'Aydınlatma Metni',
    kvkkOnaySonrasi: '.',
    alternatifOnce: 'Form yerine doğrudan yazmayı tercih ederseniz: ',
  },

  /* ---------- 11. Alt bilgi ---------- */
  footer: {
    kisaTanim:
      'Gerçek iş problemlerini yazılım, otomasyon, entegrasyon ve dijital ürünlerle çözüyoruz.',
    alanlar: ['Yazılım', 'Otomasyon', 'Entegrasyon', 'Dijital Ürünler'],
    telifSablonu: '© {yil} Monti Labs',
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
