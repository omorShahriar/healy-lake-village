/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto: ['"Noto Serif Myanmar", serif'],
    },
    extend: {
      colors: {
        dotOrange: "#CB6843",
      },
    },
  },
  plugins: [],
};
