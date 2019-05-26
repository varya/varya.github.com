import React from "react";
import PropTypes from "prop-types";

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
      <TextBlock title={title} html={post.htmlAst} readingTime={readingTime} />
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
