/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./res/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ptsans": ["PT Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}
