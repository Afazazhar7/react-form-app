// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all relevant paths are included
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], // Add Montserrat to Tailwind's font family
      },
    },
  },
  plugins: [],
};
