import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Heading as GrommetHeading } from "grommet";

/**
 * A wrapper arounf Grommet heading with additional properties
 * @param {"uppercase" | "lowercase" | "capitalize" | undefined} textCase
 * @param {boolean} spaced
 * @param {boolean} underline
 */

const StyledHeading = styled(GrommetHeading)`
  letter-spacing: 0.2em;
  text-transform: ${({ textCase }) => textCase};
  text-decoration: ${({ underline }) => underline && "underline"};
  letter-spacing: ${({ spaced }) => (spaced ? "0.2em" : "normal")};

  ${({ level }) =>
    level !== 1 &&
    `
  position: relative;
  & > a.anchor {
    position: absolute;
    left: -24px;
    display: none;
    height: 100%;
  }

  &:hover a.anchor {
    display: flex;
    align-items: center;
  }

  & a.anchor svg {
    fill: #999;
  }`}
`;

const Heading = (props) => <StyledHeading {...props} />;

Heading.propTypes = {
  textCase: PropTypes.string,
  spaced: PropTypes.bool,
  underline: PropTypes.bool,
};

export default Heading;
