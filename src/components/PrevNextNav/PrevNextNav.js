import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Box, Nav, Text } from "grommet";
import { Heading, Link } from "@components";

/**
 * Navigation to previous/next post in blog
 *
 */

const StyledLinkText = styled(Text)`
  text-transform: uppercase;
  font-weight: normal;
  display: block;
  padding: 0 0.5em;
`;

const PrevNextNav = ({
  prevSlug,
  prevTitle,
  nextSlug,
  nextTitle,
  ...props
}) => {
  return (
    <Box direction="column" flex={false} {...props}>
      <Box
        direction="row"
        gap="large"
        fill="horizontal"
        justify="between"
        flex={false}
        pad={{ bottom: "small" }}
      >
        {prevSlug && (
          <Heading
            color="text-weak"
            level="6"
            margin="none"
            textAlign="start"
            spaced
            underline
            textCase="uppercase"
          >
            Previous Post
          </Heading>
        )}
        {nextSlug && (
          <Heading
            color="text-weak"
            level="6"
            margin="none"
            textAlign="start"
            spaced
            underline
            textCase="uppercase"
          >
            Next Post
          </Heading>
        )}
      </Box>
      <Nav direction="row" justify="between" gap="large" fill="horizontal">
        {prevSlug && (
          <Box direction="row" textAlign="start" margin={{ right: "auto" }}>
            <Box align="start" flex={false} color="brand">
              ←
            </Box>
            <Link to={prevSlug}>
              <StyledLinkText textAlign="start">{prevTitle}</StyledLinkText>
            </Link>
          </Box>
        )}
        {nextSlug && (
          <Box direction="row" textAlign="end" margin={{ left: "auto" }}>
            <Link to={nextSlug}>
              <StyledLinkText textAlign="end">{nextTitle}</StyledLinkText>
            </Link>
            <Box align="end" flex={false} color="brand">
              →
            </Box>
          </Box>
        )}
      </Nav>
    </Box>
  );
};

PrevNextNav.propTypes = {
  prevSlug: PropTypes.string,
  nextSlug: PropTypes.string,
  prevTitle: PropTypes.string,
  nextTitle: PropTypes.string,
};

export default PrevNextNav;
