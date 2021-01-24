// const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  darkMode: false,
  variants: {
    extend: {}
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      yellow: {
        // light: '#EDE784',
        DEFAULT: '#EDE784',
        // dark: '#EDE784',
      },
      red: {
        // light: '#C9263D',
        DEFAULT: '#C9263D',
        // dark: '#C9263D',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000',
      },
      gray: {
        light: '#90AFB6',
        DEFAULT: '#186070',
      },
    }
  }
}
