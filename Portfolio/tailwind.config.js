/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        flicker: "flicker 2.5s ease-in-out infinite",
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
