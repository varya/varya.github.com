import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Map = ({ src, width = '600', height = '450' }) => (
  <Box
    as="iframe"
    src={src}
    width={width}
    height={height}
    border={{ size: '0' }}
    margin={{ vertical: 'medium' }}
    title="Google Maps"
    frameBorder="0"
    allowFullScreen
  />
);

Map.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Map; 