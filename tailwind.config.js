/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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

