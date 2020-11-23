// @see: https://www.gatsbyjs.com/docs/gatsby-link/#reminder-use-link-only-for-internal-links
import React from "react";
import GatsbyLink from "gatsby-link"; //keep like that because of https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-546596273
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const styleResetCss = css`
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
const StyledLink = styled.div`
  ${({ unstyled }) => unstyled && styleResetCss}
`;

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
    <StyledLink as="a" href={to} {...other}>
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.any,
};

export default Link;
