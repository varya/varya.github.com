import React from "react";

import { Heading, Paragraph } from "@components";

import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
  argTypes: {
    hasOverlay: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = (args) => <Hero {...args} />;
Default.args = {
  imageUrl: "https://source.unsplash.com/random",
};

export const WithOverlay = (args) => <Hero hasOverlay {...args} />;

WithOverlay.args = {
  imageUrl: "https://source.unsplash.com/random",
};

export const Colored = (args) => (
  <Hero {...args}>
    <Heading level={1}>Sample Heading on colored hero</Heading>
    <Paragraph level={4}>
      Sample paragraph on colored hero. Color can be switched to any other
      string defined in theme
    </Paragraph>
  </Hero>
);

Colored.args = { background: "brand" };
