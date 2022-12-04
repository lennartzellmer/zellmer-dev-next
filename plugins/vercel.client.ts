import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  if (!process.dev) {
    inject()
  }
})
