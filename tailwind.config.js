/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'epl-purple': '#4e0056',
        'epl-pink' : '#db2777'
      },
    },
  },
  plugins: [],
}
