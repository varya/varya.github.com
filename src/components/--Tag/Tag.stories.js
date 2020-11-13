import React from "react";
import { Box } from "grommet";
import Tag from "./Tag";
import theme from "../theme";

export default {
  title: "Components/Tag",
  component: Tag,
  args: {
    name: "tag",
  },
};

export const Basic = (args) => {
  return (
    <Box>
      <Tag {...args} />
    </Box>
  );
};

export const All = () => (
  <>
    {Object.entries(theme.global.colors).map(([colorName, color]) => (
      <Tag key={colorName} name={colorName} color={color} />
    ))}
  </>
);
