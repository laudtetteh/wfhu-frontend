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
      backgroundColor: ['responsive', 'focus', 'visited', 'active', 'hover', 'group-hover'],
      borderColor: ['focus-visible', 'first'],
      textColor: ['responsive', 'focus', 'visited', 'active', 'hover', 'group-hover'],
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
      black: '#000',
      white: '#FFFFFF',
      red: {
        DEFAULT: '#C9273E',
        100: '#dd5569',
        300: '#',
        600: '#C9273E',
      },
      yellow: {
        DEFAULT: '#EDE784',
        100: '#f8f6d3',
        300: '#',
        600: '#EDE784',
      },
      blue: {
        DEFAULT: '#3AA9CB',
        100: '#A9DDED',
        300: '#8EC8DF',
        600: '#3AA9CB',
      },
      darkblue: {
        DEFAULT: '#2D5F6E',
        100: '#',
        300: '#',
        600: '#2D5F6E',
      },
    },
    screens: {
      'xs': '300px',
      // => @media (min-width: 300px) { ... }
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
