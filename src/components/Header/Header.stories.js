import React from "react";

import { Box } from "grommet";

import Header from "./Header.js";

export default {
  title: "Components/Header",
  component: Header,
};
export const Default = (args) => (
  <Box width="xlarge">
    <Header {...args} />
  </Box>
);
