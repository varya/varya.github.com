import React from 'react'

import Page from '../../src/components/Page/Page--outer'
import SEO from '../../src/components/seo'

const NotFoundPage = ({
  location,
}) => (
  <Page location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
)

export default NotFoundPage
