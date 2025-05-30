// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

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
        // cont: "#1F1F1F ",
        cont: "#b9b8b4",
        lab: "#e4e46d"
      }

    },
  },
  plugins: [],
}