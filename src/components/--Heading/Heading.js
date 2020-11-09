import React from "react";
import PropTypes from "prop-types";
import { Heading as GrommetHeading } from "grommet";
/**
 * A heading
 *
 * @param {1-6} props.size
 */

const Heading = (props) => <GrommetHeading {...props} />;

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
