import React from "react";

import { isObject } from "./utils";

/**
 * Add custom props to children elements
 *
 */
export const childrenWithProps = (children, props = {}) => {
  if (!isObject(props)) return;
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
};
