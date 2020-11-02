import React from "react";
import { colorScheme } from "../tokens";
import Tag from "./Tag";

export default {
  title: "Tag",
  component: Tag,
};

export const Basic = (args) => {
  return <Tag {...args} />;
};

export const All = () => (
  <>
    {Object.entries(colorScheme).map(
      ([colorName, color]) =>
        colorName !== "light" && ( // white color is not visible
          <Tag key={colorName} name={colorName} color={color} />
        )
    )}
  </>
);
