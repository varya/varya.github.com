import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import {
  Heading,
  Paragraph,
  Widget,
  WidgetContainer,
  Workshop,
} from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-workshops.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Workshops and Training
    </Text>
  </Heading>
);

const Workshops = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Workshops on design systems and frontend development",
      description: `I ran private and public workshops related to
      design systems production and design operations focusing on both
      technical and manegerial aspects. The workshops can be ready-made
      or custom-tailored, the choice is yours.`,
      cover: heroImage,
      keywords: [
        "design systems workshops",
        "design systems training",
        "workshops",
        "training",
      ],
    }}
    location={location}
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
    <Workshop />
    <Heading level={2}>Other possible workshops:</Heading>
    {/* TODO: store workshop list in marksown and query for them */}
    <WidgetContainer>
      <Widget
        slug="/design-systems/design-systems-101"
        background="neutral"
        align="center"
        title="Design Systems 101"
        height="auto"
        excerpt="Introductary non-technical workshop for all the specialists (designers, developers, managers) to get common understanding on the concept of design systems and figure out the first steps towards your own."
      />
      <Widget
        slug="/design-systems/hands-on-workshop"
        background="brand"
        align="center"
        title="Hands-on with Design Systems"
        height="auto"
        excerpt="Full-day workshop about building design system and pattern library (React) in multidisciplinary team. This workshop was given twice - as a part of DSConf Helsinki, and the second time on its own.Introductary non-technical workshop for all the specialists (designers, developers, managers) to get common understanding on the concept of design systems and figure out the first steps towards your own."
      />
      <Widget
        slug="/design-systems/team-process-workshop"
        background="accent"
        align="center"
        title="How to build a Design System as a team"
        height="auto"
        excerpt="Half-day workshop for teams and individuals interested in managing design system teams and running smooth processes for such projects."
      />
    </WidgetContainer>
  </Page>
);

Workshops.propTypes = {
  location: PropTypes.object,
};

export default Workshops;
