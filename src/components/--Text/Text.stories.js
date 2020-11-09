import React from "react";

import Text from "./Text";
import Box from "../--Box";
import Heading from "../--Heading";
import { colors as colortokens } from "../tokens";
export default {
  title: "Typography/Text",
  component: Text,
};
const sizes = ["xlarge", "large", "medium", "small"];
const colors = Object.entries(colortokens.character);
export const All = () => {
  return (
    <>
      <Box>
        <Heading level="2">Sizes:</Heading>
        {sizes.map((size) => (
          <Text key={size} size={size}>{`Text ${size}`}</Text>
        ))}
      </Box>
      <Box>
        <Heading level="2">Colors:</Heading>
        {colors.map(([name, color]) => (
          <Text key={name} color={color}>{`Text ${name}`}</Text>
        ))}
      </Box>
      <Box>
        <Heading level="2">Align:</Heading>
        {["start", "center", "end"].map(([name, color]) => (
          <Text key={name} color={color}>{`Text ${name}`}</Text>
        ))}
      </Box>
      <Heading level="2">Truncated text:</Heading>
      <Box background="light-3" align="end" width="small" pad="small">
        <Text truncate>
          This is a long truncated string of text that is aligned to the end.
        </Text>
      </Box>
    </>
  );
};
