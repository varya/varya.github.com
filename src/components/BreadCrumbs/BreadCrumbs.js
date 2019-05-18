import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import { Link } from "gatsby";

import styled from "styled-components";

const BreadCrumbsList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const BreadCrumbsItem = styled.li`
  margin: 0;
  padding: 0;

  list-style: none;

  display: inline-block;
  zoom: 1;

  margin-right: 0.5em;

  &:after {
    content: '>';
    margin-left: 0.5em;
  }

  &:last-child {
    &:after {
      display: none;
      content: '';
    }
  }

`;


const Item = props => {
  const {
    data: {
      node: {
        fields: {
          slug
        },
        frontmatter: {
          title
        }
      },
      last
    }
  } = props;

  return (
    <BreadCrumbsItem>
      { last ?
        title :
        <Link to={slug}>
          {title}
        </Link>
      }
    </BreadCrumbsItem>
  )

}

const BreadCrumbs = props => {
  const {
    data
  } = props;

  return (
    <BreadCrumbsList>
      {data.map(item => <Item data={item} key={`breadcrums-${item.node.id || 'home'}`}/>)}
    </BreadCrumbsList>
  );
};

export default BreadCrumbs;
