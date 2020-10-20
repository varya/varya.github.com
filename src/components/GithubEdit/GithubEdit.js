import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  font-size: 0.75em;
`;

const GithubEdit = (props) => {
  const { link } = props;

  return (
    <Container>
      Did you notice a typo? Welcome to{" "}
      <a href={link} target="_blank" rel="noreferrer">
        edit this page on GitHub
      </a>
      . Thank you!
    </Container>
  );
};

GithubEdit.propTypes = {
  link: PropTypes.string,
};

export default GithubEdit;
