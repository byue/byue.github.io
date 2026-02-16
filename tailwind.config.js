/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans Variable", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces Variable", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
