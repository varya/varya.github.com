import { Box, Grommet, Main } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import Footer from "../--Footer";
import Header from "../--Header";
import theme from "../theme";
/**
 * A container component for layout partials
 *
 */

const Layout = ({ children }) => (
  <Grommet theme={theme} full>
    <Box fill>
      <Header
        background="brand"
        pad="small"
        elevation="small"
        justify="between"
        direction="row"
        align="center"
        flex={false}
      />
      <Box flex={true} overflow="auto">
        <Main>{children}</Main>
        <Footer />
      </Box>
    </Box>
  </Grommet>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
