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
        primary: "#0076B6",
        white: "rgba(229, 241, 247)",
        black: "#010B13",
        grey: "#BEBFC5",
        border: "rgba(var(--color-primary), .1)",
        // primary: "rgb(var(--color-primary))",
        // white: "rgb(var(--color-white))",
        // grey: "rgb(var(--color-grey))",
        // black: "rgb(var(--color-black))",
        // border: "rgb(var(--color-border))",
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: '5px'
      },
    },
  },
  plugins: [],
};

