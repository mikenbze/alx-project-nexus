import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',   // ← MUST be relative for Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
