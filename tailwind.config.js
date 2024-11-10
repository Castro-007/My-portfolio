/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'manrope': ['Manrope', 'sans-serif'],
        'Nunito': ['Nunito', 'sans-serif'],
        'Exo': ['Exo', 'sans-serif'],
        'Anek': ['Anek Devanagari', 'sans-serif']
      },
      screens:{
        'sma': {'max':'429px'},
        'mda': {'min':'430px', 'max':'767px'},
        'mdaa': {'min':'768px', 'max':'820px'}
      },
      
    },
  },
  plugins: [],
}

