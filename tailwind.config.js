/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "m-pink-100": "#EA5F8E",
        "m-pink-200": "#E25B88",
        "m-gray-50": "#1c1f24",
        "m-gray-75": "#2b3038",
        "m-gray": "#363c43",
        "m-gray-100": "#50555d",
        "m-gray-200": "#6a7078",
      },
      minHeight: {
        0: "0",
        1: "1px",
        "1/2": "50vh",
        "1/3": "33.333333vh",
        "2/3": "66.666667vh",
        "1/4": "25vh",
        "3/4": "75vh",
        full: "100vh",
      },
      minWidth: {
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  important: true,
};
