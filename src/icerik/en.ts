import type { Icerik } from './tip'

/* ============================================================
   ENGLISH COPY

   Written directly in English, not translated from the Turkish.
   Same discipline: short sentences, verb first, few adjectives,
   no self praise, no service catalogue.

   Banned: innovative solutions, digital transformation partner,
   end to end solutions, next generation technology, passionate team,
   customer centric.
   ============================================================ */

export const en: Icerik = {
  dilAdi: 'English',

  gezinti: {
    baglantilar: [
      { etiket: 'Work', hedef: '/#isler' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'Contact', hedef: '/#iletisim' },
    ],
    menuAc: 'Menu',
    menuKapat: 'Close',
    dilDegistir: 'Change language',
    icerigeAtla: 'Skip to content',
  },

  giris: {
    baslikSatirlari: ['Built to be used,', 'not demoed.'],
    altMetin: 'We design and build digital products for businesses. Our own included.',
    urunlerEtiketi: 'Live now',
  },

  isler: {
    kunye: 'Work',
    sahiplik: {
      monti: 'Monti product',
      musteri: 'Client work',
    },
    adresCagri: 'Open the site',
  },

  durus: {
    kunye: 'Where we stand',
    ilkeler: [
      {
        baslik: 'We ship in small pieces.',
        metin: 'You see it early, so nothing surprises you late.',
      },
      {
        baslik: 'Design and engineering sit at the same table.',
        metin: 'Products break when the two run apart.',
      },
      {
        baslik: 'We hand the system over to your team.',
        metin: 'You do not have to stay dependent on us.',
      },
    ],
  },

  monti: {
    kunye: 'Monti',
    metin:
      'Monti Labs is run by two founding partners who keep product design and engineering at the same table. We build our own products. We do the same work for other companies.',
    kurucularKunye: 'Founders',
    kurucular: [
      { ad: 'İsmail Semih Pehlivan', unvan: 'Founding partner' },
      { ad: 'Doğancan Hırdavatçıoğlu', unvan: 'Founding partner' },
    ],
  },

  iletisim: {
    kunye: 'Contact',
    baslik: 'What do you want to build?',
    epostaOncesi: 'Write to us',
    altMetin: 'A short message is enough. We reply within {sure}.',
    formKapali: 'The form is off right now. Email works.',
    alanlar: {
      adSoyad: 'Name',
      eposta: 'Email',
      sirket: 'Company',
      mesaj: 'Tell us a little about the project',
    },
    opsiyonelEtiketi: 'optional',
    gonderButonu: 'Send',
    gonderiliyor: 'Sending',
    basariMesaji: 'Your message reached us. We will reply within {sure}.',
    hataMesaji:
      'The message did not go through. Check your connection and try again, or write to {eposta}.',
    kvkkOnayOncesi:
      'By sending this form I agree that my contact details are processed so my request can be reviewed. Details in the ',
    kvkkOnayBaglantiEtiketi: 'privacy notice',
    kvkkOnaySonrasi: ' (Turkish).',
  },

  altBilgi: {
    kisaTanim: 'Digital products for businesses.',
    baglantilar: [
      { etiket: 'Work', hedef: '/#isler' },
      { etiket: 'Where we stand', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'Contact', hedef: '/#iletisim' },
    ],
    yasalKunye: 'Legal',
    telifSablonu: '© {yil} Monti Labs',
    yasalDilNotu: 'Legal texts are published in Turkish.',
  },

  bulunamadi: {
    baslik: 'This page does not exist.',
    metin: 'The address may have changed, or it may never have existed.',
    buton: 'Back to the home page',
  },

  meta: {
    baslik: 'Monti Labs · Digital products for businesses',
    aciklama:
      'Monti Labs is a technology company that designs and builds digital products for businesses, and builds its own.',
    ogBaslik: 'Monti Labs',
    ogAciklama: 'We design and build digital products for businesses. Our own included.',
  },
}
