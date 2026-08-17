/* ============================================================
   KURUCULAR

   Kurucu bilgileri tek yerde durur, bileşenlere dağıtılmaz.
   Boş bırakılan alanlar arayüzde hiç gösterilmez; böylece
   biyografi, fotoğraf veya bağlantı sonradan eklendiğinde
   yalnızca bu dosya değişir.

   Şu an yalnızca ad ve unvan dolu. Unvan olarak ikisi de
   "Kurucu ortak"; CEO, CTO gibi unvan üretilmedi.
   ============================================================ */

export interface Kurucu {
  /** Görünen ad. */
  ad: string
  /** Unvan. Şimdilik ikisi de kurucu ortak. */
  unvan: string
  /** Bir iki cümle. Ana sayfadaki kısa tanıtımda kullanılır. */
  kisaTanim?: string
  /** Daha uzun anlatım. Yalnızca /biz-kimiz sayfasında görünür. */
  uzunTanim?: string
  /**
   * Portre görseli. public/ altına göre yol.
   * Fotoğraf gelmeden önce boş kalır; boşken avatar, baş harf
   * dairesi veya yapay portre üretilmez, tipografi devreye girer.
   */
  gorsel?: string
  /** Görselin alternatif metni. Görsel varsa zorunlu sayılır. */
  gorselAlt?: string
  linkedin?: string
  github?: string
  /** Odak alanları. Doluysa küçük künye olarak listelenir. */
  odakAlanlari?: string[]
}

export const kurucular: Kurucu[] = [
  {
    ad: 'İsmail Semih Pehlivan',
    unvan: 'Kurucu ortak',
    // kisaTanim, uzunTanim, gorsel, linkedin, github, odakAlanlari
    // içerik geldiğinde doldurulacak. Boşken arayüzde yer kaplamaz.
  },
  {
    ad: 'Doğancan Hırdavatçıoğlu',
    unvan: 'Kurucu ortak',
  },
]

/** Fotoğraflar geldiğinde arayüzün portre düzenine geçmesi için. */
export const portreVar = (): boolean => kurucular.some((k) => Boolean(k.gorsel))
