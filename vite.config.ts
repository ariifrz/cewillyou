import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Gunakan base kosong agar semua path aset (JS, CSS, Gambar) bersifat relatif
  // Ini adalah solusi paling ampuh untuk masalah White Screen di GitHub Pages
  base: '', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Menghilangkan peringatan ukuran chunk jika perlu
    chunkSizeWarningLimit: 1000,
  }
});