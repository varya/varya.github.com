import React from "react";
import PropTypes from "prop-types";

const Headline = props => {
  const { title, children } = props;

  return (
    <React.Fragment>
      {title ? <h1>{title}</h1> : <h1>{children}</h1>}

    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Headline;
