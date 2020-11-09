import { addDecorator } from "@storybook/react"; // <- or your storybook framework
import { withGrommet } from "storybook-addon-grommet";
import { grommet } from "grommet";
// import {
//   black,
//   light,
//   materialdark,
//   materiallight,
//   metro,
// } from "grommet-controls";

const myTheme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto Light",
      size: "16px",
      height: "30px",
    },
  },
};

addDecorator(
  withGrommet({
    theme: "myTheme",
    themes: {
      myTheme,
      grommet,
    },
    boxProps: {
      align: "start",
    },
    grommetProps: {
      full: true,
    },
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
