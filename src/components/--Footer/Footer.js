import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Text from "../--Text";
import Logo from "../--Logo";
import SocialLinks from "../--SocialLinks";
import { Footer as GrommetFooter } from "grommet";

/**
 * Footer component
 *
 */

const Footer = () => {
  return (
    <GrommetFooter responsive basis="full">
      <Text disabled>© Varvara Stepanova {new Date().getFullYear()}</Text>
      <SocialLinks />
    </GrommetFooter>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
