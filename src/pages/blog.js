import PropTypes from "prop-types";
import React from "react";

import Blog from "../components/Blog";

class BlogPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      }
    } = this.props;

    return (
      <div>

        <Blog posts={posts} />

      </div>
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

//hero-background
