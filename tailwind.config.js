/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae3',
          300: '#a4b4c8',
          400: '#7790af',
          500: '#526f91',
          600: '#435a78',
          700: '#384962',
          800: '#2f3c50',
          900: '#283242',
          950: '#1a202b',
        },
      },
    },
  },
  plugins: [],
};