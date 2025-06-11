
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        darkbg: "#141414",
        cont: "#b9b8b4",
        // lab: "#6d8e9b"
        lab: "#e4e46d"
      }
      

    },
  },
  plugins: [],
}