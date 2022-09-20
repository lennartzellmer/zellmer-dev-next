import { defineNuxtConfig } from 'nuxt/config'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    [
      '@nuxtjs/google-fonts',
      {
        download: true,
        families: {
          'JetBrains Mono': [400, 600, 800],
        },
      },
    ],
    ['@nuxtjs/tailwindcss', { cssPath: '~/assets/css/tailwind.css' }],
    [
      '@nuxtjs/prismic',
      {
        toolbar: false,
        preview: false,
        endpoint: 'https://zellmer-dev.cdn.prismic.io/api/v2',
      },
    ],
  ],

  colorMode: {
    classSuffix: '',
  },

  image: {
    provider: 'prismic',
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
