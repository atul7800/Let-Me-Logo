import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server:{
    port:'3333',
    strictPort:true,
    // proxy:{
    //   '/png':'https://logoexpress.tubeguruji.com',
    // }
    proxy: {
      '/png': {
        target: 'https://logoexpress.tubeguruji.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/png/, ''),
      },
    },
  }
});
