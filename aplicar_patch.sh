#!/usr/bin/env bash
set -euo pipefail

if ! command -v git >/dev/null 2>&1; then
  echo "Git no está instalado."
  exit 1
fi

if [ ! -f PATCH_COMPLETO.diff ]; then
  echo "No se encontró PATCH_COMPLETO.diff en esta carpeta."
  exit 1
fi

git apply PATCH_COMPLETO.diff
echo "Patch aplicado correctamente."
