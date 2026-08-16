// TASLAK. Yayına almadan önce hukuki inceleme gerekir. Marka paketi 05 numaralı
// dosya şablon metin kullanılmamasını şart koşuyor.
//
// Bu metin sitenin GERÇEK durumunu anlatır. Site şu anda hiçbir çerez
// yazmıyor, tarayıcı depolaması kullanmıyor ve analitik aracı çalıştırmıyor.
// Bu doğrulandı: hiçbir sayfa Set-Cookie başlığı döndürmüyor, üretilen
// HTML'de localStorage, sessionStorage, document.cookie veya herhangi bir
// analitik betiği geçmiyor.
//
// Siteye analitik veya başka bir çerez eklenirse BU DOSYA GÜNCELLENMELİDİR.

import type { YasalMetin } from './tip'

export const cerezler: YasalMetin = {
  baslik: 'Çerez Politikası',
  ozet:
    'Bu site şu anda çerez kullanmıyor. Aşağıda ne topladığımızı, ne toplamadığımızı ve bu durum değişirse ne yapacağımızı anlattık.',
  guncellenmeTarihi: '[YAYIN TARİHİ]',
  hukukiIncelemeGerekli: true,
  bolumler: [
    {
      baslik: 'Kısa cevap',
      paragraflar: [
        'Bu site çerez yazmıyor. Ziyaretiniz sırasında tarayıcınıza hiçbir çerez kaydedilmez, tarayıcı depolaması kullanılmaz ve ziyaretiniz izlenmez.',
        'Bu yüzden sitede çerez onay penceresi de yoktur. Onaylayacağınız bir şey bulunmuyor.',
      ],
    },
    {
      baslik: 'Çerez nedir',
      paragraflar: [
        'Çerez, bir web sitesinin tarayıcınıza kaydettiği küçük bir metin dosyasıdır. Siteler bunu oturum açık tutmak, tercih hatırlamak veya ziyaretçi davranışını ölçmek için kullanır.',
      ],
    },
    {
      baslik: 'Bu sitede ne var, ne yok',
      paragraflar: [
        'Kullanılmayanlar:',
        'Analitik veya ölçümleme çerezi\nReklam veya izleme çerezi\nSosyal medya gömme çerezi\nOturum çerezi\nTarayıcı depolaması (localStorage, sessionStorage)\nÜçüncü taraf betiği',
        'Kullanılan:',
        'Sitedeki iki küçük betik yalnızca görünümle ilgilidir. Biri sayfa kaydırıldığında üst çubuğa çizgi ekler, diğeri bir grafiği görünür olduğunda çizer. İkisi de hiçbir veri kaydetmez veya göndermez.',
        'Yazı tipleri kendi sunucumuzdan yüklenir. Dışarıya istek gitmez.',
      ],
    },
    {
      baslik: 'İletişim formu ve IP adresi',
      paragraflar: [
        'İletişim formu çerez kullanmadan çalışır. Formu doldurup göndermediğiniz sürece hiçbir veri bize ulaşmaz.',
        'Formu gönderdiğinizde, kötüye kullanımı önlemek amacıyla IP adresiniz sunucunun belleğinde geçici olarak tutulur. Bu, aynı adresten kısa sürede çok sayıda mesaj gönderilmesini engellemek içindir. Kayıt on beş dakika sonra silinir, diske yazılmaz ve kalıcı olarak saklanmaz.',
        'Bu bir çerez değildir, ancak şeffaflık açısından burada belirtilmiştir. Kişisel verilerin işlenmesine dair ayrıntı için KVKK Aydınlatma Metni ve Gizlilik Politikası sayfalarına bakabilirsiniz.',
      ],
    },
    {
      baslik: 'Sunucu kayıtları',
      paragraflar: [
        'Siteyi barındıran altyapı, tüm web sunucularında olduğu gibi teknik erişim kayıtları tutabilir. Bu kayıtlar IP adresi, istek zamanı ve talep edilen adresi içerir; güvenlik ve hata takibi dışında bir amaçla kullanılmaz.',
        'Barındırma sağlayıcısı ve saklama süresi için: [BARINDIRMA SAĞLAYICISI], [SAKLAMA SÜRESİ].',
      ],
    },
    {
      baslik: 'İleride değişirse',
      paragraflar: [
        'Siteye ziyaret istatistiği ölçen bir araç eklersek iki şeyi taahhüt ediyoruz:',
        'Araç yalnızca siz açıkça onay verdikten sonra yüklenir. Onay öncesinde hiçbir izleme betiği çalışmaz.\nBu sayfa, eklenen aracın adı, yazdığı çerezler ve süreleriyle birlikte güncellenir.',
        'Onay penceresi eklenirse varsayılan seçim reddetme tarafında olacaktır.',
      ],
    },
    {
      baslik: 'Tarayıcınızdan çerezleri yönetmek',
      paragraflar: [
        'Bu site çerez yazmasa da, tüm çerezleri tarayıcınızın gizlilik ayarlarından görebilir, silebilir veya engelleyebilirsiniz. İlgili bölüm çoğu tarayıcıda Ayarlar altında Gizlilik ve Güvenlik başlığında yer alır.',
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
