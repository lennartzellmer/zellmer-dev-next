// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/prismic',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    'nuxt-shiki',
    'nuxt-og-image',
  ],
  shiki: {
    defaultTheme: 'houston',
  },
  site: {
    // production URL for OG Image generation
    url: 'https://lennart.zellmer.dev',
  },
  prismic: {
    endpoint: 'zellmer-dev',
    preview: false,
    toolbar: false,
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
  },
  image: {
    provider: 'prismic',
    prismic: {},
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
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
