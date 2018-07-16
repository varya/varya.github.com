import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";

const TextBlock = props => {
  const {
    title,
    html
  } = props;

  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

TextBlock.propTypes = {
  title: PropTypes.object.isRequired,
  html: PropTypes.object.isRequired
};

export default TextBlock;
