import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Prompt from "../Prompt";
import Article from "../Article";
import TextBlock from "../TextBlock";
import BreadCrumbs from "../BreadCrumbs";
import GithubEdit from "../GithubEdit";
import Seo from "../Seo";

import LayoutCommon from './Layout--common'

export default function PageTemplate({
    data: {
      mdx,
    },
    pageContext: {
      breadCrumbs,
      fileSourceUrl,
    },
    location,
  }) {
  return (
    <>
      <LayoutCommon
        content={(
          <>
            <Article>
              <TextBlock title={mdx.frontmatter.title} subTitle={mdx.frontmatter.subTitle} readingTime={mdx.fields.readingTime}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </TextBlock>
            </Article>
            <BreadCrumbs data={breadCrumbs} />
            <GithubEdit link={fileSourceUrl} />
          </>
        )}
        right=""
        left={(
          <Prompt />
        )}
        location={location}
      />
      <Seo data={mdx} />
    </>
  )
}

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        slug
        readingTime {
          minutes
        }
      }
    }
  }
`
