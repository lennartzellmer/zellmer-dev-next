import anime from 'animejs'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      anime,
    },
  }
})
