import React from "react";
// eslint-disable-next-line
import PropTypes from "prop-types";
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint'

import Developer from './developer.svg';
import Designer from './designer.svg';
import Owner from './owner.svg';
import Business from './business.svg';

class ProjectRoles extends React.Component {

  render() {

    const Icon = {
        'developer': Developer,
        'designer': Designer,
        'owner': Owner,
        'business': Business,
      }[this.props.role] || Developer;

    return <Icon/>;
  }
}

export default ProjectRoles;
