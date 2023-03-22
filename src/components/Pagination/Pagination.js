import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby-link";
import { Box, Button, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";

import { clamp, range } from "@common/utils";
import theme from "../theme";
import flattenChildren from "react-flatten-children";

// import path from "path";

/**
 * Responsive pagination component
 * @param {number} currentPage
 * @param {number} totalPages
 * @param {number} maxVisiblePages - maxium number of pages shown around active page
 * @param {"small"|"medium"|"large"} size - passed with ResponsiveContext from parent component
 */

const paginationTheme = deepMerge(theme, {
  button: {
    size: {
      small: { border: { radius: "5px" } },
      medium: { border: { radius: "5px" } },
      large: { border: { radius: "5px" } },
    },
    default: {
      color: "text",
      border: undefined,
      padding: {
        horizontal: "8px",
        vertical: "8px",
      },
    },
    active: {
      background: { color: "brand" },
      color: "text",
      secondary: {
        background: "none",
      },
    },
    hover: {
      background: { color: "accent-25" },
      color: "text-weak",
    },
  },
});

const Pagination = ({
  currentPage,
  totalPages,
  maxVisiblePages = 15,
  size = "medium",
}) => {
  const basePath = "/blog";
  const visiblePages = clamp(maxVisiblePages, 1, totalPages); // number of pages to be displayed

  /* Adjust start/end values
   * If first visible page(startPage) is close to page 1/last page, it doesn't make sense to break with ellipsis
   * like <1 ... 3 4>, better to show all the pages from the side as is => <1 2 3 4>
   */
  const adjustStartValue = (val) => (val <= 3 ? 1 : val);
  const adjustEndValue = (val) => (val >= totalPages - 2 ? totalPages : val);

  const startPage =
    visiblePages < totalPages
      ? adjustStartValue(
          clamp(currentPage - Math.ceil(maxVisiblePages / 2), 1, totalPages)
        )
      : 1;
  const endPage = adjustEndValue(startPage + visiblePages);

  /* Button boilerplate */
  const PageButton = ({ label, to, ...props }) => {
    return (
      <Button
        as={Link}
        // to={to && path.join(basePath, "/", to)}
        to={to && basePath + "/" + to}
        key={"page" + label}
        active={parseInt(label) === currentPage ? true : false}
        color="brand"
        label={label}
        size={size}
        {...props}
      ></Button>
    );
  };

  PageButton.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
  };

  return (
    <Grommet theme={paginationTheme}>
      <Box direction="row" gap={size} justify="center">
        <PageButton
          label="←"
          to={
            currentPage > 2
              ? (currentPage - 1).toString()
              : currentPage === 2 && "/"
          }
          disabled={currentPage <= 1}
        />
        {startPage > 1 &&
          flattenChildren(
            /* flattening children let us have all buttons as a direct child of a box,
             * and thus maintain proper gaps and spacing, coming from parent Box component */
            <>
              <PageButton label={1} />
              <Button plain disabled size="large" label="..." />
            </>
          )}
        {range(startPage, endPage + 1).map((num) => {
          return (
            <PageButton
              label={num}
              key={"page" + num}
              to={num === 1 ? "/" : num.toString()}
            />
          );
        })}
        {endPage !== totalPages &&
          flattenChildren(
            <>
              <Button plain disabled size="large" label="..." />
              <PageButton label={totalPages} />
            </>
          )}
        <PageButton
          label="→"
          to={
            currentPage < totalPages ? (currentPage + 1).toString() : undefined
          }
          disabled={currentPage >= totalPages}
        />
      </Box>
    </Grommet>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  maxVisiblePages: PropTypes.number,
  size: PropTypes.string,
};

export default Pagination;
