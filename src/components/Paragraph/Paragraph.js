import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Paragraph as GrommetParagraph } from "grommet";

/**
 * A paragraph of text inside the post
 * @param {boolean} lead - first paragraph, aka lead, styled differently
 * @param {number} truncate - number of lines to truncate paragraph
 *
 */

/* css line-clamp trick: https://css-tricks.com/line-clampin/ */
const StyledParagraph = styled(GrommetParagraph)`
  line-height: ${({ standout }) => standout && "175%"};
  font-weight: ${({ lead }) => (lead ? "bold" : "inherit")};
  font-style: ${({ lead }) => (lead ? "italic" : "normal")};
  text-align: justify;
  position: relative;
  ${({
    truncate,
    theme: {
      global: {
        font: { height },
      },
    },
  }) =>
    truncate &&
    `display: -webkit-box;
     -webkit-line-clamp: ${truncate};
     -webkit-box-orient: vertical;
     text-overflow: ellipsis;
     overflow: hidden;
     height: ${parseInt(height) * truncate + "px"};
     `}
`;

const Paragraph = ({
  children,
  lead,
  truncate = false,
  textAlign = "start",
  ...props
}) => {
  return (
    <StyledParagraph
      fill
      lead={lead}
      truncate={truncate}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node,
  lead: PropTypes.bool,
  truncate: PropTypes.number,
  textAlign: PropTypes.string,
};

export default Paragraph;
