/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shinji: "#8D63A5",
        asuka: "#CF1020",
        rei: "#77B5FE",
        misato: "#20224D",
      },
    },
  },
  plugins: [],
};
