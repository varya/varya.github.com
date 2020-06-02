import React from 'react';

export const Link = ({ to, ...props }) => <a href={to} {...props}>{props.children}</a>;
export { graphql } from 'gatsby';
export { StaticQuery } from 'gatsby';