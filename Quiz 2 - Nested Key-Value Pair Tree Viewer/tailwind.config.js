const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        DEFAULT: '640px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        body: {
          DEFAULT: colors.gray[100],
          dark: colors.gray[900],
        },
        primary: {
          DEFAULT: colors.blue[600],
          dark: colors.yellow[500],
        }
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
