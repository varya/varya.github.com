import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import PageCommon from './Page--common'

const Page = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageCommon
        content={children}
        location={location}
        />
    )}
  />
)

export default Page
