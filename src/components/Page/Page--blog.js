import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import PageCommon from "./Page--common";
import Blog from "../Blog";
import SEO from "../Seo";

export default function PageTemplate({ data, location, pageContext }) {
  return (
    <PageCommon
      content={
        <>
          <SEO
            title="Varya Stepanova — Blog"
            keywords={["blog", "design systems", "design system", "frontend"]}
            defer={false}
          />
          <Blog pageContext={pageContext} data={data} location={location} />
        </>
      }
      location={location}
    />
  );
}

export const query = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "//posts/.*/" }
        fields: { lang: { eq: "en" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          body
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            cover {
              childImageSharp {
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

PageTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
