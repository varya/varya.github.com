import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import PageCommon from "./Page--common";
import TextBlock from "../TextBlock";

export default function PageTemplate({ data: { mdx }, location }) {
  return (
    <PageCommon
      content={
        <TextBlock>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </TextBlock>
      }
      location={location}
    />
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
