import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  return inject()
})
