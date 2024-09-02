/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      `./src/pages/**/*.{js,jsx,ts,tsx}`,
      `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
  theme: {
    extend: {
      colors: {
        main: "rgb(56 189 248)",
        black: "rgb(0 0 0)",
        white: "rgb(255 255 255)"
      }
    },
  },
}
