import React from "react";

import { Header as GrommetHeader, ResponsiveContext } from "grommet";
import { Logo, Menu } from "@components";

/**
 * Header component based on Grommet Header
 *
 */
const Header = () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box direction="row" fill="horizontal" elevation="medium">
          <GrommetHeader
            width="xlarge"
            responsive
            pad="medium"
            height={size === "small" ? "48px" : "62px"}
            direction="row"
            margin={{ horizontal: "auto" }}
          >
            <Logo size={size === "small" ? "small" : "medium"} />
            <Menu />
          </GrommetHeader>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Header;
