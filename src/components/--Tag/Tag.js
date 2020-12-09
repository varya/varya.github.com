import { Button } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Link from "../--Link";

const Tag = ({ name, slug = name, ...props }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Button
        primary
        size="small"
        fill={false}
        basis="small"
        pad="medium"
        style={{ borderRadius: "20px" }}
        label={name}
        {...props}
      />
    </Link>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  color: PropTypes.string,
};

export default Tag;
