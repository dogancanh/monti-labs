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
  ['#FBF6EA', '#1F2FA0', 'kağıt metin / kobalt zemin', AA_METIN],
  ['#B9BAD4', '#1F2FA0', 'ikincil metin / kobalt zemin', AA_METIN],
  ['#FBF6EA', '#0D1128', 'kağıt metin / mürekkep zemin', AA_METIN],
  ['#9FA0AE', '#0D1128', 'ikincil metin / mürekkep zemin', AA_METIN],
  ['#0D1128', '#FBF6EA', 'mürekkep metin / kağıt zemin', AA_METIN],
  ['#676872', '#FBF6EA', 'ikincil metin / kağıt zemin', AA_METIN],
  ['#1F2FA0', '#FBF6EA', 'kobalt metin / kağıt zemin', AA_METIN],
  ['#F2EDE2', '#16130F', 'Inkstay metin / Inkstay zemin', AA_METIN],
  ['#C9A961', '#16130F', 'Inkstay vurgu / Inkstay zemin', AA_METIN],
  ['#9A9488', '#16130F', 'Inkstay ikincil / Inkstay zemin', AA_METIN],
  ['#0D1128', '#EDEEF6', 'Guardi metin / Guardi zemin', AA_METIN],
  ['#4A5FCC', '#EDEEF6', 'Guardi vurgu / Guardi zemin', AA_METIN],
  ['#63656F', '#EDEEF6', 'Guardi ikincil / Guardi zemin', AA_METIN],
  ['#8A6218', '#FBF6EA', 'EcceHome vurgu / kağıt zemin', AA_METIN],

  /* Arayüz bileşeni sınırları. WCAG 1.4.11 bunlardan 3:1 istiyor.
     Form alanı kenarlığı bir bileşen sınırı olduğu için buraya giriyor. */
  ['#8D92C5', '#1F2FA0', 'form alanı kenarlığı / kobalt zemin', AA_BUYUK],
  ['#78787F', '#FBF6EA', 'form alanı kenarlığı / kağıt zemin', AA_BUYUK],

  /* Odak halkası. Kendi zemininden ayırt edilebilmesi gerekiyor. */
  ['#FBF6EA', '#1F2FA0', 'odak halkası / kobalt zemin', AA_BUYUK],
  ['#1F2FA0', '#FBF6EA', 'odak halkası / kağıt zemin', AA_BUYUK],
  ['#C9A961', '#16130F', 'odak halkası / Inkstay zemin', AA_BUYUK],
]

/* Listeye alınmayanlar ve nedeni:

   Bölüm ayırıcı ince çizgiler (kobalt üstünde kağıt %22, kağıt üstünde
   mürekkep %22). Bunlar salt dekoratif; içeriği anlamak için gerekli
   değiller ve kaldırıldıklarında hiçbir bilgi kaybolmuyor. WCAG 1.4.11
   dekoratif grafikleri kapsam dışı bırakıyor. Kontrastı yükseltmek
   çizgiyi çizgi olmaktan çıkarıp gürültüye dönüştürürdü. */

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
