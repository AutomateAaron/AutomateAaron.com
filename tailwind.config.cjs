const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const nightwind = require("nightwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      // default breakpoints but with 40px removed
      screens: {
        sm: defaultTheme.screens['xs'],
        md: defaultTheme.screens['sm'],
        lg: defaultTheme.screens['md'],
        xl: defaultTheme.screens['lg'],
        '2xl': defaultTheme.screens['xl'],
      },
    },
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
        "spin-slow": "spin 40s linear infinite",
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
      borderRadius: {
        sm: defaultTheme.borderRadius["md"],
        DEFAULT: defaultTheme.borderRadius["lg"],
        md: defaultTheme.borderRadius["xl"],
        lg: defaultTheme.borderRadius["2xl"],
        xl: defaultTheme.borderRadius["3xl"],
        "2xl": "2rem",
        "3xl": "2.5rem",
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
