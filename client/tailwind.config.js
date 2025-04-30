/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Questrial": ["Questrial", "sans-serif"],
        "Manrope": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}

