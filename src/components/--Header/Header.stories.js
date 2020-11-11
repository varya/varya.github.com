import { Box } from "grommet";
import React from "react";
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
