/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      strokeWidth: {
        '3': '3px',
        '4': '4px',
      }
    },
  },
  plugins: [],
}
