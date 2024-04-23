/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    
    extend: {
      colors:{
        'bgs':"#0c0c1d",
        'bgs1':'#111132',
        'bgs2':'#505064'
      },
      boxShadow: {
        'cus': '2px 2px 5px 5px rgba(209,213,219,0.2)',
      }
    },
  },
  plugins: [],
}
