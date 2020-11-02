import React from "react";

import Tag from "./Tag";

export default {
  title: "Tag",
  component: Tag,
  args: {
    name: "tag name",
  },
};

const Template = (args) => {
  return <Tag {...args} />;
};

export const Default = Template.bind({});
export const Yellow = Template.bind({});
Yellow.args = {
  color: "#ffcc00",
};
