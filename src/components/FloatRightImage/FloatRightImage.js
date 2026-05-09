import React from "react";
import styled from "styled-components";

// Wraps a block of MDX prose with a bordered image floated to the right. Adjacent
// paragraphs (and lists, etc.) flow around the image's left edge. On phones
// (≤720px) the float is dropped — the image stacks above the prose.
//
// Usage in MDX:
//
//   <FloatRightImage src={require('./images/x.png').default} alt="...">
//
//   Paragraph one wraps to the left of the image.
//
//   Paragraph two also wraps. After the prose, the float clears.
//
//   </FloatRightImage>

const Wrap = styled.div`
  margin: 24px 0;

  /* clearfix — so subsequent content doesn't ride up alongside the float */
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Floater = styled.div`
  float: right;
  width: 38%;
  max-width: 320px;
  margin: 4px 0 16px 24px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  line-height: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 720px) {
    float: none;
    width: auto;
    max-width: none;
    margin: 16px 0;
  }
`;

const FloatRightImage = ({ src, alt, children }) => (
  <Wrap>
    <Floater>
      <img src={src} alt={alt || ""} />
    </Floater>
    {children}
  </Wrap>
);

export default FloatRightImage;
