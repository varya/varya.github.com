import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { colorScheme } from '../Colors/Colors.js';

/* Register components for using in markdown */

// eslint-disable-next-line
import Typography from "../Typography";

const Title = styled.header`
  margin-bottom: 1.5em;
  &::after {
    content: '';
    display: block;
    background-color: ${colorScheme.secondary};
    height: 2px;
    width: 50%;
    margin-top: 0.25em;
  }
`;

const Header = styled.h1`
  margin-bottom: 0.5em;
`;

const SubHeader = styled.p`
  text-transform: uppercase;
  color: ${colorScheme.darkShadow}
  margin-top: -0.75em;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 1.2em;
 }
`;

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

const MetaData = styled.p`
  font-size: 0.75em;
`;

const TextBlock = props => {
  const {
    title,
    subTitle,
    readingTime,
    children,
  } = props;


  return (
    <Container>

      <Title>
        <Header>{title}</Header>
        { subTitle && <SubHeader>{subTitle}</SubHeader> }
      </Title>
      <MetaData>
        { Math.round(readingTime.minutes) } min read
      </MetaData>
      {children}
    </Container>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default TextBlock;
