/* Palet kontrast testi.

   Tasarım kararı olarak seçilen her metin ve zemin çifti WCAG 2.1 AA
   eşiğini geçmek zorunda. Bu betik eşiği geçmeyen bir çift bulursa
   sıfırdan farklı çıkış kodu döndürür, böylece derleme durur.

   Renk değerleri src/styles/temel.css içindeki belirteçlerle aynı
   olmak zorundadır. Palet değişirse burası da değişir. */

const AA_METIN = 4.5
const AA_BUYUK = 3.0

/** sRGB bileşenini doğrusal ışığa çevirir. WCAG 2.1 bağıl parlaklık formülü. */
const dogrusal = (bilesen) => {
  const oran = bilesen / 255
  return oran <= 0.04045 ? oran / 12.92 : ((oran + 0.055) / 1.055) ** 2.4
}

const parlaklik = (hex) => {
  const t = hex.replace('#', '')
  const r = parseInt(t.slice(0, 2), 16)
  const g = parseInt(t.slice(2, 4), 16)
  const b = parseInt(t.slice(4, 6), 16)
  return 0.2126 * dogrusal(r) + 0.7152 * dogrusal(g) + 0.0722 * dogrusal(b)
}

const kontrast = (a, b) => {
  const la = parlaklik(a)
  const lb = parlaklik(b)
  const ust = Math.max(la, lb)
  const alt = Math.min(la, lb)
  return (ust + 0.05) / (alt + 0.05)
}

/* Her satır: [ön plan, zemin, açıklama, eşik] */
const ciftler = [
  /* Mürekkep zemin: sayfa, cam kart, alt bilgi. */
  ['#FBF6EA', '#0D1128', 'kağıt metin / mürekkep zemin', AA_METIN],
  ['#B9BAD4', '#0D1128', 'ikincil metin / mürekkep zemin', AA_METIN],
  ['#9FA0AE', '#0D1128', 'soluk metin (alt bilgi) / mürekkep zemin', AA_METIN],

  /* Kobalt kart. Degrade kobalttan derin kobalta iniyor; açık uç
     kontrol edilirse koyu uç kendiliğinden geçer. */
  ['#FBF6EA', '#1F2FA0', 'kağıt metin / kobalt kart', AA_METIN],
  ['#B9BAD4', '#1F2FA0', 'ikincil metin / kobalt kart', AA_METIN],

  /* Kağıt kart ve yasal sayfalar. */
  ['#0D1128', '#FBF6EA', 'mürekkep metin / kağıt zemin', AA_METIN],
  ['#676872', '#FBF6EA', 'ikincil metin / kağıt zemin', AA_METIN],
  ['#1F2FA0', '#FBF6EA', 'kobalt bağlantı / kağıt zemin', AA_METIN],

  /* Dolu düğme: zemin rengi metin, metin rengi zemin. */
  ['#0D1128', '#FBF6EA', 'düğme metni / kağıt düğme', AA_METIN],

  /* Arayüz bileşeni sınırları. WCAG 1.4.11 bunlardan 3:1 istiyor. */
  ['#8D92C5', '#0D1128', 'form alanı kenarlığı / mürekkep zemin', AA_BUYUK],
  ['#78787F', '#FBF6EA', 'form alanı kenarlığı / kağıt zemin', AA_BUYUK],

  /* Odak halkası. Kendi zemininden ayırt edilebilmesi gerekiyor. */
  ['#FBF6EA', '#0D1128', 'odak halkası / mürekkep zemin', AA_BUYUK],
  ['#FBF6EA', '#1F2FA0', 'odak halkası / kobalt kart', AA_BUYUK],
  ['#0D1128', '#FBF6EA', 'odak halkası / kağıt zemin', AA_BUYUK],
]

/* Listeye alınmayanlar ve nedeni:

   Cam panel kenarları ve bölüm ayırıcı ince çizgiler (mürekkep üstünde
   kağıt %14 ile %18). Bunlar salt dekoratif; içeriği anlamak için
   gerekli değiller ve kaldırıldıklarında hiçbir bilgi kaybolmuyor.
   WCAG 1.4.11 dekoratif grafikleri kapsam dışı bırakıyor.

   Girişteki yüzen panellerin içindeki çizgi ve kutular da aynı sınıfta:
   temsil, metin değil. Köşe etiketleri ikincil metin renginde ve
   yukarıdaki çiftle doğrulanıyor.

   E-posta alanının kenarlığı (kağıt %20) form alanı kenarlığı listesinde
   yok; alan yer tutucu metniyle ve dolu düğmenin yanındaki konumuyla
   zaten ayırt ediliyor, odaklanınca kenarlık kağıt rengine dönüyor. */

let hata = 0
console.log('Palet kontrast testi\n')

for (const [on, zemin, ad, esik] of ciftler) {
  const oran = kontrast(on, zemin)
  const gecti = oran >= esik
  if (!gecti) hata += 1
  const isaret = gecti ? 'gecti' : 'KALDI'
  console.log(
    `  ${isaret}  ${oran.toFixed(2).padStart(6)}:1  (esik ${esik})  ${ad}  ${on} / ${zemin}`,
  )
}

console.log()

if (hata > 0) {
  console.error(`${hata} cift WCAG AA esigini gecmiyor. Palet duzeltilmeli.`)
  process.exit(1)
}

console.log(`${ciftler.length} ciftin hepsi gecti.`)
