import PropTypes from "prop-types";
import React from "react";

import Layout from "../components/layout.js";
import { StaticQuery, graphql } from 'gatsby';

import Blog from "../components/Blog";

const BlogPage = ({ children, location, history }) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        posts: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//posts/.*/" }, fields: { lang: {eq: "en" } } }
          sort: { fields: [fields___prefix], order: DESC }
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
    `}
    render={(data) => {
      const {
        posts: { edges: posts }
      } = data;
      return (
      <Layout location={this.props.location} history={this.props.history}>

        <Blog posts={posts} />

      </Layout>
      );
    }}
  />
);

BlogPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPage;
