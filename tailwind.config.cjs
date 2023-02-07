/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*/*.tsx",
  "./src/components/**/*.tsx"],
  theme: {
    extend: {

      width: {
        '128': '32rem',
      },

      height: {
        '128': '32rem',
      },

      colors: {},

    },
    fontFamily: {
      nav: ['Sofia Sans Extra Condensed', 'sans-serif'],
      titles: ['Anton', 'sans-serif'],

    },
  },
  plugins: [],
}
