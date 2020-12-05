import React from "react";
import PropTypes from "prop-types";

import { Box, ResponsiveContext } from "grommet";

import { childrenWithProps, isObject } from "../../utils";

/**
 * A responsive container to hold post previews, based on grommet <Box>
 *
 * @param {number[1-4]|object} items - number of items per row.
 * Can be either a static number for all breakpoints or an object for "small", "medium" and "large" screen respectively
 * @example <WidgetContainer items={{"small": 3, "medium": 2, "large": 1}}
 */

const WidgetContainer = ({ children, items = 1, ...props }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const itemsPerRow = isObject(items) ? items[size] : items;
        return (
          <Box
            pad="medium"
            justify="start"
            direction="row"
            wrap={true}
            {...props}
          >
            {childrenWithProps(children, {
              basis: itemsPerRow > 1 ? `1/${itemsPerRow}` : "full",
              direction: itemsPerRow > 1 || size === "small" ? "column" : "row",
            })}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};

WidgetContainer.propTypes = {
  children: PropTypes.node,
  items: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default WidgetContainer;
