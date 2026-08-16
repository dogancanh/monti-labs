# Vaka çalışmaları: yayın öncesi onay listesi

Bu dosya siteye çıkmaz. Astro içerik şemasının dışında tutuluyor.

Dört vaka da `onayBekliyor: true` durumunda. Bu alan `false` yapılmadan
içerik onaylanmış sayılmaz.

## Neden onay gerekiyor

Metinler, projelerin bilinen kapsamından yazıldı. Müşteri adı, marka adı ve
canlı bağlantı hiçbirinde yok, yalnızca sektör yazılı. Ama şu iki şeyi
yalnızca siz doğrulayabilirsiniz:

1. Anlatılan işin gerçekten yaptığınız iş olduğu
2. Müşterinin bu düzeyde anlatıma itiraz etmeyeceği

## Doğrulanacak tek rakam

- `02-sigortacilik.md` içindeki **1413 kontrol kuralı** sayısı.
  Bu sayı doğru değilse düzeltin veya cümleden çıkarın.

Başka hiçbir dosyada sayı yok. Yazılan ilk taslakta bulunan
"30 dakikadan 5 dakikaya" ifadesi doğrulanamadığı için kaldırıldı.

## Eksik olan: sonuç satırları

Üç vakanın `sonuc` alanı boş, çünkü elimizde ölçülmüş bir rakam yok.
Marka sesi kuralı doğrulanamayan sayı yazılmasını yasaklıyor, bu yüzden
alan boş bırakıldı. Site bu alanı olmayan kartlarda sonuç satırını hiç
göstermiyor.

Şu türde bir rakamınız varsa `sonuc` alanını ekleyin, kart otomatik
olarak gösterir:

```yaml
sonuc: Sipariş başına harcanan süre 40 dakikadan 6 dakikaya indi.
```

Ölçülebilir olan her şey işe yarar: kazanılan saat, düşen hata sayısı,
kısalan süre, azalan maliyet. Yuvarlak tahmin değil, gerçek ölçüm.

## Yeni vaka eklemek

`src/content/calismalar/` altına yeni bir `.md` dosyası koyun.
Alanlar `src/content.config.ts` içinde tanımlı:

| Alan | Zorunlu | Not |
|---|---|---|
| `baslik` | evet | Kısa, problem odaklı |
| `sektor` | evet | Müşteri adı değil, sektör |
| `tur` | evet | uygulama, b2b-urun, web-sitesi, otomasyon, entegrasyon |
| `problem` | evet | Bir iki cümle |
| `neYaptik` | evet | İki dört cümle |
| `sonuc` | hayır | Ölçülmüş rakam yoksa hiç yazmayın |
| `teknolojiler` | hayır | Etiket listesi |
| `sira` | hayır | Ana sayfadaki sıra |
| `onayBekliyor` | hayır | Onaylandığında `false` |
