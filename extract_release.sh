#!/usr/bin/env bash
set -euo pipefail
ZIP_PATH="releases/SendMessage_gamerhub.zip"
OUT_DIR="SendMessage_gamerhub"

if [ ! -f "$ZIP_PATH" ]; then
  echo "No se encontró $ZIP_PATH"
  exit 1
fi

rm -rf "$OUT_DIR"
unzip -q "$ZIP_PATH" -d "$OUT_DIR"
echo "Listo. Proyecto extraído en: $OUT_DIR"
