import { defineNuxtPlugin } from '#app'
import VueFathom from '@ubclaunchpad/vue-fathom'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFathom, {
    siteID: 'VQAATPLB',
    settings: {
      url: 'https://cdn.usefathom.com/script.js',
      spa: 'history',
    },
  })
})
