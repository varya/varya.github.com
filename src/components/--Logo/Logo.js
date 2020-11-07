import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../tokens";

/**
 * Logo for the header.
 *
 * @param {"small" | "default" | "big"} size
 */

const sizes = {
  default: "40px",
  small: "30px",
  big: "50px",
};

const StyledLogo = styled.div`
  font-size: ${({ size }) => sizes[size]};
  line-height: 40px;
  font-weight: bold;
`;

const LogoVar = styled.b`
  color: ${colors.primary};
  font-family: "Monaco";
  &:after {
    content: " ";
  }
`;

const LogoYa = styled.b`
  color: ${colors.highlight};
  font-family: "Monaco";
  &:after {
    content: ";";
    color: ${colors.shadow};
  }
`;

const Logo = ({ size = "default" }) => {
  return (
    <StyledLogo size={size}>
      <LogoVar>var</LogoVar>
      <LogoYa>ya</LogoYa>
    </StyledLogo>
  );
};

Logo.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};

export default Logo;
