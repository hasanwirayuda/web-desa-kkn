// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        ".ngrok-free.app", // ✅ allow all ngrok tunnels (so it works even if the subdomain changes)
      ],
    },
  },
  modules: ["@nuxt/image", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Poppins",
        provider: "google", // ambil dari Google Fonts
        weights: [400, 500, 600, 700], // pilih varian yang kamu perlu
      },
    ],
  },
});
