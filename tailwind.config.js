/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        diablo: ['Diablo', 'sans-serif'],
        garamond: ['Garamond', 'sans-serif'],
      },
      screens: {
        '3xl': '1880px',
        '4xl': '2500px',
        '5xl': '3380px',
        '6xl': '3760px',
      },
    },
  },
  plugins: [],
}