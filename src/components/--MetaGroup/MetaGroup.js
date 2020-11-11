import { Box } from "grommet";
import PropTypes from "prop-types";
import React from "react";

/**
 * A wrapper for meta tags, providing separators.
 * To be placed in post header.
 */
const MetaGroup = ({ children }) => (
  <>
    <Box
      justify="center"
      fill="horizontal"
      direction="row-responsive"
      gap="large"
      border={{ side: "between", size: "xsmall", color: "text-invert" }}
    >
      {children}
    </Box>
  </>
);

MetaGroup.propTypes = {
  children: PropTypes.node,
};

export default MetaGroup;
