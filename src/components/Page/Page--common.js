import React from "react"
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint'

import Typography from "../Typography";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutSimple } from "../Layout/Layout";
import Prompt from "../Prompt";

export const SiteContainer = styled.div`
  ${breakpoint('desktop') `
    max-width: 1200px;
    margin: 0 auto;
  `}
`

export default function PageCommon({
    content,
    right,
    left,
    location,
  }) {
  left = left || <Prompt/>
  return (<StaticQuery
    query={graphql`
  query LayoutQuery {
    pages: allMdx(
      filter: { fileAbsolutePath: { regex: "//pages//" } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
            level
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
  }
    `}
    render={(data) => {
      const {
        pages: { edges: pages }
      } = data;
      return (
        <SiteContainer>
          <LayoutSimple
            header={(
              <Header path={location.pathname} pages={pages}/>
            )}
            content={content}
            prompt={left}
            footer={(
              <Footer />
            )}
          />
        </SiteContainer>
      )
    }}
    />
  )
}
