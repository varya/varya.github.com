import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Instagram = ({ id }) => {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = '//platform.instagram.com/en_US/embeds.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Box margin={{ vertical: 'medium' }}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`https://www.instagram.com/p/${id}/`}
        data-instgrm-version="14"
      />
    </Box>
  );
};

Instagram.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Instagram; 