import PropTypes from "prop-types";
import React from "react";

import Helmet from "react-helmet";

import { graphql } from 'gatsby';

import Blog from "../components/Blog";

class PostsPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;

    return (
      <div>

        <Helmet title="Blog posts on design, engineering and management — Varya Stepanova" defer={false} />

        <Blog posts={posts} />

      </div>
    );
  }
}

PostsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostsPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/.*/" }, fields: { lang: {eq: "en" }} }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;

//hero-background
