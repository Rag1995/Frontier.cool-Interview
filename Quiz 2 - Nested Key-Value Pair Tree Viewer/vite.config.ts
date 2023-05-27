import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Tailwindcss from 'tailwindcss'
import Autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({}),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      dts: true,
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
      '@cp/': `${resolve(__dirname, './src/components')}/`,
    },
    extensions: ['.vue', '.js', '.ts'],
  },
  css: {
    postcss: {
      plugins: [Tailwindcss, Autoprefixer],
    },
  },
})
