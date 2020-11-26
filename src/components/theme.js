import { defaultProps } from "grommet";
import { deepMerge } from "grommet/utils";

import Roboto300Woff from "../../static/fonts/roboto-v20-latin_cyrillic-ext-300.woff";
import Roboto300Woff2 from "../../static/fonts/roboto-v20-latin_cyrillic-ext-300.woff2";
import Roboto300WoffItalic from "../../static/fonts/roboto-v20-latin_cyrillic-ext-300italic.woff";
import Roboto300Woff2Italic from "../../static/fonts/roboto-v20-latin_cyrillic-ext-300italic.woff2";
import RobotoRegWoff from "../../static/fonts/roboto-v20-latin_cyrillic-ext-regular.woff";
import RobotoRegWoff2 from "../../static/fonts/roboto-v20-latin_cyrillic-ext-regular.woff2";
import Roboto900Woff from "../../static/fonts/roboto-v20-latin_cyrillic-ext-900.woff";
import Roboto900Woff2 from "../../static/fonts/roboto-v20-latin_cyrillic-ext-900.woff2";

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
      face: `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url(${Roboto300Woff2}) format('woff2'), 
       url(${Roboto300Woff}) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  src: local(''),
       url(${Roboto300Woff2Italic}) format('woff2'), 
       url(${Roboto300WoffItalic}) format('woff');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${RobotoRegWoff2}) format('woff2'),
       url(${RobotoRegWoff}) format('woff'); 
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url(${Roboto900Woff2}) format('woff2'),
       url(${Roboto900Woff}) format('woff');
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
