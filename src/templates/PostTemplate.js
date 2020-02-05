import PropTypes from "prop-types";
import React from "react";

import { graphql } from 'gatsby';

import { Container, LeftSide, Content, RightSide } from "../components/Layout/Layout";

import Seo from "../components/Seo";
import Article from "../components/Article";
import GithubEdit from "../components/GithubEdit";
import Post from "../components/Post";
import Prompt from "../components/Prompt";
import Layout from "../components/layout.js";

const PostTemplate = props => {
  const {
    data: {
      post,
      authornote: { html: authorNote },
      site: {
        siteMetadata
      }
    },
    pageContext: {
      next,
      prev,
      fileSourceUrl
    }
  } = props;

  return (
    <Layout location={props.location} history={props.history}>
      <Container>
        <Content>
          <Article>
            <Post
              post={post}
              next={next}
              prev={prev}
              authornote={authorNote}
              siteMetadata={siteMetadata}
            />
          </Article>
          <GithubEdit link={fileSourceUrl} />
        </Content>
        <RightSide>
        </RightSide>
        <LeftSide>
          <Prompt />
        </LeftSide>
      <Seo data={post} />
    </Container>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fileAbsolutePath
      html
      htmlAst
      fields {
        readingTime {
          minutes
        }
        slug
        prefix
        disqusIdentifier
      }
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
        v2
        old
        tumblr
        meta {
          desc
        }
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
