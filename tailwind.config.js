/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'center': '1fr auto 11fr',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
