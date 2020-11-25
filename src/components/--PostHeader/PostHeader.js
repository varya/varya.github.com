import { Text } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Hero from "../--Hero";
import Heading from "../--Heading";
import MetaGroup from "../--MetaGroup";

const PostHeader = ({ imageUrl, date, readingTime, title }) => (
  <Hero imageUrl={imageUrl} hasOverlay>
    <Heading margin={{ top: "auto" }} color="text-invert">
      {title}
    </Heading>
    <MetaGroup>
      {[date, readingTime].map(
        (metaitem) => metaitem && <Text color="text-invert">{metaitem}</Text>
      )}
    </MetaGroup>
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
