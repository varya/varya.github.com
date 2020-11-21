import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/--Layout";

import Widget from "../../components/--Widget";
import WidgetContainer from "../../components/--WidgetContainer";
import Pagination from "../../components/--Pagination";
import { ResponsiveContext } from "grommet";

const visiblePages = {
  small: 2,
  medium: 5,
  large: 10,
};

const Blog = ({ posts, currentPage, totalPages }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Layout>
        <WidgetContainer>
          {posts.map((post) => (
            <Widget
              key={post.title}
              cover={post.cover}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </WidgetContainer>
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
