import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import LayoutCommon from './Layout--common'

const Layout = ({ children, location }) => (
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
      <LayoutCommon
        content={children}
        location={location}
        />
    )}
  />
)

export default Layout
