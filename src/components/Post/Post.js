import React from "react";
import PropTypes from "prop-types";

import Meta from "./Meta";
import NextPrev from "./NextPrev";
import TextBlock from "../TextBlock";
import Comments from "../Comments";

const Post = props => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, category, date }
    },
    authornote,
    next: nextPost,
    prev: prevPost,
  } = props;

  return (
    <div>
      <TextBlock title={title} html={props.post.htmlAst} />
      <Comments {...props} />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Post;
