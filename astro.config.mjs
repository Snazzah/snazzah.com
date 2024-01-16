import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true }), icon(), tailwind(), compress()],
  vite: {
    ssr: {
      noExternal: ['react-use-lanyard', 'react-tippy', '@iconify/react']
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Snazzah',
          short_name: 'Snazzah',
          start_url: '/',
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#171717',
          theme_color: '#fc2929',
          icons: [
            {
              src: '/images/meta/android-chrome-192x192.png',
              type: 'image/png',
              sizes: '192x192'
            },
            {
              src: '/images/meta/android-chrome-512x512.png',
              type: 'image/png',
              sizes: '512x512'
            }
          ]
        },
        workbox: {
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null
        }
      })
    ]
  }
});
