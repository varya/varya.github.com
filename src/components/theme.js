import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
const theme = deepMerge(grommet, {
  name: "varya.me",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: "#EC4E4B",
      background: "#FFFFFF",
      "background-contrast": "text-xxweak",
      text: "rgba(0, 0, 0, 0.85)",
      "text-strong": "rgba(0, 0, 0, 1)",
      "text-weak": "rgba(0, 0, 0, 0.65)",
      "text-xweak": "rgba(0, 0, 0, 0.45)",
      "text-xxweak": "rgba(0, 0, 0, 0.25)",
      "text-invert": "#ffffff",
      border: "text-xweak",
      control: "brand",
      accent: "#f8d179",
      neutral: "#85D8F3",
      focus: "neutral",

      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
    },
    font: {
      family: "Roboto Light",
      face: `/* roboto-300 - latin-ext_latin_cyrillic-ext_cyrillic */ @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 300; src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.eot'); /* IE9 Compat Modes */ src: local('Roboto Light'), local('Roboto-Light'), url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff2') format('woff2'), /* Super Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.woff') format('woff'), /* Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.ttf') format('truetype'), /* Safari, Android, iOS */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300.svg#Roboto') format('svg'); /* Legacy iOS */ } /* roboto-300italic - latin-ext_latin_cyrillic-ext_cyrillic */ @font-face { font-family: 'Roboto'; font-style: italic; font-weight: 300; src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.eot'); /* IE9 Compat Modes */ src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.woff2') format('woff2'), /* Super Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.woff') format('woff'), /* Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.ttf') format('truetype'), /* Safari, Android, iOS */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-300italic.svg#Roboto') format('svg'); /* Legacy iOS */ } /* roboto-700 - latin-ext_latin_cyrillic-ext_cyrillic */ @font-face { font-family: 'Roboto'; font-style: normal; font-weight: 700; src: url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.eot'); /* IE9 Compat Modes */ src: local('Roboto Bold'), local('Roboto-Bold'), url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff2') format('woff2'), /* Super Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.woff') format('woff'), /* Modern Browsers */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.ttf') format('truetype'), /* Safari, Android, iOS */ url('./fonts/roboto-v20-latin-ext_latin_cyrillic-ext_cyrillic-700.svg#Roboto') format('svg'); /* Legacy iOS */ }`,
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
  },
  heading: {
    font: {
      family: "Roboto Black",
    },
  },
  button: {
    border: {
      radius: `5px`,
    },

    extend: ({ plain, theme }) =>
      plain
        ? `&:hover {
      color: ${theme.global.colors.brand};
      text-decoration: underline;
      background: transparent;
      }
    `
        : `font-weight: bold;
        color: ${theme.global.colors["text-invert"]}`,
  },
});

export default theme;
