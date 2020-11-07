import React from "react";
import PropTypes from "prop-types";

import Hero from "../--Hero";
import Tag from "../--Tag";
import MetaGroup from "../--MetaGroup";
import { Title, Text } from "../--Typography";
import { colors } from "../tokens";

const PostHeader = ({ imageUrl, tags, date, readingTime, title }) => (
  <Hero imageUrl={imageUrl} hasOverlay>
    <div style={{ marginBottom: "auto" }}>
      {tags.length > 0 && tags.map((tag) => <Tag key={tag} name={tag} />)}
    </div>
    <MetaGroup>
      <Text style={{ color: colors.character.light }}>{date}</Text>
      <Text style={{ color: colors.character.light }}>{readingTime}</Text>
    </MetaGroup>
    <Title style={{ color: colors.character.light }}>{title}</Title>
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
