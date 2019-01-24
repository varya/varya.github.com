import "typeface-open-sans";
import PropTypes from "prop-types";
import React from "react";

import { StaticQuery, graphql } from 'gatsby';

import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint'

import Footer from "../components/Footer/";
import Header from "../components/Header";

export const Container = styled.div`
  ${breakpoint('desktop') `
    max-width: 1200px;
    margin: 0 auto;
  `}
`

const Layout = ({ children, location, history }) => (
  <StaticQuery
    query={graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
            level
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
  }
    `}
    render={(data) => {
      const {
        pages: { edges: pages }
      } = data;
      return (
      <Container>
        <Header path={location.pathname} pages={pages}/>
        <main>{children}</main>
        <Footer />
      </Container>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default Layout;
