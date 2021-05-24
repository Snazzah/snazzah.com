const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        tgray: colors.trueGray,
        orange: colors.orange,
        teal: colors.teal,
        brand: '#fc2929'
      }
    }
  },
  variants: {},
  plugins: []
};
