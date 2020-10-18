import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

// import { IconContext } from "react-icons"
import FaArrowRight from "react-icons/lib/fa/arrow-right";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

const NextPrevContainer = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  flex-basis: 50%;
  margin: 0;
`;
const PrevLink = styled(NavLink)`
  margin-right: 0.25em;
  text-align: left;
`;
const NextLink = styled(NavLink)`
  margin-left: 0.25em;
  text-align: right;
`;

const NavLinkIcon = styled.span`
 margin-right: ${props => props.left && '1em'};
 margin-left: ${props => props.right && '1em'};
 flex: 0 0 auto;
`

const NextPrev = props => {
console.log("props", props);
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
      <NextPrevContainer>
        {prevSlug && (
          <PrevLink to={`/${prevSlug}`} title="Read previous post">
            <NavLinkIcon left>
              <FaArrowLeft size='1.5em' aria-hidden="true"/>
            </NavLinkIcon>  
            <h4 style={{margin: 0}}>
              {prevTitle}
            </h4>
          </PrevLink>
        )}
        {nextSlug && (
          <NextLink to={`/${nextSlug}`} title="Read next post">     
            <h4 style={{margin: 0}}>
              {nextTitle}
            </h4>
            <NavLinkIcon right>
              <FaArrowRight size='1.5em' aria-hidden="true"/>
            </NavLinkIcon>  
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
