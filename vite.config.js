import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-simple-maps', 'prop-types'],
  },
  build: {
    commonjsOptions: {
      include: [/react-simple-maps/, /prop-types/, /node_modules/],
    },
  },
});
