/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '991px' },
        // => @media (min-width: 640px) { ... }

        'md': { 'max': '1199px' },
        // => @media (min-width: 768px) { ... }
      },
      colors: {
        // black color shades 
        grey1: "#686868",
        grey2: "#636363",
        grey3: "#F3F3F3",
        grey4: "#080808",
        grey5: "#707070",
        blue1: "#2E7DF6",
        blue2: "#B1E8FF4D",
        blue3: "#2E7DF6A6",
      }
    },
  },
  plugins: [],
}

