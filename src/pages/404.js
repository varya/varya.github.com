import * as React from "react";
import PropTypes from "prop-types";

import { Text } from "grommet";
import { Heading, Paragraph, Link } from "../components";
import { Page } from "../templates/Page";

const HeroContent = () => (
  <>
    <Heading
      level={1}
      alignSelf="center"
      responsive
      size="large"
      margin="small"
    >
      <Text size="inherit" color="brand">
        404: Not Found
      </Text>
    </Heading>
  </>
);

const NotFoundPage = ({ location }) => {
  return (
    <Page
      location={location}
      hero={{ props: { background: "light-8" }, content: HeroContent }}
      seo={{
        title: "Not Found - Varya Stepanova, design systems expert",
        description: `Page is not available`,
      }}
    >
      <Heading align="center" level={3}>
        Sorry, this page isn&apos;t available
      </Heading>
      <Paragraph>
        The link you followed might be broken, or the page have been removed.
        Try to browse my <Link to="/blog">blog</Link> to find what you&apos;re
        looking for or <Link to="/services">check what I do</Link>.
      </Paragraph>
    </Page>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object,
};

export default NotFoundPage;
