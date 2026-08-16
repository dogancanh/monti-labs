// TASLAK. Yayına almadan önce hukuki inceleme gerekir. Marka paketi 05 numaralı
// dosya şablon metin kullanılmamasını şart koşuyor.
//
// Madde 11 hakları 6698 sayılı Kanun metnindeki dokuz bent esas alınarak
// yazılmıştır. Sitede analitik ve çerez bulunmadığı için otomatik veri
// toplama iddiası yer almaz; toplanan tek veri iletişim formu girdileridir.

import type { YasalMetin } from './tip'

export const kvkk: YasalMetin = {
  baslik: 'KVKK Aydınlatma Metni',
  ozet:
    '6698 sayılı Kanun kapsamında, iletişim formuyla toplanan kişisel verilerinizin nasıl işlendiğine dair bilgilendirme.',
  guncellenmeTarihi: '[YAYIN TARİHİ]',
  hukukiIncelemeGerekli: true,
  bolumler: [
    {
      baslik: 'Veri sorumlusunun kimliği',
      paragraflar: [
        'Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu sıfatıyla aşağıda bilgileri yer alan şirket tarafından işlenmektedir.',
        'Unvan: [RESMİ UNVAN]\nAdres: [ADRES]\nE-posta: merhaba@montilabs.com\nTelefon: [TELEFON]\nVergi dairesi ve numarası: [VERGİ DAİRESİ / NO]\nMERSİS numarası: [MERSİS NO]',
      ],
    },
    {
      baslik: 'İşlenen kişisel veriler',
      paragraflar: [
        'İletişim formu aracılığıyla yalnızca sizin yazdığınız veriler işlenir:',
        'Kimlik: ad soyad\nİletişim: e-posta adresi, telefon numarası (isteğe bağlı)\nMüşteri işlem: şirket adı (isteğe bağlı), mesaj içeriği',
        'Formu gönderdiğinizde mesaj, tarayıcınızdan doğrudan gönderim sağlayıcımız Web3Forms\'a iletilir ve oradan bize e-posta olarak ulaşır. Bu iletim sırasında IP adresiniz sağlayıcı tarafından görülür; sağlayıcının bu veriyi işleme ve saklama koşulları kendi gizlilik politikasına tabidir.',
        'Sitenin kendisi bir sunucu uygulaması çalıştırmaz. Sitede çerez, tarayıcı depolaması ve analitik aracı kullanılmadığı için ziyaretiniz sırasında bunların dışında veri toplanmaz.',
      ],
    },
    {
      baslik: 'Toplama yöntemi',
      paragraflar: [
        'Kişisel verileriniz, web sitesindeki iletişim formunu doldurup göndermeniz yoluyla, elektronik ortamda ve tamamen otomatik olmayan yolla toplanır.',
        'Formu göndermediğiniz sürece hiçbir veri tarafımıza ulaşmaz.',
      ],
    },
    {
      baslik: 'İşleme amaçları',
      paragraflar: [
        'Verileriniz yalnızca aşağıdaki amaçlarla işlenir:',
        'İletişim talebinizin değerlendirilmesi\nTalebinize yanıt verilmesi ve sizinle iletişim kurulması\nOlası bir iş ilişkisi öncesinde gerekli görüşmelerin yürütülmesi',
        'Verileriniz pazarlama listesine eklenmez, profilleme yapılmaz ve otomatik karar verme süreçlerinde kullanılmaz.',
      ],
    },
    {
      baslik: 'Hukuki sebep',
      paragraflar: [
        'Verileriniz, 6698 sayılı Kanun\'un 5. maddesinin ikinci fıkrası kapsamında, bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması ve veri sorumlusunun meşru menfaati hukuki sebeplerine dayanılarak işlenmektedir.',
        'Kanunun gerektirdiği hallerde ilgili mevzuattan doğan yükümlülüklerin yerine getirilmesi de hukuki sebep teşkil eder.',
      ],
    },
    {
      baslik: 'Aktarım',
      paragraflar: [
        'Kişisel verileriniz, hizmetin sunulabilmesi için zorunlu olan aşağıdaki hizmet sağlayıcılar dışında üçüncü kişilere aktarılmaz:',
        'Siteyi barındıran altyapı sağlayıcısı: GitHub Pages (GitHub, Inc.)\nForm mesajını ileten e-posta sağlayıcısı: Web3Forms',
        'Bunun dışında verileriniz yalnızca kanunen yetkili kamu kurum ve kuruluşlarına, mevzuatın öngördüğü ölçüde aktarılabilir. Verileriniz satılmaz ve kiralanmaz.',
      ],
    },
    {
      baslik: 'Saklama süresi',
      paragraflar: [
        'İletişim formundan gelen veriler [SAKLAMA SÜRESİ] süreyle saklanır. Süre sonunda silinir, yok edilir veya anonim hale getirilir.',
        'İlgili mevzuat daha uzun bir saklama süresi öngörüyorsa o süre uygulanır.',
      ],
    },
    {
      baslik: 'Kanunun 11. maddesi kapsamındaki haklarınız',
      paragraflar: [
        'Veri sorumlusuna başvurarak kendinizle ilgili olarak aşağıdaki haklara sahipsiniz:',
        'Kişisel verinizin işlenip işlenmediğini öğrenme\nKişisel veriniz işlenmişse buna ilişkin bilgi talep etme\nKişisel verinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme\nYurt içinde veya yurt dışında kişisel verinizin aktarıldığı üçüncü kişileri bilme\nKişisel verinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme\nKanunun 7. maddesinde öngörülen şartlar çerçevesinde kişisel verinizin silinmesini veya yok edilmesini isteme\nDüzeltme, silme ve yok etme işlemlerinin, kişisel verinizin aktarıldığı üçüncü kişilere bildirilmesini isteme\nİşlenen verinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme\nKişisel verinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme',
      ],
    },
    {
      baslik: 'Başvuru yolu',
      paragraflar: [
        'Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ\'de belirtilen usullere uygun olarak iletebilirsiniz.',
        'E-posta: merhaba@montilabs.com\nPosta: [ADRES]',
        'Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kurulca belirlenen tarifedeki ücret alınabilir.',
      ],
    },
  ],
}
