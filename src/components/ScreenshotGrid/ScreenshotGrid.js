import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Box } from "grommet";

const GRID_HEIGHT = "280px";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled.a`
  display: block;
  overflow: hidden;
  height: ${GRID_HEIGHT};
  cursor: pointer;
  text-decoration: none;
  border: 1px solid #e0e0e0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 0.9;
  }
`;

const ScreenshotGrid = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <Grid margin={{ vertical: "medium" }}>
      {images.map((src, index) => (
        <ImageWrapper
          key={index}
          href={src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src} alt={`Screenshot ${index + 1}`} />
        </ImageWrapper>
      ))}
    </Grid>
  );
};

ScreenshotGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ScreenshotGrid;
