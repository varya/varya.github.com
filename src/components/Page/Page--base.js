import React from "react"
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"

import PageCommon from './Page--common'

export default function PageTemplate({
    data: {
      mdx,
    },
    location,
  }) {
  return (
    <>
      <PageCommon
        content={(<MDXRenderer>{mdx.body}</MDXRenderer>)}
        location={location}
      />
    </>
  )
}

export const pageQuery = graphql`
  query PageByPath2($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
    }
  }
`
