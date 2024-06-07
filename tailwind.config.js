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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-r-gradient': {
          borderRight: '1px solid transparent',
          borderImage: 'linear-gradient(to bottom, rgba(43, 84, 231, 1), rgba(255, 255, 255, 0.1)) 1 100%',
        },
      })
    },
  ],
}