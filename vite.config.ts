import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:5000,
  },
  plugins: [react(),tailwindcss(),tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
