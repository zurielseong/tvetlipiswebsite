/** @type {import('tailwindcss').Config} */
// Gaya "sticker-bombed": kanvas krim, blok warna penuh, tiada bayang/gradien.
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#ffe9ce',
        ink: '#000000',
        slate: { DEFAULT: '#666666' },
        violet: '#8a53ff',
        coral: '#fd4b38',
        sun: '#ffd80c',
        lime: '#3ccb09',
        indigo: '#0500a3',
      },
      fontFamily: { sans: ['Fredoka', 'ui-rounded', 'system-ui', 'sans-serif'] },
      borderRadius: { btn: '5px', tag: '10px', card: '15px' },
      boxShadow: { ring: '0 0 0 2px #ffd80c' },
      letterSpacing: { open: '0.012em' },
    },
  },
  plugins: [],
}
