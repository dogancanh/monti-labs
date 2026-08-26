#!/usr/bin/env bash
# Archivo değişken fontunu siteye gereken karakterlere indirger.
#
# Fontsource paketi latin ve latin-ext altkümelerini ayrı dosyalar halinde
# veriyor. Türkçe bir sayfa ikisini birden istiyor, toplam 172 KB ediyor.
# Site yalnızca Türkçe ve İngilizce metin gösterdiği için bu fazla.
#
# latin dosyası U+0000-00FF aralığını ve U+0131 (ı) karakterini taşıyor,
# yani Ç Ö Ü ç ö ü ı zaten orada. Türkçe için eksik kalan yalnızca beş
# karakter var: Ğ ğ İ Ş ş. Onlar latin-ext dosyasında duruyor.
#
# Bu yüzden iki dosya üretiliyor:
#   archivo-tr-en.woff2   ana küme, her sayfada yükleniyor
#   archivo-tr-ek.woff2   yalnızca beş Türkçe karakter, İngilizce sayfada hiç indirilmiyor
#
# İki eksen (wght, wdth) her iki dosyada da korunuyor.
# Çıktılar depoya girer, böylece derleme fonttools'a bağımlı olmaz.
#
# Yeniden üretmek için:
#   python3 -m venv .venv && .venv/bin/pip install fonttools brotli
#   PYTHON=.venv/bin/python ./scripts/font-altkume.sh
set -euo pipefail

PYTHON="${PYTHON:-python3}"
LATIN="node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2"
LATIN_EXT="node_modules/@fontsource-variable/archivo/files/archivo-latin-ext-standard-normal.woff2"

ANA_HEDEF="public/fontlar/archivo-tr-en.woff2"
EK_HEDEF="public/fontlar/archivo-tr-ek.woff2"

# Temel latin, rakam, noktalama, Türkçe'nin latin aralığındaki harfleri,
# tırnak işaretleri, euro, telif ve orta nokta.
ANA_KARAKTERLER='U+0020-007E,U+00A0,U+00A9,U+00AB,U+00AE,U+00B7,U+00BB,U+00C7,U+00D6,U+00DC,U+00E7,U+00F6,U+00FC,U+0131,U+2010-2015,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2039,U+203A,U+20AC'

# Yalnızca latin-ext aralığında kalan Türkçe harfler.
EK_KARAKTERLER='U+011E,U+011F,U+0130,U+015E,U+015F'

OZELLIKLER='kern,liga,calt,ccmp,mark,mkmk,locl,tnum'

mkdir -p public/fontlar

"$PYTHON" -m fontTools.subset "$LATIN" \
  --unicodes="$ANA_KARAKTERLER" \
  --layout-features="$OZELLIKLER" \
  --flavor=woff2 \
  --output-file="$ANA_HEDEF"

"$PYTHON" -m fontTools.subset "$LATIN_EXT" \
  --unicodes="$EK_KARAKTERLER" \
  --layout-features="$OZELLIKLER" \
  --flavor=woff2 \
  --output-file="$EK_HEDEF"

ls -lh "$ANA_HEDEF" "$EK_HEDEF"

# Üretilen dosyaların birlikte Türkçe'yi karşıladığını ve eksenlerin
# korunduğunu doğrular. Doğrulama başarısızsa betik hata ile biter.
"$PYTHON" - "$ANA_HEDEF" "$EK_HEDEF" <<'PY'
import sys
from fontTools.ttLib import TTFont

gerekli = 'abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ0123456789'
kapsam = set()

for yol in sys.argv[1:]:
    font = TTFont(yol)
    for tablo in font['cmap'].tables:
        kapsam.update(tablo.cmap.keys())
    eksenler = {a.axisTag for a in font['fvar'].axes}
    if not {'wght', 'wdth'} <= eksenler:
        print(f'{yol}: eksen kayip, bulunan {eksenler}')
        raise SystemExit(1)
    print(f'{yol}: eksenler tam ({sorted(eksenler)})')

eksik = [k for k in gerekli if ord(k) not in kapsam]
if eksik:
    print('EKSIK KARAKTER:', ''.join(eksik))
    raise SystemExit(1)

print('Turkce ve Ingilizce alfabenin tamami karsilaniyor.')
PY
