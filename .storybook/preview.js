import { addDecorator } from "@storybook/react";
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

addDecorator((story) => {
  document.body.style.padding = 0; //remove story container padding
  return story();
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
