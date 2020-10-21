import React from "react";
import PropTypes from "prop-types";

import { DiscussionEmbed } from "disqus-react";

const Comments = (props) => {
  const {
    post: {
      fields: { slug, title, disqusIdentifier },
      frontmatter: { tumblr },
    },
    siteMetadata: { siteUrl },
  } = props;

  const disqusShortname = tumblr ? "varyadaily" : "varya";

  const disqusConfig = {
    url: `${siteUrl}${slug}`,
    identifier: disqusIdentifier,
    title: title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

Comments.propTypes = {
  post: PropTypes.object,
  siteMetadata: PropTypes.object,
};

export default Comments;
