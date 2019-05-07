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

    const Icon = (() => {
      switch(this.props.role) {
        case 'developer': return Developer;
        case 'designer': return Designer;
        case 'owner': return Owner;
        case 'business': return Business;
        default: return Developer;
      }
    })();

    return <Icon/>;
  }
}

export default ProjectRoles;
