import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Variant of BrowserWindow for tall, scrolling captures (e.g. a full docs
// page). The chrome matches BrowserWindow exactly (site-coloured traffic
// lights). Inside, a fixed-height viewport hides overflow; the inner image
// translates up and down on a CSS animation so the visible "scroll" mimics a
// user scrolling through the long page. The whole viewport is wrapped in a
// link — clicking opens the full image in a new tab.

// Forward iteration: pause at top → scroll down → pause at bottom.
// `animation-direction: alternate` reverses the next iteration, giving an
// infinite loop with a small dwell at each extreme.
const scrollKeyframes = keyframes`
  0%, 12%    { transform: translateY(0); }
  88%, 100%  { transform: translateY(calc(-100% + var(--vh, 400px))); }
`;

const Wrap = styled.div`
  margin: 24px 0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
`;

const Chrome = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: #f3f1ee;
  border-bottom: 1px solid #e0e0e0;
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  flex: none;
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: inline-block;
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Viewport = styled.a`
  --vh: ${({ $viewportHeight }) => $viewportHeight};
  display: block;
  height: ${({ $viewportHeight }) => $viewportHeight};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  background: #fafafa;

  /* Pause the scroll on hover so a reader can settle on what's visible
     before clicking through to the full image. */
  &:hover .scroll-inner {
    animation-play-state: paused;
  }
`;

const Inner = styled.div`
  display: block;
  width: 100%;
  /* GPU compositing hints — fight sub-pixel blur during the translate animation. */
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  animation: ${scrollKeyframes} ${({ $duration }) => $duration} ease-in-out
    infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  img {
    /* Display at native size up to the viewport width — never upscale, which
       is the main source of "blurry" screenshots. If a source PNG is narrower
       than the chrome, it sits centred with whitespace at the sides. To fill
       the chrome edge-to-edge sharply, re-export the source at ≥ 1900 px wide. */
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

const ScrollingBrowserWindow = ({
  src,
  alt = "",
  title,
  viewportHeight = "400px",
  duration = "18s",
}) => (
  <Wrap>
    <Chrome>
      <Dots aria-hidden="true">
        <Dot $color="rgb(236, 78, 75)" /> {/* brand — coral */}
        <Dot $color="#f8d179" /> {/* accent — yellow */}
        <Dot $color="#85d8f3" /> {/* neutral — cyan */}
      </Dots>
      {title ? <Title>{title}</Title> : <span style={{ flex: 1 }} />}
    </Chrome>
    <Viewport
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt || "Open full image in a new tab"}
      $viewportHeight={viewportHeight}
    >
      <Inner className="scroll-inner" $duration={duration}>
        <img src={src} alt={alt} />
      </Inner>
    </Viewport>
  </Wrap>
);

ScrollingBrowserWindow.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  viewportHeight: PropTypes.string,
  duration: PropTypes.string,
};

export default ScrollingBrowserWindow;
