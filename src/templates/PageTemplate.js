import React from "react";
import PropTypes from "prop-types";

import { graphql } from 'gatsby';

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";

import Article from "../components/Article";
import TextBlock from "../components/TextBlock";
import BreadCrumbs from "../components/BreadCrumbs";
import GithubEdit from "../components/GithubEdit";
import Prompt from "../components/Prompt";
import Seo from "../components/Seo";
import Layout from "../components/layout.js";

const PageTemplate = props => {
  const {
    data: {
      page,
      page: { fields: { readingTime } }
    },
    pageContext: {
      breadCrumbs,
      fileSourceUrl
    }
  } = props;

  return (
    <Layout location={props.location} history={props.history}>
    <Container>
      <Content>
        <Article>
          <TextBlock title={page.frontmatter.title} html={page.htmlAst} subTitle={page.frontmatter.subTitle} readingTime={readingTime}/>
        </Article>
        <BreadCrumbs data={breadCrumbs} />
        <GithubEdit link={fileSourceUrl} />
      </Content>
      <RightSide></RightSide>
      <LeftSide>
        <Prompt />
      </LeftSide>
      <Seo data={page} />
    </Container>
    </Layout>
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
      fileAbsolutePath
      html
      htmlAst
      fields {
        slug
        readingTime {
          minutes
        }
      }
      frontmatter {
        title
        subTitle
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
        meta {
          desc
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
