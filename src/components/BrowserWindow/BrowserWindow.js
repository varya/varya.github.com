import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Schematic browser-window chrome (macOS-flavoured). Three traffic-light dots
// in the top-left use the site's brand / accent / neutral colours from
// src/components/theme.js — coral / yellow / cyan instead of the OS's red /
// yellow / green, so the chrome reads "of the site" rather than borrowed.

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

const Body = styled.div`
  line-height: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const BrowserWindow = ({ children, title }) => (
  <Wrap>
    <Chrome>
      <Dots aria-hidden="true">
        <Dot $color="rgb(236, 78, 75)" /> {/* brand — coral */}
        <Dot $color="#f8d179" /> {/* accent — yellow */}
        <Dot $color="#85d8f3" /> {/* neutral — cyan */}
      </Dots>
      {title ? <Title>{title}</Title> : <span style={{ flex: 1 }} />}
    </Chrome>
    <Body>{children}</Body>
  </Wrap>
);

BrowserWindow.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default BrowserWindow;
