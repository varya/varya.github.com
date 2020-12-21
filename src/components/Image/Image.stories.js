import React from "react";

import Image from "./Image.js";

export default {
  title: "Components/Image",
  component: Image,
};
export const Default = (args) => (
  <Image {...args}>
    <img src={args.src} alt={args.alt} />
  </Image>
);

Default.args = {
  src: "https://source.unsplash.com/random",
  alt: "Sample alt text",
  caption: "Sample caption text for an image",
  copyright: {
    text: "John Doe",
    link: "https://en.wikipedia.org/wiki/John_Doe",
  },
};
