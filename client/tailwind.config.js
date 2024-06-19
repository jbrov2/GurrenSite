/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ['"Rubik Mono One"', "sans-serif"],
      secondary: ['"Comfortaa Variable"', "system-ui"],
    },
    fontWeight: {
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    backgroundImage: {
      hero: "url(./src/img/Simon.png)",
      grid: "url(./src/img/grid.png)",
    },
    extend: {
      colors: {
        primary: "#edf6f9",
        secondary: "#ECAA27",
        accent: "#28ff85",
        "primary-hover": "#ECAA27",
        "accent-hover": "#ECAA27",
      },
    },
  },
  plugins: [],
};
