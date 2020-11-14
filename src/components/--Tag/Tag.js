import { Button } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Link from "../--Link";
const Tag = ({ name, color = undefined, ...props }) => {
  return (
    <Button
      primary
      color={color}
      fill={false}
      basis="small"
      size="small"
      label={name}
      as={Link}
      to={`/blog/${name.toLowerCase()}`}
      {...props}
    />
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default Tag;
