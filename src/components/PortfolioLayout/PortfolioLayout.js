import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Grommet,
  Header as GrommetHeader,
  ResponsiveContext,
} from "grommet";
import { Footer, Heading, Link, Logo } from "@components";

import theme from "../theme";

/**
 * Layout used by the portfolio routes (`/projects-portfolio/` and
 * `/projects-portfolio/*`). Same shell as the main `Layout`, but the header
 * shows a tagline instead of the main-site `Menu`.
 *
 * Pass `tagline` (string or React node) to override the default text.
 */

const PortfolioHeader = ({ tagline }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box
        direction="row"
        fill="horizontal"
        elevation="medium"
        flex={{ shrink: 0 }}
      >
        <GrommetHeader
          width="xlarge"
          responsive
          pad="medium"
          height={size === "small" ? "48px" : "62px"}
          direction="row"
          margin={{ horizontal: "auto" }}
          justify="between"
          align="center"
        >
          <Link unstyled to="/">
            <Logo size={size === "small" ? "small" : "medium"} />
          </Link>
          <Heading
            color="text-weak"
            level="6"
            margin="none"
            spaced
            textCase="uppercase"
            weight="bold"
          >
            {tagline}
          </Heading>
        </GrommetHeader>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

PortfolioHeader.propTypes = {
  tagline: PropTypes.node,
};

const PortfolioLayout = ({
  children,
  tagline = "Unlisted page — shared by link only, please don’t forward",
}) => (
  <Grommet theme={theme} full>
    <Box fill>
      <PortfolioHeader tagline={tagline} />
      <Box
        flex="grow"
        direction="column"
        overflow="auto"
        height="90%" // Real height = 100% - header height; flex-grow fills the rest
      >
        <Box as="main" flex="grow" pad={{ bottom: "medium" }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  </Grommet>
);

PortfolioLayout.propTypes = {
  children: PropTypes.node,
  tagline: PropTypes.node,
};

export default PortfolioLayout;
