import React from "react";

import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
  args: {
    imageUrl: "https://source.unsplash.com/random",
  },
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

export const Basic = (args) => <Hero {...args} />;
export const WithOverlay = (args) => <Hero hasOverlay {...args} />;
