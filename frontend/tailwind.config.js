/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#113763', // Add the custom color with the desired hex code
        'dark-gray': '#4e5050',
        'hover-color': '#212121',
      },

    },
  },
  plugins: [],
}

