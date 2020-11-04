import React from "react";
import { colors } from "../tokens";
import Tag from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  args: {
    name: "tag",
  },
};

export const Basic = (args) => {
  return <Tag {...args} />;
};

export const All = () => (
  <>
    {Object.entries(colors).map(
      ([colorName, color]) =>
        colorName !== "light" && ( // white color is not visible
          <Tag key={colorName} name={colorName} color={color} />
        )
    )}
  </>
);
