/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
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
