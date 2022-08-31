/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },  
    colors: {
      'white': '#fafeff',
      'black': '#070912',
      'darkBlue': '#151c37',
      'lightBlue': '#3db8e9',
      'red': '#ff0000',
      'grey': '#cfcfcf',
      'purple': '#88145c',
      'green': '#00D100',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Lato', 'serif']
    },
    extend: {
      space: {
        '128': '32rem',
        '144': '36rem'
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [],
}