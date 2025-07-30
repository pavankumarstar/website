/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};