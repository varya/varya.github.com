import { defaultProps, grommet } from "grommet";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
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
  paragraph: {
    extend: () => "text-align: justify",
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
    extend: () => `font-weight: bold;`,
  },
});

export default theme;
