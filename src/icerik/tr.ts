import type { Icerik } from './tip'

/* ============================================================
   TÜRKÇE METİNLER

   Yön: az konuş, güçlü göster. Hizmet listesi yok, süreç şeması yok,
   kabiliyet sayımı yok. Kabiliyet işlerin künyesinden okunuyor.

   Yasaklı kalıplar: inovatif çözümler, dijital dönüşüm partneriniz,
   uçtan uca çözümler, yeni nesil teknoloji, çözüm ortağınız,
   işinizi geleceğe taşıyoruz, tutkulu ekip, müşteri odaklı.

   Uzun tire, ok işareti ve ticari ve işareti kullanılmıyor.
   ============================================================ */

export const tr: Icerik = {
  dilAdi: 'Türkçe',

  gezinti: {
    baglantilar: [
      { etiket: 'İşler', hedef: '/#isler' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'İletişim', hedef: '/#iletisim' },
    ],
    menuAc: 'Menü',
    menuKapat: 'Kapat',
    dilDegistir: 'Dili değiştir',
    icerigeAtla: 'İçeriğe atla',
  },

  giris: {
    /* Satır kırımı tasarımın parçası. İki satır, ikisi de kısa.
       Otomatik sarmaya bırakılmıyor. */
    baslikSatirlari: ['Gösterilmek için değil,', 'kullanılmak için.'],
    altMetin:
      'İşletmeler için dijital ürünler tasarlıyor ve geliştiriyoruz. Kendi ürünlerimizi de.',
    urunlerEtiketi: 'Şu an yayında',
  },

  isler: {
    kunye: 'İşler',
    sahiplik: {
      monti: 'Monti ürünü',
      musteri: 'Müşteri işi',
    },
    adresCagri: 'Siteyi aç',
  },

  durus: {
    kunye: 'Duruş',
    ilkeler: [
      {
        baslik: 'Küçük parçalar halinde yayına alırız.',
        metin: 'Erken görürsünüz, geç sürpriz olmaz.',
      },
      {
        baslik: 'Tasarım ile mühendislik aynı masada durur.',
        metin: 'İkisi ayrı yürüdüğünde ürün bozulur.',
      },
      {
        baslik: 'Kurduğumuz sistemi ekibinize devrederiz.',
        metin: 'Bize bağlı kalmanız gerekmez.',
      },
    ],
  },

  monti: {
    kunye: 'Monti',
    metin:
      'Monti Labs, ürün tasarımı ile mühendisliği aynı masada tutan iki kurucu ortak tarafından yürütülüyor. Kendi ürünlerimizi geliştiriyoruz. Aynı işi başka şirketler için de yapıyoruz.',
    kurucularKunye: 'Kurucular',
    kurucular: [
      { ad: 'İsmail Semih Pehlivan', unvan: 'Kurucu ortak' },
      { ad: 'Doğancan Hırdavatçıoğlu', unvan: 'Kurucu ortak' },
    ],
  },

  iletisim: {
    kunye: 'İletişim',
    baslik: 'Ne geliştirmek istiyorsunuz?',
    epostaOncesi: 'Doğrudan yazın',
    altMetin: 'Kısa bir mesaj yeterli. {sure} içinde dönüş yapıyoruz.',
    formKapali: 'Form şu an kapalı. Doğrudan e-posta gönderebilirsiniz.',
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
  },

  altBilgi: {
    kisaTanim: 'İşletmeler için dijital ürünler.',
    baglantilar: [
      { etiket: 'İşler', hedef: '/#isler' },
      { etiket: 'Duruş', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'İletişim', hedef: '/#iletisim' },
    ],
    yasalKunye: 'Yasal',
    telifSablonu: '© {yil} Monti Labs',
  },

  bulunamadi: {
    baslik: 'Bu sayfa yok.',
    metin: 'Aradığınız adres değişmiş veya hiç var olmamış olabilir.',
    buton: 'Ana sayfaya dön',
  },

  meta: {
    baslik: 'Monti Labs · İşletmeler için dijital ürünler',
    aciklama:
      'Monti Labs, işletmeler için dijital ürünler tasarlayan ve geliştiren bir teknoloji şirketi. Kendi ürünlerini de geliştiriyor.',
    ogBaslik: 'Monti Labs',
    ogAciklama: 'İşletmeler için dijital ürünler tasarlıyor ve geliştiriyoruz. Kendi ürünlerimizi de.',
  },
}
