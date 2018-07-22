import React from "react";
import PropTypes from "prop-types";

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";

import Article from "../components/Article";
import TextBlock from "../components/TextBlock";
import BreadCrumbs from "../components/BreadCrumbs";
import Prompt from "../components/Prompt";

const PageTemplate = props => {
  const {
    data: {
      page
    },
    pathContext: {
      breadCrumbs
    }
  } = props;

  return (
    <Container>
      <Content>
        <Article>
          <TextBlock title={page.frontmatter.title} html={page.htmlAst} subTitle={page.frontmatter.subTitle}/>
        </Article>
        <BreadCrumbs data={breadCrumbs} />
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
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        subTitle
      }
    }
  }
`;
