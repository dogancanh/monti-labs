export const prerender = false

import type { APIRoute } from 'astro'

/* ============================================================
   İletişim formu uç noktası

   Doğrulama sunucu tarafında yapılır. İstemci tarafındaki
   kontroller yalnızca kullanıcıya hızlı geri bildirim içindir,
   güvenlik sınırı burasıdır.
   ============================================================ */

interface FormVerisi {
  adSoyad?: unknown
  eposta?: unknown
  sirket?: unknown
  telefon?: unknown
  mesaj?: unknown
  kvkkOnay?: unknown
  /** Bal küpü. İnsan bu alanı görmez, bot doldurur. */
  website?: unknown
}

type Hatalar = Record<string, string>

interface Yanit {
  ok: boolean
  hatalar?: Hatalar
}

/* ---------- Ortam değişkenleri ----------
   process.env önce okunur. import.meta.env değerleri derleme
   anında sabitlenir; çalışma anında tanımlanan gizli anahtarlar
   yalnızca process.env üzerinden görünür. */
function ortam(anahtar: string): string | undefined {
  const calismaAninda = typeof process !== 'undefined' ? process.env?.[anahtar] : undefined
  if (calismaAninda) return calismaAninda
  const derlemeAninda = (import.meta.env as Record<string, string | undefined>)[anahtar]
  return derlemeAninda || undefined
}

/* ---------- Hız sınırı ----------
   İki kademeli.

   Doğrulamadan geçemeyen istekler gönderim sayılmaz. Formu yanlış
   dolduran bir kullanıcı düzeltip tekrar denerken kilitlenmemeli;
   tek kademeli sayaçta sekiz yazım hatası yapan kişi on beş dakika
   forma erişemiyordu.

   Bu yüzden:
     - GONDERIM sınırı: gerçekten iletilen mesaj sayısını sınırlar. Spam buradan geçer.
     - ISTEK sınırı: kaba kuvvet denemelerine karşı üst tavan. Geniş tutulur.

   Bellek içi, tek süreç için. Birden fazla kopya çalıştırılacaksa
   paylaşımlı bir depo (Redis gibi) gerekir. */
const PENCERE_MS = 15 * 60 * 1000
const GONDERIM_SINIRI = 5
const ISTEK_SINIRI = 60
const TEMIZLIK_ARALIGI_MS = 30 * 60 * 1000

type Sayac = { istekler: number[]; gonderimler: number[] }

const gecmis = new Map<string, Sayac>()
let sonTemizlik = Date.now()

function guncelle(zamanlar: number[], simdi: number): number[] {
  return zamanlar.filter((z) => simdi - z < PENCERE_MS)
}

function eskiKayitlariTemizle(simdi: number): void {
  if (simdi - sonTemizlik < TEMIZLIK_ARALIGI_MS) return
  sonTemizlik = simdi
  for (const [ip, sayac] of gecmis) {
    const istekler = guncelle(sayac.istekler, simdi)
    const gonderimler = guncelle(sayac.gonderimler, simdi)
    if (istekler.length === 0 && gonderimler.length === 0) gecmis.delete(ip)
    else gecmis.set(ip, { istekler, gonderimler })
  }
}

function sayacAl(ip: string, simdi: number): Sayac {
  const onceki = gecmis.get(ip) ?? { istekler: [], gonderimler: [] }
  const sayac: Sayac = {
    istekler: guncelle(onceki.istekler, simdi),
    gonderimler: guncelle(onceki.gonderimler, simdi),
  }
  gecmis.set(ip, sayac)
  return sayac
}

/** Kaba kuvvet tavanı. Her POST bunu tüketir. */
function istekSiniriAsildi(ip: string): boolean {
  const simdi = Date.now()
  eskiKayitlariTemizle(simdi)
  const sayac = sayacAl(ip, simdi)
  if (sayac.istekler.length >= ISTEK_SINIRI) return true
  sayac.istekler.push(simdi)
  return false
}

/** Yalnızca doğrulamayı geçen mesajlar bunu tüketir. */
function gonderimSiniriAsildi(ip: string): boolean {
  const simdi = Date.now()
  const sayac = sayacAl(ip, simdi)
  if (sayac.gonderimler.length >= GONDERIM_SINIRI) return true
  sayac.gonderimler.push(simdi)
  return false
}

function ipAdresiniBul(istek: Request): string {
  const iletilen = istek.headers.get('x-forwarded-for')
  if (iletilen) {
    const ilk = iletilen.split(',')[0]
    if (ilk) return ilk.trim()
  }
  return (
    istek.headers.get('cf-connecting-ip') ??
    istek.headers.get('x-real-ip') ??
    'bilinmiyor'
  )
}

