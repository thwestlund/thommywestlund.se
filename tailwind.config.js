/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}", "./static/**/*.html"],

  theme: {
    extend: {
      aspectRatio: {
        "2/3": "2 / 3",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      maxHeight: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
        "screen-75": "75vh",
        "screen-90": "90vh",
      },
    },
  },
  plugins: [],
};
