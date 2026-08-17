#!/usr/bin/env bash
# ============================================================
# Yerelden GitHub Pages'e yayın
#
#   ./scripts/yayinla.sh  ["commit mesajı"]
#
# GitHub Actions faturalama nedeniyle çalışmadığı sürece yayın
# bu betikle yapılır. Actions tekrar çalışır hale gelince
# depo ayarlarından Pages kaynağını "GitHub Actions"a almak
# yeterli, bu betiğe gerek kalmaz.
#
# Betik ne yapar:
#   1. Kaynak kodda commit edilmemiş değişiklik varsa uyarır
#   2. Tip denetimi ve derleme yapar
#   3. dist/ çıktısını gh-pages dalına gönderir
#   4. Pages yapısını tetikler ve sonucunu bekler
# ============================================================

set -euo pipefail

DEPO="dogancanh/monti-labs"
ADRES="https://dogancanh.github.io/monti-labs/"
MESAJ="${1:-Site guncellemesi}"

kok="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$kok"

echo "==> Kaynak kod durumu"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "    Commit edilmemiş değişiklik var:"
  git status --short | sed 's/^/      /'
  echo "    Bunlar main dalına gönderilmedi. Yalnızca derlenmiş çıktı yayınlanacak."
  echo
fi

# Discord webhook adresi depoda tutulmaz, derleme sırasında dışarıdan verilir.
# Dosya yoksa bildirim sessizce devre dışı kalır, form yine çalışır.
KANCA_DOSYASI="$HOME/.monti/discord-webhooks.json"
if [[ -f "$KANCA_DOSYASI" ]]; then
  PUBLIC_DISCORD_WEBHOOK="$(node -e "
    try {
      const j = require('$KANCA_DOSYASI');
      process.stdout.write(j['gelen-talepler'] || '');
    } catch { process.stdout.write(''); }
  ")"
  export PUBLIC_DISCORD_WEBHOOK
  if [[ -n "$PUBLIC_DISCORD_WEBHOOK" ]]; then
    echo "==> Discord bildirimi etkin (adres yerel dosyadan okundu)"
  else
    echo "==> Discord bildirimi kapalı (dosyada adres yok)"
  fi
else
  echo "==> Discord bildirimi kapalı ($KANCA_DOSYASI yok)"
fi

echo "==> Tip denetimi"
npm run check

echo "==> Derleme"
npm run build

if [[ ! -f dist/index.html ]]; then
  echo "HATA: dist/index.html yok, derleme başarısız." >&2
  exit 1
fi

if [[ ! -f dist/.nojekyll ]]; then
  echo "HATA: dist/.nojekyll yok. Pages _astro klasörünü sunmaz." >&2
  exit 1
fi

echo "==> gh-pages dalına gönderiliyor"
gecici="$(mktemp -d)"
trap 'rm -rf "$gecici"' EXIT

cp -R dist/. "$gecici"/
(
  cd "$gecici"
  git init -q -b gh-pages
  git add -A
  git -c user.name="$(git -C "$kok" config user.name || echo 'Monti Labs')" \
      -c user.email="$(git -C "$kok" config user.email || echo 'noreply@example.com')" \
      commit -q -m "$MESAJ"
  git remote add origin "https://github.com/${DEPO}.git"
  git push -q -f origin gh-pages
)

echo "==> Pages yapısı tetikleniyor"
gh api -X POST "repos/${DEPO}/pages/builds" >/dev/null

for i in $(seq 1 20); do
  sleep 6
  durum="$(gh api "repos/${DEPO}/pages/builds/latest" --jq '.status' 2>/dev/null || echo '')"
  if [[ "$durum" == "built" ]]; then
    echo "==> Yayınlandı: ${ADRES}"
    exit 0
  fi
  if [[ "$durum" == "errored" ]]; then
    echo "HATA: Pages yapısı başarısız." >&2
    gh api "repos/${DEPO}/pages/builds/latest" --jq '.error.message' >&2
    exit 1
  fi
  printf '    durum: %s (%d/20)\n' "${durum:-bilinmiyor}" "$i"
done

echo "UYARI: Yapı zaman aşımına uğradı. Durumu kontrol edin:" >&2
echo "  gh api repos/${DEPO}/pages/builds/latest" >&2
exit 1
