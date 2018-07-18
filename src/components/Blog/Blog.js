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
        <ul>
          {posts.map(post => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} />;
          })}
        </ul>
      </Container>

  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Blog;
