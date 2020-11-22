import React from "react";
import PropTypes from "prop-types";
import { Heading as GrommetHeading } from "grommet";
import styled from "styled-components";

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
`;

const Heading = (props) => <StyledHeading {...props} />;

Heading.propTypes = {
  textCase: PropTypes.string,
  spaced: PropTypes.boolean,
  underline: PropTypes.boolean,
};

export default Heading;