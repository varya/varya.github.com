import React from "react";
import PropTypes from "prop-types";

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";

import Article from "../components/Article";
import TextBlock from "../components/TextBlock";
import Prompt from "../components/Prompt";

const PageTemplate = props => {
  const {
    data: {
      page
    }
  } = props;

  return (
    <Container>
      <Content>
        <Article>
          <TextBlock title={page.frontmatter.title} html={page.html} />
        </Article>
      </Content>
      <RightSide></RightSide>
      <LeftSide>
        <Prompt />
      </LeftSide>
    </Container>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageTemplate;

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
