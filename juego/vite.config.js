import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html' // Asegura que el punto de entrada sea el correcto
    }
  },
  base: '/' // Asegura que todas las rutas estén basadas en la raíz
});
