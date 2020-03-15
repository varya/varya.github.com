import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LayoutCommon from './Layout--common'

export default function PageTemplate({
    data: {
      mdx,
    },
    location,
  }) {
  return (
    <>
      <LayoutCommon
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
