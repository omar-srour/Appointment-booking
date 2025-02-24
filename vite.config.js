import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // تأكد أن `base` مضبوط
  server: {
    hmr: true, // تمكين HMR
  },
});
