import React from "react";
import styled from "styled-components";

// Same hairline border as the items in ScreenshotGrid (border: 1px solid #e0e0e0).
// Wrap-around approach: drop a markdown image (or any content) inside in MDX, the
// wrapper renders a thin frame around it.

const Wrap = styled.div`
  margin: 24px 0;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  line-height: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const BorderedImage = ({ children }) => <Wrap>{children}</Wrap>;

export default BorderedImage;
