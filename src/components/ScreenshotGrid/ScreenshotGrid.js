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
    grid-template-columns: repeat(${({ $count }) => Math.min($count, 3)}, 1fr);
  }
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
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
    <Grid margin={{ vertical: "medium" }} $count={images.length}>
      {images.map((item, index) => {
        const isString = typeof item === "string";
        const src = isString ? item : item.src;
        const title = isString ? null : item.title || null;
        const alt = isString
          ? `Screenshot ${index + 1}`
          : item.alt || item.title || `Screenshot ${index + 1}`;
        return (
          <Cell key={index}>
            {title && <Title>{title}</Title>}
            <ImageWrapper
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
            >
              <img src={src} alt={alt} />
            </ImageWrapper>
          </Cell>
        );
      })}
    </Grid>
  );
};

ScreenshotGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        title: PropTypes.string,
      }),
    ]),
  ).isRequired,
};

export default ScreenshotGrid;
