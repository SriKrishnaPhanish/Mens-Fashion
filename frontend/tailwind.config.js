/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        newFontFamily: ["Baloo Paaji 2", "sans-serif"],
        cursiveFont: ["Qwitcher Grypen", "cursive"],
        ExploreFont: ["Londrina Sketch", "sans-serif"],
        LogoFont: ["Caveat", "cursive"],
      },
      colors: {
        regalBlue: "#0972d3",
        Fuchsia: "#c026d3",
      },
    },
  },
  plugins: [],
};
