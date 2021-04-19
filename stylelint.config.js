module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-sass-guidelines",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-no-unused-selectors",
    "stylelint-order"
  ],
  rules: {
    "order/properties-alphabetical-order": true,
    "plugin/no-unused-selectors": true
  }
};