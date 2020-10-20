import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import FaCalendar from "react-icons/lib/fa/calendar";
import FaTag from "react-icons/lib/fa/tag";

const Meta = (props) => {
  const { prefix, category } = props;

  return (
    <p className="meta">
      <span>
        <FaCalendar size={18} /> {prefix}
      </span>
      {category && (
        <span>
          <FaTag size={18} />
          <Link to={`/category/${category}`}>{category}</Link>
        </span>
      )}
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default Meta;
