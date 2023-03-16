import React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Hero, MetaGroup } from "../../components";

const PostHeader = ({ imageUrl, date, readingTime, title, subTitle }) => (
  <Hero imageUrl={imageUrl} hasOverlay>
    <Heading
      margin={{ top: "auto", left: "auto", right: "auto" }}
      color="text-invert"
    >
      {title}
    </Heading>
    {subTitle && (
      <Heading
        level={4}
        spaced
        margin={{ left: "auto", right: "auto" }}
        color="text-invert"
        fill="horizontal"
        textCase="uppercase"
      >
        {subTitle}
      </Heading>
    )}

    <MetaGroup>
      {[date, readingTime].map(
        (metaitem) =>
          metaitem && (
            <Text key={metaitem} color="text-invert">
              {metaitem}
            </Text>
          )
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
  subTitle: PropTypes.string,
};

export default PostHeader;
