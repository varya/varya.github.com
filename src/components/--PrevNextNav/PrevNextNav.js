import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Anchor, Heading, Nav, Box, Text } from "grommet";
import Link from "../--Link";

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

const StyledLinkHeading = styled(Heading)`
  letter-spacing: 0.2em;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 400;
  margin-block-start: 0;
  margin-block-end: 0;
  line-height: 30px;
`;

const PrevNextNav = ({ prevSlug, prevTitle, nextSlug, nextTitle }) => {
  return (
    <>
      <Box
        direction="row"
        pad={{ horizontal: "medium" }}
        gap="large"
        fill
        justify="between"
      >
        {prevSlug && (
          <StyledLinkHeading color="text-weak" level="3" textAlign="start">
            Previous Post
          </StyledLinkHeading>
        )}
        {nextSlug && (
          <StyledLinkHeading color="text-weak" level="3" textAlign="end">
            Next Post
          </StyledLinkHeading>
        )}
      </Box>
      <Nav
        direction="row"
        pad={{ horizontal: "medium" }}
        justify="between"
        gap="large"
        fill
      >
        {prevSlug && (
          <Box direction="row" textAlign="start" margin={{ right: "auto" }}>
            <Box align="start" flex={false}>
              ←
            </Box>
            <Anchor as={Link} to={prevSlug}>
              <StyledLinkText textAlign="start">{prevTitle}</StyledLinkText>
            </Anchor>
          </Box>
        )}
        {nextSlug && (
          <Box direction="row" textAlign="end" margin={{ left: "auto" }}>
            <Anchor as={Link} to={nextSlug}>
              <StyledLinkText textAlign="end">{nextTitle}</StyledLinkText>
            </Anchor>
            <Box align="end" flex={false}>
              →
            </Box>
          </Box>
        )}
      </Nav>
    </>
  );
};

PrevNextNav.propTypes = {
  prevSlug: PropTypes.string,
  nextSlug: PropTypes.string,
  prevTitle: PropTypes.string,
  nextTitle: PropTypes.string,
};

export default PrevNextNav;
