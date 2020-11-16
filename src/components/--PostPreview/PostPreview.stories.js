import React from "react";
import PostPreview from "./PostPreview.js";
import { Box } from "grommet";
export default {
  title: "Composed/Post Preview",
  component: PostPreview,
};
export const Default = (args) => (
  <Box width="100%" height="large" pad="medium" justify="center">
    <PostPreview {...args} />
  </Box>
);
Default.args = {
  slug: "/postname",
  cover: "https://source.unsplash.com/random",
  title: "Using the concept of business models for innovation",
  excerpt:
    "The examples of great business models are rarely static but most often those that demonstrate changes responding to the market and competition challenges. As we cannot foresee the future, it is not possible to design a static business model once and forever. Thus, to achieve and keep their business success, companies need ongoing innovative activity.",
};
