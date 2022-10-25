import { defineNuxtConfig } from 'nuxt/config'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

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
    screens: {
      xs: 345,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
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
