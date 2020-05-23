import React from "react";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'
import Spider from 'rc-spider';
import data from './PatternJourney.data.js';
import FaClose from "react-icons/lib/fa/close";

import { colorScheme } from '../Colors/Colors.js';

const { Node, Text, Link, Rect} = Spider.Shape;
const { darken } = Spider.Color;

const Container = styled.div`
  width: 900px;
  margin: 2em auto;
  position: relative;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.75);
`;

const ModalContent = styled.div`
  position: relative;
  height: auto;
  width: 80%;
  ${breakpoint('tablet') `
    width: 50%;
  `}
  margin: 1.5em auto;
  background-color: ${colorScheme.light};
  padding: 2em;
  border: ${colorScheme.shadow} 1px solid;
`;

const Close = styled.a`
  position: absolute;
  right: 1em;
  top: 0.5em;
  cursor: pointer;
`;

data.nodes.map(item => item.x = parseInt(item.x) + 450)

if (typeof window !== 'undefined') {
  window.GLOBAL_LINK_STROKE = '#ccc';
}

class PatternJourney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNotification: false
    }
  }

  nodeCreator = (data) => {
    const nodeWidth = Number(data.width) || 150;
    const nodeHeight = Number(data.height) || 50;
    return (
      <Node
        width={nodeWidth}
        height={nodeHeight}
        offset={[- nodeWidth / 2, -24]}
        onClick={(n) => {
            this.setState({ toggleNotification: !this.state.toggleNotification, text: n.info});
          }
        }
      >
        <Rect color={data.color} radius={16} strokeWidth={2} stroke={darken(data.color, 0.2)}/>
        <Text offset={[nodeWidth / 2, 12]} color={data.textColor || 'white'} alignment="middle" size="14">{data.text}</Text>
      </Node>
    );
  }

  linkCreator = (link) => {
    const offset = link.offset ? link.offset.split(' ') : [0, 0, 0, 0];
    const textOffset = link.textOffset ? link.textOffset.split(' ') : [0, 0];
    return <Link
      data={link}
      stroke={link.color || 'red'}
      offset={offset}
      textOffset={textOffset}
      rotate={link.rotate}
      text={link.text}
      type="broke"
      strokeRadius={5} arrow={true}
    />;
  }

  render() {
    const width = 900;
    const height = 600;

    return (
      <Container>


        <Spider
          width={width}
          height={height}
          dataSource={data}
          offset={[0, 0]}
          nodeCreator={this.nodeCreator}
          linkCreator={this.linkCreator}
        />
        { this.state.toggleNotification &&
        <Modal>
          <ModalContent>
            <Close onClick={(e) => {e.preventDefault();this.setState({toggleNotification: false})}}>
              <FaClose/>
            </Close>
            <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
          </ModalContent>
        </Modal>
        }
      </Container>
    );
  }
}

export default PatternJourney;
