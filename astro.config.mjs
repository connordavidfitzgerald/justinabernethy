// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lenis from "astro-lenis";
import sanity from "@sanity/astro";

import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Deploy to Vercel. Pages marked `prerender = false` (currently the homepage)
  // render on-demand and are cached via ISR, so publishing in Sanity shows up
  // within `expiration` seconds without a full rebuild.
  adapter: vercel({
    isr: {
      expiration: 60, // re-fetch Sanity data at most once per 60s
    },
  }),

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
            src: ["./src/assets/fonts/AntiqueLegacy-Semibold.otf"],
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
      // ISR re-renders on a timer, so pull fresh (uncached) data each time.
      useCdn: false,
      apiVersion: "2026-04-01",
    }),
    svelte(),
    react(),
  ],
});
