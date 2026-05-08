import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Box, Button, Text } from "grommet";
import {
  BorderedImage,
  BorderedTable,
  BrowserWindow,
  DsAspects,
  Heading,
  Hero,
  Image,
  ImageBlock,
  Link,
  Ol,
  Paragraph,
  Ul,
  PatternJourney,
  PortfolioBreadcrumb,
  PortfolioLayout,
  PostHeader,
  ProjectRoles,
  ScreenshotGrid,
  ScrollingBrowserWindow,
  TokenAnatomy,
  Workshop,
  PureHtml,
  Section,
  Seo,
  Widget,
  WidgetContainer,
} from "@components";

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
  WidgetContainer,
  Workshop,
  ProjectRoles,
  DsAspects,
  Link,
  Image,
  ImageBlock,
  BorderedImage,
  BorderedTable,
  BrowserWindow,
  ScreenshotGrid,
  ScrollingBrowserWindow,
  TokenAnatomy,
};

const _Heading = (level) => {
  const component = ({ children }) => (
    <Heading level={level} margin={{ top: "1.5em", bottom: "0.5em" }}>
      {children}
    </Heading>
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
  ul: Ul,
  ol: Ol,
  div: _div,
};

postComponents.h1.propTypes = {
  children: PropTypes.node,
};

const PortfolioPost = ({
  data: { mdx },
  children,
}) => {
  const { title, subTitle, cover } = mdx.frontmatter;

  if (!mdx) {
    return null;
  }

  return (
    <PortfolioLayout>
      <PostHeader
        imageUrl={
          cover && cover.childImageSharp.gatsbyImageData.images.fallback.src
        }
        title={title}
        subTitle={subTitle}
      />
      <Seo data={mdx} />
      <Box
        flex="grow"
        width="xlarge"
        margin={{ horizontal: "auto" }}
        pad="medium"
        direction="column"
      >
        <PortfolioBreadcrumb />
        <MDXProvider components={{ ...postComponents, ...globalMdxComponents }}>
          {children}
        </MDXProvider>
        <PortfolioBreadcrumb />
      </Box>
    </PortfolioLayout>
  );
};

PortfolioPost.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
};

export default PortfolioPost;

export const query = graphql`
  query PortfolioPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
        meta {
          desc
        }
        cover {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`;
