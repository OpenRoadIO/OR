import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/OR/', // MUST match your repo name with slashes
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
