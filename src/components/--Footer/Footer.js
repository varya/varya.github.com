import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "../--Typography";
import Logo from "../--Logo";
import SocialLinks from "../--SocialLinks";

/**
 * Footer component
 *
 */

const StyledFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo size="small" />
      <Text disabled>© Varvara Stepanova {new Date().getFullYear()}</Text>
      <SocialLinks />
    </StyledFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
