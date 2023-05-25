/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      mob: { min: '320px', max: '639px' },

      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px) { ... } {'min': '640px', 'max': '767px'},

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Roboto', `sans-serif`],
    },
  },
  plugins: [],
};
