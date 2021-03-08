import 'normalize.css';
import Spider from 'rc-spider';
import React from 'react';
import ReactDOM from 'react-dom';

const width = 960;
const height = 2200;
const { Node, Circle, Text, Link, Rect} = Spider.Shape;
const { darken } = Spider.Color;

const nodeCreator = function (data) {
  const nodeWidth = Number(data.width) || 150;
  const nodeHeight = Number(data.height) || 50;
  return (<Node width={nodeWidth} height={nodeHeight} offset={[- nodeWidth / 2, -24]} onClick={() => alert(data.info)}>
    <Rect color={data.color} radius={16} strokeWidth={2} stroke={darken(data.color, 0.2)}/>
    <Text offset={[nodeWidth / 2, 12]} color={data.textColor || 'white'} alignment="middle" size="14">{data.text}</Text>
  </Node>);
}

const linkCreator = function(link) {
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
    strokeRadius={5} arrow={true} />;
}

window.GLOBAL_LINK_STROKE = '#ccc';

const data = new Request('./pattern-journey.json');
fetch(data).then(response => response.json())
  .then(response => {
    // translate coordinates
    response.nodes = response.nodes.map(item => {
      item.x = parseInt(item.x) + 450;
      // item.text = `${item.id} ${item.text}`;
      return item;
    })
    // const tree = response;
    // const network = Spider.layout.network().size([height, width - 160]);
    // const data = network.data(response);
    ReactDOM.render(<Spider width={width}
                            height={height}
                            dataSource={response}
                            offset={[40, 0]}
                            nodeCreator={nodeCreator}
                            linkCreator={linkCreator}
    />, document.getElementById('__react-content'));
});

