import React from "react";
import Paragraph from "./Paragraph.js";
import Heading from "../--Heading";
import Box from "../--Box";
import { colors as colortokens } from "../tokens";
export default {
  title: "Typography/Paragraph",
  component: Paragraph,
};

const sizes = ["xlarge", "large", "medium", "small"];
const colors = Object.entries(colortokens.character);
const paragraphFiller = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.`;

export const Default = () => (
  <>
    <Box>
      <Heading level="2">Sizes:</Heading>
      {sizes.map((size) => (
        <Paragraph
          key={size}
          size={size}
        >{`Paragraph ${size} ${paragraphFiller}`}</Paragraph>
      ))}
    </Box>
    <Box>
      <Heading level="2">Colors:</Heading>
      {colors.map(([name, color]) => (
        <Paragraph
          key={name}
          color={color}
        >{`Paragraph ${name} ${paragraphFiller}`}</Paragraph>
      ))}
    </Box>
    <Box>
      <Heading level="2">Align:</Heading>
      {["start", "center", "end"].map(([name, color]) => (
        <Paragraph
          key={name}
          color={color}
        >{`Paragraph ${name} ${paragraphFiller}`}</Paragraph>
      ))}
    </Box>
    <Heading level="2">Fill</Heading>
    <Box background="light-3" align="end" width="small" pad="small">
      <Paragraph fill="true">{paragraphFiller}</Paragraph>
    </Box>
  </>
);
