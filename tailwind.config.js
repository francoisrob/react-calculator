/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Offside"],
    },
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
    }),
  ],
};
