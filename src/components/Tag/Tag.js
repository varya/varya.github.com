import React from "react";
import PropTypes from "prop-types";

import { Button } from "grommet";
import { Link } from "@components";

const Tag = ({ name, slug, ...props }) => {
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
