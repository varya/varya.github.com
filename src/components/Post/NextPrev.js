import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

const NextPrev = props => {
  const {
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props;

  return (
      <div className="links">
        {nextSlug && (
          <Link to={nextSlug}>
            <FaArrowRight />
            <h4>
              {nextTitle} <time>{nextPrefix} </time>
            </h4>
          </Link>
        )}
        {prevSlug && (
          <Link to={prevSlug}>
            <FaArrowLeft />
            <h4>
              {prevTitle} <time>{prevPrefix}</time>
            </h4>
          </Link>
        )}
      </div>

  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default NextPrev;
