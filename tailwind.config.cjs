const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const nightwind = require("nightwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    nightwind: {
      colors: {
        primary: {
          900: colors.violet[200],
          800: colors.violet[300],
          700: colors.violet[400],
          600: colors.violet[500],
        },
      },
      colorClasses: [
        "gradient",
        "ring",
        "ring-offset",
        "divide",
        "placeholder",
      ],
    },

    extend: {
      colors: {
        primary: colors.violet,
        gray: colors.slate,
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "move-top": "move-top 4s linear infinite",
        "move-left": "move-left 4s linear infinite",
      },
      keyframes: {
        "move-top": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "move-left": {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Source Serif Pro"', ...defaultTheme.fontFamily.serif],
      mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [nightwind],
};
