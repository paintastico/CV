import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CV/',
  server: {
    host: true, // Permite acceso desde la red local
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Directorio para assets estáticos
    emptyOutDir: true,   // Limpia el directorio en cada build
  }
})