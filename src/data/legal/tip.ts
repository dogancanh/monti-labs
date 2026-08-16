export interface YasalMetin {
  baslik: string
  ozet: string
  guncellenmeTarihi: string
  hukukiIncelemeGerekli: boolean
  bolumler: { baslik: string; paragraflar: string[] }[]
}
