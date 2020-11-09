import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header as GrommetHeader } from "grommet";
import Logo from "../--Logo";
import Menu from "../--Menu";

import { colors } from "../tokens";
/**
 * Header component based on Grommet Header
 *
 */

const Header = () => {
  return (
    <GrommetHeader pad="medium" height="xsmall" direction="row" full responsive>
      <Logo />
      <Menu />
    </GrommetHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
