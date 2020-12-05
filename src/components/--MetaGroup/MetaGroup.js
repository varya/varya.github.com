import React from "react";
import PropTypes from "prop-types";

import { Box } from "grommet";

/**
 * A wrapper for meta tags, providing separators.
 * To be placed in post header.
 */
const MetaGroup = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        color: "text-invert",
        size: "small",
        weight: "bold",
      });
    }
    return child;
  });
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
        {childrenWithProps}
      </Box>
    </>
  );
};

MetaGroup.propTypes = {
  children: PropTypes.node,
};

export default MetaGroup;
