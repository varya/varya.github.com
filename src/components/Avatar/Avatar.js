import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import breakpoint from "styled-components-breakpoint";

import defaultImage from "./avatar-2021.jpg";

const Image = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: block;
  margin: 0.5em 0;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${(props) => props.image});

  ${breakpoint("desktop")`
    float: ${(props) => props.align};
    margin-left: ${(props) => props.align === "right" && ".5em"};
    margin-right: ${(props) => props.align === "left" && ".5em"};
  `}
`;

const Avatar = (props) => {
  let sizePx;
  switch (props.size) {
    case "l":
      sizePx = 300;
      break;
    case "m":
      sizePx = 200;
      break;
    default:
      sizePx = 300;
  }

  return <Image image={props.image} align={props.align} size={sizePx} />;
};

Avatar.propTypes = {
  align: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.node,
};

Avatar.defaultProps = {
  image: defaultImage,
  size: "l",
};

export default Avatar;
