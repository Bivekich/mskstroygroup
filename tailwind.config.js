/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "20px 0 25px -10px rgba(0, 0, 0, 0.3)",
        top: "0 -10px 25px -10px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roadRadio: ["roadRadio", "sans-serif"],
        gilroy: ["gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
