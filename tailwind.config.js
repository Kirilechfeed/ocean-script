/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/css/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "Plus Jakarta Sans, serif",
      },
      backgroundImage: {
        "img-header": "url('/assets/img/bg-img.jpg')",
      },
      colors: {
        primary: "#0044F1",
      },
      borderRadius: {
        "3xl": "90px",
      },
    },
  },
  plugins: [],
};
