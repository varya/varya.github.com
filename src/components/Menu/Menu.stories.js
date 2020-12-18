import React from "react";

import Menu from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
};

export const Default = (args) => <Menu {...args} />;
Default.args = {
  current: "Projects",
};
