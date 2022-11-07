/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brand: '#fc2929'
      }
    }
	},
	plugins: [],
}
