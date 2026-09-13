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
    /** Başlıktaki hap menü. Son öğe dolu düğme olarak basılıyor. */
    baglantilar: Baglanti[]
    /** Ekran okuyucu için ana menünün adı. */
    anaMenu: string
    menuAc: string
    menuKapat: string
    /** Dil değiştiricinin ekran okuyucuya söylediği şey. */
    dilDegistir: string
    /** Klavye kullanıcısı için içeriğe atlama bağlantısı. */
    icerigeAtla: string
  }

  giris: {
    /** Başlığın üstündeki küçük etiket. */
    etiket: string
    baslik: string
    altMetin: string
    /** Dolu düğme, iletişime gider. */
    birincilCagri: string
    /** Çizgili düğme, işlere gider. */
    ikincilCagri: string
    /** Yüzen panellerin köşe etiketleri. Dekoratif ama okunur. */
    paneller: {
      tasarim: string
      yayinda: string
      muhendislik: string
    }
  }

  isler: {
    kunye: string
    /** Künyenin karşısındaki kısa not. Örnek: "Üçü yayında, hepsi kullanımda". */
    not: string
    sahiplik: {
      monti: string
      musteri: string
    }
    /** Ürünün canlı adresine giden bağlantı için ekran okuyucu eki. */
    adresAciklama: string
  }

  durus: {
    kunye: string
    baslik: string
    ilkeler: Array<{ baslik: string; metin: string }>
  }

  monti: {
    kunye: string
    metin: string
    kurucularKunye: string
    /** foto: public altına göre yol. Yokken baş harfler basılıyor. */
    kurucular: Array<{ ad: string; unvan: string; foto?: string }>
  }

  iletisim: {
    kunye: string
    baslik: string
    altMetin: string
    /** E-posta alanının ekran okuyucu etiketi ve görünen yer tutucusu. */
    epostaEtiketi: string
    epostaYerTutucu: string
    gonderButonu: string
    gonderiliyor: string
    basariMesaji: string
    hataMesaji: string
    /** Form devre dışıyken gösterilen açıklama. */
    formKapali: string
    /** "ya da doğrudan" gibi, e-posta adresinin önündeki bağlaç. */
    dogrudanOncesi: string
    kvkkOnayOncesi: string
    kvkkOnayBaglantiEtiketi: string
    kvkkOnaySonrasi: string
  }

  altBilgi: {
    /** Alt bilgideki gezinti listesinin ekran okuyucu adı. */
    gezintiKunye: string
    baglantilar: Baglanti[]
    /** Yasal sayfa bağlantıları, kısa etiketle. Sayfalar yalnızca Türkçe. */
    yasal: Baglanti[]
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
