import React from "react";
import PropTypes from "prop-types";

const Bodytext = props => {
  const { html } = props;

  return (
    <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Bodytext;
