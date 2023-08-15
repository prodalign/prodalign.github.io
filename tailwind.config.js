/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  
theme: {
    extend: {
      colors: {
        'primary': "#1D2349",
        'secondary': "#B8D40C",
        'secondary-dark': "#69ED3A",
        'card-color': "#1C2146",
        'text-color': "#D4DBF2",
        'sub-text-color': '#BC8484',
        'neon-blue': '#00F7FF'
      }
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}

