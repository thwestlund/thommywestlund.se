/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}", "./static/**/*.html"],

  theme: {
    extend: {
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
