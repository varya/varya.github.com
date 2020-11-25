import { defaultProps } from "grommet";
import { deepMerge } from "grommet/utils";

const theme = {
  name: "varya.me",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: "rgb(236, 78, 75, 1)",
      background: "#FFFFFF",
      "background-contrast": "text-xxweak",
      text: {
        light: "rgba(0, 0, 0, 0.85)",
        dark: "#ffffff",
      },
      "text-strong": "rgba(0, 0, 0, 1)",
      "text-weak": "rgba(0, 0, 0, 0.65)",
      "text-xweak": "rgba(0, 0, 0, 0.45)",
      "text-xxweak": "rgba(0, 0, 0, 0.25)",
      "text-invert": "#ffffff",
      accent: "#f8d179",
      "accent-25": "rgba(248, 209, 121, 0.25)",
      "accent-50": "rgba(248, 209, 121, 0.5)",
      "accent-75": "rgba(248, 209, 121, 0.75)",
      "accent-1": "accent", //an override for grommet style

      neutral: "#85D8F3",
      "neutral-1": "rgba(133, 216, 243, 1)",
      "neutral-75": "rgba(133, 216, 243, 0.75)",
      "neutral-50": "rgba(133, 216, 243, 0.5)",
      "neutral-25": "rgba(133, 216, 243, 0.25)",
      focus: "neutral",
      border: "text-xweak",
      control: "brand",
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
    },
    breakpoints: deepMerge(defaultProps.theme.global.breakpoints, {
      medium: { value: 1440 },
    }),
    font: {
      family: "Roboto",
      weight: 300,
      face: `/* roboto-300 - latin_cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('../fonts/roboto-v20-latin_cyrillic-ext-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/roboto-v20-latin_cyrillic-ext-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-300italic - latin_cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  src: local(''),
       url('../fonts/roboto-v20-latin_cyrillic-ext-300italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/roboto-v20-latin_cyrillic-ext-300italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-regular - latin_cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../fonts/roboto-v20-latin_cyrillic-ext-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/roboto-v20-latin_cyrillic-ext-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-900 - latin_cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('../fonts/roboto-v20-latin_cyrillic-ext-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/roboto-v20-latin_cyrillic-ext-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}`,
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
  anchor: {
    color: {
      dark: "accent",
      light: "brand",
    },
  },
  heading: {
    font: {
      family: "Roboto",
    },
    level: {
      1: {
        font: {
          weight: 900,
        },
      },
      6: {
        font: { weight: 400 },
        small: {
          size: "12px",
        },
      },
    },
  },

  button: {
    border: {
      radius: `5px`,
    },
    primary: {
      padding: {
        horizontal: "medium",
        vertical: "large",
      },
    },
    size: {
      large: {
        border: {
          radius: `5px`,
        },
      },
    },
    extend: () => `font-weight: bold;`,
  },
};

export default theme;
