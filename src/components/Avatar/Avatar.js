import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint'

const Image = styled.div`
  width: 300px;
  height: 300px;
  display: block;
  margin: .5em auto;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: cover;
  background-image: url(${props => props.image});

  ${breakpoint('desktop')`
    float: right;
  `}
`;

const Avatar = props => {

  const image = require('./avatar.jpg');

  return (
    <Image image={image} />
)

};

export default Avatar;
