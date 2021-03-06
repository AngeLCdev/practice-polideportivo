const path = require("path");
const variables = require("./src/styles/pcss/settings/_variables");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-simple-vars")({ variables }),
    require("postcss-preset-env")({ stage: 4 }),
    require("autoprefixer"),
    require("postcss-mixins")({
      mixinsDir: path.join(__dirname, "mixins"),
    }),
    
  ],
};
