/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#063E87',
          navydark: '#042B5F',
          navyink: '#052C61',
          red: '#D11F48',
          yellow: '#FFC400',
          green: '#1F9D55',
          greendark: '#17804A',
          sky: '#EAF1FB',
        },
      },
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 2px rgba(6,62,135,.06), 0 8px 24px -8px rgba(6,62,135,.18)',
      },
    },
  },
  plugins: [],
}
