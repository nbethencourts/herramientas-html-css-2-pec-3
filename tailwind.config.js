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
      fontSize: {
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'h5': '1rem',
        'h6': '.85rem',
      },
    },
  },
  plugins: [],
}

