import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const List = props => {
  const { edges } = props;

  return (
      <ul>
        {edges.map(edge => {
          const {
            node: {
              frontmatter: { title },
              fields: { slug }
            }
          } = edge;

          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>

  );
};

List.propTypes = {
  edges: PropTypes.array.isRequired
};

export default List;
