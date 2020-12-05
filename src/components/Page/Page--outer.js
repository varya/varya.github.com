import React from "react";
import PropTypes from "prop-types";

import { graphql, StaticQuery } from "gatsby";

import PageCommon from "./Page--common";

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
    render={() => <PageCommon content={children} location={location} />}
  />
);

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Page;
