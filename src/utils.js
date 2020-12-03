import React from "react";

export const clamp = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

export const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((x, i) => i + start);

/**
 * Check if a variable is an object
 *
 * @param {} variable
 * @returns {boolean}
 * @source https://medium.com/javascript-in-plain-english/javascript-check-if-a-variable-is-an-object-and-nothing-else-not-an-array-a-set-etc-a3987ea08fd7
 */
export const isObject = (variable) =>
  Object.prototype.toString.call(variable) === "[object Object]";

export const childrenWithProps = (children, props = {}) => {
  if (!isObject(props)) return;
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
};

//#Source https://bit.ly/2neWfJ2
export const toKebabCase = (str) =>
  str &&
  str
    .trim()
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
