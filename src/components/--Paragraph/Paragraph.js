import React from "react";
import PropTypes from "prop-types";
import { Paragraph as GrommetParagraph } from "grommet";

/**
 * Paragraph
 *
 */

const Paragraph = ({ children, size, color, textAlign, fill }) => (
  <GrommetParagraph size={size} color={color} textAlign={textAlign} fill={fill}>
    {children}
  </GrommetParagraph>
);

Paragraph.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  textAlign: PropTypes.string,
  fill: PropTypes.any,
};

export default Paragraph;
