import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint'

import { colorScheme } from '../Colors/Colors.js';

const Container = styled.div`
  display: block;
  padding-right: 1.5em;
  text-align: center;
  ${breakpoint('desktop') `
    text-align: right;
  `}

  &:before {
    content: '';
    width: 4em;
    display: block;
    height: 0;
  }
`;

const List = styled.ul`
  padding-top: 2em;

  margin: 0;
  padding: 0;

  list-style: none;

  ${breakpoint('tablet') `
    display: inline-block;
  `}
  ${breakpoint('mobile') `
    display: inline-block;
  `}
`;

const Icon = styled.a`
    width: 44px;
    height: 44px;
    display: block;
    margin: .5em 0 0 auto;
    border-radius: 50%;
    background-position: 50% 50%;
    background-image: url(${props => props.image});
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }

  ${breakpoint('desktop') `
    display: list-item;
    margin-right: 0;
  `}
`;

const Prompt = props => {

  const data = [
    {
      image: require('./twitter.png'),
      href: "https://twitter.com/varya_en",
      title: "@varya_en",
    },
    {
      image: require('./github.png'),
      href: "https://github.com/varya",
    },
    {
      image: require('./facebook.png'),
      href: "http://www.facebook.com/varvara.stepanova.9",
    },
    {
      image: require('./linkedin.png'),
      href: "https://www.linkedin.com/in/varyastepanova/",
    },
  ];

  return (
    <Container>
      <List>
          {data.map(item => <Item key={`${item.href}-item`}><Icon
            key={`${item.href}-icon`}
            target="_blank"
            { ...item }
              /></Item>)}
      </List>
    </Container>
)

};

export default Prompt;
