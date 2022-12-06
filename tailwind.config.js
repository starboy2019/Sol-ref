/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-graient":
          "radial-gradient(farthest-side at bottom left,#271d3b,transparent 900px),radial-gradient(farthest-corner at bottom right,#3a233f,transparent 1000px)",
        "small-bg": "radial-gradient(farthest-corner at bottom right,#3a233f,transparent 250px)",
        overlay:
          "linear-gradient(0deg, rgb(0, 0, 0) 12%, rgba(0, 0, 0, 0.75) 17%, rgba(0, 0, 0, 0.4) 23%, rgba(0, 0, 0, 0.28) 32%, rgba(0, 0, 0, 0.12) 52%, rgb(0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
