/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepslate-900': '#171717',
        'deepslate-850': '#202124',
        'deepslate-800': '#28292C',
        'deepslate-750': '#2C2D30',
        'deepslate-700': '#303134',
        'deepslate-600': '#5F6269',
        'deepslate-500': '#8E959B',
        'deepslate-400': '#C5CDD4',
      },
      fontFamily: {
        'akira':['Akira Expanded', 'sans-serif'],
        'noto':['Noto Sans', 'sans-serif'],
        'JP':['Noto Sans JP', 'sans-serif'],
        'KR':['Noto Sans KR', 'sans-serif'], 
        'poppins':['Poppins', 'sans-serif']                      
      }
    },
  },
  plugins: [],
}