import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Spider from 'rc-spider';
import data from './PatternJourney.data.js';
const { Node, Circle, Text, Link, Rect} = Spider.Shape;
const { darken } = Spider.Color;

const Container = styled.div`
  width: 900px;
  margin: 2em auto;
`;

const ModalContent = styled.div`
  height: auto;
`;

data.nodes.map(item => {
  item.x = parseInt(item.x) + 450;
})

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

        <div className="ea-pad ea-pad--pad-v-2" />

        <Spider
          width={width}
          height={height}
          dataSource={data}
          offset={[0, 0]}
          nodeCreator={this.nodeCreator}
          linkCreator={this.linkCreator}
        />
        { this.state.toggleNotification &&
          <div className="ea-modal ea-modal--open styleguide-dialog-position">
           <div className="ea-modal__overlay"></div>
           <ModalContent className="ea-modal__content">
             <a className="ea-modal__close" onClick={() => {this.setState({toggleNotification: false})}} href="#">
               <span className="ea-icon ea-icon--cross ea-modal__close-cross"></span>
             </a>
             <div className="ea-modal__box" dangerouslySetInnerHTML={{__html: this.state.text}}>
             </div>
          </ModalContent>
          </div>
        }
      </Container>
    );
  }
}

export default PatternJourney;
