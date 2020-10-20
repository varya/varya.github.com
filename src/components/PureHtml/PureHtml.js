import React from "react";
import PropTypes from "prop-types";

const PureHtml = ({ html }) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PureHtml;

PureHtml.propTypes = {
  html: PropTypes.string,
};
