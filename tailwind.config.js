/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },  
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'darkBlue': '#242f65',
      'lightBlue': '#3db8e9',
      'pink': '#dd0079',
      'purple': '#88145c'
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


// #131d2c
// #7a009c
// #4900b4