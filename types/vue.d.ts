import type anime from 'animejs'

declare module '@nuxt/types' {
  interface Context {
    $anime: typeof anime
  }
}
