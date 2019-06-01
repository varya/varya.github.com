import FaCalendar from "react-icons/lib/fa/calendar";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

import styled from 'styled-components'
import { grid } from 'styled-components-grid'

export const Container = styled.div`
  ${grid({})}
  margin-bottom: 3em;
`
export const PostHeader = styled.div`
  ${grid.unit({
    size: {
        desktop: 12 / 12
    }
  })}

  h3 {
    margin-top: 0;
    margin-bottom: 0.5em;
  }
`

export const Cover = styled.div`
  padding: 0.5em 2em 0 0;
  ${grid.unit({
    size: {
        desktop: 4 / 12
    }
  })}
`

export const TextByCover = styled.div`
  ${grid.unit({
    size: {
        desktop: 8 / 12
    }
  })}

  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

export const Text = styled.div`

  p:first-child {
    margin-top: 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

const Item = props => {
  const {
    post: {
      excerpt,
      fields: { slug },
      frontmatter: {
        title,
        date,
        cover,
        /*cover: {
          children: [{ sizes }]
        }*/
      }
    }
  } = props;

  return (
      <li>
        <Link to={`/${slug}`} key={slug} className="link">
          <Container>
          <PostHeader>
            <h3>
              {title}
            </h3>
            <p className="meta">
              <span>
                <FaCalendar size={18} /> {date}
              </span>
            </p>
          </PostHeader>
          {
            cover && <Cover><Img sizes={cover.childImageSharp.sizes} /></Cover>
          }
          {
            cover ?
              <TextByCover><div dangerouslySetInnerHTML={{ __html: excerpt }} /></TextByCover>
                :
              <Text><div dangerouslySetInnerHTML={{ __html: excerpt }} /></Text>
          }
          </Container>
        </Link>
      </li>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Item;
