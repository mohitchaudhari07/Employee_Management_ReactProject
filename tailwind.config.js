/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey0':'#645394',
        'beinge': '#F7E7DC',
        'lightblue':'#9DB1C7',
        'lightviolet':'#9999CC'
      },
    },
    
  },
  plugins: [],
}

