import React from "react";
import PropTypes from "prop-types";

import { MDXProvider } from "@mdx-js/react";

import Layout from "../../components/--Layout";
import Paragraph from "../../components/--Paragraph";
import PostHeader from "../../components/--PostHeader";
import Link from "../../components/--Link";
import Image from "../../components/--Image";
import Tag from "../../components/--Tag";
import Hero from "../../components/--Hero";
import Widget from "../../components/--Widget";
import WidgetContainer from "../../components/--WidgetContainer";
import Heading from "../../components/--Heading";
import PrevNextNav from "../../components/--PrevNextNav";
import { Box, Button, Text } from "grommet";

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
  dataExcerpt ? <Paragraph lead>{children}</Paragraph> : <div>{children}</div>;

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

const PostSimple = ({
  children,
  pageContext: {
    frontmatter: { title, subTitle, cover, tags, prev, next },
  },
}) => {
  return (
    <Layout>
      <PostHeader
        imageUrl={cover && cover.childImageSharp.fluid.src}
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
          {children}
        </MDXProvider>
        {tags && tags.length > 0 && (
          <Box
            direction="row"
            fill="horizontal"
            justify="center"
            margin={{ bottom: "auto" }}
            wrap="true"
            pad={{ vertical: "medium" }}
          >
            {tags.map((tag) => (
              <Tag key={tag} name={tag} margin="xsmall" />
            ))}
          </Box>
        )}
        {(prev || next) && (
          <PrevNextNav
            flex={false}
            prevSlug={prev && `/${prev.fields.slug}`}
            nextSlug={next && `/${next.fields.slug}`}
            prevTitle={prev && prev.frontmatter.title}
            nextTitle={next && next.frontmatter.title}
            pad={{ vertical: "medium" }}
          />
        )}
        {/* <GithubEdit link={fileSourceUrl} /> */}
      </Box>
    </Layout>
  );
};
PostSimple.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      cover: PropTypes.string,
      tags: PropTypes.string,
      prev: PropTypes.object,
      next: PropTypes.object,
    }),
  }),
};

export default PostSimple;
