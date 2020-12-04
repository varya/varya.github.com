import React from "react";

import Page from "../../templates/page/Page";
import Paragraph from "../../components/--Paragraph";
import Heading from "../../components/--Heading";
import WidgetContainer from "../../components/--WidgetContainer";
import Widget from "../../components/--Widget";
import { Text } from "grommet";

import heroImage from "./hero-workshops.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="brand">
      Workshops
    </Text>
    <Text size="inherit" color="accent">
      {" "}
      and{" "}
    </Text>
    <Text size="inherit" color="brand">
      training
    </Text>
  </Heading>
);

const Workshops = () => (
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
      Most of the projects I ran included workshops and trainings. As a
      consultant, I see it as a part of my job to keep the client well-informed
      and provide the hands-on teams with enough information for maintaining the
      projects.
    </Paragraph>
    <Paragraph>
      I offer both ready-made and custom-tailored workshops. In most cases, the
      content and the shape of the workshop is defined together with the client
      so that it responds to the specific needs and is aligned with the upcoming
      plans and goals.
    </Paragraph>
    <Heading level={2}>Some of my workshops:</Heading>
    {/* TODO: store workshop list in marksown and query for them */}
    <WidgetContainer>
      <Widget
        slug="/workshops/design-systems-101"
        background="neutral"
        align="center"
        title="Design Systems 101"
        height="auto"
        excerpt="Introductary non-technical workshop for all the specialists (designers, developers, managers) to get common understanding on the concept of design systems and figure out the first steps towards your own."
      />
      <Widget
        slug="/workshops/hands-on-design-system"
        background="brand"
        align="center"
        title="Hands-on with Design Systems"
        height="auto"
        excerpt="Full-day workshop about building design system and pattern library (React) in multidisciplinary team. This workshop was given twice - as a part of DSConf Helsinki, and the second time on its own.Introductary non-technical workshop for all the specialists (designers, developers, managers) to get common understanding on the concept of design systems and figure out the first steps towards your own."
      />
      <Widget
        slug="/workshops/how-to-build"
        background="accent"
        align="center"
        title="How to build a Design System as a team"
        height="auto"
        excerpt="Half-day workshop for teams and individuals interested in managing design system teams and running smooth processes for such projects."
      />
    </WidgetContainer>
  </Page>
);

export default Workshops;
