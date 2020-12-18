import React from "react";

import { Box, Grommet, Text } from "grommet";
import { deepMerge } from "grommet/utils";

import theme from "../theme";
/**
 * Logo
 *
 * @param {"small" | "medium" | "large"} size
 */

const logoTheme = deepMerge(theme, {
  text: {
    font: {
      family: "Monaco",
    },
    small: {
      size: "30px",
      height: "30px",
    },
    medium: {
      size: "40px",
      height: "40px",
    },
    large: {
      size: "50px",
      height: "50px",
    },
  },
});

const Logo = ({ size = "medium" }) => {
  return (
    <Grommet theme={logoTheme}>
      <Box direction="row" size="large">
        <Text weight="bold" color="brand" size={size}>
          var&nbsp;
        </Text>
        <Text weight="bold" color="accent" size={size}>
          ya
        </Text>
        <Text weight="bold" color="text-xweak" size={size}>
          ;
        </Text>
      </Box>
    </Grommet>
  );
};

export default Logo;
