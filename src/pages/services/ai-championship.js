import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading } from "@components";
import { Page } from "@templates/Page";

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
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "AI Championship",
      description: "AI Championship service",
    }}
    location={location}
  >
  </Page>
);

AIChampionship.propTypes = {
  location: PropTypes.object,
};

export default AIChampionship;

