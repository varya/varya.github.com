import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Layout as AntLayout } from "antd";
const { Content: AntContent } = AntLayout;

import Header from "../--Header";
import Footer from "../--Footer";

/**
 * A container component for layout partials
 *
 */

const StyledLayout = styled(AntLayout)`
  background-color: transparent;
`;

const StyledContent = styled(AntContent)``;

const Layout = ({ children, ...props }) => (
  <StyledLayout {...props}>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