/* ---------- Temizleme ve doğrulama ---------- */

/** Metin olmayan girdileri boş dizeye indirger, kontrol karakterlerini atar. */
function temizle(deger: unknown): string {
  if (typeof deger !== 'string') return ''
  // eslint-disable-next-line no-control-regex
  return deger.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim()
}

function epostaGecerli(eposta: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(eposta)
}

interface Temiz {
  adSoyad: string
  eposta: string
  sirket: string
  telefon: string
  mesaj: string
  kvkkOnay: boolean
}

function dogrula(v: Temiz): Hatalar {
  const hatalar: Hatalar = {}

  if (!v.adSoyad) {
    hatalar.adSoyad = 'Ad soyad alanı boş. Size nasıl hitap edeceğimizi yazın.'
  } else if (v.adSoyad.length < 2 || v.adSoyad.length > 100) {
    hatalar.adSoyad = 'Ad soyad 2 ile 100 karakter arasında olmalı.'
  }

  if (!v.eposta) {
    hatalar.eposta = 'E-posta alanı boş. Dönüş yapabilmemiz için gerekli.'
  } else if (v.eposta.length > 200) {
    hatalar.eposta = 'E-posta adresi çok uzun. En fazla 200 karakter olabilir.'
  } else if (!epostaGecerli(v.eposta)) {
    hatalar.eposta = 'E-posta adresi geçerli görünmüyor. Adresi kontrol edip tekrar deneyin.'
  }

  if (v.sirket.length > 120) {
    hatalar.sirket = 'Şirket adı en fazla 120 karakter olabilir.'
  }

  if (v.telefon.length > 30) {
    hatalar.telefon = 'Telefon numarası en fazla 30 karakter olabilir.'
  }

  if (!v.mesaj) {
    hatalar.mesaj = 'Mesaj alanı boş. Şu an işin nasıl yürüdüğünü kısaca yazın.'
  } else if (v.mesaj.length < 20) {
    hatalar.mesaj = 'Mesaj çok kısa. En az 20 karakter yazın.'
  } else if (v.mesaj.length > 4000) {
    hatalar.mesaj = 'Mesaj çok uzun. En fazla 4000 karakter yazabilirsiniz.'
  }

  if (v.kvkkOnay !== true) {
    hatalar.kvkkOnay = 'Devam etmek için aydınlatma metnini onaylamanız gerekiyor.'
  }

  return hatalar
}

/* ---------- Gönderim ---------- */

