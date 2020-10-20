import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { colorScheme } from "../Colors/Colors.js";

const Title = styled.header`
  margin-bottom: 1.5em;
  &::after {
    content: "";
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

const MetaData = styled.p`
  font-size: 0.75em;
`;

const Article = (props) => {
  const { title, subTitle, readingTime, children } = props;

  return (
    <article className="article">
      <Title>
        <Header>{title}</Header>
        {subTitle && <SubHeader>{subTitle}</SubHeader>}
      </Title>
      <MetaData>{Math.round(readingTime.minutes)} min read</MetaData>
      {children}
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  readingTime: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Article;
