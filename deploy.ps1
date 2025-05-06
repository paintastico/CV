# Limpieza profunda
Remove-Item -Recurse -Force dist, node_modules/.vite
npm install
npm run build

# Crear .nojekyll SIEMPRE (clave para GitHub Pages)
if (!(Test-Path "dist/.nojekyll")) {
    New-Item -ItemType File -Path "dist/.nojekyll"
}

# Despliegue
npm run deploy