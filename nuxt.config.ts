export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    'unplugin-icons/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        download: true,
        families: {
          'JetBrains Mono': [400, 600, 800],
        },
      },
    ],
    [
      '@nuxtjs/prismic',
      {
        toolbar: false,
        preview: false,
        endpoint: 'https://zellmer-dev.cdn.prismic.io/api/v2',
        linkResolver: '~/app/prismic/linkResolver.js',
      },
    ],
  ],

  colorMode: {
    classSuffix: '',
  },

  image: {
    provider: 'prismic',
    screens: {
      'xs': 345,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536,
    },
  },

  vite: {
    optimizeDeps: {
      include: ['@highlightjs/vue-plugin'],
    },
  },
})
