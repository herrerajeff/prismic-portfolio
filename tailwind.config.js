const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        hero: "75vh",
        120: "40rem",
      },
      spacing: {
        104: "32rem",
        112: "48rem",
      },
      zIndex: {
        "-10": "-10",
      },
      lineHeight: {
        12: "3.5rem",
        14: "4.5rem",
      },
      blur: {
        "4xl": "80px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(1.5rem)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      inset: {
        hero: "18vh",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      background: "#000",
    },
    fontFamily: {
      serif: [
        "Hatton",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      margin: ["even"],
      translate: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
