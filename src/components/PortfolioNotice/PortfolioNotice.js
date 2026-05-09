import React from "react";
import { Box } from "grommet";
import { Heading, Paragraph } from "@components";

const PortfolioNotice = () => (
  <Box margin={{ bottom: "large" }}>
    <Paragraph margin="none">
      This page is not publicly linked. It is intended for specific people to
      see detailed information about my work on selected projects. Please do not
      share this link with others without my permission.
    </Paragraph>
  </Box>
);

export default PortfolioNotice;
