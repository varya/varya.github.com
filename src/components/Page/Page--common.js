import React from "react"
import { StaticQuery, graphql } from "gatsby";
import styled, { injectGlobal } from "styled-components";
import breakpoint from 'styled-components-breakpoint'

import Typography from "../Typography";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutSimple } from "../Layout/Layout";
import Prompt from "../Prompt";

injectGlobal`
h2, h3, h4, h5, h6 {
  padding-left: 1em;
  margin-left: -1em;
}

h2 a.anchor,
h3 a.anchor,
h4 a.anchor,
h5 a.anchor,
h6 a.anchor
{
  position: absolute;
  display: none;
}

h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor
{
  display: inline;
}


h2 a.anchor svg,
h3 a.anchor svg,
h4 a.anchor svg,
h5 a.anchor svg,
h6 a.anchor svg
{
  fill: #999;
}
`;

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
