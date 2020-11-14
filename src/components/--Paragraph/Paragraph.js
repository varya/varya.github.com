import React from "react";
import PropTypes from "prop-types";
import { Paragraph as GrommetParagraph } from "grommet";

/**
 * A paragraph of text inside the post
 * @param {boolean} lead - first paragraph, aka lead, styled differently
 *
 */

const Paragraph = ({ children, lead = false, ...props }) => {
  const style = lead ? { fontWeight: "bold" } : {};

  return (
    <GrommetParagraph fill style={style} {...props}>
      {children}
    </GrommetParagraph>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  lead: PropTypes.bool,
};

export default Paragraph;
