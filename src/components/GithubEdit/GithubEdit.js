import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styled from "styled-components";

const Container = styled.div`
  font-size: 0.75em;
`;


const GithubEdit = props => {
  const {
    link
  } = props;

  return (
    <Container>
      Did you notice a typo? Welcome to <a href={link} target="_blank">
        edit this page on GitHub
      </a>. Thank you!
    </Container>
  );
};

export default GithubEdit;
