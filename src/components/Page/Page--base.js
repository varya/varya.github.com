import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageCommon from "./Page--common";
import TextBlock from "../TextBlock";
import { MDXProvider } from "@mdx-js/react";

export default function PageTemplate({ data: { mdx }, location }) {
  const MdxWrapper = ({ onlyExcerpt = false, excerptBackup, children }) => {
    if (onlyExcerpt) {
      let updatedChildren = [...children];

      updatedChildren = children.filter((child) => {
        return child.props && child.props["data-excerpt"];
      });

      if (updatedChildren.length === 0) {
        updatedChildren.push(
          <div dangerouslySetInnerHTML={{ __html: excerptBackup }} />
        );
      }

      return <>{updatedChildren}</>;
    }

    return <>{children}</>;
  };

  MdxWrapper.propTypes = {
    onlyExcerpt: PropTypes.bool,
    excerptBackup: PropTypes.object,
    children: PropTypes.array,
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
