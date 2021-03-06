import React from "react";
import PropTypes from "prop-types";

import { Box } from "grommet";
import { Hero, Layout, Seo } from "@components";

const Page = (props) => {
  const { children, hero, seo, location } = props;
  const { props: heroProps, content } = { ...hero };
  return (
    <Layout location={location}>
      {seo && <Seo {...seo} location={location} defer={false} />}
      {hero && (
        <Hero align="center" justify="between" {...heroProps}>
          {React.createElement(content)}
        </Hero>
      )}
      <Box width="xlarge" margin={{ horizontal: "auto" }} pad="medium">
        {children}
      </Box>
    </Layout>
  );
};

Page.propTypes = {
  hero: PropTypes.shape({
    props: PropTypes.object,
    content: PropTypes.node,
  }),
  seo: PropTypes.shape({
    title: PropTypes.string,
    keywords: PropTypes.array,
  }),
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Page;
