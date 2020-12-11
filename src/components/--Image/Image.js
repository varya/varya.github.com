import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Anchor, Box, Text } from "grommet";

/**
 * An image with optional caption
 * @param {string} caption - optional caption text
 * @param {object} copyright - optional copyright info
 * @param {string} copyright.text
 * @param {string} copyright.link
 */

const StyledFigure = styled(Box)`
  margin: 0;
  position: relative;
  overflow: hidden;
  & img {
    background: white;
  }
`;
const StyledCaption = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: -100px;
  transition: margin 0.2s ease;
  figure:hover & {
    margin-bottom: 0px;
  }
`;
const Image = ({
  children,
  caption = undefined,
  copyright = undefined,
  ...props
}) => {
  return (
    <StyledFigure {...props} as="figure">
      {children}
      {(caption || copyright) && (
        <figcaption>
          <StyledCaption
            direction="row"
            pad="small"
            background="text-weak"
            justify="between"
            wrap={true}
          >
            <Text>{caption}</Text>
            {copyright && (
              <Text size="small" as="small">
                ©&nbsp;
                {copyright.link ? (
                  <Anchor href={copyright.link} label={copyright.text} />
                ) : (
                  copyright.text
                )}
              </Text>
            )}
          </StyledCaption>
        </figcaption>
      )}
    </StyledFigure>
  );
};

Image.propTypes = {
  caption: PropTypes.string,
  copyright: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
};

export default Image;
