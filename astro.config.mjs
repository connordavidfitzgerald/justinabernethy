// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lenis from "astro-lenis";

import sanity from "@sanity/astro";

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
          // ...
        ],
      },
    },
  ],

  integrations: [
    lenis(),
    sanity({
      projectId: "t3fe0x9u",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2026-04-01",
    }),
  ],
});
