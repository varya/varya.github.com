import React from 'react';
import Shape from './Shape';
import ReactART from 'react-art';
const Transform = ReactART.Transform;
const ArtText = ReactART.Text;

class Text extends Shape {
  render() {
    const { offset, children, color, transform, rotate, alignment, size } = this.props;

    const textTransform = transform || new Transform();
    textTransform.translate(offset[0], offset[1]);
    rotate && textTransform.rotate(rotate);
    return (<ArtText transform={textTransform} fill={color}
      alignment={alignment || 'left'}
      font={{ fontSize: size, fontWeight: 100 }}
    >
      {children}
    </ArtText>);
  }
}

Text.defaultProps = {
  offset: [0, 0],
};
export default Text;
