import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/OR/', // Forces the browser to always load assets from the root repository folder
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
