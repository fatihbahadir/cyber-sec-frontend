/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#252A4C",
        "fontColor": "#CACCD6",
        "strokeBlue": "#2B54E7",
        "buttonBgDark": "#2F3661",
        
      }
    },
  },
  plugins: [],
}