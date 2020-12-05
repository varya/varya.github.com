import React from "react";

import { Text } from "grommet";
import { Heading, Paragraph } from "@components";
import Page from "@templates";

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

const Supervision = () => (
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
      As an experienced team leader, I can offer my help in supervising the
      teams of designers and developers.
    </Paragraph>
    <Paragraph>
      If you do not have your own specialists but are interested in getting a
      bunch of professionals working together, my partners and I can offer a
      well-worked team proven itself at many other projects.
    </Paragraph>
  </Page>
);

export default Supervision;
