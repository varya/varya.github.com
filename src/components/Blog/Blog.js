import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Item from "./Item";

const Container = styled.main`
  a {
    text-decoration: none;
  }
`;

const Blog = props => {
  const { posts } = props;

  return (
      <Container>
        {posts.map(post => {
          const {
            node,
            node: {
              fields: { slug }
            }
          } = post;
          return <Item key={slug} post={node} />;
        })}
      </Container>

  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Blog;
