/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      xs: "320px",
      sm: "376px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "1024px",
      lgl: "1280px",
    },
  },
  plugins: [],
}