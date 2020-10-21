import React from "react";
import PropTypes from "prop-types";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/avatar.jpg";

const Author = (props) => {
  const { note } = props;

  return (
    <div className="author">
      <div className="avatar">
        <img src={avatar} alt={config.siteTitle} />
      </div>
      <div className="note" dangerouslySetInnerHTML={{ __html: note }} />
    </div>
  );
};

Author.propTypes = {
  note: PropTypes.string.isRequired,
};

export default Author;
