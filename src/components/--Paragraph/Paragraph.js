import React from "react";
import PropTypes from "prop-types";
import { Paragraph as GrommetParagraph } from "grommet";
import styled from "styled-components";

/**
 * A paragraph of text inside the post
 * @param {boolean} lead - first paragraph, aka lead, styled differently
 * @param {number} truncate - number of lines to truncate paragraph
 *
 */

const StyledParagraph = styled(GrommetParagraph)`
  font-weight: ${({ lead }) => (lead ? "bold" : "normal")};
  font-style: ${({ lead }) => (lead ? "italic" : "normal")};
  text-overflow: ${({ truncate }) => (truncate ? "ellipsis" : "clip")};
  overflow: ${({ truncate }) => (truncate ? "hidden" : "visible")};
  height: ${({
    truncate,
    theme: {
      global: {
        font: { height },
      },
    },
  }) => truncate && parseInt(height) * truncate + "px"};
`;

const Paragraph = ({ children, lead, truncate = false, ...props }) => {
  return (
    <StyledParagraph fill lead={lead} truncate={truncate} {...props}>
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  lead: PropTypes.bool,
  truncate: PropTypes.number,
};

export default Paragraph;
