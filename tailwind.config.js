/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comf: ["Comfortaa", "sans-serif"],
        lora: ["Lora", "serif"],
        nun: ["Nunito", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
        monte: ["Montserrat", "sans-serif"],
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(180.96deg, #000000 0.82%, #4A2800 129.1%)",
      },
      colors: {
        primary: {
          light: "#fcc182",
          DEFAULT: "#FA9021",
          dark: "#af5b04",
        },
      },
    },
  },
  plugins: [],
};
