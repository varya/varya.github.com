import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import Item from "./Item";

const Container = styled.main`
  a {
    text-decoration: none;
  }
`;

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
      <Link
        to={prevPage}
        rel="prev"
        style={{ visibility: isFirst && "hidden" }}
      >
        ← Previous Page
      </Link>

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
      <Link to={nextPage} rel="next" style={{ visibility: isLast && "hidden" }}>
        Next Page →
      </Link>
    </ul>
  );
};

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  return (
    <>
      <Container>
        {posts.map((post) => {
          const node = post.node;
          const slug = post.node.fields.slug;
          return <Item key={slug} post={node} />;
        })}
      </Container>
      <BlogNav pageContext={pageContext} />
    </>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

BlogNav.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};

export default Blog;
