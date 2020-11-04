import React from "react";

import PostHeader from "./PostHeader";

export default {
  title: "Composed/Post Header",
  component: PostHeader,
};

const fakeProps = {
  imageUrl: require("./../../../content/posts/webfonts-with-sass-and-webpack/thumb.png"),
  title: "Using web fonts with SASS and Webpack",
  tags: ["sass", "webpack", "frontend"],
  readingTime: "15 min",
  date: "December 25, 2012",
};

export const Basic = () => <PostHeader {...fakeProps} />;
