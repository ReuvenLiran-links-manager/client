const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "components/types": path.resolve(__dirname, "src/components/types"),
    "@prop-types": path.resolve(__dirname, "src/utils/propTypes")
  })
);
