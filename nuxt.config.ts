import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/css/main.css'],

    modules: [
        [
            '@nuxtjs/prismic',
            {
                endpoint: 'https://zellmer-dev.cdn.prismic.io/api/v2'
            }
        ]
    ],

    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
})
