import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import Img from "gatsby-image";
import { ResponsiveContext } from "grommet";
import { Heading, Pagination, Widget, WidgetContainer } from "@components";
import Page from "@templates/Page";

const visiblePages = {
  small: 2,
  medium: 5,
  large: 10,
};

const HeroContent = () => (
  <>
    <Heading
      level={1}
      alignSelf="center"
      responsive
      size="large"
      margin="small"
      color="brand"
    >
      Blog
    </Heading>
  </>
);

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const { currentPage, pageCount } = pageContext;
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Page
          hero={{
            props: { background: "transparent", height: "small" },
            content: HeroContent,
          }}
          seo={{
            title: "Blog - Varya Stepanova, design systems expert",
            description: `Read my articles and notes on design systems and development`,
          }}
        >
          <WidgetContainer>
            {posts.map((post) => {
              const cover = post.node.frontmatter.cover;
              const date = post.node.frontmatter.date;
              const readingTime = post.node.fields.readingTime;
              return (
                <Widget
                  key={post.node.frontmatter.title}
                  image={cover && <Img {...cover.childImageSharp} />}
                  title={post.node.frontmatter.title}
                  slug={`/${post.node.fields.slug}`}
                  excerpt={post.node.excerpt}
                  height="small"
                  date={date}
                  readingTime={`${Math.round(readingTime.minutes)} min read`}
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
        </Page>
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
            readingTime {
              minutes
            }
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
