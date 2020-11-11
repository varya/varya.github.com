import React from "react";
import Post from "./Post";

export default {
  title: "Composed/Post",
  component: Post,
};

const fakeProps = {
  imageUrl: require("./../../../content/posts/webfonts-with-sass-and-webpack/thumb.png"),
  title: "Using web fonts with SASS and Webpack",
  tags: ["sass", "webpack", "frontend"],
  readingTime: "15 min",
  date: "December 25, 2012",
  mdx: [
    {
      type: "lead",
      content:
        "Linking web fonts in SASS when using Webpack might not work as expected. The most common problem is incorrect URL resolving if a font is linked with url(). This post covers this and the following traps on your way to nice fonts on your webpage.",
    },
    { type: "image", content: "" },
    { type: "text", content: "" },
  ],
};

export const Basic = () => <Post {...fakeProps} />;
