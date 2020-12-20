import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";

import Article from "../Article";
import GithubEdit from "../GithubEdit";
import Post from "../Post";
import Prompt from "../Prompt";
import Seo from "../Seo";
import PageCommon from "./Page--common";

export default function PostTemplate({
  data: {
    mdx,
    site: { siteMetadata },
  },
  pageContext: { next, prev, fileSourceUrl },
  location,
}) {
  return (
    <>
      <PageCommon
        content={
          <>
            <Article
              title={mdx.frontmatter.title}
              readingTime={mdx.fields.readingTime}
            >
              <Post
                post={mdx}
                next={next}
                prev={prev}
                siteMetadata={siteMetadata}
              />
            </Article>
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
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        readingTime {
          minutes
        }
        slug
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
`;

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
  location: PropTypes.object,
};
