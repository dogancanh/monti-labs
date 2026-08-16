/* ============================================================
   SAYFA METİNLERİ

   Kaynak: monti-labs-brand/04-metin-kutuphanesi.md
   Metinler koddan ayrı tutulur. İleride İngilizce sürüm eklenirse
   bu dosyanın yanına `en.ts` konur ve `icerik` seçimi yapılır.
   ============================================================ */

export const tr = {
  /* ---------- Hero ----------
     Marka paketindeki "Seçenek A — problem odaklı" kullanıldı. */
  hero: {
    baslik: 'Her şirkette kimsenin çözmediği bir süreç vardır.',
    altMetin:
      'Elle yürüyen, hata veren, insanın zamanını yiyen işler. Monti Labs bu işleri bulur, analiz eder ve çalışan bir sisteme dönüştürür.',
    birincilEylem: { etiket: 'Projenizi anlatın', hedef: '#iletisim' },
    ikincilEylem: { etiket: 'Ne yaptığımıza bakın', hedef: '#calismalar' },
  },

  /* ---------- Hero süreç şeridi ----------
     Sayfanın imza öğesi. Gerçek bir müşteri sonucu değil, açıkça
     örnek olarak işaretlenmiş bir gösterimdir. Marka paketi
     05-web-sitesi-brief.md "örnek veriler açıkça örnek olmalıdır,
     yuvarlak sayılar" diyor; sayılar bu yüzden yuvarlak. */
  seritSurec: {
    kunye: 'Örnek süreç',
    ad: 'Gelen siparişin faturaya dönmesi',
    not: 'Temsilî bir akıştır, müşteri verisi değildir. Süreçler şirkete göre değişir.',
    birim: 'dk',
    basinaEtiketi: 'sipariş başına',
    gosterge: { elle: 'İnsanın yaptığı', sistem: 'Sistemin yaptığı' },
    anlikEtiketi: 'anlık',
    durumlar: [
      {
        anahtar: 'bugun',
        etiket: 'Bugün',
        adimlar: [
          { ad: 'Sipariş e-postası okunur', dakika: 5, elle: true },
          { ad: 'Bilgiler tabloya girilir', dakika: 10, elle: true },
          { ad: 'Stok elle kontrol edilir', dakika: 8, elle: true },
          { ad: 'Fatura programına yeniden girilir', dakika: 12, elle: true },
          { ad: 'Muhasebeye e-posta atılır', dakika: 5, elle: true },
        ],
      },
      {
        anahtar: 'sistemle',
        etiket: 'Sistemle',
        adimlar: [
          { ad: 'Sipariş sisteme düşer', dakika: 0, elle: false },
          { ad: 'Stok ve fatura tek akışta üretilir', dakika: 0, elle: false },
          { ad: 'Yalnızca istisnalar kontrol edilir', dakika: 6, elle: true },
        ],
      },
    ],
  },

  /* ---------- Yaklaşım ---------- */
  yaklasim: {
    kunye: 'Yaklaşım',
    baslik: 'Nasıl çalışıyoruz',
    altMetin: 'Dört adım. Sırayla ve atlamadan.',
    adimlar: [
      {
        no: '01',
        ad: 'Problem',
        metin:
          'Önce gerçek problem bulunur. Talep edilen şey ile çözülmesi gereken şey her zaman aynı olmaz. Süreci konuşarak, gözlemleyerek ve doğru soruları sorarak başlarız.',
      },
      {
        no: '02',
        ad: 'Süreç',
        metin:
          'Mevcut akış, kullanılan sistemler, manuel adımlar ve darboğazlar çıkarılır. Kimin ne zaman ne yaptığı netleşmeden hiçbir şey geliştirilmez.',
      },
      {
        no: '03',
        ad: 'Çözüm',
        metin:
          'Gereksiz yere büyük bir yazılım yazmak yerine, problemi çözecek en yalın teknoloji seçilir. Bazen küçük bir otomasyon yeter. Bazen iki sistemi birbirine bağlamak. Bazen de sıfırdan bir ürün gerekir.',
      },
      {
        no: '04',
        ad: 'Ürün',
        metin:
          'Aynı problem farklı şirketlerde tekrar ediyorsa, çözüm tek bir projede bırakılmaz. Standartlaştırılır ve bağımsız bir ürüne dönüştürülür.',
      },
    ],
  },

  /* ---------- Ne geliştiriyoruz ---------- */
  hizmetler: {
    kunye: 'Ne geliştiriyoruz',
    baslik: 'Çözümün biçimi problemin kendisine göre değişir',
    altMetin: 'Sabit bir hizmet listemiz yok. Sabit bir yaklaşımımız var.',
    kalemler: [
      {
        ad: 'Süreç otomasyonu',
        metin:
          'Elle yapılan tekrarlı işleri sistemin devralması. Veri girişi, kontrol, bildirim, raporlama. İnsanın karar vermediği her adım.',
      },
      {
        ad: 'Sistem entegrasyonu',
        metin:
          'Birbiriyle konuşmayan yazılımlar arasında köprü kurmak. Veri tek yerden akar, kimse aynı bilgiyi iki kere girmez.',
      },
      {
        ad: 'Ara katman geliştirme',
        metin:
          'Mevcut sisteminizi değiştirmeden üzerine bir katman eklemek. Altyapıya dokunmadan eksik olan işlevi kazandırmak.',
      },
      {
        ad: 'Şirket içi araçlar',
        metin:
          'Ekibin günlük işini yürüttüğü, tam ihtiyaca göre yazılmış paneller ve iç sistemler. Hazır yazılımın yetmediği yerde.',
      },
      {
        ad: 'Pano ve raporlama',
        metin:
          'Dağınık veriyi tek ekranda toplamak. Karar vermek için Excel açmak zorunda kalmamak.',
      },
      {
        ad: 'API ve servis geliştirme',
        metin:
          'Sisteminizin dışarıyla konuşabilmesi için gereken servisler. Kendi ürününüz veya iş ortaklarınız için.',
      },
      {
        ad: 'Yapay zekâ destekli iş akışları',
        metin:
          'Metin, belge ve talep gibi yapısız verinin işlenmesi. Yapay zekânın gerçekten fark yarattığı yerlerde, moda olduğu için değil.',
      },
      {
        ad: 'B2B ürünler ve SaaS',
        metin:
          'Belirli bir sektörün belirli bir problemine yönelik, abonelikle çalışan ürünler.',
      },
      {
        ad: 'Kurumsal web siteleri',
        metin:
          'Şirketin dijital vitrini. Hızlı, ölçülebilir ve içeriği kendi ekibinizin yönetebildiği.',
      },
    ],
  },

  /* ---------- Çalışmalar ---------- */
  calismalar: {
    kunye: 'Çalışmalar',
    baslik: 'Yaptığımız işler',
    altMetin: 'Her iş bir problemle başladı.',
    // Müşteri adı paylaşılmadığında gösterilen not (marka paketi 04, satır 158-160).
    gizlilikNotu:
      'Aşağıdaki örnekler, geliştirdiğimiz sistemlerin yapısını göstermek için hazırlanmıştır. Müşteri bilgileri paylaşılmamaktadır.',
    alanlar: {
      problem: 'Problem',
      neYaptik: 'Ne yaptık',
      sonuc: 'Sonuç',
    },
  },

  /* ---------- Ürünler ---------- */
  urunler: {
    kunye: 'Ürünler',
    baslik: 'Kendi ürünlerimiz',
    // Henüz yayında ürün yok. Marka paketi 04, satır 131-133'teki metin.
    henuzYok:
      'Müşteri projeleri bizim için aynı zamanda bir keşif alanı. Aynı problemi farklı şirketlerde üçüncü kez gördüğümüzde, onu tek seferlik bir iş olmaktan çıkarıp ürüne dönüştürüyoruz. İlk ürünlerimiz geliştirme aşamasında.',
  },

  /* ---------- Prensipler ---------- */
  prensipler: {
    kunye: 'Prensipler',
    baslik: 'Neye göre karar veriyoruz',
    kalemler: [
      {
        ad: 'Sadelik',
        metin:
          'Problem küçük bir çözümle giderilebiliyorsa, gereksiz karmaşıklık üretmeyiz. Az kod, az bağımlılık, az bakım.',
      },
      {
        ad: 'Gerçek iş değeri',
        metin:
          'Geliştirdiğimiz her sistemin ölçülebilir bir karşılığı olmalı: kazanılan zaman, düşen maliyet, azalan hata veya yeni bir iş fırsatı. Bunlardan hiçbirini vermiyorsa yapılmaz.',
      },
      {
        ad: 'Ürünleşebilirlik',
        metin:
          'Tekrar eden bir problem gördüğümüzde onu tek seferlik iş olarak görmeyiz. Ölçeklenebilir bir ürüne dönüşme ihtimalini değerlendiririz.',
      },
    ],
  },

  /* ---------- Neden Monti Labs ---------- */
  neden: {
    kunye: 'Farkımız',
    baslik: 'Farkımız ne',
    kalemler: [
      {
        ad: 'Yazılım yazmadan önce soru soruyoruz.',
        metin:
          'Gelen talebi doğrudan geliştirmiyoruz. Önce süreci anlıyoruz; çoğu zaman asıl problem tarif edilenden farklı çıkıyor.',
      },
      {
        ad: 'Sisteminizi değiştirmenizi istemiyoruz.',
        metin:
          'Kullandığınız yazılımların yerini almaya çalışmıyoruz. Çoğu problem, mevcut sistemlerin üzerine eklenen bir katmanla çözülüyor.',
      },
      {
        ad: 'Küçük çözümü küçük tutuyoruz.',
        metin:
          'Her işi büyük bir projeye çevirmek işimize gelirdi. Ama bakması zor, kullanması zor sistemler kimseye fayda sağlamıyor.',
      },
      {
        ad: 'İşi devrediyoruz.',
        metin:
          'Kurduğumuz sistemler bizim olmadan da çalışabilmeli. Bağımlılık yaratmak hedefimiz değil.',
      },
    ],
  },

  /* ---------- Kimler için ---------- */
  kimlerIcin: {
    kunye: 'Kimler için',
    baslik: 'Kimlerle çalışıyoruz',
    kalemler: [
      {
        ad: 'Büyüyen işletmeler',
        metin:
          'Süreçler büyüdükçe elle yürütmenin sınırına gelen şirketler. Hazır yazılım yetmiyor, kurumsal sistem ise fazla ağır.',
      },
      {
        ad: 'Kurumsal operasyon ve IT ekipleri',
        metin:
          'Ana sistemleri yerinde duran, ama aradaki boşlukları kapatacak birine ihtiyaç duyan ekipler.',
      },
      {
        ad: 'Sektörel profesyoneller',
        metin:
          'Kendi alanına özel, standart yazılımların çözmediği problemleri olan meslek grupları. Mali müşavirlik, lojistik, üretim, sağlık gibi.',
      },
    ],
  },

  /* ---------- Kapanış ve form ---------- */
  iletisim: {
    kunye: 'İletişim',
    kapanisBaslik: 'Aklınızda bir problem var mı?',
    kapanisMetin:
      'Ne yapılması gerektiğini bilmek zorunda değilsiniz. Problemi anlatın, çözülmeye değer olup olmadığını birlikte görelim.',
    formBaslik: 'Projenizi anlatın',
    // {sure} yerine site.ts içindeki formDonusSuresi konur.
    formAltMetin: 'Formu doldurun, {sure} içinde dönüş yapalım.',
    alanlar: {
      adSoyad: 'Ad soyad',
      eposta: 'E-posta',
      sirket: 'Şirket',
      telefon: 'Telefon',
      mesaj: 'Hangi problemi çözmek istiyorsunuz?',
    },
    opsiyonelEtiketi: 'isteğe bağlı',
    mesajYardim:
      'Teknik detay gerekmiyor. Şu an işin nasıl yürüdüğünü ve nerede takıldığını anlatmanız yeterli.',
    gonderButonu: 'Gönder',
    gonderiliyor: 'Gönderiliyor',
    basariMesaji: 'Mesajınız bize ulaştı. {sure} içinde dönüş yapacağız.',
    hataMesaji:
      'Mesaj gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin, ya da doğrudan {eposta} adresine yazın.',
    kvkkOnayOncesi: 'Formu göndererek, iletişim bilgilerimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum. Detaylar için ',
    kvkkOnayBaglantiEtiketi: 'Aydınlatma Metni',
    kvkkOnaySonrasi: '.',
  },

  /* ---------- Footer ---------- */
  footer: {
    kisaTanim:
      'Monti Labs, gerçek iş problemlerini yazılım, otomasyon, entegrasyon ve dijital ürünlerle çözen bir teknoloji şirketidir.',
    gruplar: [
      {
        baslik: 'Şirket',
        baglantilar: [
          { etiket: 'Yaklaşım', hedef: '/#yaklasim' },
          { etiket: 'Ne geliştiriyoruz', hedef: '/#hizmetler' },
          { etiket: 'İletişim', hedef: '/#iletisim' },
        ],
      },
      {
        baslik: 'Çalışmalar',
        baglantilar: [
          { etiket: 'Yaptığımız işler', hedef: '/#calismalar' },
          { etiket: 'Ürünler', hedef: '/#urunler' },
        ],
      },
    ],
    telifSablonu: '© {yil} Monti Labs. Tüm hakları saklıdır.',
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
