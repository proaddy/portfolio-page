/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./public/pages/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Code Pro", "monospace"],
        fira: ["Fira Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

