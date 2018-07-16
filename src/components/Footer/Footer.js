import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;


const Footer = props => (
  <Container>
    &copy;
    Varya Stepanova, {(new Date()).getFullYear()}
  </Container>
)

export default Footer;
