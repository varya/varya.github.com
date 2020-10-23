const postcssImport = require(`postcss-import`);
const postcssCssNext = require(`postcss-cssnext`);
const postcssBrowserReporter = require(`postcss-browser-reporter`);
const postcssReporter = require(`postcss-reporter`);

module.exports = () => ({
  plugins: [
    {
      "postcss-easy-media-query": {
        breakpoints: {
          tablet: 600,
          desktop: 1024,
        },
      },
      "postcss-text-remove-gap": {
        defaultFontFamily: "Open Sans",
        defaultLineHeight: "0",
      },
      "postcss-nested": {},
    },
    postcssImport(),
    postcssCssNext(),
    postcssBrowserReporter(),
    postcssReporter(),
  ],
});

// "postcss-nested": {},
// "postcss-sorting": {
//   order: ["custom-properties", "dollar-variables", "declarations", "at-rules", "rules"],
//   "properties-order": "alphabetical",
//   "unspecified-properties-position": "bottom"
// },
// "postcss-utilities": {},
// "postcss-cssnext": {}
