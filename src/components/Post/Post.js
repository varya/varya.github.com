import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"

import TextBlock from "../TextBlock";
import Comments from "../Comments";

const Post = props => {
  const {
    post,
    post: {
      frontmatter: { title },
      fields: { readingTime }
    },
  } = props;

  return (
    <div>
      <TextBlock
        title={title}
        readingTime={readingTime}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </TextBlock>
      <Comments {...props} />
    </div>
  );
};

export default Post;
