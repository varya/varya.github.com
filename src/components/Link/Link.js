import React from "react";
import PropTypes from "prop-types";

import { Link as GatsbyLink } from "gatsby"; //keep like that because of https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-546596273
// fixed by https://github.com/gatsbyjs/gatsby/issues/10668
import styled from "styled-components";
import { Anchor } from "grommet";

/**
 * A component resolving internal links to gatsby-link, and external - to <a> tag
 * @see: https://www.gatsbyjs.com/docs/gatsby-link/#reminder-use-link-only-for-internal-links
 * @param {boolean} unstyled
 */

const AnchorWithoutStyle = styled.div`
  &,
  &:visited,
  &:hover,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
  }
`;

const StyledWrapper = styled.span`
  span {
    padding-right: 1em;
    margin-right: -1em;
  }
`;

const StyledLink = ({ unstyled, ...props }) =>
  unstyled ? <AnchorWithoutStyle {...props} /> : <Anchor {...props} />;

StyledLink.propTypes = {
  unstyled: PropTypes.bool,
};

const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // Assuming that any internal link will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  return internal ? (
    <StyledLink
      as={GatsbyLink}
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledLink as="a" href={to} target="_blank" rel="noopener" {...other}>
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </StyledLink>
  );
};

Link.propTypes = {
  as: PropTypes.node,
  to: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.any,
  unstyled: PropTypes.bool,
};

export default Link;
