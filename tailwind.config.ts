import tailwindTypography from '@tailwindcss/typography'
import * as radixColors from '@radix-ui/colors'
import type { Config } from 'tailwindcss'

/**
 * Format Radix colors into Tailwind CSS format.
 *
 * @example blueDark.blue1 -> blue-dark-1
 */
function formatRadixColors() {
  const colors: Record<string, Record<string, string>> = {}

  const colorEntries = Object.entries(radixColors)
  for (const [radixColorName, radixColor] of colorEntries) {
    const colorName = radixColorName
    const color: Record<string, string> = {}

    for (const [radixScale, value] of Object.entries(radixColor)) {
      const scale = radixScale.match(/\d+$/)?.[0]
      if (!scale) {
        continue
      }
      color[scale] = value
    }

    const kebabCaseColorName = colorName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

    colors[kebabCaseColorName] = color
  }

  return colors
}

export default <Partial<Config>>{
  darkMode: 'class',
  safelist: ['line-through'],
  content: ['./error.vue', './slices/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        mono: ['JetBrains Mono'],
      },
      screens: {
        xs: '345px',
      },
      colors: formatRadixColors(),
    },
  },
  plugins: [
    tailwindTypography({ className: 'prose', target: 'modern' }),
  ],
}
