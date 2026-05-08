import React from "react";

import styled from "styled-components";
import { Box, Text } from "grommet";
import { Heading, Link } from "@components";

const StyledLinkText = styled(Text)`
  text-transform: uppercase;
  font-weight: normal;
  display: block;
  padding: 0 0.5em;
`;

const PortfolioBreadcrumb = () => (
  <Box direction="column" flex={false} pad={{ vertical: "small" }}>
    <Box pad={{ bottom: "small" }}>
      <Heading
        color="text-weak"
        level="6"
        margin="none"
        spaced
        underline
        textCase="uppercase"
      >
        Unlisted page — shared by link only, please don&apos;t forward
      </Heading>
    </Box>
    <Box direction="row" align="center">
      <Box flex={false} color="brand">
        ←
      </Box>
      <Link to="/projects-portfolio/">
        <StyledLinkText>All projects</StyledLinkText>
      </Link>
    </Box>
  </Box>
);

export default PortfolioBreadcrumb;
