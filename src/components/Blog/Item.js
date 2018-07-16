import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaCalendar from "react-icons/lib/fa/calendar";
import Img from "gatsby-image";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const {
    post: {
      excerpt,
      fields: { slug, prefix },
      frontmatter: {
        title,
        date,
        /*cover: {
          children: [{ sizes }]
        }*/
      }
    }
  } = props;

  return (
      <li>
        <Link to={`/${slug}`} key={slug} className="link">
          <h3>
            {title}
          </h3>
          <p className="meta">
            <span>
              <FaCalendar size={18} /> {date}
            </span>
          </p>
          <p>{excerpt}</p>
        </Link>
      </li>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Item;
