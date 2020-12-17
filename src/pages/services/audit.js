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
    <Heading level={3}>Here is how it happens:</Heading>
    <Step num={1}>
      We have a remote video meeting to discuss your organisation, projects, and
      goals. Chatting with you, I get all the context needed for further steps.
    </Step>
    <Step num={2}>
      I interview your designers, developers, managers, and all people related
      to creating, using, and supporting your design system.
    </Step>
    <Step num={3}>
      I examine the artifacts you have such as design documentation, codebase,
      tools, and the ways these tools are used.
    </Step>
    <Step num={4}>
      I gather all the information and analyse it to form the full picture of
      your design system structure and status, outline the issues and the areas
      for potential improvement. The report I provide you with contains certain
      suggestions, steps, and tricks to apply for overcoming the revealed issues
      and implementing the impact-generating improvements.
    </Step>
    <Step num={5}>
      When you read the report, we have a remote video meeting once again, and I
      present you with the findings and suggestions from the report. In this
      session, we can discuss your perspective and plans towards an enchanced
      design system and well-tailored processes.
    </Step>
  </Page>
);

export default Audit;
