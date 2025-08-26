/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // soft neutral colors inspired by the screenshot
          beige: "#EFEDE8",
          text: "#2C2C2C",
        },
      },
      letterSpacing: {
        wider2: "0.2em",
      },
    },
  },
  plugins: [],
};
