import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.VITE_BASE_PATH || "/fm-11-multi-step-form",
  base: process.env.VERCEL ? "/" : "/fm-11-multi-step-form/",
});
