import React from "react";

import styled from "styled-components";
import { Box, Text } from "grommet";
import { Link } from "@components";

const StyledLinkText = styled(Text)`
  text-transform: uppercase;
  font-weight: normal;
  display: block;
  padding: 0 0.5em;
`;

const PortfolioBreadcrumb = () => (
  <Box direction="row" align="center" flex={false} pad={{ vertical: "small" }}>
    <Box flex={false} color="brand">
      ←
    </Box>
    <Link to="/projects-portfolio/">
      <StyledLinkText>All projects</StyledLinkText>
    </Link>
  </Box>
);

export default PortfolioBreadcrumb;
