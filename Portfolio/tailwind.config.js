/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05445e",
        secondary: "#02fced",
        tertiary: "#7ae601",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