function htmlKacir(metin: string): string {
  const tablo: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  }
  return metin.replace(/[&<>"']/g, (k) => tablo[k] ?? k)
}

/** Başlık enjeksiyonuna karşı: konu satırında satır sonu bırakılmaz. */
function tekSatir(metin: string): string {
  return metin.replace(/[\r\n]+/g, ' ').slice(0, 120)
}

function duzMetinGovde(v: Temiz): string {
  const satirlar = [
    `Ad soyad: ${v.adSoyad}`,
    `E-posta: ${v.eposta}`,
    v.sirket ? `Şirket: ${v.sirket}` : null,
    v.telefon ? `Telefon: ${v.telefon}` : null,
    '',
    'Mesaj:',
    v.mesaj,
  ]
  return satirlar.filter((s) => s !== null).join('\n')
}

function htmlGovde(v: Temiz): string {
  const satir = (etiket: string, deger: string) =>
    `<p style="margin:0 0 8px"><strong>${etiket}:</strong> ${htmlKacir(deger)}</p>`
  return [
    satir('Ad soyad', v.adSoyad),
    satir('E-posta', v.eposta),
    v.sirket ? satir('Şirket', v.sirket) : '',
    v.telefon ? satir('Telefon', v.telefon) : '',
    `<p style="margin:16px 0 4px"><strong>Mesaj</strong></p>`,
    `<p style="margin:0;white-space:pre-wrap">${htmlKacir(v.mesaj)}</p>`,
  ].join('')
}

type GonderimSonucu = { basarili: true } | { basarili: false; sebep: string }

async function gonder(v: Temiz): Promise<GonderimSonucu> {
  const resendAnahtari = ortam('RESEND_API_KEY')
  const alici = ortam('ILETISIM_ALICI_EPOSTA')
  const gonderen = ortam('GONDEREN_EPOSTA')
  const webhook = ortam('WEBHOOK_URL')

  // 1. Resend
  if (resendAnahtari && alici && gonderen) {
    try {
      const yanit = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendAnahtari}`,
        },
        body: JSON.stringify({
          from: gonderen,
          to: [alici],
          reply_to: v.eposta,
          subject: `Yeni iletişim formu: ${tekSatir(v.adSoyad)}`,
          text: duzMetinGovde(v),
          html: htmlGovde(v),
        }),
      })

      if (!yanit.ok) {
        const govde = await yanit.text().catch(() => '')
        console.error('Resend hatası:', yanit.status, govde)
        return { basarili: false, sebep: `resend:${yanit.status}` }
      }
      return { basarili: true }
    } catch (hata) {
      console.error('Resend isteği başarısız:', hata)
      return { basarili: false, sebep: 'resend:ag' }
    }
  }

  // 2. Webhook
  if (webhook) {
    try {
      const yanit = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          adSoyad: v.adSoyad,
          eposta: v.eposta,
          sirket: v.sirket || null,
          telefon: v.telefon || null,
          mesaj: v.mesaj,
          gonderimZamani: new Date().toISOString(),
        }),
      })

      if (!yanit.ok) {
        console.error('Webhook hatası:', yanit.status)
        return { basarili: false, sebep: `webhook:${yanit.status}` }
      }
      return { basarili: true }
    } catch (hata) {
      console.error('Webhook isteği başarısız:', hata)
      return { basarili: false, sebep: 'webhook:ag' }
    }
  }

  // 3. Geliştirme modu: hiçbir gönderim kanalı tanımlı değil.
  console.warn(
    'Gönderim kanalı tanımlı değil. .env.example dosyasına bakın. Form içeriği:\n' +
      duzMetinGovde(v),
  )
  return { basarili: true }
}

/* ---------- Yanıt yardımcıları ---------- */

function json(govde: Yanit, durum: number, baslik?: HeadersInit): Response {
  return new Response(JSON.stringify(govde), {
    status: durum,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...baslik },
  })
}

/* ---------- İşleyici ---------- */

export const POST: APIRoute = async ({ request }) => {
  let ham: FormVerisi
  try {
    ham = (await request.json()) as FormVerisi
  } catch {
    return json({ ok: false, hatalar: { genel: 'İstek okunamadı. Sayfayı yenileyip tekrar deneyin.' } }, 400)
  }

  // Bal küpü doluysa istek sessizce yutulur. Hız sınırı harcanmaz,
  // bota başarısız olduğu bilgisi verilmez.
  if (temizle(ham.website)) {
    return json({ ok: true }, 200)
  }

  const ip = ipAdresiniBul(request)
  if (istekSiniriAsildi(ip)) {
    return json(
      { ok: false, hatalar: { genel: 'Kısa sürede çok fazla istek geldi. Birkaç dakika sonra tekrar deneyin.' } },
      429,
      { 'Retry-After': '900' },
    )
  }

  const temiz: Temiz = {
    adSoyad: temizle(ham.adSoyad),
    eposta: temizle(ham.eposta),
    sirket: temizle(ham.sirket),
    telefon: temizle(ham.telefon),
    mesaj: temizle(ham.mesaj),
    kvkkOnay: ham.kvkkOnay === true,
  }

  const hatalar = dogrula(temiz)
  if (Object.keys(hatalar).length > 0) {
    // Doğrulama hatası gönderim sayılmaz. Kullanıcı düzeltip tekrar deneyebilir.
    return json({ ok: false, hatalar }, 400)
  }

  if (gonderimSiniriAsildi(ip)) {
    return json(
      { ok: false, hatalar: { genel: 'Kısa sürede çok fazla mesaj gönderildi. Birkaç dakika sonra tekrar deneyin.' } },
      429,
      { 'Retry-After': '900' },
    )
  }

  const sonuc = await gonder(temiz)
  if (!sonuc.basarili) {
    const alici = ortam('ILETISIM_ALICI_EPOSTA')
    const ek = alici ? ` Doğrudan ${alici} adresine yazabilirsiniz.` : ''
    return json(
      { ok: false, hatalar: { genel: `Mesaj gönderilemedi.${ek}` } },
      502,
    )
  }

  return json({ ok: true }, 200)
}

/** POST dışındaki tüm yöntemler reddedilir. */
export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, hatalar: { genel: 'Bu adres yalnızca POST kabul eder.' } }), {
    status: 405,
    headers: { 'Content-Type': 'application/json; charset=utf-8', Allow: 'POST' },
  })
