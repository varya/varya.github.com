import React from "react";
import PropTypes from "prop-types";

import { Box } from "grommet";
import { Hero, Layout, SEO } from "@components";

const Page = ({ children, hero, seo }) => {
  const { title, keywords } = { ...seo };
  const { props: heroProps, content } = { ...hero };
  return (
    <Layout>
      {seo && <SEO title={title} keywords={keywords} defer={false} />}
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
};

export default Page;
