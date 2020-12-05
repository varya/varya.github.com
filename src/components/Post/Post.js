import React from "react";
import PropTypes from "prop-types";

import { MDXRenderer } from "gatsby-plugin-mdx";

import Comments from "../Comments";
import TextBlock from "../TextBlock";
import NextPrev from "./NextPrev";

const Post = (props) => {
  const { post, prev, next } = props;

  return (
    <div>
      <TextBlock>
        <MDXRenderer>{post.body}</MDXRenderer>
      </TextBlock>
      <NextPrev prev={prev} next={next} />
      <Comments {...props} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Post;
