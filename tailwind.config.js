/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["IBM Plex Serif", "serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}
