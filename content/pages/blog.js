import React from "react";

import { graphql } from 'gatsby';

import LayoutCommon from '../../src/components/Layout/Layout--common'
import Blog from "../../src/components/Blog";

class BlogPage extends React.Component {

  render() {
    const {
      data: {
        posts: { edges: posts = [] }
      },
      location,
    } = this.props;

    return (
      <LayoutCommon
        content={(
          <Blog posts={posts} />
        )}
        location={location}
        />
    );
  }
}

export default BlogPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query BlogQuery {
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "//posts/.*/" }, fields: { lang: {eq: "en" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp{
                sizes(maxWidth: 250) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
