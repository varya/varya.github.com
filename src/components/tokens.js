const colorScheme = {
  white: "#FFFFFF",
  black: "#000000",
  "big-stone": "#17293E",
  cinnabar: "#EC4E4B",
  malibu: "#85D8F3",
  goldenrod: "#F8D179",
  bombay: "#A9AAAD",
  "dove-gray": "#666666",
};
export const colors = {
  /* TODO: remove old colors */
  light: "#FFFFFF",
  dark: "#17293E",
  primary: "#EC4E4B",
  secondary: "#85D8F3",
  highlight: "#F8D179",
  shadow: "#A9AAAD",
  darkShadow: "#666666",
  /* ant design style variables */
  character: {
    title: "rgba(0, 0, 0, 0.85)",
    primary: "rgba(0, 0, 0, 0.65)",
    secondary: "rgba(0, 0, 0, 0.45)",
    light: colorScheme.white,
  },
  socialIcon: {
    primary: "rgba(0, 0, 0, 0.25)",
    active: "rgba(0, 0, 0, 0.45)",
  },
  accent: colorScheme.cinnabar,
  complementary: colorScheme.goldenrod,
};

export const typography = {
  type: {
    primary: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
};
