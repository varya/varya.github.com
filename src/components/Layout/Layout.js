import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import breakpoint from "styled-components-breakpoint";
import { Cell, Grid } from "styled-css-grid";

const MyGrid = styled(Grid)`
  grid-template-areas:
    "header header"
    "content content"
    "prompt prompt"
    "footer footer";

  ${breakpoint("mobile")`
    grid-gap: 8px;
  `}
  ${breakpoint("tablet")`
    grid-template-areas:
      "header header"
      "prompt content"
      "footer footer";
    grid-gap: 16px;
  `}
  ${breakpoint("desktop")`
    grid-gap: 24px;
  `}
`;

export const LayoutSimple = (props) => (
  <MyGrid columns={"48px 1fr"} rows={"minmax(48px,auto) 1fr minmax(48px,auto)"}>
    <Cell area="header" width={2}>
      {props.header}
    </Cell>

    <Cell area="content" width={1}>
      {props.content}
    </Cell>
    <Cell area="prompt" width={1}>
      {props.prompt}
    </Cell>

    <Cell area="footer" width={2}>
      {props.footer}
    </Cell>
  </MyGrid>
);

LayoutSimple.propTypes = {
  header: PropTypes.node,
  content: PropTypes.node,
  prompt: PropTypes.node,
  footer: PropTypes.node,
};
