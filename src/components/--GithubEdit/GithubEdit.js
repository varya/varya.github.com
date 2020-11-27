import React from "react";
import PropTypes from "prop-types";
import { Box, Anchor } from "grommet";
import Paragraph from "../--Paragraph";

const GithubEdit = (props) => {
  const { link } = props;

  return (
    <Box fill="horizontal">
      <Paragraph fill size="small" textAlign="center">
        Did you notice a typo? Welcome to{" "}
        <Anchor href={link} target="_blank" rel="noreferrer">
          edit this page on GitHub
        </Anchor>
        . Thank you!
      </Paragraph>
    </Box>
  );
};

GithubEdit.propTypes = {
  link: PropTypes.string,
};

export default GithubEdit;
