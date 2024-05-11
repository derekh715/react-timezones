const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "system-ui",
        "Avenir",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
      },
      animation: {
        blink: "blink 1s steps(1, end) infinite",
        "move-up": "move-up 0.7s ease-out 1",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "move-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(+5rem)",
          },
          "90%": {
            opacity: 1,
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(+0rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
