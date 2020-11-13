import { Header as GrommetHeader } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../--Logo";
import Menu from "../--Menu";

/**
 * Header component based on Grommet Header
 *
 */

const Header = () => {
  return (
    <GrommetHeader
      responsive
      pad="medium"
      height="xsmall"
      direction="row"
      fill="horizontal"
    >
      <Logo />
      <Menu />
    </GrommetHeader>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
