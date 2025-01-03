// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    'nuxt-og-image',
    '@nuxt/content',
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
    markdown: {
      anchorLinks: false,
    },
    navigation: {
      fields: ['title', 'description', 'thumbnail', 'slug'],
    },
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
      },
    },
  },

  compatibilityDate: '2024-12-27',

  eslint: {
    config: {
      stylistic: true,
    },
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
