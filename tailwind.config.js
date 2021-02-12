// const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.js',
  ],
  darkMode: false,
  variants: {
    extend: {
      margin: ['first', 'last'],
    }
  },
  plugins: [],
  theme: {
    fontFamily: {
     'sans': ['ui-sans-serif', 'system-ui'],
     'serif': ['ui-serif', 'Georgia'],
     'mono': ['ui-monospace', 'SFMono-Regular'],
     'bellota': ['bellota'],
     'roboto': ['roboto'],
    },
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
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  }
}
