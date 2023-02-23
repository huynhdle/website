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
        'deepslate-700': '#303134',
        'deepslate-600': '#5F6269',
      },
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
        'akira':['Akira Expanded', 'sans-serif'],
      }
    },
  },
  plugins: [],
}