import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import styled from 'styled-components';

const Container = styled.div`
  width: 150px;
  padding: 15px;
  border-radius: 50%;
  margin-right: ${props => props.side === 'left' ? '15px' : '0'};
  margin-left: ${props => props.side === 'right' ? '15px' : '0'};
  float: ${props => props.side};
`;

class BwIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: null
    }
  }

  componentDidMount() {
    const { path } = this.props;
    import('../BwIcon/' + path)
      .then(Icon => this.setState({ icon: Icon }));
  }

  render() {

    const Icon = this.state.icon;

    return <Container side={this.props.side || 'left'}>{
        Icon && <Icon/>
      }</Container>;
  }
}

export default BwIcon;
