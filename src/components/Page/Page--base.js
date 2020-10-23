import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import Children from "react-children-utilities";

import PageCommon from "./Page--common";
import TextBlock from "../TextBlock";

export default function PageTemplate({ data: { mdx }, location }) {
  const MdxWrapper = ({ onlyExcerpt = false, excerptBackup, children }) => {
    if (onlyExcerpt) {
      let updatedChildren = [...children];

      updatedChildren = children.filter((child) => {
        return child.props && child.props["data-excerpt"];
      });

      if (updatedChildren.length === 0) {
        return <>{excerptBackup}</>;
      }
      // Keep only text from excerpt to avoid side effects of inner html tags
      return <>{Children.onlyText(updatedChildren)}</>;
    }

    return <>{children}</>;
  };

  MdxWrapper.propTypes = {
    onlyExcerpt: PropTypes.bool,
    excerptBackup: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <MDXProvider
      components={{
        wrapper: MdxWrapper,
      }}
    >
      <PageCommon
        content={
          <TextBlock>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </TextBlock>
        }
        location={location}
      />
    </MDXProvider>
  );
}

export const pageQuery = graphql`
  query PageByPath2($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
    }
  }
`;

PageTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};
