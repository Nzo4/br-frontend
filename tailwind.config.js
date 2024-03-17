/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'dark': '#000000',
      'white': '#FFFFFF',
      'white-gray': '#ECECEC',
      'dark-gray': '#888888',
      'gray': '#959595',
      'green': '#7CD46E',
      'orange': '#FF9A3D',
      'brown': '#E7E1DB',

    },
    backgroundImage: {
      'other-furniture': "url('./assets/images/other-furniture.jpeg')",
    }
  },
  plugins: [],
}