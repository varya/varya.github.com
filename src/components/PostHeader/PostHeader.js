import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Box, Text } from "grommet";
import { Heading, Hero, MetaGroup } from "@components";

const Title = styled(Heading)`
  margin-bottom: 0;
`;

const Subtitle = styled(Heading)`
  margin-top: 0;
`;

const PostHeader = ({ imageUrl, date, readingTime, title, subTitle }) => {
  return (
    <Hero imageUrl={imageUrl} hasOverlay>
      <Box margin={{ top: "auto" }}>
        <Title
          margin={{ left: "auto", right: "auto" }}
          color="text-invert"
        >
          {title}
        </Title>
        {subTitle && (
          <Subtitle
            level={2}
            margin={{ left: "auto", right: "auto" }}
            color="text-invert"
            fill="horizontal"
          >
            {subTitle}
          </Subtitle>
        )}
      </Box>

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
};

PostHeader.propTypes = {
  imageUrl: PropTypes.string,
  tags: PropTypes.array,
  date: PropTypes.string,
  readingTime: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default PostHeader;
