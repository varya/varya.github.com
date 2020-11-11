import { Box, Heading, Text } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Hero from "../--Hero";
import MetaGroup from "../--MetaGroup";
import Tag from "../--Tag";

const PostHeader = ({ imageUrl, tags, date, readingTime, title }) => (
  <Hero imageUrl={imageUrl} hasOverlay>
    <Box
      direction="row"
      fill="horizontal"
      justify="center"
      gap="medium"
      margin={{ bottom: "auto" }}
    >
      {tags.length > 0 && tags.map((tag) => <Tag key={tag} name={tag} />)}
    </Box>
    <MetaGroup>
      <Text color="text-invert">{date}</Text>
      <Text color="text-invert">{readingTime}</Text>
    </MetaGroup>
    <Heading color="text-invert">{title}</Heading>
  </Hero>
);

PostHeader.propTypes = {
  imageUrl: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  title: PropTypes.string,
};

export default PostHeader;
