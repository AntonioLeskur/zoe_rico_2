/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        accent: {
          gold: '#F1C40F',
          blue: '#3498DB'
        },
        neutral: '#BDC3C7'
      }
    },
  },
  plugins: [],
};