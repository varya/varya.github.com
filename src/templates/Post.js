import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Box, Button, Text } from "grommet";
import {
  GithubEdit,
  Heading,
  Hero,
  Image,
  Layout,
  Link,
  Paragraph,
  PostHeader,
  PrevNextNav,
  Tag,
  Widget,
  WidgetContainer,
} from "@components";

import { toKebabCase } from "../common/utils";

const globalMdxComponents = {
  Box,
  Button,
  Text,
  Heading,
  Paragraph,
  Hero,
  Widget,
  WidgetContainer,
  Link,
  Image,
};

const _Heading = (level) => {
  const component = ({ children }) => (
    <Heading level={level}>{children}</Heading>
  );
  component.propTypes = { children: PropTypes.node };
  return component;
};

// Apply styling to excerpt
const _div = ({ "data-excerpt": dataExcerpt, children }) =>
  dataExcerpt ? (
    <Paragraph as="div" lead>
      {children}
    </Paragraph>
  ) : (
    <div>{children}</div>
  );

_div.propTypes = {
  "data-excerpt": PropTypes.string,
  children: PropTypes.node,
};

const postComponents = {
  h1: _Heading(1),
  h2: _Heading(2),
  h3: _Heading(3),
  h4: _Heading(4),
  h5: _Heading(5),
  h6: _Heading(6),
  p: Paragraph,
  a: Link,
  div: _div,
};

postComponents.h1.propTypes = {
  children: PropTypes.node,
};

const Post = ({
  data: { mdx },
  pageContext: { next, prev, fileSourceUrl },
}) => {
  const { date, readingTime } = mdx.fields;
  const { title, subTitle, cover } = mdx.frontmatter;
  const tags = mdx.frontmatter.tags && mdx.frontmatter.tags.split(",");

  return (
    <Layout>
      <PostHeader
        imageUrl={cover && cover.childImageSharp.fluid.src}
        tags={tags}
        date={date}
        readingTime={`${Math.round(readingTime.minutes)} min read`}
        title={title}
        subTitle={subTitle}
      />
      <Box
        flex="grow"
        width="xlarge"
        margin={{ horizontal: "auto" }}
        pad="medium"
        direction="column"
      >
        <MDXProvider components={{ ...postComponents, ...globalMdxComponents }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <Box
          direction="row"
          fill="horizontal"
          justify="center"
          margin={{ bottom: "auto" }}
          pad={{ vertical: "medium" }}
        >
          {tags &&
            tags.length > 0 &&
            tags.map((tag) => (
              <Tag
                key={tag}
                name={tag.trim()}
                slug={toKebabCase(tag)}
                margin="xsmall"
              />
            ))}
        </Box>
        <PrevNextNav
          flex={false}
          prevSlug={prev && `/${prev.fields.slug}`}
          nextSlug={next && `/${next.fields.slug}`}
          prevTitle={prev && prev.frontmatter.title}
          nextTitle={next && next.frontmatter.title}
          pad={{ vertical: "medium" }}
        />
        <GithubEdit link={fileSourceUrl} />
      </Box>
    </Layout>
  );
};
Post.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
    fileSourceUrl: PropTypes.string,
  }),
};

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        readingTime {
          minutes
        }
        slug
        prefix
        disqusIdentifier
      }
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
        v2
        old
        tumblr
        tags
        meta {
          desc
        }
        cover {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
