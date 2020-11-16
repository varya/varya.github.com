import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Heading } from "grommet";
import Image from "../--Image";
import Paragraph from "../--Paragraph";
import Link from "../--Link";
/**
 * Post Preview widget with cover image and excerpt
 *
 */

const StyledPostPreview = styled(Box)`
  transition: all 0.2s ease;
  &:hover {
    outline-width: 1em;
    background: ${({ theme }) => theme.global.colors["light-1"]};
    color: inherit;
    transform: scale(1.03);
  }
`;

const PostPreview = ({ cover, title, excerpt, slug, ...props }) => {
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
          height="small"
          direction="row"
          fill="horizontal"
          overflow="hidden"
          gap="medium"
        >
          <Box basis="1/3" flex={false} fill>
            <Image src={cover} fit="contain" />
          </Box>
          <Box basis="2/3" direction="column">
            <Paragraph
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
};

export default PostPreview;
