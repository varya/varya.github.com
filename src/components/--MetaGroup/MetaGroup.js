import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const StyledMetaGroup = styled.div`
  width: 100%;
  padding: 0 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > *{
    &:after {
    content: "|";
    padding: 0 1em;
  }
  &:last-child:after {
    content: "";
  }
  
`;

const MetaGroup = ({ children }) => (
  <StyledMetaGroup>{children}</StyledMetaGroup>
);

MetaGroup.propTypes = {
  children: PropTypes.node,
};

export default MetaGroup;
