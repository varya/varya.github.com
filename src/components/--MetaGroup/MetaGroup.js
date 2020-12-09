import React from "react";
import PropTypes from "prop-types";

import { Box } from "grommet";

import { childrenWithProps } from "../../common/reactUtils";

/**
 * A wrapper for meta tags, providing separators.
 * To be placed in post header.
 */
const MetaGroup = ({ children }) => {
  return (
    <>
      <Box
        justify="center"
        fill="horizontal"
        direction="row"
        gap="large"
        border={{ side: "between", size: "xsmall", color: "text-invert" }}
        color="text-invert"
        alignContent="center"
      >
        {childrenWithProps(children, {
          color: "text-invert",
          size: "small",
          weight: "bold",
        })}
      </Box>
    </>
  );
};

MetaGroup.propTypes = {
  children: PropTypes.node,
};

export default MetaGroup;
