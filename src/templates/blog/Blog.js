import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/--Layout";

import PostPreview from "../../components/--PostPreview";
import Pagination from "../../components/--Pagination";
import { Box, ResponsiveContext } from "grommet";

const visiblePages = {
  small: 2,
  medium: 5,
  large: 10,
};

const Blog = ({ posts, currentPage, totalPages }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Layout>
        <Box
          flex="grow"
          width="xlarge"
          margin={{ horizontal: "auto" }}
          pad="medium"
          direction="column"
          gap="small"
        >
          {posts.map((post) => (
            <PostPreview
              key={post.title}
              cover={post.cover}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </Box>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          size={size}
          maxVisiblePages={visiblePages[size]}
        />
      </Layout>
    )}
  </ResponsiveContext.Consumer>
);

Blog.propTypes = {
  posts: PropTypes.object,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Blog;
