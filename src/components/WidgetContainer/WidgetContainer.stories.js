import React from "react";

import { Box, Button } from "grommet";
import { Heading, Paragraph, Widget, WidgetContainer } from "@components";

export default {
  title: "Composed/WidgetContainer",
  component: WidgetContainer,
};

export const Default = (args) => (
  <Box>
    <Heading level="2" color="brand" alignText="center">
      Default grid: one full-width item in a row
    </Heading>
    <WidgetContainer>
      <Widget {...args} />
      <Widget {...args} />
    </WidgetContainer>

    <Heading level="2" color="brand" justify="center">
      Two items in a row
    </Heading>
    <WidgetContainer items={2}>
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
    </WidgetContainer>

    <Heading level="2" color="brand" justify="center">
      3 items in a row
    </Heading>
    <WidgetContainer items={3}>
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
    </WidgetContainer>

    <Heading level="2" color="brand" justify="center">
      4 items in a row
    </Heading>
    <WidgetContainer items={4}>
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
    </WidgetContainer>
  </Box>
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

export const Responsive = (args) => (
  <Box>
    <Heading level="2" color="brand" justify="center">
      Responsive number of items
    </Heading>
    <WidgetContainer items={{ small: 1, medium: 2, large: 3 }}>
      <Widget {...args} />
      <Widget {...args} />
      <Widget {...args} />
    </WidgetContainer>
  </Box>
);

Responsive.args = {
  slug: "/postname",
  cover: "https://source.unsplash.com/random",
  title: "Using the concept of business models for innovation",
  excerpt:
    "The examples of great business models are rarely static but most often those that demonstrate changes responding to the market and competition challenges. As we cannot foresee the future, it is not possible to design a static business model once and forever. Thus, to achieve and keep their business success, companies need ongoing innovative activity.",
  date: "17 August 2020",
  readingTime: "3 min read",
};

export const Colored = (args) => (
  <Box>
    <Heading level="2" color="brand" justify="center">
      Colored
    </Heading>
    <Heading level="4">Using title and excerpt props:</Heading>
    <WidgetContainer items={{ small: 1, medium: 2, large: 3 }}>
      <Widget {...args} background="brand" align="center" />
      <Widget {...args} background="accent" justify="center" />
      <Widget {...args} background="neutral" />
    </WidgetContainer>

    <Heading level="4">Using nested children:</Heading>
    <WidgetContainer items={{ small: 1, medium: 2, large: 3 }}>
      <Widget slug="/test" background="brand" align="center">
        <Heading level="3" size="large">
          Consultancy
        </Heading>
        <Paragraph size="large">
          Read more about consultancy services I provide
        </Paragraph>
      </Widget>
      <Widget slug="/test" background="accent-50" align="center">
        <Heading
          level="3"
          size="large"
          margin={{ vertical: "small" }}
          color="brand"
        >
          Consultancy
        </Heading>
        <Paragraph standout>
          Find more about how I can help you develop design system for your next
          project.
        </Paragraph>
      </Widget>
      <Widget slug="/test" background="neutral" justify="center">
        <Heading level="3" size="large" margin={{ vertical: "small" }}>
          Consultancy
        </Heading>
        <Paragraph>
          Find more about how I can help you develop design system for your next
          project.
        </Paragraph>
        <Button size="large" primary label="Read more" />
      </Widget>
    </WidgetContainer>
  </Box>
);

Colored.args = {
  slug: "/postname",
  cover: undefined,
  title: "Consultancy",
  excerpt:
    "Find more about how I can help you develop design system for your project.",
  date: undefined,
  readingTime: undefined,
};
