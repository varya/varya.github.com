import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Paragraph, Avatar, ImageBlock } from "@components";
import { Page } from "@templates/Page";

import heroImage from "./hero-supervision.jpg"; // Using supervision hero image as placeholder

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Mentorship
    </Text>
  </Heading>
);

const Mentorship = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Design Systems and Frontend Development Mentorship",
      description: `Expert mentorship for designers and developers looking to advance their skills in design systems, frontend development, and team collaboration. Get personalized guidance from an experienced professional.`,
      cover: heroImage,
      keywords: [
        "mentorship",
        "design systems mentoring",
        "frontend development mentor",
        "career guidance",
        "professional development",
        "design systems expert",
      ],
    }}
    location={location}
  >
    <ImageBlock imageLeft image={<Avatar />} margin={{ top: "medium" }}>
      <Paragraph size="large" standout lead margin={{ vertical: "none" }}>
        With 20+ years in tech and 15+ years leading engineering teams, I offer personalized 
        mentorship for professionals looking to excel in design systems, UI development, 
        and team leadership. My experience spans from building UI frameworks with 150+ components 
        for one of Europe's largest internet companies to leading distributed teams across 
        multiple countries and cultures.
      </Paragraph>
      <Paragraph size="large" standout lead>
        I've successfully grown teams from 1 to 7 people, managed design system adoption 
        across large retail organizations that ship products to multiple markets, and led 
        comprehensive design system implementations for SaaS platforms, messaging services, 
        and international agricultural technology companies. My approach combines technical 
        expertise with strong people management and cross-cultural collaboration skills.
      </Paragraph>
    </ImageBlock>
    <Paragraph>
      My mentorship focuses on:
      <ul>
        <li><strong>Design Systems Leadership:</strong> Strategy, roadmapping, stakeholder alignment, and measuring success through adoption metrics</li>
        <li><strong>Team Management:</strong> Building and scaling design system teams, conducting 1-1s, facilitating cross-functional collaboration</li>
        <li><strong>UI Architecture & Component Design:</strong> Creating scalable component libraries, design tokens, and documentation systems</li>
        <li><strong>Product Ownership:</strong> Establishing OKRs, tracking DORA metrics, and driving data-driven roadmap prioritization</li>
        <li><strong>Career Development:</strong> Transitioning from individual contributor to leadership roles, mentoring team members' growth</li>
        <li><strong>Cross-Cultural Collaboration:</strong> Managing distributed teams across time zones and fostering inclusive team environments</li>
        <li><strong>Community Building:</strong> Championing design system adoption, organizing knowledge sharing, and building internal communities</li>
      </ul>
    </Paragraph>
    <Paragraph>
      Whether you're a designer looking to understand the technical aspects of design systems, 
      a developer transitioning into design system work, or a team lead scaling design system 
      operations, I provide guidance based on hands-on experience managing teams and delivering 
      results in complex, distributed environments. Sessions are conducted remotely and tailored 
      to your specific goals and organizational context.
    </Paragraph>
  </Page>
);

Mentorship.propTypes = {
  location: PropTypes.object,
};

export default Mentorship;
