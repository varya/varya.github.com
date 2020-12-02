import { Box } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeroHeader = styled(Box)`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
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
        rgba(0, 0, 0, 0.7) 40%,
        rgba(0, 0, 0, 0.85) 100%
      )`};
  }
`;

const HeroHeaderContent = styled(Box)`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 3rem;
  color: ${({ hasOverlay }) => hasOverlay && "#fff"};
`;

const Hero = ({
  hasOverlay,
  imageUrl,
  children,
  height = "medium",
  ...props
}) => {
  return (
    <HeroHeader
      hasOverlay={hasOverlay}
      imageUrl={imageUrl}
      flex={false}
      height={height}
      {...props}
    >
      <HeroHeaderContent flex={{ grow: 1 }} justify="between">
        {children}
      </HeroHeaderContent>
    </HeroHeader>
  );
};

Hero.propTypes = {
  hasOverlay: PropTypes.bool,
  imageUrl: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};
Hero.defaultProps = {
  hasOverlay: false,
};

export default Hero;
