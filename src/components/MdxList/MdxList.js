import styled from "styled-components";

/**
 * Unordered and ordered list wrappers for MDX content.
 *
 * Markdown lists (`<ul>` / `<ol>`) otherwise render with the browser default
 * (~1.2 line-height) and read tight against surrounding paragraphs that use
 * 175% (see `Paragraph` with the `standout` prop). Matching the line-height
 * keeps list items on the same vertical rhythm as paragraphs.
 */

export const Ul = styled.ul`
  line-height: 175%;
`;

export const Ol = styled.ol`
  line-height: 175%;
`;
