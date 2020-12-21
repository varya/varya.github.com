import React from "react";

import { Text } from "grommet";
import { Heading, Paragraph, Widget, WidgetContainer } from "@components";
import Page from "@templates/Page";

import heroImage from "./hero-consultancy.jpg";

const HeroContent = () => (
  <Heading
    level={1}
    alignSelf="center"
    responsive
    size="large"
    margin={{ top: "auto" }}
  >
    <Text size="inherit" color="accent">
      Consultancy
    </Text>
  </Heading>
);

const Consultancy = () => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Consultancy",
      description: `I offer a wide range of consulting services related to design systems (or design operations) and frontend development.`,
      cover: heroImage,
      keywords: ["consultancy", "design systems", "consulting"],
    }}
  >
    <Paragraph>
      My work as a design system architect includes running the processes
      related to the design and development in large or regular organizations.
      It means inventing and shaping the processes through user interviews and
      data analysis, tuning the management tools and running new ones, working
      on company culture and increasing people&apos;s involvement, providing the
      technical infrastructure and guiding in design and development.
    </Paragraph>
    <Paragraph>
      I offer a wide range of consulting services related to design systems (or
      design operations) and frontend development. Here are some examples of the
      roles I could take:
      <ul>
        <li>Engineering manager</li>
        <li>Design system architect</li>
        <li>Frontend architecture expert</li>
        <li> Senior frontend developer</li>
      </ul>
      Regardless of the role you have in mind, contact me if you have a need to
      effectively align the work of your designers and developers, ensure brand
      and visual consistency in your products, and have a well-structured
      seamlessly working design system (all design, technical, or managerial
      aspects). You can find examples of possible projects among services or
      case studies at this website.
    </Paragraph>
    <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
      <Widget slug="/projects" background="brand" align="center">
        <Heading level={3} textAlign="center">
          Projects
        </Heading>
      </Widget>
      <Widget slug="/services" background="neutral" align="center">
        <Heading level={3} textAlign="center">
          Services
        </Heading>
      </Widget>
    </WidgetContainer>
  </Page>
);

export default Consultancy;
