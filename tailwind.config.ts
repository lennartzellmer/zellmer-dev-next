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
      boxShadow: {
        'putiful': '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.015), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.026), 12.5px 12.5px 10px rgba(0, 0, 0, 0.037), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.047), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.061), 100px 100px 80px rgba(0, 0, 0, 0.09)',
        'putiful-close': '0.9px 1px 2.2px -11px rgba(0, 0, 0, 0.015), 3.5px 3.8px 6.1px -11px rgba(0, 0, 0, 0.026), 8.5px 9.2px 12.8px -11px rgba(0, 0, 0, 0.037), 17.2px 18.4px 24.4px -11px rgba(0, 0, 0, 0.047), 32.5px 34.8px 44.5px -11px rgba(0, 0, 0, 0.061), 70px 75px 80px -11px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [
    tailwindTypography({ className: 'prose', target: 'modern' }),
  ],
}
