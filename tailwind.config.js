module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "var(--primary-colour)",
      primarylight: "var(--primary-colour-light)",
      primarydark: "var(--primary-colour-dark)",

      secondary: "var(--secondary-colour)",
      secondarylight: "var(--secondary-colour-light)",
      secondarydark: "var(--secondary-colour-dark)",

      bgdark: "var(--background-dark)",
      bglight: "var(--background-light)",

      white: "#FFF",

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
