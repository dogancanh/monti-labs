import type { Dil } from '../lib/diller'
import type { Icerik } from './tip'
import { tr } from './tr'
import { en } from './en'

/* Dil koduna göre metin seti. İki set de aynı Icerik tipini karşılıyor,
   bu yüzden bir dilde eksik kalan alan derlemede yakalanır. */
export const metinler: Record<Dil, Icerik> = { tr, en }

export const icerikAl = (dil: Dil): Icerik => metinler[dil]

export type { Icerik }
