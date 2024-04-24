// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
).append({
  ignores: ['prismicio-types.d.ts'],
})
