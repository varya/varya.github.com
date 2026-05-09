import React from "react";
import styled from "styled-components";

// Aligned with the site's grommet theme:
//   accent  = #f8d179  (used at 0.2 alpha for the header background — a tinted "soft yellow"
//                       that ties to the brand without overpowering)
//   text    = rgba(0, 0, 0, 0.85)
//   border  = rgba(0, 0, 0, 0.12)  (between text-xweak 0.45 and a hair line)

const Wrap = styled.div`
  margin: 24px 0;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    ${({ $bodyFont }) =>
      $bodyFont ? "" : "font-size: 14px; line-height: 1.45;"}
  }

  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: ${({ $bodyFont }) => ($bodyFont ? "12px 16px" : "10px 14px")};
    text-align: left;
    vertical-align: top;
  }

  th {
    background: rgba(248, 209, 121, 0.22);
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    white-space: nowrap;
  }

  td {
    color: rgba(0, 0, 0, 0.78);
  }

  /* Inline code in cells: subtler than default, so it sits inside the cell rhythm */
  code {
    font-size: 0.92em;
    padding: 1px 4px;
  }
`;

const BorderedTable = ({ children, bodyFont = false }) => (
  <Wrap $bodyFont={bodyFont}>{children}</Wrap>
);

export default BorderedTable;
