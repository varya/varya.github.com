import React from "react";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Footer = () => (
  <Container>
    &copy; Varya Stepanova, {new Date().getFullYear()}. To contact,{" "}
    <a href="mailto:mail@varya.me">email me</a>.
  </Container>
);

export default Footer;
