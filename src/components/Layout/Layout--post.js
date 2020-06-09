import React from "react"
import { graphql } from "gatsby"

import Seo from "../Seo"
import Prompt from "../Prompt";
import Article from "../Article";
import Post from "../Post";
import GithubEdit from "../GithubEdit";

import LayoutCommon from './Layout--common'

export default function PostTemplate({
    data: {
      mdx,
      site: {
        siteMetadata,
      },
    },
    pageContext: {
      next,
      prev,
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
              <Post
                post={mdx}
                next={next}
                prev={prev}
                siteMetadata={siteMetadata}
              />
            </Article>
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
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        readingTime {
          minutes
        }
        slug
        prefix
        disqusIdentifier
      }
      frontmatter {
        title
        subTitle
        date(formatString: "DD MMMM YYYY")
        v2
        old
        tumblr
        meta {
          desc
        }
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
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
`
