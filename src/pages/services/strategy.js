import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Link, Paragraph, Widget, WidgetContainer } from "@components";
import Page from "@templates/Page";

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
      Design Systems Strategy
    </Text>
  </Heading>
);

const Strategy = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Design Systems Strategy",
      description: `I can help you to kick start or boost your design system.
       I analyze your business and product situation,
       take into account the given resources and identify the shape for the design 
       system which would serve best in your case.`,
      cover: heroImage,
      keywords: [
        "design system",
        "start design system",
        "boost design system",
        "maintain design system",
      ],
    }}
    location={location}
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
      changes which boost the whole system to the next level. My work in this
      regard will include deep study of the structure of your organization and
      its workflows, design and technical audit of existing artefacts and tools
      as well as providing game-changing additions and modifications to all of
      these aspects.
    </Paragraph>
    <Paragraph>
      The
      <Link to="/design-systems/boosting-workshop">
        Design Systems — what else we can do?
      </Link>
      is a perfect start for this research and the following boost.
    </Paragraph>
    <WidgetContainer>
      <Widget
        slug="/design-systems/boosting-workshop"
        background="accent"
        align="center"
        title="Design Systems — what else we can do?"
        height="auto"
        excerpt={
          <>
            The one-day workshop focused on managerial and strategic aspects of
            design system production and promotion. The workshop is shaped for
            product owners, project managers, and{" "}
            <b>the whole design system team</b>. If there is wish and
            possibility, you can also include relevant people from other company
            departments.
          </>
        }
      />
    </WidgetContainer>
  </Page>
);

Strategy.propTypes = {
  location: PropTypes.object,
};

export default Strategy;
