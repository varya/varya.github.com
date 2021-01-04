import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Paragraph, Team } from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-supervision.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Supervising The Teams
    </Text>
  </Heading>
);

const Supervision = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Supervision",
      description: `As an experienced team leader, I can offer my help in supervising the teams of designers and developers.`,
      cover: heroImage,
      keywords: ["supervision", "team leading"],
    }}
    location={location}
  >
    <Paragraph>
      As an experienced team leader, I can offer my help in supervising the
      teams of designers and developers.
    </Paragraph>
    <Paragraph>
      If you do not have your own specialists but are interested in getting a
      bunch of professionals working together, my business partners and I can
      offer a well-worked team that has proved itself at many projects.
    </Paragraph>
    <Team />
  </Page>
);

Supervision.propTypes = {
  location: PropTypes.object,
};
export default Supervision;
