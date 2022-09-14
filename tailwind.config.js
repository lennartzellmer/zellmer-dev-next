const defaultTheme = require('tailwindcss/defaultTheme')
const radixColors = require('@radix-ui/colors')

function colorKey(name, step) {
  return `${name.replace('Dark', '')}${step}`
}

function fromRadixColor(key, color) {
  return [
    key,
    {
      1: color[colorKey(key, 1)],
      2: color[colorKey(key, 2)],
      3: color[colorKey(key, 3)],
      4: color[colorKey(key, 4)],
      5: color[colorKey(key, 5)],
      6: color[colorKey(key, 6)],
      7: color[colorKey(key, 7)],
      8: color[colorKey(key, 8)],
      9: color[colorKey(key, 9)],
      10: color[colorKey(key, 10)],
      11: color[colorKey(key, 11)],
      12: color[colorKey(key, 12)],
    },
  ]
}

const mappedRadixColors = Object.fromEntries(
  Object.entries(radixColors).map(([key, value]) => fromRadixColor(key, value))
)

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  darkMode: 'class',
  safelist: ['line-through'],
  theme: {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        yellow: mappedRadixColors.amber,
        'yellow-dark': mappedRadixColors.amberDark,
        red: mappedRadixColors.red,
        'red-dark': mappedRadixColors.redDark,
        slate: mappedRadixColors.sand,
        'slate-dark': mappedRadixColors.sageDark,
        gray: {
          100: mappedRadixColors.sand[1],
          200: mappedRadixColors.sand[3],
          300: mappedRadixColors.sand[5],
          400: mappedRadixColors.sand[7],
          500: mappedRadixColors.sand[8],
          600: mappedRadixColors.sand[9],
          700: mappedRadixColors.sand[10],
          800: mappedRadixColors.sand[11],
          900: mappedRadixColors.sand[12],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
