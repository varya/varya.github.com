import React from "react";
import PropTypes from "prop-types";

import { Box, Text } from "grommet";
import { Paragraph } from "@components";

const Step = ({ num, children }) => (
  <Box direction="row" margin={{ vertical: "medium" }} align="start">
    <Box
      width="xsmall"
      height="xsmall"
      border={{ color: "brand", size: "medium" }}
      style={{ borderRadius: "50%" }}
      justify="center"
      align="center"
      flex={false}
      margin={{ right: "medium" }}
    >
      <Text size="xxlarge" weight="bold" color="brand">
        {num}
      </Text>
    </Box>
    <Paragraph margin={{ vertical: "none" }}>{children}</Paragraph>
  </Box>
);

Step.propTypes = {
  num: PropTypes.number,
  children: PropTypes.node,
};

export default Step;
