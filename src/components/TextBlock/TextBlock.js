import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 3em;

  .small {
    font-size: 0.75em;
    line-height: 1.5em;
    margin-top: 0;
  }

  .png--transparent .gatsby-resp-image-background-image {
    background-image: none !important;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-left: 1em;
    margin-left: -1em;
  }

  h2 a.anchor,
  h3 a.anchor,
  h4 a.anchor,
  h5 a.anchor,
  h6 a.anchor {
    position: absolute;
    display: none;
  }

  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    display: inline;
  }

  h2 a.anchor svg,
  h3 a.anchor svg,
  h4 a.anchor svg,
  h5 a.anchor svg,
  h6 a.anchor svg {
    fill: #999;
  }
`;

const TextBlock = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

TextBlock.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TextBlock;
