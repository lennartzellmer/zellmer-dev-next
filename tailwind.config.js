const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
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
        gray: colors.stone,
        green: colors.green,
        yellow: colors.yellow,
        primary: {
          100: '#F8FAF0',
          200: '#EBF1D5',
          300: '#DDE8B9',
          400: '#A4AD86',
          500: '#6A7152',
          600: '#565C43',
          700: '#424733',
          800: '#2C3022',
          900: '#161811',
        },
        slate: {
          1: '#fbfcfd',
          2: '#f8f9fa',
          3: '#f1f3f5',
          4: '#eceef0',
          5: '#e6e8eb',
          6: '#dfe3e6',
          7: '#d7dbdf',
          8: '#c1c8cd',
          9: '#889096',
          10: '#7e868c',
          11: '#687076',
          12: '#11181c',
        },
        action: {
          red: '#F34616',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
