/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'vue-blue': '#34495E',
        'vue-green': '#41B883',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")]
}

