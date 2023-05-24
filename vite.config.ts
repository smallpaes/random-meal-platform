import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [svgr(), react()],
  };

  if (command !== 'serve') {
    config.base = '/random-meal-platform/';
  }

  return config;
});
