import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"

import TextBlock from "../TextBlock";
import Comments from "../Comments";

const Post = props => {
  const {
    post,
  } = props;

  return (
    <div>
      <TextBlock>
        <MDXRenderer>{post.body}</MDXRenderer>
      </TextBlock>
      <Comments {...props} />
    </div>
  );
};

export default Post;
