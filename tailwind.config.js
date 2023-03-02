/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultColor: "#589f68",
        defaultBackgroundColor: "#0b1223",
        lightBackgroundColor: "#131d36",
        defaultBorderColor: "#272a27",
      },
    },
  },
  plugins: [require("daisyui")],
};
