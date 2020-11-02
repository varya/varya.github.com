import React from "react";
import PropTypes from "prop-types";

import Link from "gatsby-link";
import styled from "styled-components";

import { Tag as AntTag } from "antd";

const StyledTag = styled(AntTag)`
  && {
    border-radius: 15px;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;

const Tag = ({ name, color }) => {
  return (
    <StyledTag color={color}>
      <Link to={`/blog/${name.toLowerCase()}`}>{name}</Link>
    </StyledTag>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
