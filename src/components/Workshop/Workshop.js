import React from "react";

import styled from "styled-components";
import { Box, Button } from "grommet";
import { Heading, Image, Link, Paragraph } from "@components";

import banner from "./hands-on-workshop.png";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Workshop = () => (
  <StyledLink to="https://hands-on-workshop.goright.io">
    <Box border={{ color: "accent", size: "large" }} pad="medium">
      <Heading
        level="2"
        standout
        alignContent="center"
        style={{ textAlign: "center" }}
      >
        Don&apos;t miss my workshop!
      </Heading>
      <Paragraph>
        I will be running a workshop &quot;Hands-on with design systems&quot; on{" "}
        <b>December 2-3</b>, 9-13 PST. You can join as a designer or developer -
        we will be working in the teams. We will create a design system in Figma
        and code a library of React components, make them integrated and build a
        real product together.
      </Paragraph>
      <Button
        as="a"
        primary
        alignSelf="center"
        margin={{ bottom: "medium" }}
        href="https://hands-on-workshop.goright.io"
        label="More info and Registration"
      />
      <Image imageSrc={banner} />
    </Box>
  </StyledLink>
);

export default Workshop;
