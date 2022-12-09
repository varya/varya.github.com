import React from "react";
import PropTypes from "prop-types";

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

const Consultancy = ({ location }) => (
  <Page
    hero={{
      props: {
        imageUrl: heroImage,
        hasOverlay: true,
      },
      content: HeroContent,
    }}
    seo={{
      title: "Expert consulting in design systems and frontend development",
      description: `Expert consulting services for design operations,
      frontend architecture, and design systems. A way to align your designers
      and developers and ensure consistent branding and visuals in your products.`,
      cover: heroImage,
      keywords: [
        "consultancy",
        "design systems",
        "consulting",
        "contractor",
        "design systems expert",
        "design systems architect",
      ],
    }}
    location={location}
  >
    <Paragraph>
      As an IT consultant and design system architect, I specialize in helping
      large and regular organizations improve their design and development
      processes. This includes conducting user interviews and analyzing data,
      optimizing management tools and implementing new ones, fostering a
      positive company culture, and providing technical infrastructure and
      guidance for design and development.
    </Paragraph>
    <Paragraph>
      I offer a wide range of consulting services related to design systems and
      frontend development, including:
      <ul>
        <li>Engineering manager</li>
        <li>Design system architect</li>
        <li>Frontend architecture expert</li>
        <li> Senior frontend developer</li>
      </ul>
      Whether you need help aligning the work of your designers and developers,
      ensuring consistent branding and visuals across your products, or building
      a well-structured and efficient design system, I can help. Please feel
      free to contact me to discuss your specific needs and how I may be able to
      assist you. Examples of my past work can be found on this website.
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

Consultancy.propTypes = {
  location: PropTypes.object,
};

export default Consultancy;
