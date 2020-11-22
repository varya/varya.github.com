import React from "react";
import PrevNextNav from "./PrevNextNav";

export default {
  title: "Components/PrevNextNav",
  component: PrevNextNav,
};
export const Default = (args) => <PrevNextNav {...args} />;
Default.args = {
  prevTitle: "Sample link to previous article",
  nextTitle: "Sample link to next article",
  prevSlug: "/prev",
  nextSlug: "/next",
};
