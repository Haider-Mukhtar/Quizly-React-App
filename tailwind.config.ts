/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#9800F5",
        shadow: "#45DD9566",
      },
      fontFamily: {
        roboto: ["Roboto", "ital"],
        abril: ["Abril", "serif"],
        inter: ["Inter", "ital"],
        rosario: ["Rosario", "ital"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
