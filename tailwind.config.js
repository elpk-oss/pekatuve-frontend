/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pekared: "#ff2b2b",
        pekablue: "#4f9cff",
        pekapink: "#ff6ec7",
        pekadark: "#181818"
      }
    },
  },
  plugins: [],
}