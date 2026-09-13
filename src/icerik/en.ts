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
      { etiket: 'Where we stand', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'Contact', hedef: '/#iletisim' },
    ],
    anaMenu: 'Main menu',
    menuAc: 'Menu',
    menuKapat: 'Close',
    dilDegistir: 'Change language',
    icerigeAtla: 'Skip to content',
  },

  giris: {
    etiket: 'Monti Labs',
    baslik: 'From idea to working product.',
    altMetin:
      'We design and build digital products for businesses. We show early and ship in small pieces.',
    birincilCagri: 'Tell us about your project',
    ikincilCagri: 'See the work',
    paneller: {
      tasarim: 'Design',
      yayinda: 'Live',
      muhendislik: 'Engineering',
    },
  },

  isler: {
    kunye: 'Work',
    not: 'Three live, all in daily use',
    sahiplik: {
      monti: 'Monti product',
      musteri: 'Client work',
    },
    adresAciklama: 'opens the site in a new tab',
  },

  durus: {
    kunye: 'Where we stand',
    baslik: 'Three promises.',
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
    altMetin: 'A short message is enough. We reply within {sure}.',
    epostaEtiketi: 'Your email address',
    epostaYerTutucu: 'Your email address',
    gonderButonu: 'Let us talk',
    gonderiliyor: 'Sending',
    basariMesaji: 'We have your address. We will write within {sure}.',
    hataMesaji:
      'It did not go through. Check your connection and try again, or write to {eposta}.',
    formKapali: 'The form is off right now. Email works.',
    dogrudanOncesi: 'or write directly to',
    kvkkOnayOncesi:
      'I agree that my email address is processed so my request can be reviewed. Details in the ',
    kvkkOnayBaglantiEtiketi: 'privacy notice',
    kvkkOnaySonrasi: ' (Turkish).',
  },

  altBilgi: {
    gezintiKunye: 'Footer',
    baglantilar: [
      { etiket: 'Work', hedef: '/#isler' },
      { etiket: 'Where we stand', hedef: '/#durus' },
      { etiket: 'Monti', hedef: '/#monti' },
      { etiket: 'Contact', hedef: '/#iletisim' },
    ],
    yasal: [
      { etiket: 'KVKK', hedef: '/kvkk' },
      { etiket: 'Privacy', hedef: '/gizlilik' },
      { etiket: 'Cookies', hedef: '/cerezler' },
    ],
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
