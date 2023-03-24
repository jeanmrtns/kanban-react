/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        link: '#CAB3FF'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
