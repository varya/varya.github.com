import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Box, Button, Text } from "grommet";
import {
  Comments,
  DsAspects,
  GithubEdit,
  Heading,
  Hero,
  Image,
  ImageBlock,
  Layout,
  Link,
  Paragraph,
  PatternJourney,
  PostHeader,
  PrevNextNav,
  ProjectRoles,
  Workshop,
  PureHtml,
  Section,
  Seo,
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
  PatternJourney,
  PureHtml,
  Section,
  Hero,
  Widget,
  PatternJourney,
  WidgetContainer,
  Workshop,
  ProjectRoles,
  DsAspects,
  Link,
  Image,
  ImageBlock,
};

const _Heading = (level) => {
  const component = ({ children }) => (
    <Heading level={level}>{children}</Heading>
  );
  component.propTypes = { children: PropTypes.node };
  return component;
};

const _Paragraph = () => {
  const component = ({ children }) => (
    <Paragraph standout>{children}</Paragraph>
  );
  component.propTypes = { children: PropTypes.node };
  return component;
};

// Apply styling to excerpt
const _div = ({ "data-excerpt": dataExcerpt, children, ...props }) =>
  dataExcerpt ? (
    <Paragraph as="div" lead>
      {children}
    </Paragraph>
  ) : (
    <div {...props}>{children}</div>
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
  p: _Paragraph(),
  a: Link,
  div: _div,
};

postComponents.h1.propTypes = {
  children: PropTypes.node,
};

const Post = ({
  data: {
    mdx,
    site: {
      siteMetadata: { siteUrl },
    },
  },
  children,
  pageContext: { next, prev, fileSourceUrl },
}) => {
  const { readingTime, slug, disqusIdentifier } = mdx.fields;
  const { date, title, subTitle, cover, tumblr } = mdx.frontmatter;
  const tags = mdx.frontmatter.tags && mdx.frontmatter.tags.split(",");

  // specify if blog-specific meta should be shown or hidden
  const showBlogMeta = slug.startsWith("blog/");

  if (!mdx) {
    return null;
  }

  return (
    <Layout>
      <PostHeader
        imageSrc={cover.childImageSharp.gatsbyImageData}
        tags={tags}
        date={date}
        readingTime={
          showBlogMeta && parseInt(readingTime.minutes) > 0
            ? `${Math.round(readingTime.minutes).toFixed(1)} min read`
            : null
        }
        title={title}
        subTitle={subTitle}
      />
      <Image
        imageSrc={cover.childImageSharp.gatsbyImageData.images.fallback.src}
        fit="cover"
      />
      <Seo data={mdx} />
      <Box
        flex="grow"
        width="xlarge"
        margin={{ horizontal: "auto" }}
        pad="medium"
        direction="column"
      >
        <MDXProvider components={{ ...postComponents, ...globalMdxComponents }}>
          {children}
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
        {showBlogMeta && (
          <>
            <PrevNextNav
              flex={false}
              prevSlug={prev && `/${prev.fields.slug}`}
              nextSlug={next && `/${next.fields.slug}`}
              prevTitle={prev && prev.frontmatter.title}
              nextTitle={next && next.frontmatter.title}
              pad={{ vertical: "medium" }}
            />
            <GithubEdit link={fileSourceUrl} />
            <Comments {...{ slug, title, disqusIdentifier, tumblr, siteUrl }} />
          </>
        )}
      </Box>
    </Layout>
  );
};

Post.propTypes = {
  imageUrl: PropTypes.string,
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
        slug
        disqusIdentifier
        readingTime {
          minutes
        }
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
        canonical
        cover {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
