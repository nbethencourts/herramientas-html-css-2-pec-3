/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-secondary-color': '#fae4b5',
        'dark-color': '#142338', 
        'accent-color': '#ffcc62',
        'primary-text-emphasis': '#ffffff',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

