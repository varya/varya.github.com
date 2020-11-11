import { Button } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Link from "../--Link";
const Tag = ({ name, color = undefined }) => {
  return (
    <Button
      color={color}
      fill={false}
      basis="small"
      primary
      size="small"
      label={name}
      as={Link}
      to={`/blog/${name.toLowerCase()}`}
    />
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Tag;
