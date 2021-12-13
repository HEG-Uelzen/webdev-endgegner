const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wuerg: "rgb(248 51 196)",
        neon: "#39ff14",
      },
    },
  },
  plugins: [],
};
