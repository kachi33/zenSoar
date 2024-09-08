import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    server: {
      port: 3000, 
      proxy: {
          '/auth': 'http://localhost:5000', // Backend server
      },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@src': '/src',
            '@components': '/src/components',
            '@images': '/src/images'
        },
    },
  };
});