import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Item from "./Item";
import PageCommon from "../Page/Page--common.js";

import SEO from "../Seo";
const Container = styled.main`
  a {
    text-decoration: none;
  }
`;

const Blog = ({ data, location, pageContext }) => {
  return (
    <PageCommon
      content={
        <>
          <SEO
            title="Varya Stepanova — Blog"
            keywords={["blog", "design systems", "design system", "frontend"]}
            defer={false}
          />
          <BlogComponent data={data} />
          <BlogNav pageContext={pageContext} location={location} />
        </>
      }
      location={location}
    ></PageCommon>
  );
};

const BlogNav = ({ pageContext }) => {
  const { currentPage, numPages, pathPrefix } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? pathPrefix
      : pathPrefix + (currentPage - 1).toString();
  const nextPage = pathPrefix + (currentPage + 1).toString();
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        padding: 0,
      }}
    >
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <li
          key={`pagination-number${i + 1}`}
          style={{
            margin: 0,
          }}
        >
          <Link
            to={pathPrefix + (i === 0 ? "" : i + 1)}
            style={{
              textDecoration: "none",
              padding: "0.5em",
              color: i + 1 === currentPage ? "#ffffff" : "",
              background: i + 1 === currentPage ? "#ec4e48" : "",
            }}
          >
            {i + 1}
          </Link>
        </li>
      ))}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </ul>
  );
};

const BlogComponent = (props) => {
  const posts = props.data.posts.edges;
  return (
    <Container>
      {posts.map((post) => {
        const node = post.node;
        const slug = post.node.fields.slug;
        return <Item key={slug} post={node} />;
      })}
    </Container>
  );
};

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

Blog.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

BlogComponent.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
BlogNav.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
export default Blog;
