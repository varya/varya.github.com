import React from "react";
import PropTypes from "prop-types";

import Page from "../../src/components/Page/Page--outer";
import SEO from "../../src/components/Seo";

const NotFoundPage = ({ location }) => (
  <Page location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
);

NotFoundPage.propTypes = {
  location: PropTypes.object,
};

export default NotFoundPage;
