import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout.js";
import { graphql } from 'gatsby';

import Blog from "../components/Blog";

class BlogPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;

    return (
      <Layout location={this.props.location} history={this.props.history}>

        <Blog posts={posts} />

      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query BlogQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/.*/" }, fields: { lang: {eq: "en" } } }
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
