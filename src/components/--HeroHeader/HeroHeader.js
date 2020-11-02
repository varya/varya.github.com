import React from "react";
import PropTypes from "prop-types";

import { Styled } from "./HeroHeader.styles";

const HeroHeader = ({ cover, children }) => (
  <Styled.HeroHeader cover={cover}>
    <Styled.HeroHeaderContent>{children}</Styled.HeroHeaderContent>
  </Styled.HeroHeader>
);

HeroHeader.propTypes = {
  cover: PropTypes.string,
  children: PropTypes.node,
};

export default HeroHeader;
