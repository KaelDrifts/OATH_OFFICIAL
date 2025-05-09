/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        retro: {
          beige: '#f9e3be',
          brown: '#3f1c08',
          green: '#7eff9e',
          red: '#b94e48',
        },
      },
    },
  },
  plugins: [],
};