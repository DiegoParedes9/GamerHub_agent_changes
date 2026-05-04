# Exportar ZIP y subir a GitHub

## ZIP generado
Se generó en:

`releases/SendMessage_gamerhub.zip`

## Cómo descomprimir
```bash
unzip releases/SendMessage_gamerhub.zip -d SendMessage_gamerhub
```

## Cómo subir a GitHub desde la carpeta descomprimida
```bash
cd SendMessage_gamerhub
git init
git add .
git commit -m "Initial GamerHub import"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## Opción alternativa (sin descomprimir)
También puedes usar este repo actual directamente:
```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin HEAD:main
```


## Extracción en 1 comando
```bash
./extract_release.sh
```
