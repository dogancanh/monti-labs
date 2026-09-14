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
      { etiket: 'Duruş', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'İletişim', hedef: '/#iletisim' },
    ],
    anaMenu: 'Ana menü',
    menuAc: 'Menü',
    menuKapat: 'Kapat',
    dilDegistir: 'Dili değiştir',
    icerigeAtla: 'İçeriğe atla',
  },

  giris: {
    etiket: 'Monti Labs',
    baslik: 'Fikirden çalışan ürüne.',
    altMetin:
      'İşletmeler için dijital ürün tasarlıyor ve geliştiriyoruz. Erken gösteriyoruz, küçük parçalar halinde teslim ediyoruz.',
    birincilCagri: 'Projenizi anlatın',
    ikincilCagri: 'İşleri gör',
    paneller: {
      tasarim: 'Tasarım',
      yayinda: 'Yayında',
      muhendislik: 'Mühendislik',
    },
  },

  isler: {
    kunye: 'İşler',
    not: 'Üçü yayında, hepsi kullanımda',
    sahiplik: {
      monti: 'Monti ürünü',
      musteri: 'Müşteri işi',
    },
    adresAciklama: 'siteyi yeni sekmede açar',
  },

  durus: {
    kunye: 'Duruş',
    baslik: 'Üç söz.',
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
      {
        ad: 'İsmail Semih Pehlivan',
        unvan: 'Kurucu ortak',
        foto: '/kurucular/ismail-semih-pehlivan.webp',
      },
      {
        ad: 'Doğancan Hırdavatçıoğlu',
        unvan: 'Kurucu ortak',
        foto: '/kurucular/dogancan-hirdavatcioglu.webp',
      },
    ],
  },

  iletisim: {
    kunye: 'İletişim',
    baslik: 'Ne geliştirmek istiyorsunuz?',
    altMetin: 'Kısa bir mesaj yeterli. {sure} içinde dönüş yapıyoruz.',
    epostaEtiketi: 'E-posta adresiniz',
    epostaYerTutucu: 'E-posta adresiniz',
    gonderButonu: 'Görüşelim',
    gonderiliyor: 'Gönderiliyor',
    basariMesaji: 'Adresiniz bize ulaştı. {sure} içinde yazacağız.',
    hataMesaji:
      'Gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin, ya da doğrudan {eposta} adresine yazın.',
    formKapali: 'Form şu an kapalı. Doğrudan e-posta gönderebilirsiniz.',
    dogrudanOncesi: 'ya da doğrudan',
    kvkkOnayOncesi:
      'E-posta adresimin talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum. Detaylar için ',
    kvkkOnayBaglantiEtiketi: 'Aydınlatma Metni',
    kvkkOnaySonrasi: '.',
  },

  altBilgi: {
    gezintiKunye: 'Alt bilgi',
    baglantilar: [
      { etiket: 'İşler', hedef: '/#isler' },
      { etiket: 'Duruş', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'İletişim', hedef: '/#iletisim' },
    ],
    yasal: [
      { etiket: 'KVKK', hedef: '/kvkk' },
      { etiket: 'Gizlilik', hedef: '/gizlilik' },
      { etiket: 'Çerezler', hedef: '/cerezler' },
    ],
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
    ogAciklama: 'İşletmeler için dijital ürün tasarlıyor ve geliştiriyoruz. Kendi ürünlerimizi de.',
  },
}
