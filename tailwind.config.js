const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-color' : '#f6f6e9'
      },
      width: {
        400 : '400px'
      }
    },
  },
  plugins: [],
}