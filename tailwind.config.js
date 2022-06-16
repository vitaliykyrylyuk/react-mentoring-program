const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        rose: {
          400: '#f65261'
        },
        gray: {
          600: '#424242',
          900: '#232323'
        }
      }
    }
  },
  plugins: []
}
