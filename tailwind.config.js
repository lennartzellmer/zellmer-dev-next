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
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  darkMode: 'class',
  safelist: ['line-through'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#11181c',
              fontFamily: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
              '&:hover': {
                color: '#687076',
              },
            },
          },
        },
      },
      colors: {
        yellow: mappedRadixColors.amber,
        'yellow-dark': mappedRadixColors.amberDark,
        red: mappedRadixColors.red,
        'red-dark': mappedRadixColors.redDark,
        blue: mappedRadixColors.blue,
        'blue-dark': mappedRadixColors.blueDark,
        slate: mappedRadixColors.slate,
        'slate-dark': mappedRadixColors.slateDark,
        gray: {
          100: mappedRadixColors.slate[1],
          200: mappedRadixColors.slate[3],
          300: mappedRadixColors.slate[5],
          400: mappedRadixColors.slate[7],
          500: mappedRadixColors.slate[8],
          600: mappedRadixColors.slate[9],
          700: mappedRadixColors.slate[10],
          800: mappedRadixColors.slate[11],
          900: mappedRadixColors.slate[12],
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
