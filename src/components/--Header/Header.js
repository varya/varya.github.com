import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "../--Logo";
import Menu from "../--Menu";

import { colors } from "../tokens";
/**
 * Header component based on Ant Header
 *
 */

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  position: sticky;
  top: 0;
  background: ${colors.light};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
