import React from "react";

import { Box, Heading, Text } from "grommet";
export default {
  title: "Typography/Text (Grommet)",
  component: Text,
};
const sizes = ["xlarge", "large", "medium", "small"];
const colors = ["brand", "neutral", "accent"];
const aligns = ["start", "center", "end"];

export const GrommetText = () => {
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
        <Box width="xlarge">
          {aligns.map((align) => (
            <Text key={name} textAlign={align}>{`Text aligned ${align}`}</Text>
          ))}
        </Box>
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
