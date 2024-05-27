/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'pink-base' : '#FFDFDF'
      },
      dropShadow: {
        'basic': [
          '0 0 5px rgba(0, 0, 0, 0.05)',
          '0 0 5px rgba(0, 0, 0, 0.05)'
      ]
      }
    },
  },
  plugins: [],
}