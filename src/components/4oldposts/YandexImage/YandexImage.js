import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from 'grommet';

const YandexImage = ({ src, width, height, href }) => {
  const image = (
    <Image
      src={src}
      width={width}
      height={height}
      fit="contain"
    />
  );

  if (href) {
    return (
      <Box
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        margin={{ vertical: 'small' }}
      >
        {image}
      </Box>
    );
  }

  return (
    <Box margin={{ vertical: 'small' }}>
      {image}
    </Box>
  );
};

YandexImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  href: PropTypes.string,
};

export default YandexImage; 