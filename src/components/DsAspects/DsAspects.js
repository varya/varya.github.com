import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import { colorScheme } from '../Colors/Colors.js';

import SharedPractices from './shared-practices.svg';
import Tools from './tools.svg';
import Processes from './processes.svg';
import Community from './community.svg';

const Container = styled.div`
  width: 150px;
  padding: 15px;
  margin-right: ${props => props.side === 'left' ? '15px' : '0'};
  margin-left: ${props => props.side === 'right' ? '15px' : '0'};
  float: ${props => props.side};
`;

class DsAspects extends React.Component {

  render() {

    const Icon = {
        'shared-practices': SharedPractices,
        'tools': Tools,
        'processes': Processes,
        'community': Community,
      }[this.props.aspect] || Tools;

    return <Container side={this.props.side || 'left'}><Icon/></Container>;
  }
}

export default DsAspects;
