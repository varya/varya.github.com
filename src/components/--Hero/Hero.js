import { Box } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "../tokens";

const defaultCover = require("./../../images/jpg/cover-default.jpg");

const HeroHeader = styled(Box)`
  background-image: url(${(props) => props.imageUrl || defaultCover});
  background-size: cover;
  height: 480px;
  width: 100%;
  position: relative;
  &::after {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    background: ${(props) =>
      props.hasOverlay &&
      `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0.85) 100%
      )`};
  }
`;

const HeroHeaderContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 3rem;
  color: ${(props) => props.hasOverlay && colors.character.light};
`;

const Hero = ({ hasOverlay, imageUrl, children }) => {
  return (
    <HeroHeader hasOverlay={hasOverlay} imageUrl={imageUrl} flex={false}>
      <HeroHeaderContent>{children}</HeroHeaderContent>
    </HeroHeader>
  );
};

Hero.propTypes = {
  hasOverlay: PropTypes.bool,
  imageUrl: PropTypes.string,
  children: PropTypes.node,
};
Hero.defaultProps = {
  hasOverlay: false,
};

export default Hero;
