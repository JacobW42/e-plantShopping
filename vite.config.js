// filepath: c:\Users\jacob\Desktop\Software Developer\e-plantShopping\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/e-plantShopping/', // Set this to your repository name
});