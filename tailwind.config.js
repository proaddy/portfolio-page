/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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

