import React from "react";
import { Box } from "grommet";
import { Heading, Paragraph } from "@components";

const PortfolioNotice = () => (
  <Box background="accent-25" justify="center" pad="medium" margin={{ bottom: "large" }}>
    <Heading level={4} margin={{ top: "none", bottom: "xsmall" }}>
      Unlisted portfolio page
    </Heading>
    <Paragraph margin="none">
      This page is not publicly linked. It is intended for specific people to
      see detailed information about my work on selected projects. Please do not
      share this link with others without my permission.
    </Paragraph>
  </Box>
);

export default PortfolioNotice;
