/* ============================================================
   ŞİRKET BİLGİLERİ

   >>> YAYINA ALMADAN ÖNCE BU DOSYADAKİ "DEGISTIR" İŞARETLİ
   >>> ALANLARIN HEPSİ DOLDURULMALIDIR.

   Marka paketi 06-icerik-envanteri.md dosyası bu alanların
   tamamlanmadan yayına çıkılmamasını şart koşuyor.
   ============================================================ */

export interface SirketBilgisi {
  ad: string
  resmiUnvan: string
  kurulusYili: string
  adres: string
  eposta: string
  telefon: string
  vergiDairesiNo: string
  mersisNo: string
  linkedin: string
  github: string
  formDonusSuresi: string
}

export const sirket: SirketBilgisi = {
  ad: 'Monti Labs',

  resmiUnvan: 'DEGISTIR: Resmî unvan',
  kurulusYili: 'DEGISTIR: 2026',
  adres: 'DEGISTIR: Açık adres',

  // Formun altında ve footer'da görünür. Form gönderimi başarısız olduğunda
  // kullanıcıya yazması söylenen adres de budur.
  eposta: 'merhaba@montilabs.com',

  // Boş bırakılırsa telefon satırı hiç gösterilmez.
  telefon: '',

  vergiDairesiNo: 'DEGISTIR: Vergi dairesi / numarası',
  mersisNo: 'DEGISTIR: MERSİS numarası',

  // Boş bırakılan sosyal bağlantılar gösterilmez.
  linkedin: '',
  github: '',

  // Form başarı mesajında ve form alt metninde kullanılır.
  formDonusSuresi: '1 iş günü',
}

/** Yayın öncesi doldurulması gereken alanların listesi. */
export const eksikAlanlar = (): string[] =>
  Object.entries(sirket)
    .filter(([, deger]) => typeof deger === 'string' && deger.startsWith('DEGISTIR'))
    .map(([anahtar]) => anahtar)

/* ============================================================
   YAYIN AYARLARI
   ============================================================ */

/**
 * Arama motorlarına açık mı?
 *
 * false iken her sayfaya `noindex, nofollow` etiketi basılır ve
 * robots.txt tüm botlara kapalı üretilir. Adres çalışmaya devam eder,
 * link paylaşabilirsiniz, ama Google dizine almaz.
 *
 * İçerik ve yasal metinler kesinleşince true yapın.
 */
export const ARAMA_MOTORLARINA_ACIK = false

/**
 * İletişim formunun gönderileceği adres.
 *
 * GitHub Pages statik sunum yaptığı için sunucu tarafı uç nokta
 * çalışmaz. Form, üçüncü taraf bir servise gönderilir.
 *
 * Boş bırakılırsa form gönderilemez; bunun yerine e-posta adresi
 * gösterilir ve form devre dışı kalır.
 *
 * Web3Forms için: https://web3forms.com adresine e-postanızı yazıp
 * ücretsiz erişim anahtarı alın, aşağıya yapıştırın. Hesap açmaya
 * gerek yok, anahtar e-postayla gelir.
 */
export const FORM_SERVISI = {
  /** Gönderim adresi. Web3Forms için değiştirmeye gerek yok. */
  adres: 'https://api.web3forms.com/submit',
  /**
   * Erişim anahtarı. Boşken form devre dışıdır.
   *
   * Web3Forms bu anahtarı açıkça genel (public) anahtar olarak tanımlıyor
   * ve istemci kodunda kullanılmak üzere veriyor. Depoda durması bir
   * güvenlik sorunu değildir; anahtar yalnızca formun hangi hesaba
   * ulaşacağını belirler, hesaba erişim vermez.
   */
  anahtar: '2d21b093-5c36-4c73-b208-bdddf766f2b8',
  /** Yasal metinlerde veri işleyen olarak geçen ad. */
  saglayiciAdi: 'Web3Forms',
}

/**
 * Form mesajlarının ayrıca düşeceği Discord kanalı.
 *
 * >>> BU ADRES HERKESE AÇIKTIR. <<<
 * Site statik olduğu için istek tarayıcıdan gidiyor; adres sayfa
 * kaynağında ve depoda okunabilir durumda. Webhook yalnızca yazabilir,
 * kanalı okuyamaz ve sunucuda başka bir şey yapamaz. Riski, adresi bulan
 * birinin kanala istenmeyen mesaj göndermesidir.
 *
 * İstenmeyen mesaj gelirse: Discord'da kanal ayarları > Entegrasyonlar >
 * Web kancaları bölümünden silin, buradaki değeri boşaltın. Form
 * çalışmaya devam eder, yalnızca Discord bildirimi durur.
 *
 * Kalıcı çözüm: site bir Node ortamına taşındığında bu bildirim sunucu
 * tarafından gönderilir ve adres hiç dışarı çıkmaz.
 * (sunucu/iletisim-uc-noktasi.ts hazır bekliyor)
 *
 * Boş bırakılırsa Discord bildirimi hiç denenmez.
 */
export const DISCORD_BILDIRIM = {
  adres: 'https://discord.com/api/webhooks/1538981791313035285/1eBHRhJdPbZSNMBqgAS1Gtj7cl7siR27fx-iWXRL1CsomohdQ4JspJZ_sikFw5PKJ2yP',
}

export const gezinti = [
  { etiket: 'Yaklaşım', hedef: '#yaklasim' },
  { etiket: 'Ne geliştiriyoruz', hedef: '#hizmetler' },
  { etiket: 'Çalışmalar', hedef: '#calismalar' },
  { etiket: 'İletişim', hedef: '#iletisim' },
]

export const yasalSayfalar = [
  { etiket: 'KVKK Aydınlatma Metni', hedef: '/kvkk' },
  { etiket: 'Gizlilik Politikası', hedef: '/gizlilik' },
  { etiket: 'Çerez Politikası', hedef: '/cerezler' },
]

export const meta = {
  // Marka paketi bu başlıkta uzun tire kullanıyor. Ayraç, sitenin geri
  // kalanıyla tutarlı olsun diye orta noktaya çevrildi. Paketteki haline
  // dönmek isterseniz tireyi geri koymak yeterli.
  baslik: 'Monti Labs · İş problemlerini yazılımla çözüyoruz',
  aciklama:
    'Monti Labs; süreç otomasyonu, sistem entegrasyonu ve özel yazılım geliştiren bir teknoloji şirketidir. Problemi anlıyor, çalışan çözümü kuruyoruz.',
  ogBaslik: 'Monti Labs',
  ogAciklama:
    'Gerçek iş problemlerini yazılım, otomasyon ve entegrasyonla çözen teknoloji şirketi.',
  dil: 'tr',
}
