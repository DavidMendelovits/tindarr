import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: [
      "localhost",
      ".replit.dev", // This will allow all replit.dev subdomains
      "tindarr-dfordavey.replit.app",
    ],
  },
});
