import React from "react";
import PropTypes from "prop-types";

import { Box, Button, Text } from "grommet";
import { Heading, Paragraph, Avatar, ImageBlock, Link } from "@components";
import { Page } from "@templates/Page";

import { InlineWidget } from "react-calendly";

import heroImage from "./hero-varya-board.jpg";
import ogImage from "./hero-varya-board-og.jpg";

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
      title: "Design systems mentorship with Varya Stepanova",
      description: "Get personalized mentorship from Varya Stepanova. 20+ years of experience in team leadership, UI architecture, and scaling design systems across global organizations.",
      cover: ogImage,
      imageWidth: 1200,
      imageHeight: 630,
      keywords: [
        "design systems mentorship",
        "design systems mentor",
        "frontend development mentoring",
        "UI architecture guidance",
        "design systems career",
        "team leadership mentorship",
        "design systems strategy",
        "professional development",
        "design systems expert",
        "career guidance",
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
        I've successfully grown teams from 1 person to many people, managed design system adoption 
        across large organizations that ship products to multiple markets, and led 
        comprehensive design system implementations for SaaS platforms, messaging services, 
        telecommunication companies, agricultural technology companies and other industries.
        My approach combines technical 
        expertise with strong people management (with heart!) and cross-cultural collaboration skills.
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
    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      How mentorship works:
    </Heading>
    <Paragraph>
      Mentorship takes place through semi-regular online meetings where we discuss your current 
      challenges, review your progress, and plan next steps. Between sessions, you'll receive 
      practical homework assignments that help you apply what we've discussed.
    </Paragraph>
    <Paragraph>
      The frequency of our meetings depends entirely on your needs and availability. Some mentees 
      benefit from sessions a couple of times per month for intensive guidance during critical 
      projects or career transitions, but others prefer quarterly check-ins to maintain momentum 
      and get strategic advice. We'll find a rhythm that works best for your challenges and 
      schedule.
    </Paragraph>
    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      First meeting
    </Heading>
    <Paragraph>
      Regular mentorship sessions are paid, but the first meeting is of course free. You can book 
      a call in a widget below, and we discuss your challenges, schedule and terms.
    </Paragraph>
    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      What exactly could I ask as a mentee?
    </Heading>
    <Paragraph>
      You can ask anything you feel relevant. Here are a few ideas — these are real questions 
      I've discussed with my mentees. Maybe they're similar to your challenges:
    </Paragraph>
    <Paragraph>
      <ul>
        <li>"This is the status of my design system now, where do I invest time to make the best progress right now?"</li>
        <li>"How do I organize sync with designers?"</li>
        <li>"How exactly could I improve our documentation in Storybook?"</li>
        <li>"How to display what are our available CSS utilities so that a designer sees it?"</li>
        <li>"What to start with if we want visual regression testing in our specific setup?"</li>
        <li>"How do we increase adoption of design system in our product?"</li>
        <li>"What topics should I learn for my next interview to a design system position?"</li>
      </ul>
    </Paragraph>
    <Paragraph>
      Topics are not limited to this list — bring whatever challenges you're facing, and we'll 
      work through them together.
    </Paragraph>
    
    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      Get in Touch
    </Heading>
    
    <Paragraph>
      Ready to start your mentorship journey? I'd love to hear about your challenges and goals.
    </Paragraph>
    
    <Box direction="row" gap="medium" wrap margin={{ bottom: "medium" }}>
      <Button
        primary
        size="medium"
        label="Email me at mail@varya.me"
        href="mailto:mail@varya.me"
        target="_blank"
        rel="noopener"
        margin={{ bottom: "small" }}
      />
      <Button
        secondary
        size="medium"
        label="Connect on LinkedIn"
        href="https://www.linkedin.com/in/varyastepanova/"
        target="_blank"
        rel="noopener"
        margin={{ bottom: "small" }}
      />
    </Box>
    
    <Paragraph>
      Or book a video session directly via{" "}
      <Link to="https://calendly.com/var_ya">Calendly</Link> — I keep my calendar
      up to date, so you can easily see available times and choose what works best for you.
    </Paragraph>
    
    <InlineWidget
      styles={{ minWidth: "320px", height: "700px" }}
      url="https://calendly.com/var_ya/30min"
    />
  </Page>
);

Mentorship.propTypes = {
  location: PropTypes.object,
};

export default Mentorship;
