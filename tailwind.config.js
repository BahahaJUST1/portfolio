/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cv-light': '#203147',
        'cv-dark': '#060024',
        'cv-accent': '#403C54',
      }
    },
  },
  plugins: [],
}