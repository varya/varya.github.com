import React from "react";
import PropTypes from "prop-types";

import { Box, Text } from "grommet";
import { Heading, Paragraph } from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-audit.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="medium"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Audit of design and development processes
    </Text>
  </Heading>
);

const Step = ({ num, children }) => (
  <Box direction="row" margin={{ vertical: "medium" }} align="start">
    <Box
      width="xsmall"
      height="xsmall"
      border={{ color: "brand", size: "medium" }}
      style={{ borderRadius: "50%" }}
      justify="center"
      align="center"
      flex={false}
      margin={{ right: "medium" }}
    >
      <Text size="xxlarge" weight="bold" color="brand">
        {num}
      </Text>
    </Box>
    <Paragraph margin={{ vertical: "none" }}>{children}</Paragraph>
  </Box>
);

Step.propTypes = {
  num: PropTypes.number,
  children: PropTypes.node,
};

const Audit = () => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
  >
    <Paragraph>
      You are looking into more effective working processes between your design
      and development teams? I can help with it. Combining both academic and
      practical (15+ years of experience in the industry) knowledge, I can audit
      your existing processes and practises and provide relevant suggestions for
      future transformation. Using your resources more efficiently, you will be
      able to achieve more on the product level rather than struggling with the
      routines.
    </Paragraph>
    <Paragraph>
      Such a project could be a pre-phase for a supervised transformation or
      work on its own.
    </Paragraph>
    <Heading level={3}>Here is how it works:</Heading>
    <Step num={1}>We jump on a phone or zoom call and discuss the brief</Step>
    <Step num={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Step>
    <Step num={3}>!! Do not forget to change this texts :)</Step>
  </Page>
);

export default Audit;
