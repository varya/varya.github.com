import "typeface-open-sans";
import PropTypes from "prop-types";
import React from "react";

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

class Layout extends React.Component {
  constructor() {
    super();
  }

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  render() {
    const { children, data } = this.props;
    const {
      pages: { edges: pages }
    } = data;

    return (
      <Container>
        <Header path={this.props.location.pathname} pages={pages}/>
        <main>{children()}</main>
        <Footer />
      </Container>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
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
`;
