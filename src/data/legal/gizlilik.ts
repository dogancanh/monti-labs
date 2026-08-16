// TASLAK. Yayına almadan önce hukuki inceleme gerekir. Marka paketi 05 numaralı
// dosya şablon metin kullanılmamasını şart koşuyor.
//
// Bu metin sitenin GERÇEK davranışını anlatır:
//   - Statik sayfalar, analitik yok, çerez yok, tarayıcı depolaması yok.
//   - Toplanan tek veri iletişim formuna yazdıklarınızdır.
//   - Form gönderiminde IP adresi hız sınırı için bellekte geçici tutulur.
// Siteye analitik, çerez veya yeni bir veri toplama noktası eklenirse
// BU DOSYA GÜNCELLENMELİDİR.

import type { YasalMetin } from './tip'

export const gizlilik: YasalMetin = {
  baslik: 'Gizlilik Politikası',
  ozet:
    'Bu sitede hangi verileri topluyoruz, neden topluyoruz ve ne kadar saklıyoruz. Kısa cevap: yalnızca iletişim formuna yazdıklarınızı.',
  guncellenmeTarihi: '[YAYIN TARİHİ]',
  hukukiIncelemeGerekli: true,
  bolumler: [
    {
      baslik: 'Kapsam',
      paragraflar: [
        'Bu politika [ALAN ADI] adresindeki web sitesi için geçerlidir. Sitenin sahibi ve veri sorumlusu [RESMİ UNVAN] şirketidir.',
        'Kişisel verilerin işlenmesine dair 6698 sayılı Kanun kapsamındaki aydınlatma yükümlülüğü ayrı bir metinde ele alınmıştır. KVKK Aydınlatma Metni sayfasına bakabilirsiniz.',
      ],
    },
    {
      baslik: 'Hangi verileri topluyoruz',
      paragraflar: [
        'Yalnızca iletişim formuna kendiniz yazdığınız veriler:',
        'Ad soyad\nE-posta adresi\nŞirket adı (isteğe bağlı)\nTelefon numarası (isteğe bağlı)\nYazdığınız mesaj',
        'Formu doldurup göndermediğiniz sürece bize hiçbir veri ulaşmaz.',
      ],
    },
    {
      baslik: 'Otomatik toplanmayan veriler',
      paragraflar: [
        'Site, ziyaretinizi ölçmez. Aşağıdakilerin hiçbiri toplanmaz:',
        'Sayfa görüntüleme ve gezinme geçmişi\nSitede geçirdiğiniz süre\nTarayıcı ve işletim sistemi profili\nHangi siteden geldiğiniz\nReklam veya davranış profili',
        'Sitede analitik aracı, izleme betiği, çerez ve tarayıcı depolaması bulunmuyor.',
      ],
    },
    {
      baslik: 'IP adresi ve sunucu kayıtları',
      paragraflar: [
        'Formu gönderdiğinizde IP adresiniz, kötüye kullanımı önlemek için sunucunun belleğinde geçici olarak tutulur. Amaç, aynı adresten kısa sürede çok sayıda mesaj gönderilmesini engellemektir. Kayıt on beş dakika içinde silinir ve diske yazılmaz.',
        'Ayrıca siteyi barındıran altyapı, tüm web sunucularında olduğu gibi teknik erişim kayıtları tutabilir. Barındırma sağlayıcısı: [BARINDIRMA SAĞLAYICISI]. Bu kayıtların saklama süresi sağlayıcının politikasına tabidir.',
      ],
    },
    {
      baslik: 'Verileri neden topluyoruz',
      paragraflar: [
        'Tek amaç, gönderdiğiniz talebi değerlendirmek ve size dönüş yapmaktır.',
        'Verileriniz pazarlama listesine eklenmez, profilleme yapılmaz ve otomatik karar verme süreçlerinde kullanılmaz.',
      ],
    },
    {
      baslik: 'Kimlerle paylaşılıyor',
      paragraflar: [
        'Mesajınızın bize ulaşabilmesi için iki hizmet sağlayıcı devrededir:',
        'Siteyi barındıran altyapı sağlayıcısı: [BARINDIRMA SAĞLAYICISI]\nForm mesajını ileten e-posta sağlayıcısı: [GÖNDERİM SAĞLAYICISI]',
        'Bunun dışında verileriniz üçüncü taraflarla paylaşılmaz, satılmaz ve kiralanmaz. Yasal zorunluluk veya yetkili merci talebi halinde mevzuatın gerektirdiği ölçüde paylaşım yapılabilir.',
      ],
    },
    {
      baslik: 'Ne kadar saklıyoruz',
      paragraflar: [
        'İletişim formundan gelen mesajlar [SAKLAMA SÜRESİ] süreyle saklanır, sonrasında silinir.',
        'Daha erken silinmesini isterseniz [E-POSTA] adresine yazmanız yeterlidir.',
      ],
    },
    {
      baslik: 'Güvenlik',
      paragraflar: [
        'Site HTTPS üzerinden sunulur, form verisi şifreli bağlantıyla iletilir.',
        'Verilere erişim, talebi değerlendirmesi gereken kişilerle sınırlıdır.',
        'İnternet üzerinden yapılan hiçbir iletim mutlak güvenlik taşımaz. Makul teknik ve idari tedbirleri alıyoruz, ancak koşulsuz bir güvenlik garantisi verilemez.',
      ],
    },
    {
      baslik: 'Haklarınız',
      paragraflar: [
        'Kişisel verilerinize ilişkin haklarınız 6698 sayılı Kanun\'un 11. maddesinde düzenlenmiştir. Hakların tam listesi ve başvuru yolu KVKK Aydınlatma Metni sayfasında yer alır.',
        'Başvurularınızı [E-POSTA] adresine iletebilirsiniz.',
      ],
    },
    {
      baslik: 'Dış bağlantılar',
      paragraflar: [
        'Site başka adreslere bağlantı verebilir. Bu politika yalnızca bu siteyi kapsar; gittiğiniz sitenin kendi politikası geçerlidir.',
      ],
    },
    {
      baslik: 'Değişiklikler',
      paragraflar: [
        'Bu politika güncellenebilir. Güncelleme tarihi sayfanın başında görünür. Sitenin veri toplama biçimi değişirse metin de aynı anda değiştirilir.',
      ],
    },
    {
      baslik: 'İletişim',
      paragraflar: [
        'Bu politika hakkında sorunuz varsa bize yazabilirsiniz.',
        'E-posta: [E-POSTA]\nAdres: [ADRES]',
      ],
    },
  ],
}
