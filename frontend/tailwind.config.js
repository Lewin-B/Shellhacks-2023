/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-blue': '#151F42', // Add the custom color with the desired hex code
        'dark-gray': '#4e5050',
      },
      text: {
        'blue-green': '#58f0ed', // Corrected color value with quotes
      },
    },
  },
  plugins: [],
}

