import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import Img from "gatsby-image";
import { ResponsiveContext } from "grommet";
import { Layout, Pagination, Widget, WidgetContainer } from "@components";

const visiblePages = {
  small: 2,
  medium: 5,
  large: 10,
};

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const { currentPage, pageCount } = pageContext;
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Layout>
          <WidgetContainer>
            {posts.map((post) => {
              const cover = post.node.frontmatter.cover;
              return (
                <Widget
                  key={post.node.frontmatter.title}
                  image={cover && <Img {...cover.childImageSharp} />}
                  title={post.node.frontmatter.title}
                  slug={`/${post.node.fields.slug}`}
                  excerpt={post.node.excerpt}
                />
              );
            })}
          </WidgetContainer>
          <Pagination
            currentPage={currentPage}
            totalPages={pageCount}
            size={size}
            maxVisiblePages={visiblePages[size]}
          />
        </Layout>
      )}
    </ResponsiveContext.Consumer>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
};

export default Blog;

export const blogQuery = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//posts//" }
        fields: { lang: { eq: "en" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          body
          excerpt(pruneLength: 600)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
