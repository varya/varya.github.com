import React from "react";

import Page from "../../templates/page/Page";
import Paragraph from "../../components/--Paragraph";
import Heading from "../../components/--Heading";
import { Text } from "grommet";

import heroImage from "./hero-kickstart.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Design systems strategy
    </Text>
  </Heading>
);

const Strategy = () => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
  >
    <Heading level={2}>Kickstart a design system</Heading>
    <Paragraph>
      In a need for a design system but not sure where to start at? I ran many
      of them in small to large organizations as well as gathered an
      encyclopaedic knowledge of their different aspects. I can help you to
      analyze your business and product situation, take into account the given
      resources and identify the shape for the design system which would serve
      best in your case.
    </Paragraph>
    <Paragraph>
      Together with your designers and developers, or working on my own I can
      architecture and fulfil the first version UI kit and/or component library
      for your organization. I will tune the infrastructure to automate the life
      cycle of your design system and provide your personnel with extensive
      guides for the future support.
    </Paragraph>
    <Heading level={2}>Boosting a design system</Heading>
    <Paragraph>
      Leveling up an existing design system is one of the hardest but also my
      favorite task. If you already have a design system but feel that it could
      be better and help you more, I can step in.
    </Paragraph>
    <Paragraph>
      I analyze the existing design systems from design, technical and
      managerial perspectives. All the three aspects may be provided with
      changes which boots the whole system to the next level. My work in this
      regard will include deep study of the structure of your organization and
      its workflows, design and technical audit of existing artefacts and tools
      as well as providing game-changing additions and modifications to all of
      these aspects.
    </Paragraph>
  </Page>
);

export default Strategy;
