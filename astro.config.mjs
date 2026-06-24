// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://snazzah.com",

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Satoshi",
      cssVariable: "--font-satoshi",
      options: {
        variants: [
          {
            weight: "300 900",
            style: "normal",
            src: ["./src/assets/fonts/Satoshi-Variable.woff2", "./src/assets/fonts/Satoshi-Variable.woff", "./src/assets/fonts/Satoshi-Variable.ttf"]
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Supreme",
      cssVariable: "--font-supreme",
      options: {
        variants: [
          {
            weight: "100 800",
            style: "normal",
            src: ["./src/assets/fonts/Supreme-Variable.woff2", "./src/assets/fonts/Supreme-Variable.woff", "./src/assets/fonts/Supreme-Variable.ttf"]
          },
          {
            weight: "100 800",
            style: "italic",
            src: ["./src/assets/fonts/Supreme-VariableItalic.woff2", "./src/assets/fonts/Supreme-VariableItalic.woff", "./src/assets/fonts/Supreme-VariableItalic.ttf"]
          }
        ]
      }
    }
  ],

  env: {
    schema: {
      PLAUSIBLE_URL: envField.string({ context: "client", access: "public", optional: true })
    }
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com']
    }
  },

  integrations: [svelte({ extensions: ['.svelte'] }), sitemap()]
});
