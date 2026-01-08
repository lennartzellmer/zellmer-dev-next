// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxt/content',
    'reka-ui/nuxt',
    '@vueuse/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  site: {
    // production URL for OG Image generation
    url: 'https://lennart.zellmer.dev',
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
  },
  compatibilityDate: '2026-01-03',
  typescript: {
    tsConfig: {
      compilerOptions: {
        esModuleInterop: true,
      },
    },
  },
  fonts: {
    families: [
      { name: 'Geist', provider: 'google', weights: ['100 900'] },
      { name: 'Lilex', provider: 'google' },
    ],
  },
  image: {
    provider: 'ipx',
    screens: {
      'xs': 345,
      'sm': 640,
      'md': 800,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1600,
      '2xl': 1536,
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
