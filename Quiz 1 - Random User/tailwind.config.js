const plugin = require('tailwindcss/plugin')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      willChange: {
        filter: 'filter',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('current', '&.active')
      addVariant('router-active', '&.router-link-active')
      addVariant('router-exact', '&.router-link-exact-active')
    }),
    iconsPlugin({
      collections: getIconCollections(),
    }),
  ],
  safelist: [],
}
