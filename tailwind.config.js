module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.module.{css,scss}",
    "./components/**/*.{js,ts,jsx,tsx,css,scss}",
    "./components/**/*.module.{css,scss}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
