import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

const NextPrevContainer = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  flex-basis: 50%;
  margin: 0;
  & > * {
    margin-right: 1em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const PrevLink = styled(NavLink)`
  margin-right: 0.25em;
  text-align: left;
`;

const NextLink = styled(NavLink)`
  margin-left: 0.25em;
  text-align: right;
`;

const NextPrev = props => {
  const {
    next: {
      fields: { slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props;

  return (
      <NextPrevContainer>
        {prevSlug && (
          <PrevLink to={`/${prevSlug}`} title="Read previous post">
            <FaArrowLeft size='1.5em' aria-hidden="true" style={{flexShrink: 0, paddingTop: '.25em'}}/>
            <h4 style={{marginTop: 0, marginBottom: 0}}>
              {prevTitle}
            </h4>
          </PrevLink>
        )}
        {nextSlug && (
          <NextLink to={`/${nextSlug}`} title="Read next post">     
            <h4 style={{marginTop: 0, marginBottom: 0}}>
              {nextTitle}
            </h4>
            <FaArrowRight size='1.5em' aria-hidden="true" style={{flexShrink: 0, paddingTop: '.25em'}}/>
          </NextLink>
        )}
      </NextPrevContainer>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default NextPrev;
