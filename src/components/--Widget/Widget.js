import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Stack, Text } from "grommet";
import Image from "../--Image";
import Paragraph from "../--Paragraph";
import Heading from "../--Heading";
import Link from "../--Link";
import { Calendar } from "grommet-icons";
/**
 * Post Preview widget with cover image and excerpt
 * @param  {string} cover, title, excerpt, slug, readingTime, date - post data
 * @param {string} direction - horizontal/vertical layout
 * @param {string} height - in row layot, height of the whole widget. In column layout - height of a cover
 */

const StyledWidget = styled(Box)`
  transition: all 0.2s ease;
  img {
    transition: all 0.5s ease-out;
  }
  &:hover {
    background: ${({ background, theme }) =>
      !background && theme.global.colors["light-1"]};
    transform: scale(1.05);
    img {
      transform: scale(1.3);
    }
  }
`;

const Widget = ({
  children,
  cover,
  title,
  excerpt,
  slug,
  readingTime,
  date,
  height = "small",
  direction = "row",
  ...props
}) => {
  return (
    <StyledWidget {...props} direction={direction} pad="medium">
      <Link unstyled href={slug} style={{ width: "100%" }}>
        {title && (
          <Heading level="3" margin={{ top: "none", bottom: "small" }}>
            {title}
          </Heading>
        )}
        <Box
          height={direction === "row" ? height : "auto"}
          direction={direction}
          fill="horizontal"
          overflow="hidden"
          gap="medium"
        >
          {cover && (
            <Box
              basis="1/3"
              flex={false}
              overflow="hidden"
              fill={direction === "column" ? "horizontal" : "vertical"}
              height={direction === "column" && height}
            >
              {direction === "row" ? (
                <Stack anchor="top-right">
                  <Image src={cover} fit="contain" />
                  {readingTime && (
                    <Box
                      background="accent-75"
                      margin="small"
                      pad="xsmall"
                      size="small"
                    >
                      {readingTime && (
                        <Text color="text" size="small" weight="bold">
                          {readingTime}
                        </Text>
                      )}
                    </Box>
                  )}
                </Stack>
              ) : (
                <Image src={cover} fit="cover" height="medium" />
              )}
            </Box>
          )}
          <Box direction="column">
            {date && (
              <Box direction="row" align="baseline" size="small">
                <Calendar size="small" color="brand" />
                <Text color="brand" size="small" margin={{ left: "xsmall" }}>
                  {date}
                </Text>
              </Box>
            )}
            {excerpt && (
              <Paragraph
                fill
                truncate={6}
                flex={false}
                margin={{ vertical: "xsmall" }}
              >
                {excerpt}
              </Paragraph>
            )}
            {children}
          </Box>
        </Box>
      </Link>
    </StyledWidget>
  );
};

Widget.propTypes = {
  children: PropTypes.node,
  slug: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  readingTime: PropTypes.number,
  height: PropTypes.string,
  direction: PropTypes.oneOf(["row", "column"]),
};

export default Widget;
