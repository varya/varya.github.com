import React from "react";

import Page from "./DesignSystems";

export default {
  title: "Pages/DesignSystems",
  component: Page,
  argTypes: {
    posts: {
      table: {
        disable: true,
      },
    },
  },
};

const fakePosts = [
  {
    slug: "/postname",
    title: "Automatic releases of npm packages with GitHub actions",
    excerpt:
      "Recently I implemented a new cool feature to one of the npm packages I develop. Later this day, I was showing it to a friend, and ... nothing worked. What a shame, I forgot to publish the package. The feature successfully passed the tests, and was pushed to the package GitHub repository but no one could not enjoy it anyway. Is there anything to help to avoid such situations? Yes, it is GitHub Actions — automated workflows that can run different jobs, including publishing packages to npm.",
  },
  {
    slug: "/postname",
    title: "Generic Storybook stories with different viewports",
    excerpt:
      "Making the components responsive is usually one of the key requirements for any design system or a pattern library. This means that the documentation system has to follow and show how the components are rendered on small to large screens. In this post, I show how I managed to do it with Storybook and get unique URLs for such responsive stories for later embedding them as examples into other (documentation) pages.",
  },
  {
    slug: "/postname",
    title: "PropTypes documentation in ZeroHeight",
    excerpt:
      "One of the main focuses in my recent work is to keep documentation for designers and developers in the same place. How exactly to achieve this, depends on what are the chosen documenting tools. At the moment, our team is trying ZeroHeight which is very much appreciated by the designers. However, brining there technical documentation like a PropTypes table for the components, I faced some obstacles. Anyways, there is a solution.",
  },
  {
    slug: "/postname",
    cover: "https://source.unsplash.com/random/4",
    title: "Remote work in a design system team",
    excerpt:
      "In these unique times, well-organized remote work becomes one of the key factors for success. This applies to any kind of work, and managing design systems is no exception. Although it is a huge challenge, I very much like how things are going in our team. So that I collected here some tips which may help you as well.",
  },
  {
    slug: "/postname",
    cover: "https://source.unsplash.com/random/5",
    title: "Using the concept of business models for innovation",
    excerpt:
      "The examples of great business models are rarely static but most often those that demonstrate changes responding to the market and competition challenges. As we cannot foresee the future, it is not possible to design a static business model once and forever. Thus, to achieve and keep their business success, companies need ongoing innovative activity.",
  },
];

export const Default = (args) => <Page posts={fakePosts} {...args} />;
Default.args = { currentPage: 5, totalPages: 10 };
