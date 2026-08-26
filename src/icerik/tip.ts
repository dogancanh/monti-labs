/* ============================================================
   İÇERİK TİPİ

   Türkçe ve İngilizce metin dosyaları bu tipi karşılamak zorunda.
   Bir dilde eksik kalan alan derlemede hata verir, böylece yarım
   çevrilmiş bir sayfa yayına çıkamaz.

   Metin kuralları:
     Kısa cümle, fiil önde, sıfat az, övgü yok.
     Uzun tire, ok işareti ve ticari ve işareti kullanılmaz.
     İngilizce metin Türkçe'den çevrilmez, ayrı yazılır.
   ============================================================ */

export interface Baglanti {
  etiket: string
  hedef: string
}

export interface Icerik {
  /** html lang özniteliğinden bağımsız, arayüzde görünen dil adı. */
  dilAdi: string

  gezinti: {
    baglantilar: Baglanti[]
    menuAc: string
    menuKapat: string
    /** Dil değiştiricinin ekran okuyucuya söylediği şey. */
    dilDegistir: string
    /** Klavye kullanıcısı için içeriğe atlama bağlantısı. */
    icerigeAtla: string
  }

  giris: {
    /** Görüntü başlığı satır satır. Satır kırımı tasarımın parçası. */
    baslikSatirlari: string[]
    altMetin: string
    /** Ürün bağlantılarının önündeki küçük etiket. */
    urunlerEtiketi: string
  }

  isler: {
    kunye: string
    sahiplik: {
      monti: string
      musteri: string
    }
    /** Ürünün canlı adresine giden bağlantının metni. */
    adresCagri: string
  }

  durus: {
    kunye: string
    ilkeler: Array<{ baslik: string; metin: string }>
  }

  monti: {
    kunye: string
    metin: string
    kurucularKunye: string
    kurucular: Array<{ ad: string; unvan: string }>
  }

  iletisim: {
    kunye: string
    baslik: string
    epostaOncesi: string
    altMetin: string
    /** Form devre dışıyken gösterilen açıklama. */
    formKapali: string
    alanlar: {
      adSoyad: string
      eposta: string
      sirket: string
      mesaj: string
    }
    opsiyonelEtiketi: string
    gonderButonu: string
    gonderiliyor: string
    basariMesaji: string
    hataMesaji: string
    kvkkOnayOncesi: string
    kvkkOnayBaglantiEtiketi: string
    kvkkOnaySonrasi: string
  }

  altBilgi: {
    kisaTanim: string
    baglantilar: Baglanti[]
    yasalKunye: string
    telifSablonu: string
    /** Yasal metinler yalnızca Türkçe. İngilizce sayfada bu not görünür. */
    yasalDilNotu?: string
  }

  bulunamadi: {
    baslik: string
    metin: string
    buton: string
  }

  meta: {
    baslik: string
    aciklama: string
    ogBaslik: string
    ogAciklama: string
  }
}
