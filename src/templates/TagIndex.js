import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Text } from "grommet";
import { Heading, Layout, Widget, WidgetContainer } from "@components";

const Tag = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const { tag } = pageContext;
  return (
    <Layout>
      <Box
        flex="grow"
        width="xlarge"
        margin={{ horizontal: "auto" }}
        pad="medium"
        direction="column"
      >
        <Heading alignSelf="center" responsive margin="small">
          <Text size="inherit" color="accent">
            All posts tagged{" "}
          </Text>
          <Text size="inherit" color="brand">
            {tag}
          </Text>
        </Heading>
        <WidgetContainer>
          {posts.map((post) => {
            const cover = post.node.frontmatter.cover;
            return (
              <Widget
                key={post.node.frontmatter.title}
                image={
                  cover && (
                    <GatsbyImage {...cover.childImageSharp.gatsbyImageData} />
                  )
                }
                title={post.node.frontmatter.title}
                slug={post.node.fields.slug}
                excerpt={post.node.excerpt}
              />
            );
          })}
        </WidgetContainer>
      </Box>
    </Layout>
  );
};

Tag.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
};

export default Tag;

export const tagQuery = graphql`
  query TagIndexQuery($tag: String) {
    posts: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "//posts//" } }
        fields: { lang: { eq: "en" } }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          body
          excerpt(pruneLength: 800)
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
    }
  }
`;
