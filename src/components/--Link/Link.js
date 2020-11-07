// @see: https://www.gatsbyjs.com/docs/gatsby-link/#reminder-use-link-only-for-internal-links
import React from "react";
import GatsbyLink from "gatsby-link"; //keep like that because of https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-546596273
import PropTypes from "prop-types";

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Assuming that any internal link will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  return internal ? (
    <GatsbyLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.any,
};

export default Link;
