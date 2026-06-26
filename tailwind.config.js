/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1F4E79',
        'navy-dark': '#163A5C',
        gold: '#C9A84C',
        'gold-dark': '#9A7D1F',
        cream: '#FAF7F0',
        'cream-dark': '#F0EAD6',
        text: '#2C2C2C',
        'text-light': '#6B6B6B',
      },
      fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
