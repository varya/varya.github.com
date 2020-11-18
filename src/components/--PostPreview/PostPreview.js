import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Heading, Stack, Text } from "grommet";
import Image from "../--Image";
import Paragraph from "../--Paragraph";
import Link from "../--Link";
import { Calendar } from "grommet-icons";
/**
 * Post Preview widget with cover image and excerpt
 *
 */

const StyledPostPreview = styled(Box)`
  transition: all 0.2s ease;
  img {
    transition: all 0.5s ease-out;
  }
  &:hover {
    outline-width: 1em;
    background: ${({ theme }) => theme.global.colors["light-1"]};
    color: inherit;
    transform: scale(1.03);
    img {
      transform: scale(1.3);
    }
  }
`;

const PostPreview = ({
  cover,
  title,
  excerpt,
  slug,
  readingTime,
  date,
  height = "small",
  ...props
}) => {
  return (
    <StyledPostPreview
      {...props}
      direction="row-responsive"
      wrap={true}
      background="background"
      pad="medium"
    >
      <Link unstyled href={slug}>
        <Heading level="3" margin={{ top: "none", bottom: "small" }}>
          {title}
        </Heading>
        <Box
          height={height}
          direction="row"
          fill="horizontal"
          overflow="hidden"
          gap="medium"
        >
          {cover && (
            <Box basis="1/3" flex={false} fill>
              <Stack anchor="top-right">
                <Image src={cover} fit="contain" />
                <Box
                  background="accent-2"
                  margin="small"
                  pad="xsmall"
                  size="small"
                >
                  <Text color="text" size="small" weight="bold">
                    {readingTime}
                  </Text>
                </Box>
              </Stack>
            </Box>
          )}
          <Box direction="column">
            <Box direction="row" align="baseline" size="small">
              <Calendar size="small" color="brand" />
              <Text color="brand" size="small" margin={{ left: "xsmall" }}>
                {date}
              </Text>
            </Box>
            <Paragraph
              fill
              truncate={6}
              flex={false}
              margin={{ vertical: "xsmall" }}
            >
              {excerpt}
            </Paragraph>
          </Box>
        </Box>
      </Link>
    </StyledPostPreview>
  );
};

PostPreview.propTypes = {
  slug: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  readingTime: PropTypes.number,
  height: PropTypes.string,
};

export default PostPreview;
