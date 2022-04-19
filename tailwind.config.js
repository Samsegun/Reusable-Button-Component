const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "476px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      "noto-sans": ["Noto Sans JP", "serif"],
      poppins: ["Poppins", "serif"],
      ubuntu: ["Ubuntu Mono", "serif"],
      montserat: ["Montserrat", "serif"],
    },
    extend: {
      colors: {
        heading: "#4F4F4F",
        normal: "#E0E0E0",
        hover: "#AEAEAE",
        "hover-blue": "#0039CB",
        "hover-gray": "#1C313A",
        "hover-danger": "#9A0007",
        "tag-text": "#333333",
        "normal-text": "#3F3F3F",
        "lighter-blue": "#3D5AFE",
        "darker-blue": "#2962FF",
        "light-gray": "#828282",
      },
      screens: {
        lg: "873px",
      },
    },
  },
  plugins: [],
};
