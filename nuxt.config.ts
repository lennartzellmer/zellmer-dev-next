import { defineNuxtConfig } from 'nuxt3'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://zellmer-dev.cdn.prismic.io/api/v2',
        preview: false,
      },
    ],
  ],

  tailwindcss: {
    jit: true,
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: '',
  },

  vite: {
    plugins: [
      Icons({
        compiler: 'vue3',

        customCollections: {
          elvah: FileSystemIconLoader('./assets/icons'),
        },
      }),
    ],
    optimizeDeps: {
      include: ['@highlightjs/vue-plugin'],
    },
  },
})
