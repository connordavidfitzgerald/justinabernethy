// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lenis from "astro-lenis";
import sanity from "@sanity/astro";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Custom",
      cssVariable: "--font-sans",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/AntiqueLegacy-Book.otf"],
            display: "block",
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/AntiqueLegacy-Medium.otf"],
            display: "block",
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/AntiqueLegacy-SemiBold.otf"],
            display: "block",
          },
        ],
      },
    },
  ],

  integrations: [
    sanity({
      projectId: "t3fe0x9u",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2026-04-01",
    }),
    svelte(),
    react(),
  ],
});
