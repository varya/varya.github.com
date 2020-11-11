import { addDecorator } from "@storybook/react"; // <- or your storybook framework
import { withGrommet } from "storybook-addon-grommet";
import theme from "../src/components/theme.js";
import { grommet } from "grommet";
addDecorator(
  withGrommet({
    theme: "theme",
    themes: {
      theme,
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
