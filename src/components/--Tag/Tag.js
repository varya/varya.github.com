import React from "react";
import PropTypes from "prop-types";

import { Styled } from "./Tag.styles";

import Link from "gatsby-link";

const Tag = ({ name, color }) => {
  return (
    <Styled.Tag color={color}>
      <Link to={`/blog/${name.toLowerCase()}`}>{name}</Link>
    </Styled.Tag>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
