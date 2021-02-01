// @ts-ignore
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: colors.coolGray,

      primary: {
        100: "#E5F6E8",
        200: "#CCEDD6",
        300: "#A0CBB1",
        400: "#709783",
        500: "#365347",
        600: "#27473D",
        700: "#1B3B34",
        800: "#11302C",
        900: "#0A2727"
      },
      success: {
        100: "#DCF8D0",
        200: "#B4F2A4",
        300: "#7CDA70",
        400: "#49B547",
        500: "#198420",
        600: "#127121",
        700: "#0C5F20",
        800: "#074C1E",
        900: " #043F1D"
      },
      info: {
        100: "#C9F7FA",
        200: "#95E9F5",
        300: "#5CC9E1",
        400: "#34A0C4",
        500: "#036D9E",
        600: "#025487",
        700: "#013F71",
        800: "#002D5B",
        900: "#00204B"
      },
      warning: {
        100: "#FCF3CA",
        200: "#F9E496",
        300: "#EFCB61",
        400: "#E0B139",
        500: "#CC8C02",
        600: "#AF7201",
        700: "#925B01",
        800: "#764500",
        900: "#613600"
      },
      danger: {
        100: "#FCE1D3",
        200: "#FABCA8",
        300: "#F18E7B",
        400: "#E36258",
        500: "#D1272A",
        600: "#B31C2C",
        700: "#96132C",
        800: "#790C2A",
        900: "#640729"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
