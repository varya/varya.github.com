import React from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph, Widget, WidgetContainer } from "@components";
import { menuData } from "@components/Menu/Menu.js";
import Page from "@templates/Page";

const HeroContent = () => (
  <Heading
    color="brand"
    alignSelf="center"
    responsive
    size="large"
    margin="small"
  >
    Services
  </Heading>
);

const colors = ["brand", "accent", "neutral"];

const ServiceWidget = ({ children, index, title, slug, ...props }) => {
  return (
    <Widget
      alignContent="center"
      justify="center"
      background={colors[index % 3]}
      title={title}
      slug={slug}
      {...props}
    >
      {children}
    </Widget>
  );
};

ServiceWidget.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  title: PropTypes.string,
  slug: PropTypes.string,
};

const Services = () => {
  // get list of services from menu component
  const services = menuData.find(
    (item) => item.label.toLowerCase() === "services"
  ).children;
  return (
    <Page
      hero={{
        props: {
          background: "transparent",
          height: "small",
          hasOverlay: false,
        },
        content: HeroContent,
      }}
      seo={{
        title:
          "Varya Stepanova — design systems architect and engineering manager",
        description:
          " I am working as an independent consultant open for new projects. My roles include team leading of the design systems projects, technical leadership in frontend and building development.",
      }}
    >
      <Paragraph>
        I am working as an independent consultant open for new projects. My
        roles include team leading of the design systems projects, technical
        leadership in frontend and building development.
      </Paragraph>
      <Paragraph>
        I am based in Helsinki (Finland), flexible for both on-site and remote
        projects and dont mind traveling.
      </Paragraph>
      <WidgetContainer items={{ small: 1, medium: 2, large: 2 }}>
        {services.map((service, index) => {
          return (
            <ServiceWidget
              index={index}
              key={service.label}
              slug={service.href}
            >
              <Heading level={3} textAlign="center">
                {service.label}
              </Heading>
            </ServiceWidget>
          );
        })}
      </WidgetContainer>
    </Page>
  );
};

export default Services;
