import React from "react";
import styled from "styled-components";

import { colorScheme } from "../Colors/Colors.js";

const LogoContainer = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
const LogoVar = styled.b`
  color: ${colorScheme.primary};
  font-family: "Monaco";
  &:after {
    content: " ";
  }
`;
const LogoYa = styled.b`
  color: ${colorScheme.highlight};
  font-family: "Monaco";
  &:after {
    content: ";";
    color: ${colorScheme.shadow};
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoVar>var</LogoVar>
      <LogoYa>ya</LogoYa>
    </LogoContainer>
  );
};

export default Logo;
