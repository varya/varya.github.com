import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colorScheme } from '../Colors/Colors.js';

const Container = styled.div`
  display: block;
  padding-right: 1.5em;
  text-align: right;

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

const Item = styled.li``;

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
        <Item>
          {data.map(item => <Icon
            key={item.href}
            target="_blank"
            { ...item }
              />)}
        </Item>
      </List>
    </Container>
)

};

export default Prompt;
