/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBlue: '#2196f3',
        newlightBlue:'#0091ea',

      }
    },
    
  },
  plugins: [],
}