import React from "react";

import Page from "../../templates/page/Page";
import Paragraph from "../../components/--Paragraph";
import Heading from "../../components/--Heading";
import { Text } from "grommet";

import heroImage from "./hero-ui-components.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Development of{" "}
    </Text>
    <Text size="inherit" color="brand">
      UI components
    </Text>
  </Heading>
);

const Development = () => (
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
      If you need well-designed and bulletproof-developed UI components, I will
      be happy to help. With my experience in designing systems, I can offer
      high level expertise allowing me to produce the components which are
      stable and can be easily integrated into the products with different
      architectural solutions behind the scenes.
    </Paragraph>
  </Page>
);

export default Development;
