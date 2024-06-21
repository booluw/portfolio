/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        white: "rgb(var(--color-white))",
        grey: "rgb(var(--color-grey))",
        black: "rgb(var(--color-black))",
        border: "rgba(var(--color-primary), .1)",
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "5px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

