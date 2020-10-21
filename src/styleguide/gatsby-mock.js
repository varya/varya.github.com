import React from "react";
import PropTypes from "prop-types";

export const Link = ({ to, ...props }) => (
  <a href={to} {...props}>
    {props.children}
  </a>
);

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};
export { graphql } from "gatsby";
export { StaticQuery } from "gatsby";
