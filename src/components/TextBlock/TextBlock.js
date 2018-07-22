import React from "react";
import PropTypes from "prop-types";
import rehypeReact from "rehype-react";

import styled from "styled-components";

import Typography from "../Typography";
import Logo from "../Logo";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "comp-logo": Logo },
}).Compiler

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
`;

const TextBlock = props => {
  const {
    title,
    html
  } = props;


  return (
    <Container>
      <header>
        <h1>{title}</h1>
      </header>
      {renderAst(html)}
    </Container>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default TextBlock;
