import React from "react";
import PropTypes from "prop-types";

import { DiscussionEmbed } from "disqus-react";

const Comments = ({ slug, title, disqusIdentifier, tumblr, siteUrl }) => {
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
  slug: PropTypes.string,
  title: PropTypes.string,
  disqusIdentifier: PropTypes.string,
  tumblr: PropTypes.string,
  siteUrl: PropTypes.string,
};

export default Comments;
