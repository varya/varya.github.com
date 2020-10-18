import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"

import TextBlock from "../TextBlock";
import Comments from "../Comments";
import NextPrev from "./NextPrev";

const Post = props => {
  const {
    post,
    prev, 
    next
  } = props;

  return (
    <div>
      <TextBlock>
        <MDXRenderer>{post.body}</MDXRenderer>
      </TextBlock>
      <NextPrev prev={prev} next={next}/>
      <Comments {...props} />
    </div>
  );
};

export default Post;
