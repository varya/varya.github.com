import React from "react";

import WidgetContainer from "../WidgetContainer";
import Widget from "./WidgetMulti.js";

export default {
  title: "Composed/Widget",
  component: Widget,
};
export const Default = (args) => (
  <WidgetContainer>
    <Widget {...args} />
  </WidgetContainer>
);

export const Vertical = (args) => (
  <WidgetContainer>
    <Widget {...args} direction="column" />
  </WidgetContainer>
);

Default.args = {
  slug: "/postname",
  cover: "https://source.unsplash.com/random",
  title: "Using the concept of business models for innovation",
  excerpt:
    "The examples of great business models are rarely static but most often those that demonstrate changes responding to the market and competition challenges. As we cannot foresee the future, it is not possible to design a static business model once and forever. Thus, to achieve and keep their business success, companies need ongoing innovative activity.",
  date: "17 August 2020",
  readingTime: "3 min read",
};

Vertical.args = {
  slug: "/postname",
  cover: "https://source.unsplash.com/random",
  title: "Using the concept of business models for innovation",
  excerpt:
    "The examples of great business models are rarely static but most often those that demonstrate changes responding to the market and competition challenges. As we cannot foresee the future, it is not possible to design a static business model once and forever. Thus, to achieve and keep their business success, companies need ongoing innovative activity.",
  date: "17 August 2020",
  readingTime: "3 min read",
  direction: "column",
};
