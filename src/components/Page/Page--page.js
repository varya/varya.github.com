import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Article from "../Article";
import BreadCrumbs from "../BreadCrumbs";
import GithubEdit from "../GithubEdit";
import Prompt from "../Prompt";
import Seo from "../Seo";
import TextBlock from "../TextBlock";
import PageCommon from "./Page--common";

export default function PageTemplate({
  data: { mdx },
  pageContext: { breadCrumbs, fileSourceUrl },
  location,
}) {
  return (
    <>
      <PageCommon
        content={
          <>
            <Article
              title={mdx.frontmatter.title}
              subTitle={mdx.frontmatter.subTitle}
              readingTime={mdx.fields.readingTime}
            >
              <TextBlock>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </TextBlock>
            </Article>
            <BreadCrumbs data={breadCrumbs} />
            <GithubEdit link={fileSourceUrl} />
          </>
        }
        right=""
        left={<Prompt />}
        location={location}
      />
      <Seo data={mdx} />
    </>
  );
}

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        subTitle
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
    }
  }
`;

PageTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
};
