import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Box, Heading } from "grommet";

/**
 * Wrapper around section of content
 *
 */

const StyledSectionHeading = styled(Heading)`
display: flex;
 align-items: center;

 &:after{
 background-color: ${({ theme }) => theme.global.colors.brand};
 content: "";
 height: 2px;
 position: relative;
 margin-left: .5em;
 flex-grow: 1;
}
   
 }`;

const Section = ({ children, heading, headingProps }) => {
  return (
    <>
      <Box as="section" margin={{ bottom: "large" }}>
        {heading && (
          <StyledSectionHeading level={2} size="large" {...headingProps}>
            {heading}
          </StyledSectionHeading>
        )}
        {children}
      </Box>
      <hr />
    </>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  headingProps: PropTypes.object,
};

export default Section;
