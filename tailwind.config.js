const fonts = require("./src/css/fonts");
const spacing = require("./src/css/spacing");

module.exports = {
  prefix: "tw-",
  separator: "_",
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    screens: {
      xs: { max: "599px" },
      sm: { min: "600px", max: "1023px" },
      md: { min: "1024px", max: "1439px" },
      lg: { min: "1440px", max: "1919px" },
      xl: { min: "1920px" },
    },
    ...fonts,
    ...spacing,

    extend: {},
  },
  plugins: [],
};
