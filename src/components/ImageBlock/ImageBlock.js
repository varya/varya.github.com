import React from "react";
import PropTypes from "prop-types";

import { Box, ResponsiveContext } from "grommet";

/**
 * A block of text and image side by side, which wraps nicely on small screens
 * @param {Node} image - Image contents in JSX
 * @param {boolean} imageRight - position image on the right (defaukt position is left)
 * @param {string} imageBasis
 */

const ImageBlock = ({ children, image, imageRight, imageBasis, ...props }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          direction={size === "small" ? "column" : "row"}
          gap="large"
          {...props}
        >
          {imageRight && (
            <Box flex={true} basis="1/2">
              {children}
            </Box>
          )}
          <Box
            basis={imageBasis}
            style={{ order: size === "small" && -1 }}
            alignItems="center"
          >
            {image}
          </Box>
          {!imageRight && (
            <Box flex={true} basis="1/2">
              {children}
            </Box>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

ImageBlock.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  imageRight: PropTypes.bool,
  imageBasis: PropTypes.string,
};

export default ImageBlock;
