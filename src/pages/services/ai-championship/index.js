import React from "react";
import PropTypes from "prop-types";

import { Box, Button, Text } from "grommet";
import { Heading, Paragraph, ImageBlock, Avatar, Link } from "@components";
import { Page } from "@templates/Page";

import heroImage from "../hero-workshops.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      AI Championship
    </Text>
  </Heading>
);

const AIChampionship = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "AI Championship & AI-Native Development Services",
      description: "Accelerate your team's AI adoption with Varya Stepanova. Hands-on AI championship, agentic coding workflows, and spec-driven development for design and engineering teams.",
      keywords: [
        "AI champion",
        "AI-native developer",
        "agentic coding",
        "Cursor for design systems",
        "AI mentorship",
        "spec-driven development",
        "design systems AI",
        "engineering leadership"
      ],
    }}
    location={location}
  >
    <ImageBlock imageLeft image={<Avatar />} margin={{ top: "medium" }}>
      <Paragraph size="large" standout lead margin={{ vertical: "none" }}>
        Adopting AI in software development isn't just about installing new tools, it's about a 
        fundamental shift in mindset and workflow. I offer a cutting-edge <strong>"AI Champion"</strong> service 
        where I join your team as a lead engineer or hands-on developer and mentor to accelerate this transition.
      </Paragraph>
      <Paragraph size="large" standout lead>
        As an <strong>"AI Native"</strong> developer and Engineering Manager, I have pioneered 
        spec-driven AI development workflows that bridge the gap between design and engineering. 
        I don't just teach the tools; I demonstrate how to orchestrate AI agents to deliver 
        production-ready code, maximizing velocity and quality.
      </Paragraph>
    </ImageBlock>

    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      Beyond Code Completion: The AI Mindset
    </Heading>
    <Paragraph>
      Many teams use AI tools merely as prompt-based code completion. My approach focuses on <strong>agentic coding</strong> and{` `}
      <strong>spec-driven development</strong>. I help teams move from manual coding to "curating" code generated 
      by AI agents based on precise specifications. This ensures that the AI serves your application architecture and design system, 
      rather than producing generic boilerplate.
    </Paragraph>
    <Paragraph>
      AI-enhanced workflows benefit both design and software engineering teams by creating a common language. I demonstrate how to use AI to bridge these disciplines, allowing designers to produce code-ready specs and developers to implement them with high fidelity. A prime example is my popular public workshop, <Link to="https://bridge-the-gap.dev/workshops/cursor-for-design-systems/">Cursor for Design Systems</Link>, where I train professionals to use spec-driven development to unify their design and engineering processes.
    </Paragraph>
    <Paragraph>
      My career has been defined by pioneering standardized approaches to software development. I was an early evangelist for Design Systems, helping to popularize them from a niche idea to a global industry standard. I bring that same foresight to AI-native development. I believe agentic coding is the next major shift, and I am here to guide your organization through this transformation just as I did with Design Systems—pragmatically, effectively, and with a focus on long-term value.
    </Paragraph>

    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      What I Offer
    </Heading>
    <Paragraph>
      <ul>
        <li>
          <strong>Embedded AI Championship:</strong> I work hands-on (100% allocation) as a member of your software 
          development team. I act as a role model, utilizing agentic coding for daily tasks and showing practical 
          "tips and tricks" in real-time.
        </li>
        <li>
          <strong>Workflow Optimization:</strong> I identify opportunities to offload repetitive or complex sub-tasks 
          to AI agents, establishing a baseline for AI-assisted best practices tailored to your tech stack (AWS, React, Python, etc.).
        </li>
        <li>
          <strong>Bridging Design & Development:</strong> Leveraging my background in design systems, I implement 
          workflows where Figma designs and requirements are systematically translated into code using AI, 
          reducing handoff friction and ensuring fidelity.
        </li>
        <li>
          <strong>Mentorship & Culture Shift:</strong> I mentor existing team members, helping them transition 
          from traditional coding methodologies to AI-native workflows with patience and empathy.
        </li>
      </ul>
    </Paragraph>

    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      Why It Works
    </Heading>
    <Paragraph>
      I combine the hands-on technical mastery of an AI-native developer with the strategic mindset of an engineering leader. 
      I understand the challenges of adoption in both legacy and cloud-native environments. My goal is to "level up" 
      your existing team, leaving them with the skills and processes to continue innovating long after our engagement.
    </Paragraph>

    <Heading level={2} margin={{ top: "medium", bottom: "medium" }}>
      Get Started
    </Heading>
    <Paragraph>
      Ready to transform your team's velocity and quality with AI? Let's discuss how an AI Champion engagement 
      can fit your organization's needs.
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
      <Link to="https://calendly.com/var_ya">Calendly</Link>.
    </Paragraph>

  </Page>
);

AIChampionship.propTypes = {
  location: PropTypes.object,
};

export default AIChampionship;
