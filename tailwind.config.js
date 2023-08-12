/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
theme: {
    extend: {
      colors: {
        'primary': "#501CBF",
        'secondary': "#B8D40C",
        'card-color': "#2B2280",
        'text-color': "#D4DBF2",
        'sub-text-color': '#BC8484'
      }
    },
  },
  plugins: [],
}

