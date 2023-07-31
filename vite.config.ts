import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import svgr from "vite-plugin-svgr";
import macrosPlugin from "vite-plugin-babel-macros"
// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
  },
})
