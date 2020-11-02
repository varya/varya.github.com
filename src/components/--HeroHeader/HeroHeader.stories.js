import React from "react";

import HeroHeader from "./HeroHeader";

export default {
  title: "HeroHeader",
  component: HeroHeader,
};

const Template = (args) => {
  return <HeroHeader {...args} />;
};

export const Default = Template.bind({});
export const WithCover = Template.bind({});
WithCover.args = {
  cover: `https://source.unsplash.com/random`,
};
