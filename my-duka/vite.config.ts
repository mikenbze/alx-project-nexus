import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // relative paths so assets load correctly on Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
